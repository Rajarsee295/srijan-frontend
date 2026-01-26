import PageHeader from "../components/PageHeader/PageHeader";
import { motion } from "framer-motion";
import MerchCard from "../components/MerchCard";
import tshirtFront from "/tshirtFront.png"
import tshirtBack from "/tshirtBack.png"
import hoodieFront from "/hoodieFront.png"
import hoodieBack from "/hoodieBack.png"

function MerchPage() {
  const demoMerchs = [
    {
      name: "t-shirt",
      frontImage: tshirtFront,
      backImage: tshirtBack,
    },
    {
      name: "hoodie",
      frontImage: hoodieFront,
      backImage: hoodieBack,
    },
  ];

  return (
    <div className="pb-30">
      <PageHeader
        title="MERCHANDISE"
        subtitle="Explore the vibrant spectrum of cultural celebrations"
        showBackButton={true}
        backPath="/"
        titleDelay={0.2}
        showStars={true}
      />
      {/* Cards Grid */}
      <div className="flex flex-wrap justify-center gap-10 px-8 md:px-20 lg:px-30 xl:px-30">
        {demoMerchs.map((event, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="w-85"
          >
            <MerchCard event={event} index={i}/>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="gallery-footer-decoration"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </div>
  );
}

export default MerchPage;
