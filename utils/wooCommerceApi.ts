import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { Order } from "./types/wooCommerceTypes";

const api = new WooCommerceRestApi({
  url: "https://house-of-happiness.pl/",
  consumerKey: process.env.WOOCOMMERCE_KEY!,
  consumerSecret: process.env.WOOCOMMERCE_SECRET!,
  version: "wc/v3",
});

export async function fetchWooCommerceProducts() {
  try {
    const response = await api.get("products");
    return response;
  } catch (error: any) {
    throw new Error(error);
  }
}

//Data object - temporary in here
const data = {
  payment_method: "cash",
  payment_method_title: "Cash",
  set_paid: false,
  line_items: [
    {
      product_id: 15,
      quantity: 2,
    },
  ],
};

export async function createWooCommerceOrder(data: Order) {
  try {
    const response = await api.post("orders", data);
    return response;
  } catch (error: any) {
    throw new Error(error);
  }
}