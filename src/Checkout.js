import React from "react";
export default class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.openCheckout = this.openCheckout.bind(this);
  }
  openCheckout() {
    let options = {
      key: "YOUR_KEY_ID", // Enter the Key ID generated from the Dashboard
      name: "You Product",
      amount: "100",
      currency: "INR",
      callback_url:"https://www.google.com",
      redirect:"true",
      handler: response => {
      	alert(response.razorpay_payment_id)
      },
      description: "Description of the Product",
      notes: {
        address: "hello world"
      },
      theme: {
        image_frame: false
      }
    };
    let rzp = new window.Razorpay(options);
    rzp.open();
  }
   render() {
    return (

            <button onClick={this.openCheckout}>
            
              Pay With Razorpay
            </button>
    );
  }
}
