import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

// initialise the WooCommerceRestApi //
const api = new WooCommerceRestApi({
  url: "https://house-of-happiness.pl/",
  consumerKey: process.env.NEXT_PUBLIC_WOOCOMMERCE_KEY!,
  consumerSecret: process.env.NEXT_PUBLIC_WOOCOMMERCE_SECRET!,
  version: "wc/v3",
});

// fetch all products from WooCommerce //
export async function fetchWooCommerceProducts() {
  try {
    const response = await api.get("products");
    return response;
  } catch (error) {
    throw new Error(error);
  }
}