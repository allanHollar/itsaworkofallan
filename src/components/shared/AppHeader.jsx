import { motion } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

import useThemeSwitcher from "../../hooks/useThemeSwitcher";
import arBrand from "../../images/ar-brand.svg";
import HireMeModal from "../HireMeModal";
import Button from "../reusable/Button";

const AppHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeTheme, setTheme] = useThemeSwitcher();

  const toggleMenu = () => {
    if (!showMenu) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  };

  const showHireMeModal = () => {
    if (!showModal) {
      document
        .getElementsByTagName("html")[0]
        .classList.add("overflow-y-hidden");
      setShowModal(true);
    } else {
      document
        .getElementsByTagName("html")[0]
        .classList.remove("overflow-y-hidden");
      setShowModal(false);
    }
  };

  return (
    <div className="bg-[#f5e8d7] width-full">
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        id="nav"
        className="sm:mx-auto sm:container"
      >
        <div className="block z-10 sm:flex sm:justify-between sm:items-center py-1 max-w-screen-lg xl:max-w-screen-xl">
          {/* Header menu links and small screen hamburger menu */}
          <div className="flex justify-between items-center px-4 sm:px-0">
            <div>
              <Link to="/">
                <img src={arBrand} className="w-[50px]" alt="Logo" />
              </Link>
            </div>

            {/* Theme switcher small screen */}
            <div
              onClick={() => setTheme(activeTheme)}
              aria-label="Theme Switcher"
              className="block sm:hidden bg-primary-light dark:bg-ternary-dark shadow-sm ml-0 p-3 rounded-xl cursor-pointer"
            >
              {activeTheme === "dark" ? (
                <FiMoon className="text-ternary-dark text-xl hover:text-gray-400 dark:hover:text-primary-light dark:text-ternary-light" />
              ) : (
                <FiSun className="text-gray-200 text-xl hover:text-gray-50" />
              )}
            </div>

            {/* Small screen hamburger menu */}
            <div className="sm:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="focus:outline-none"
                aria-label="Hamburger Menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-7 h-7 text-secondary-dark dark:text-ternary-light fill-current"
                >
                  {showMenu ? (
                    <FiX className="text-3xl" />
                  ) : (
                    <FiMenu className="text-3xl" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Header links small screen */}
          <div
            className={
              showMenu
                ? "block m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none"
                : "hidden"
            }
          >
            <Link
              to="/projects"
              className="block sm:mx-4 mb-2 sm:py-2 text-left text-lg text-primary-dark hover:text-secondary-dark dark:hover:text-secondary-light dark:text-ternary-light"
              aria-label="Projects"
            >
              Projects
            </Link>
            <Link
              to="/about"
              className="block sm:mx-4 mb-2 sm:py-2 pt-3 sm:pt-2 border-primary-light dark:border-secondary-dark border-t-2 sm:border-t-0 text-left text-lg text-primary-dark hover:text-secondary-dark dark:hover:text-secondary-light dark:text-ternary-light"
              aria-label="About Me"
            >
              About Me
            </Link>
            <Link
              to="/contact"
              className="block sm:mx-4 mb-2 sm:py-2 pt-3 sm:pt-2 border-primary-light dark:border-secondary-dark border-t-2 sm:border-t-0 text-left text-lg text-primary-dark hover:text-secondary-dark dark:hover:text-secondary-light dark:text-ternary-light"
              aria-label="Contact"
            >
              Contact
            </Link>
            <div className="pt-3 sm:pt-0 border-primary-light dark:border-secondary-dark border-t-2 sm:border-t-0">
              <span
                onClick={showHireMeModal}
                className="block sm:hidden bg-indigo-500 hover:bg-indigo-600 shadow-sm mt-2 px-4 py-2 rounded-sm w-24 font-general-medium text-left text-md text-white duration-300"
                aria-label="Hire Me Button"
              >
                <Button title="Hire Me" />
              </span>
            </div>
          </div>

          {/* Header links large screen */}
          <div className="sm:flex justify-center items-center hidden shadow-lg sm:shadow-none m-0 mt-5 sm:mt-3 sm:ml-4 p-5 sm:p-0 font-general-medium">
            <Link
              to="/projects"
              className="block sm:mx-4 mb-2 sm:py-2 font-semibold text-[#c76c3f] text-left text-lg hover:text-[#bd9476]"
              aria-label="Projects"
            >
              Projects
            </Link>
            <Link
              to="/about"
              className="block sm:mx-4 mb-2 sm:py-2 font-semibold text-[#c76c3f] text-left text-lg hover:text-[#bd9476]"
              aria-label="About Me"
            >
              About Me
            </Link>
            <Link
              to="/contact"
              className="block sm:mx-4 mb-2 sm:py-2 font-semibold text-[#c76c3f] text-left text-lg hover:text-[#bd9476]"
              aria-label="Contact"
            >
              Contact
            </Link>
          </div>

          {/* Header right section buttons */}
          <div className="sm:flex md:flex-row flex-col justify-between items-center hidden">
            <div className="md:flex hidden">
              <span
                onClick={showHireMeModal}
                className="bg-[#1B1212] hover:bg-[#A1662F] shadow-sm px-5 py-2.5 rounded-md font-general-medium text-md text-white duration-300 #343434]"
                aria-label="Hire Me Button"
              >
                <Button title="Hire Me" />
              </span>
            </div>
          </div>
        </div>
        {/* Hire me modal */}
        <div>
          {showModal ? (
            <HireMeModal
              onClose={showHireMeModal}
              onRequest={showHireMeModal}
            />
          ) : null}
          {showModal ? showHireMeModal : null}
        </div>
      </motion.nav>
    </div>
  );
};

export default AppHeader;
