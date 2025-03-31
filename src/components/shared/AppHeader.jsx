import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import arBrand from "../../images/ar-brand.svg";

const links = [
  {
    id: 1,
    title: "About Me",
    url: "about",
  },
  {
    id: 2,
    title: "Core Skills",
    url: "core-skills",
  },
  {
    id: 3,
    title: "Work History",
    url: "work-history",
  },
  {
    id: 4,
    title: "Projects",
    url: "projects",
  },
  {
    id: 5,
    title: "Let's Connect!",
    url: "connect",
  },
];

const AppHeader = () => {
  const { pathname } = useLocation();
  const isProjectRoute = pathname.includes("projects");

  const projectHeaderClasses = `${
    !isProjectRoute ? "top-0 z-50 fixed" : ""
  } bg-[#f5e8d7] w-full h-[74px]`;

  const shouldShowNavLinks = isProjectRoute ? "hidden" : "hidden sm:flex";
  const logoAlignment = isProjectRoute
    ? "justify-center w-full"
    : "justify-center sm:justify-between w-full sm:w-auto";

  return (
    <div className={projectHeaderClasses}>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        id="nav"
        className="mx-auto container"
      >
        <div className={`${logoAlignment} z-10 flex items-center py-4`}>
          <div className="flex items-center space-x-4">
            <RouterLink to="/">
              <img src={arBrand} className="w-[50px]" alt="Logo" />
            </RouterLink>
          </div>

          <div
            className={`${shouldShowNavLinks} items-center space-x-6 font-semibold text-l`}
          >
            {links.map((link) => (
              <ScrollLink
                to={link.url}
                smooth={true}
                duration={500}
                offset={-74}
                className="group text-[#5a5a5a] text-left text-lg transition-all cursor-pointer seminbold"
                key={link.id}
              >
                <span className="border-[#F0BB78] group-hover:border-[#efd5b4] border-b-2 group-hover:text-[#c76c3f] transition-all">
                  {link.title}
                </span>
              </ScrollLink>
            ))}
          </div>
        </div>
      </motion.nav>
    </div>
  );
};

export default AppHeader;
