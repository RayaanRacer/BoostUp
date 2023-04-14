import React, { useEffect } from 'react';

const Razorpay = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
    script.async = true;
    script.setAttribute('data-payment_button_id', 'pl_Ldo7lvVjoKoudv');
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const center={
    marginTop:"200px",
    marginLeft:"48%"
  }

  return (
    <form>
        <div style={center}>
      {/* Render a container div for the payment button */}
      <div style={center} className="razorpay-embed-btn"> </div>
      </div>
    </form>
  );
};

export default Razorpay;