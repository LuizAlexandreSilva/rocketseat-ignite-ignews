import { loadStripe } from "@stripe/stripe-js";

export async function getStriptJs() {
const stripeJs = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
return stripeJs
}