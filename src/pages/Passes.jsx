// Passes.jsx - Fixed with staggered grid, Figma gradients, banner
import './Passes.css';
import PageHeader from '../components/PageHeader/PageHeader';

import rhythmBasic from '/rhythm.png';
import grooveBasic from '/groove.png';
import carnivalBasic from '/carnival.png';
import rhythmAdvanced from '/rhythm-adv.png';
import grooveAdvanced from '/groove-adv.png';
import carnivalAdvanced from '/carnival-adv.png';

const passes = {
  basic: [
    {
      name: 'RHYTHM',
      level: 'BASIC',
      days: '1 DAY',
      price: '₹499',
      image: rhythmBasic,
      features: [
        'Access to all Events',
      ],
      exclusions: [
        'No Food & Accommodation',
        'No Star Night',
      ]
    },
    {
      name: 'GROOVE',
      level: 'BASIC',
      days: '2 DAYS',
      price: '₹749',
      image: grooveBasic,
      features: [
        'Access to all Events',
      ],
      exclusions: [
        'No Food & Accommodation',
        'No Star Night',
      ]
    },
    {
      name: 'CARNIVAL',
      level: 'BASIC',
      days: '3 DAYS',
      price: '₹999',
      image: carnivalBasic,
      features: [
        'Access to all Events',
        'Access to Star Night',
      ],
      exclusions: [
        'No Food & Accommodation',
      ]
    },
  ],
  advanced: [
    {
      name: 'RHYTHM',
      level: 'ADVANCED',
      days: '1 DAY',
      price: '₹899',
      image: rhythmAdvanced,
      features: [
        'Access to all Events',
        'With Food & Accommodation',
      ],
      exclusions: [
        'No Star Night',
      ]
    },
    {
      name: 'GROOVE',
      level: 'ADVANCED',
      days: '2 DAYS',
      price: '₹1499',
      image: grooveAdvanced,
      features: [
        'Access to all Events',
        'With Food & Accommodation',
      ],
      exclusions: [
        'No Star Night',
      ]
    },
    {
      name: 'CARNIVAL',
      level: 'ADVANCED',
      days: '3 DAYS',
      price: '₹2099',
      image: carnivalAdvanced,
      features: [
        'Access to all Events',
        'With Food & Accommodation',
        'Access to Star Night',
      ],
      exclusions: [

      ]
    },
  ],
};


function PassCard({ name, level, days, price, features, image }) {
  const handleBuy = async (e) => {

    const res = await fetch("https://srijan-2026.onrender.com/api/v1/payments/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "amount":parseInt(price.replace("₹","")),
      })
    });

    const order = await res.json();


    var options = {
      "key": import.meta.env.RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
      "amount": order.amount, // Amount is in currency subunits.
      "currency": "INR",
      "name": "Acme Corp", //your business name
      "description": "Test Transaction",
      "image": "https://example.com/your_logo",
      "order_id": order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "handler": function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature)
      },
      "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
        "name": "Gaurav Kumar", //your customer's name
        "email": "gaurav.kumar@example.com",
        "contact": "+919876543210"  //Provide the customer's phone number for better conversion rates
      },
      "notes": {
        "address": "Razorpay Corporate Office"
      },
      "theme": {
        "color": "#3399cc"
      }
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.on('payment.failed', function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });

    rzp1.open();
    e.preventDefault();
  };



  return (
    <div className="pass-card transition-all duration-300">

      {/* TOP IMAGE */}
      <div className="pass-image">
        <img src={image} alt={`${name} pass`} />
      </div>

      {/* TRANSPARENT BODY */}
      <div className="pass-content">
        <div className="pass-footer">

          <button className="pass-button top-buy" onClick={handleBuy}>
            BUY NOW
          </button>
        </div>

        <ul className="pass-features">
          {features.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <ul className="pass-exclusions">
          {exclusions.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

      </div>
    </div>
  );
}



function Passes() {
  return (
    <div className="passes-page">
      <PageHeader
        title="Passes"
        showBackButton={true}
        backPath="/"
        titleDelay={0.2}
        showStars={true}
      />

      {/* Basic Section */}
      <section className="basic-grid">
        <div className="banner-custom">
          <span className="banner-star left">✦</span>
          <span className="banner-star left-inner">✦</span>
          <h2 className="banner-title">BASIC PASSES</h2>
          <span className="banner-star right-inner">✦</span>
          <span className="banner-star right">✦</span>
        </div>
        <div className="passes-grid">
          {passes.basic.map((p, index) => (
            <PassCard key={`${p.name}-${p.level}`} {...p} />
          ))}
        </div>
      </section>

      <section className="advanced-grid">
        <div className="banner-custom">
          <span className="banner-star left">✦</span>
          <span className="banner-star left-inner">✦</span>
          <h2 className="banner-title">ADVANCED PASSES</h2>
          <span className="banner-star right-inner">✦</span>
          <span className="banner-star right">✦</span>
        </div>
        <div className="passes-grid">
          {passes.advanced.map((p) => (
            <PassCard key={`${p.name}-${p.level}`} {...p} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Passes;
