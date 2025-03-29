import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import AppFooterCopyright from "../AppFooterCopyright";
import FooterImage from "../../../images/footer.webp";
import profileImage from "../../../images/ar-anime-profile.webp";
import Sakura from "../../reusable/Sakura/Sakura";
import "./social.css";

const socialLinks = [
  {
    id: 1,
    icon: <FontAwesomeIcon icon={faLinkedin} className="text-blue-500 ikon" />,
    url: "https://www.linkedin.com/in/allanritumban/",
  },
  {
    id: 2,
    icon: <FontAwesomeIcon icon={faGithub} className="text-[#6e5494] ikon" />,
    url: "https://github.com/allanHollar",
  },
];

const AppFooter = () => {
  return (
    <div
      className="relative flex flex-col justify-end bg-cover bg-no-repeat mt-0 pt-5 h-[700px]"
      style={{ backgroundImage: `url(${FooterImage})` }}
    >
      <p
        className="font-semibold text-3xl text-center text-white happy-monkey-regular"
        style={{ textShadow: "rgba(0, 0, 0, 0.75) .05em .05em 3px" }}
      >
        Thanks for dropping by! Let’s connect and make <br />
        something awesome happen!
      </p>
      <div className="z-10 items-end mx-auto container">
        <div className="opacity-95 mx-auto mt-5 border-8 border-white rounded-full w-40 h-40 overflow-hidden">
          <img
            src={profileImage}
            className="w-full h-full object-cover"
            alt=""
          />
        </div>

        <div class="social-overlap process-scetion mt100">
          <div>
            <div class="justify-content-center row">
              <div class="social-bar">
                <div class="mb-3 text-center social-icons iconpad">
                  <ul className="inline-block m-auto mt-5 border-white border-t-[3px] w-96 text-center">
                    {socialLinks.map((link) => (
                      <li className="inline">
                        <a href={link.url} class="slider-nav-item">
                          {link.icon}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-20 sm:pt-30 pb-8">
          <AppFooterCopyright />
        </div>
      </div>
      <Sakura />
    </div>
  );
};

export default AppFooter;
