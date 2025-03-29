import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import hero from "../../../images/hero.webp";
import "./fireflies.sass";

const AppBanner = () => {
  const [fireflies, setFireflies] = useState([]);

  useEffect(() => {
    const fireflyElements = [];
    for (let i = 0; i < 75; i++) {
      setTimeout(() => {
        fireflyElements.push(
          <motion.div
            key={i}
            className="firefly"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 0.5,
              delay: Math.random() * 3, // Random delay between 0 and 3 seconds
            }}
          ></motion.div>
        );
        setFireflies([...fireflyElements]); // Update the state with each new firefly
      }, i * 50); // Delay each firefly creation by 50ms
    }
  }, []);

  return (
    <motion.section
      id="hero-banner"
      transition={{ ease: "easeInOut" }}
      className="relative flex sm:flex-row flex-col sm:justify-between items-center bg-cover bg-no-repeat h-[750px] overflow-hidden"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="w-full">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.1,
          }}
          className="drop-shadow-md mt-[-100px] text-2xl text-center text-white lg:text- xl:text-7xl dark:text-primary-light happy-monkey-regular"
          style={{ textShadow: "rgba(0, 0, 0, 0.75) .05em .05em 4px" }}
        >
          Hello, I'm Allan
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.2,
          }}
          className="mt-3 text-4xl text-center text-white dark:text-gray-200 leading-normal happy-monkey-regular"
          style={{ textShadow: "rgba(0, 0, 0, 0.75) .05em .05em 2px" }}
        >
          Senior Frontend Engineer & UX/UI Enthusiast!
        </motion.p>
      </div>
      {fireflies}
    </motion.section>
  );
};

export default AppBanner;
