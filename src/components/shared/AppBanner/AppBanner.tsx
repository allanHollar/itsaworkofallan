import { motion } from "framer-motion";
import { useMemo } from "react";

import "./fireflies.sass";

const AppBanner = () => {
  const fireflies = useMemo(
    () =>
      Array.from({ length: 25 }, (_, i) => (
        <span key={i} className="firefly" />
      )),
    []
  );

  return (
    <motion.section
      id="hero-banner"
      transition={{ ease: "easeInOut" }}
      className="relative flex sm:flex-row flex-col justify-center sm:justify-between items-center bg-hero-image-mobile sm:bg-hero-image bg-cover bg-no-repeat bg-center h-[550px] sm:h-[750px] overflow-hidden"
    >
      <div className="flex flex-col justify-center items-center w-full">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.1,
          }}
          className="drop-shadow-md mt-[-30px] sm:mt-[-100px] text-5xl text-center text-white md:text-7xl happy-monkey-regular"
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
          className="mt-3 text-2xl text-center text-white sm:text-4xl dark:text-gray-200 leading-normal happy-monkey-regular"
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
