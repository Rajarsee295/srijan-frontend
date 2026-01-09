// Passes.jsx - Fixed with staggered grid, Figma gradients, banner
import './Passes.css';
import basicBanner from '/basic.png'; // public/basic.png

const passes = {
  basic: [
    {
      name: 'RHYTHM',
      level: 'BASIC',
      days: '1 DAY',
      price: '₹499',
      image: '/rhythm.png',
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
      image: '/groove.png',
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
      image: '/carnival.png',
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
      image: '/rhythm-adv.png',
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
      image: '/groove-adv.png',
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
      image: '/carnival-adv.png',
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
    <div className="pass-card">

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
    <div className="passes-pag">
      
      
      {/* Basic Section */}
      <section className="basic-grid">
        <img src={basicBanner} alt="BASIC PASSES" className="banner-img" />
       
        <div className="passes-grid">
          {passes.basic.map((p, index) => (
            <PassCard key={`${p.name}-${p.level}`} {...p} />
          ))}
        </div>
      </section>

     <section className="advanced-grid">
  <img src="/advanced.png" alt="ADVANCED PASSES" className="banner-img" />

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
