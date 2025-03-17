import useThemeSwitcher from "../../hooks/useThemeSwitcher";
import { FiArrowDownCircle } from "react-icons/fi";
// import developerLight from "../../images/developer.svg";
// import developerDark from "../../images/developer-dark.svg";
import hero from "../../images/hero.jpg";
import { motion } from "framer-motion";

const AppBanner = () => {
  const [activeTheme] = useThemeSwitcher();
  console.log("aaa hero", hero);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      className="flex sm:flex-row flex-col sm:justify-between items-center bg-cover bg-no-repeat mt-12 md:mt-2 h-[750px]"
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
          className="drop-shadow-md font-general-semibold text-2xl text-center text-white lg:text-3xl xl:text-7xl dark:text-primary-light"
          style={{ textShadow: "0 0 20px #000" }}
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
          className="mt-4 font-general-medium text-center text-lg text-white md:text-xl lg:text-2xl xl:text-3xl dark:text-gray-200 leading-normal"
          style={{ textShadow: "0 0 20px #000)" }}
        >
          A Senior Frontend Engineer & UX/UI Enthusiast
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
