import { useEffect } from "react";
import { motion } from "framer-motion";
import hero from "../../../images/hero.jpg";
import "./fireflies.sass";

const AppBanner = () => {
  const showFireFlies = ({ quantity }) => {
    const container = document.getElementById("hero-banner");

    for (let i = 0; i < quantity; i++) {
      const firefly = document.createElement("div");
      firefly.className = "firefly";
      container.appendChild(firefly);
    }

    return () => {
      container.innerHTML = "";
    };
  };

  useEffect(() => {
    showFireFlies({ quantity: 75 });
  }, []);

  return (
    <motion.section
      id="hero-banner"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
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
          className="drop-shadow-md font-general-bold text-2xl text-center text-white lg:text-[72px] xl:text-7xl dark:text-primary-light"
          style={{ textShadow: "0 0 20px rgba(0,0,0,0.75)" }}
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
          className="mt-4 font-general-semibold text-center text-lg text-white md:text-xl lg:text-2xl dark:text-gray-200 leading-normal"
          style={{ textShadow: "0 0 20px rgba(0,0,0,0.75)" }}
        >
          Senior Frontend Engineer & UX/UI Enthusiast!
        </motion.p>
      </div>
      {/* <motion.div
				initial={{ opacity: 0, y: -180 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
				className="float-right text-right mt-8 sm:mt-0 w-full sm:w-2/3"
			>
				<img
					src={
						activeTheme === 'dark' ? developerLight : developerDark
					}
					alt="Developer"
				/>
			</motion.div> */}
    </motion.section>
  );
};

export default AppBanner;
