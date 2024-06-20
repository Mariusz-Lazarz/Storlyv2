import Stripe from "stripe";
import { getServerUser } from "@/utils/authUtils";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-04-10",
});

export async function POST(request: Request) {
  const user = await getServerUser();

  if (!user) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
    });
  }

  const data = await request.json();

  if (
    !data ||
    !data.cartItems ||
    !Array.isArray(data.cartItems) ||
    data.cartItems.length === 0
  ) {
    return new Response(
      JSON.stringify({ error: "Bad Request: No cart items provided" }),
      { status: 400 }
    );
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: data.cartItems.map((item: any) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
            images: [item.image],
          },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity,
      })),
      mode: "payment",
      success_url: `${request.headers.get(
        "Origin"
      )}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.headers.get("Origin")}/canceled`,
    });
    return new Response(JSON.stringify({ id: session.id }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: error }), {
      status: 500,
    });
  }
}
