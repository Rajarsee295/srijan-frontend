import React from 'react';
import PageHeader from '../components/PageHeader/PageHeader';
import "./sponsers.css";

import pepsiImg from '/sponsers/pepsi.png';
import sailImg from '/sponsers/sail.png';
import nclImg from '/sponsers/ncl.png';
import canarabankImg from '/sponsers/canarabank.png';
import engineersparcelImg from '/sponsers/engineersparcel.png';
import ongcImg from '/sponsers/ongc.png';
import skodaImg from '/sponsers/skoda.png';
import essarImg from '/sponsers/essar.png';
import shellImg from '/sponsers/shell.png';
import sbiImg from '/sponsers/sbi.png';
import redbullImg from '/sponsers/redbull.png';
import dominosImg from '/sponsers/dominos.png';
import coalindiaImg from '/sponsers/coalindia.png';
import realmeImg from '/sponsers/realme.png';
import adaniImg from '/sponsers/adani.png';
import jharkhandtourismImg from '/sponsers/jharkhandtourism.png';
import ambujacementImg from '/sponsers/ambujacement.png';
import powergridImg from '/sponsers/powergrid.png';
import pnbImg from '/sponsers/pnb.png';
import lenskartImg from '/sponsers/lenskart.png';
import sparxImg from '/sponsers/sparx.png';
import cocacolaImg from '/sponsers/cocacola.png';
import tatasteelImg from '/sponsers/tatasteel.png';
import buildersImg from '/sponsers/builders.png';
import titanImg from '/sponsers/titan.png';
import bcclImg from '/sponsers/bccl.png';
import oilindiaImg from '/sponsers/oilindia.png';
import inshortsImg from '/sponsers/inshorts.png';
import seclImg from '/sponsers/secl.png';
import relianceImg from '/sponsers/reliance.png';
import gailImg from '/sponsers/gail.png';
import mgImg from '/sponsers/mg.png';
import myntra from '/sponsers/Myntra.png'

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

        {/* Title Sponsor Section */}
        <div className="sponsor-section">
          <h2 className="sponsor-section-title">TITLE SPONSOR</h2>
          <div className="title-sponsor-wrapper">
            <div className="sponser-circle-frame title-sponsor">
              <img src={myntra} alt="Myntra - Title Sponsor" />
            </div>
          </div>
        </div>

        {/* Gaming Partner Section */}
        <div className="sponsor-section">
          <h2 className="sponsor-section-title">GAMING PARTNER</h2>
          <div className="title-sponsor-wrapper">
            <div className="sponser-circle-frame gaming-partner">
              <div className="placeholder-logo">KRAFTON</div>
            </div>
          </div>
        </div>

        {/* Past Sponsors Section */}
        <div className="sponsor-section">
          <h2 className="sponsor-section-title">PAST SPONSORS</h2>
          
          <div className="sponsers-grid">

            {/* 🔹 Row 1 */}
            <div className="sponsers-row">
              <div className="sponser-circle-frame"><img src={pepsiImg} alt="Pepsi" /></div>
              <div className="sponser-circle-frame"><img src={sailImg} alt="Sail" /></div>
              <div className="sponser-circle-frame"><img src={nclImg} alt="NCL" /></div>
              <div className="sponser-circle-frame"><img src={canarabankImg} alt="Canara Bank" /></div>
              <div className="sponser-circle-frame"><img src={engineersparcelImg} alt="Engineers Parcel" /></div>
              <div className="sponser-circle-frame"><img src={ongcImg} alt="ONGC" /></div>
              <div className="sponser-circle-frame"><img src={skodaImg} alt="Skoda" /></div>
              <div className="sponser-circle-frame"><img src={essarImg} alt="Essar" /></div>
            </div>

            {/* 🔹 Row 2 */}
            <div className="sponsers-row offset">
              <div className="sponser-circle-frame"><img src={essarImg} alt="Essar" /></div>
              <div className="sponser-circle-frame"><img src={shellImg} alt="Shell" /></div>
              <div className="sponser-circle-frame"><img src={sbiImg} alt="SBI" /></div>
              <div className="sponser-circle-frame"><img src={redbullImg} alt="Red Bull" /></div>
              <div className="sponser-circle-frame"><img src={dominosImg} alt="Dominos" /></div>
              <div className="sponser-circle-frame"><img src={coalindiaImg} alt="Coal India" /></div>
              <div className="sponser-circle-frame"><img src={realmeImg} alt="Realme" /></div>
            </div>

            {/* 🔹 Row 3 */}
            <div className="sponsers-row">
              <div className="sponser-circle-frame"><img src={adaniImg} alt="Adani" /></div>
              <div className="sponser-circle-frame"><img src={jharkhandtourismImg} alt="Jharkhand Tourism" /></div>
              <div className="sponser-circle-frame"><img src={ambujacementImg} alt="Ambuja" /></div>
              <div className="sponser-circle-frame"><img src={powergridImg} alt="Power Grid" /></div>
              <div className="sponser-circle-frame"><img src={canarabankImg} alt="Canara Bank" /></div>
              <div className="sponser-circle-frame"><img src={pnbImg} alt="PNB" /></div>
              <div className="sponser-circle-frame"><img src={lenskartImg} alt="Lenskart" /></div>
              <div className="sponser-circle-frame"><img src={sparxImg} alt="Sparx" /></div>
            </div>

            {/* 🔹 Row 4 */}
            <div className="sponsers-row offset">
              <div className="sponser-circle-frame"><img src={cocacolaImg} alt="Coca Cola" /></div>
              <div className="sponser-circle-frame"><img src={tatasteelImg} alt="Tata Steel" /></div>
              <div className="sponser-circle-frame"><img src={sbiImg} alt="SBI" /></div>
              <div className="sponser-circle-frame"><img src={buildersImg} alt="Builders" /></div>
              <div className="sponser-circle-frame"><img src={titanImg} alt="Titan" /></div>
              <div className="sponser-circle-frame"><img src={bcclImg} alt="BCCL" /></div>
              <div className="sponser-circle-frame"><img src={oilindiaImg} alt="Oil India" /></div>
            </div>

            {/* 🔹 Row 5 */}
            <div className="sponsers-row">
              <div className="sponser-circle-frame"><img src={inshortsImg} alt="Inshorts" /></div>
              <div className="sponser-circle-frame"><img src={seclImg} alt="SECL" /></div>
              <div className="sponser-circle-frame"><img src={relianceImg} alt="Reliance" /></div>
              <div className="sponser-circle-frame"><img src={gailImg} alt="GAIL" /></div>
              <div className="sponser-circle-frame"><img src={mgImg} alt="MG" /></div>
            </div>
          
          </div>
        </div>
      </div>
    </>
  );
}

export default SponsorPage;