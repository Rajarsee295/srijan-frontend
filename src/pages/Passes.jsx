import './Passes.css';
import PageHeader from '../components/PageHeader/PageHeader';

import rhythmBasic from '/rhythm.png';
import grooveBasic from '/groove.png';
import carnivalBasic from '/carnival.png';
import rhythmAdvanced from '/rhythm-adv.png';
import grooveAdvanced from '/groove-adv.png';
import carnivalAdvanced from '/carnival-adv.png';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router';
import axiosInstance from "../utils/axiosInstance";

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
      exclusions: []
    },
  ],
};


function PassCard({ name, level, days, price, features, image, exclusions }) {
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
          "ondismiss": function () {
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
    <div className="w-full max-w-[632px] mx-auto rounded-2xl overflow-hidden relative transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(255,209,102,0.2)]">
      <div className="relative h-[180px] sm:h-[200px]">
        <img src={image} alt={`${name} pass`} className="w-full h-full object-cover" />
      </div>

      <div className="p-5 sm:p-6 flex flex-col justify-between bg-linear-to-b from-[rgba(49,22,53,0)] to-[rgba(49,22,53,0.75)] backdrop-blur-[10px]">
        <div className="mb-4">
          <button 
            className="w-full sm:w-auto bg-[#FFD400] text-black font-bold py-2.5 px-6 rounded-full border-none cursor-pointer transition-all hover:translate-y-[-3px] hover:bg-[#FFE55C]" 
            onClick={() => {
              alert('Passes coming soon!')
            }}
          >
            BUY NOW
          </button>
        </div>

        <ul className="list-none text-left text-[0.82rem] sm:text-[0.9rem] flex flex-col gap-2 mb-3 text-white">
          {features.map((item, index) => (
            <li key={index} className="before:content-['✓'] before:mr-2 before:text-[#ffd166] before:font-bold">
              {item}
            </li>
          ))}
        </ul>
        
        <ul className="list-none text-left text-[0.82rem] sm:text-[0.9rem] flex flex-col gap-2 text-white">
          {exclusions.map((item, index) => (
            <li key={index} className="before:content-['✗'] before:mr-2 before:text-red-500 before:font-bold">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}



function Passes() {
  const [user, setUser] = useState("");

  async function getUser() {
    try {
      const res = await axiosInstance.get('user/current-user')
      setUser(res.data.data.fullname);
    } catch (error) {
      setUser("");
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="min-h-screen w-full py-10 px-4">
      <PageHeader
        title="Passes"
        showBackButton={true}
        backPath="/"
        titleDelay={0.2}
        showStars={true}
      />

      {user ? (
        <>
          {/* Basic Passes Section */}
          <section className="max-w-[1317px] mx-auto mb-16 px-4 sm:px-8 md:px-12">
            <div className="banner-custom">
              <span className="banner-star left">✦</span>
              <span className="banner-star left-inner">✦</span>
              <h2 className="banner-title">BASIC PASSES</h2>
              <span className="banner-star right-inner">✦</span>
              <span className="banner-star right">✦</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {passes.basic.map((p, index) => (
                <PassCard key={`${p.name}-${p.level}`} {...p} />
              ))}
            </div>
          </section>

          {/* Advanced Passes Section */}
          <section className="max-w-[1317px] mx-auto mb-16 px-4 sm:px-8 md:px-12">
            <div className="banner-custom">
              <span className="banner-star left">✦</span>
              <span className="banner-star left-inner">✦</span>
              <h2 className="banner-title">ADVANCED PASSES</h2>
              <span className="banner-star right-inner">✦</span>
              <span className="banner-star right">✦</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {passes.advanced.map((p) => (
                <PassCard key={`${p.name}-${p.level}`} {...p} />
              ))}
            </div>
          </section>
        </>
      ) : (
        <div className="flex justify-center items-center min-h-[60vh] px-4 sm:px-8">
          <div className="login-required-card">
            <div className="login-icon">🔒</div>
            <h2 className="login-title">Login Required</h2>
            <p className="login-message">
              Please log in to view and purchase passes
            </p>
            <NavLink
              to="/profile"
              className="login-redirect-btn inline-block no-underline"
            >
              Go to Login
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
}

export default Passes;