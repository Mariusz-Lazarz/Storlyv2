import Cors from "micro-cors";
import Stripe from "stripe";
import { prisma } from "@/lib/db";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-04-10",
});

const cors = Cors({
  allowMethods: ["POST", "HEAD"],
});

const webhookSecret: string = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(request: Request) {
  const sig = request.headers.get("stripe-signature");

  try {
    const body = await request.text();
    const event = stripe.webhooks.constructEvent(body, sig!, webhookSecret);

    if (event.type === "checkout.session.completed") {
      const event = await request.json();
      const items = event.data.object.line_items.data;
      const userId = event.data.object.metadata.userId;
      const sessionId = event.data.object.id;
      const total = event.data.object.amount_total;

      const existingOrder = await prisma.order.findFirst({
        where: { stripeSessionId: sessionId },
      });

      if (existingOrder) return;

      const order = await prisma.order.create({
        data: {
          stripeSessionId: sessionId,
          total: total,
          status: "pending",
          user: {
            connect: { id: userId },
          },
        },
      });

      await Promise.all(
        items.map((item: any) => {
          return prisma.orderItem.create({
            data: {
              priceAtOrder: item.amount_total,
              quantity: item.quantity,
              order: {
                connect: { id: order.id },
              },
              product: {
                connect: { id: item.id },
              },
            },
          });
        })
      );

      return new Response(JSON.stringify({ received: true }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      console.log(`Received unhandled event type: ${event.type}`);
    }
  } catch (error) {
    console.error(`Webhook Error: ${error}`);
    return new Response(JSON.stringify({ error: error }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return new Response(JSON.stringify({ received: true }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
