import { motion } from "framer-motion";
import { Link } from "react-scroll";
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
];

const AppHeader = () => {
  return (
    <div className="bg-[#f5e8d7] w-full">
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        id="nav"
        className="mx-auto container"
      >
        <div className="z-10 flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <img src={arBrand} className="w-[50px]" alt="Logo" />
            </Link>
          </div>

          <div className="flex items-center space-x-6 font-semibold text-l">
            {links.map((link) => (
              <Link
                to={link.url}
                smooth={true}
                duration={500}
                className="group text-[#5a5a5a] text-left text-lg transition-all cursor-pointer seminbold"
                key={link.id}
              >
                <span className="border-[#F0BB78] group-hover:border-[#efd5b4] border-b-2 group-hover:text-[#c76c3f] transition-all">
                  {link.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </motion.nav>
    </div>
  );
};

export default AppHeader;
