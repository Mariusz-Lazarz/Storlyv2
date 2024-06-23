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
  const body = await request.text();
  const sig = request.headers.get("Stripe-Signature") as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (error) {
    return new Response(`Webhook Error: ${error}`, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const userId = session.metadata?.userId;
    const sessionId = session.id;
    const total = session.amount_total;
    const items = session.metadata?.items;

    if (!userId) {
      return new Response("User ID is missing in the session metadata", {
        status: 400,
      });
    }

    if (!items) return;

    const existingOrder = await prisma.order.findFirst({
      where: { stripeSessionId: sessionId },
    });

    if (existingOrder)
      return new Response("Order already exists", { status: 200 });

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
      JSON.parse(items).map((item: any) => {
        return prisma.orderItem.create({
          data: {
            priceAtOrder: item.priceAtOrder,
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
    return new Response("Unhandled event type", { status: 400 });
  }
}
