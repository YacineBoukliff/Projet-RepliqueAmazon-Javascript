import {cart} from '../../data/cart.js';
import {getProduct} from '../../data/products.js';
import {getDeliveryOption} from '../../data/deliveryOptions.js';
import {formatCurrency} from '../utils/money.js';

export function renderPaymentSummary() {
  let productPriceCents = 0;
  let shippingPriceCents = 0;

  cart.forEach((cartItem) => {
    const product = getProduct(cartItem.productId);
    productPriceCents += product.priceCents * cartItem.quantity;

    const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
    shippingPriceCents += deliveryOption.priceCents;
  });

  const totalBeforeTaxCents = productPriceCents + shippingPriceCents;
  const taxCents = totalBeforeTaxCents * 0.2;
  const totalCents = totalBeforeTaxCents + taxCents;

  const paymentSummaryHTML = `
    <div class="payment-summary-title">
      Récapitulatif de la commande
    </div>

    <div class="payment-summary-row">
      <div>Articles (3) :</div>
      <div class="payment-summary-money">
        ${formatCurrency(productPriceCents)}€ 
      </div>
    </div>

    <div class="payment-summary-row">
      <div>Frais d'expédition :</div>
      <div class="payment-summary-money">
        ${formatCurrency(shippingPriceCents)}€ 
      </div>
    </div>

    <div class="payment-summary-row subtotal-row">
      <div>Total avant taxe :</div>
      <div class="payment-summary-money">
        ${formatCurrency(totalBeforeTaxCents)}€ 
      </div>
    </div>

    <div class="payment-summary-row">
      <div>TVA (20%) :</div>
      <div class="payment-summary-money">
        ${formatCurrency(taxCents)}€ 
      </div>
    </div>

    <div class="payment-summary-row total-row">
      <div>Commande totale :</div>
      <div class="payment-summary-money">
        ${formatCurrency(totalCents)}€ 
      </div>
    </div>

    <button class="place-order-button button-primary">
      Validez votre commande
    </button>
  `;

  document.querySelector('.js-payment-summary')
    .innerHTML = paymentSummaryHTML;
}