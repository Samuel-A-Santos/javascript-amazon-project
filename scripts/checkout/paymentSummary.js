import { cart } from "../../data/cart";
import { getProduct } from "../../data/products";
import { getDeliveryOptions } from "../../data/deliveryoptions";

export function renderPaymentSummary() {
  let productPriceCents = 0;
  let shippingPriceCents = 0;

  cart.forEach((cartItem) => {
    const product = getProduct(cartItem.produtId);
    productPriceCents += product.priceCents * cartItem.quantity;

    const deliveryOptions = getDeliveryOptions(cartItem.deliveryOptionsId);
    shippingPriceCents += deliveryOptions.priceCents;
  });

  const totalBeforeTaxCents = productPriceCents + shippingPriceCents;
  const taxCents = totalBeforeTaxCents * 0.1;
  const totalCents = totalBeforeTaxCents + taxCents;
}
