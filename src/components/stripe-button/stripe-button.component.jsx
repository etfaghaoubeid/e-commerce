import React from "react";
import StripeCheckout from "react-stripe-checkout";
const StripeButton = ({ price }) => {
  const key = "pk_test_LpAIPymzTWjwKCCNZwAB0z8D00cO0vrhE1";
  const priceInCent = price * 100;
  const onToken = token => {
    console.log(token);
    alert("success");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name=" Atigh Ecommerece"
      billingAddress
      StripeCheckout
      image="https://svgshare.com/i/CUz.svg"
      description={`your Total is ${price}`}
      amount={priceInCent}
      token={onToken}
      stripeKey={key}
      panelLabel="Pay Now"
    />
  );
};
export default StripeButton;
