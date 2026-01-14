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
      price: '₹509',
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
      price: '₹764',
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
      price: '₹1019',
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
      price: '₹919',
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
      price: '₹1529',
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
      price: '₹2141',
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


function PassCard({ name, level, days, price, features, image , exclusions }) {
  const handleBuy = async (e) => {
    e.preventDefault();
    
    try {
      const button = e.target;
      const originalText = button.textContent;
      button.textContent = 'Processing...';
      button.disabled = true;

      const packageMap = {
        'RHYTHM-BASIC': 'one-day-without-food',
        'GROOVE-BASIC': 'two-day-without-food',
        'CARNIVAL-BASIC': 'three-day-without-food',
        'RHYTHM-ADVANCED': 'one-day-with-food',
        'GROOVE-ADVANCED': 'two-day-with-food',
        'CARNIVAL-ADVANCED': 'three-day-with-food',
      };

      const packageKey = `${name}-${level}`;
      const packageType = packageMap[packageKey];
      const isStarNight = name === 'CARNIVAL';

      if (!packageType) {
        throw new Error('Invalid package selection');
      }

      const res = await fetch("https://srijan-2026.onrender.com/api/v1/hospitality/changeuserpackage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: 'include',
        body: JSON.stringify({
          amount: parseInt(price.replace("₹", "").replace(",", "")),
          packag: packageType,
          star_night: isStarNight
        })
      });

      if (!res.ok) {
        let errorMessage = `Server error: ${res.status}`;
        try {
          const errorData = await res.json();
          errorMessage = errorData.message || errorMessage;
        } catch (e) {
        }
        throw new Error(errorMessage);
      }

      const responseData = await res.json();

      if (!responseData.success) {
        throw new Error(responseData.message || 'Failed to create order');
      }

      const order = responseData.order;

      if (!order || !order.id) {
        throw new Error('Invalid order response from server');
      }

      var options = {
        "key": import.meta.env.VITE_RAZORPAY_KEY_ID,
        "amount": order.amount,
        "currency": "INR",
        "name": "Srijan 2026",
        "description": `${name} Pass - ${level}`,
        "image": "https://example.com/your_logo",
        "order_id": order.id,
        "handler": async function (response) {
          try {
            const verifyRes = await fetch("https://srijan-2026.onrender.com/api/v1/hospitality/verifypayment", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              credentials: 'include',
              body: JSON.stringify({
                order_id: response.razorpay_order_id,
                payment_id: response.razorpay_payment_id,
                signature: response.razorpay_signature
              })
            });

            if (!verifyRes.ok) {
              throw new Error('Payment verification failed');
            }

            const verifyData = await verifyRes.json();

            if (!verifyData.success) {
              throw new Error('Payment verification failed');
            }

            alert('Payment successful! Your pass has been activated.');
            window.location.reload();
          } catch (error) {
            console.error('Payment verification error:', error);
            alert(`Payment completed but verification failed: ${error.message}\nPlease contact support with order ID: ${response.razorpay_order_id}`);
          }
        },
        "prefill": {
          "name": "",
          "email": "",
          "contact": ""
        },
        "notes": {
          "pass_type": `${name} - ${level}`,
          "days": days
        },
        "theme": {
          "color": "#FED000"
        },
        "modal": {
          "ondismiss": function() {
            button.textContent = originalText;
            button.disabled = false;
          }
        }
      };

      var rzp1 = new window.Razorpay(options);
      
      rzp1.on('payment.failed', function (response) {
        console.error('Payment failed:', response.error);
        alert(`Payment failed: ${response.error.description}\nReason: ${response.error.reason}`);
        button.textContent = originalText;
        button.disabled = false;
      });

      rzp1.open();
      button.textContent = originalText;
      button.disabled = false;

    } catch (error) {
      console.error('Error in payment process:', error);
      alert(`Error: ${error.message || 'Something went wrong. Please try again.'}`);
      
      const button = e.target;
      button.textContent = 'BUY NOW';
      button.disabled = false;
    }
  };

  return (
    <div className="pass-card transition-all duration-300">
      <div className="pass-image">
        <img src={image} alt={`${name} pass`} />
      </div>

      <div className="pass-content">
        <div className="pass-footer">
          <button className="pass-button top-buy" onClick={()=>{
            alert('Passes coming soon!')
          }}>
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
