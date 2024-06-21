import { cart } from "../../data/cart";
import { getProduct } from "../../data/products";

export function renderPaymentSummary() {
  let productPriceCents = 0;
  cart.forEach((cartItem) => {
    const product = getProduct(cartItem.produtId);
    productPriceCents += product.priceCents * cartItem.quantity;
  });
}
