import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price *  100;

    console.log(process.env.REACT_APP_STRIPE_KEY);
    const publishableKey = process.env.REACT_APP_STRIPE_KEY;

    const onToken = token => {
        
        alert('Payment Succesful');
    }

    return(
        <StripeCheckout 
            label='Pay Now'
            name='Vaccine Store'
            billingAddress
            shippingAddress
            image = 'https://svgshare.com/i/CUz.svg'
            description ={`Your total is $${price}`}
            amount = {priceForStripe}
            panelLabel ='Pay Now'
            token = {onToken}  
            stripeKey = {publishableKey}      
        />
    );
};

export default StripeCheckoutButton;