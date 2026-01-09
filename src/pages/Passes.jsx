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
        'No Food & Accommodation',
        'No Star Night',
      ],
    },
    {
      name: 'GROOVE',
      level: 'BASIC',
      days: '2 DAYS',
      price: '₹749',
      image: grooveBasic,
      features: [
        'Access to all Events',
        'No Food & Accommodation',
        'No Star Night',
      ],
    },
    {
      name: 'CARNIVAL',
      level: 'BASIC',
      days: '3 DAYS',
      price: '₹999',
      image: carnivalBasic,
      features: [
        'Access to all Events',
        'No Food & Accommodation',
        'Access to Star Night',
      ],
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
        'No Star Night',
      ],
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
        'No Star Night',
      ],
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
    },
  ],
};


function PassCard({ name, level, days, price, features, image }) {
  const handleBuy = () => {
    alert(`${name} ${level} - ${price} checkout!`);
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
