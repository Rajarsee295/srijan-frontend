import React from 'react';
import PageHeader from '../components/PageHeader/PageHeader';
import "./sponsers.css";

function SponsorPage() {
  return (
    <>
      <div>
        <PageHeader
          title="SPONSORS"
          subtitle="Explore the vibrant spectrum of cultural celebrations"
          showBackButton={true}
          backPath="/"
          titleDelay={0.2}
          showStars={true}
        />
      </div>

      <div className="sponsers-container">

        <div className="sponsers-grid">

          {/* 🔹 Row 1 */}
          <div className="sponsers-row">
            <div className="sponser-circle-frame"><img src="/sponsers/pepsi.png" alt="Pepsi" /></div>
            <div className="sponser-circle-frame"><img src="/sponsers/sail.png" alt="Sail" /></div>
            <div className="sponser-circle-frame"><img src="/sponsers/ncl.png" alt="NCL" /></div>
            <div className="sponser-circle-frame"><img src="/sponsers/canarabank.png" alt="Canara Bank" /></div>
            <div className="sponser-circle-frame"><img src="/sponsers/engineersparcel.png" alt="Engineers Parcel" /></div>
            <div className="sponser-circle-frame"><img src="/sponsers/ongc.png" alt="ONGC" /></div>
            <div className="sponser-circle-frame"><img src="/sponsers/skoda.png" alt="Skoda" /></div>
            <div className="sponser-circle-frame"><img src="/sponsers/essar.png" alt="Essar" /></div>
          </div>

          {/* 🔹 Row 2 */}
          <div className="sponsers-row offset">
            <div className="sponser-circle-frame"><img src="/sponsers/essar.png" alt="Essar" /></div>
            <div className="sponser-circle-frame"><img src="/sponsers/shell.png" alt="Shell" /></div>
            <div className="sponser-circle-frame"><img src="/sponsers/sbi.png" alt="SBI" /></div>
            <div className="sponser-circle-frame"><img src="/sponsers/redbull.png" alt="Red Bull" /></div>
            <div className="sponser-circle-frame"><img src="/sponsers/dominos.png" alt="Dominos" /></div>
            <div className="sponser-circle-frame"><img src="/sponsers/coalindia.png" alt="Coal India" /></div>
            <div className="sponser-circle-frame"><img src="/sponsers/realme.png" alt="Realme" /></div>
          </div>

        </div>

        {/* 🔹 Row 3 */}
        <div className="sponsers-row">
          <div className="sponser-circle-frame"><img src="/sponsers/adani.png" alt="Adani" /></div>
          <div className="sponser-circle-frame"><img src="/sponsers/jharkhandtourism.png" alt="Jharkhand Tourism" /></div>
          <div className="sponser-circle-frame"><img src="/sponsers/ambujacement.png" alt="Ambuja" /></div>
          <div className="sponser-circle-frame"><img src="/sponsers/powergrid.png" alt="Power Grid" /></div>
          <div className="sponser-circle-frame"><img src="/sponsers/canarabank.png" alt="Canara Bank" /></div>
          <div className="sponser-circle-frame"><img src="/sponsers/pnb.png" alt="PNB" /></div>
          <div className="sponser-circle-frame"><img src="/sponsers/lenskart.png" alt="Lenskart" /></div>
          <div className="sponser-circle-frame"><img src="/sponsers/sparx.png" alt="Sparx" /></div>
        </div>

        {/* 🔹 Row 4 */}
        <div className="sponsers-row offset">
          <div className="sponser-circle-frame"><img src="/sponsers/cocacola.png" alt="Coca Cola" /></div>
          <div className="sponser-circle-frame"><img src="/sponsers/tatasteel.png" alt="Tata Steel" /></div>
          <div className="sponser-circle-frame"><img src="/sponsers/sbi.png" alt="SBI" /></div>
          <div className="sponser-circle-frame"><img src="/sponsers/builders.png" alt="Builders" /></div>
          <div className="sponser-circle-frame"><img src="/sponsers/titan.png" alt="Titan" /></div>
          <div className="sponser-circle-frame"><img src="/sponsers/bccl.png" alt="BCCL" /></div>
          <div className="sponser-circle-frame"><img src="/sponsers/oilindia.png" alt="Oil India" /></div>
        </div>

        {/* 🔹 Row 5 */}
        <div className="sponsers-row">
          <div className="sponser-circle-frame"><img src="/sponsers/inshorts.png" alt="Inshorts" /></div>
          <div className="sponser-circle-frame"><img src="/sponsers/secl.png" alt="SECL" /></div>
          <div className="sponser-circle-frame"><img src="/sponsers/reliance.png" alt="Reliance" /></div>
          <div className="sponser-circle-frame"><img src="/sponsers/gail.png" alt="GAIL" /></div>
          <div className="sponser-circle-frame"><img src="/sponsers/mg.png" alt="MG" /></div>
        </div>

      </div>
    </>
  );
}

export default SponsorPage;
