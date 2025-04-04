import { useAboutMe } from "../../context/AboutMeContext";
import profileImage from "../../images/ar-profile.webp";

const AboutMeBio = () => {
  const { aboutMe } = useAboutMe();

  return (
    <div
      id="about"
      className="flex sm:flex-row flex-col justify-center items-center sm:gap-20 mx-auto py-16 container"
    >
      <div className="mx-auto mt-5 border-8 border-white rounded-full w-40 h-40 overflow-hidden">
        <img src={profileImage} className="w-full h-full object-cover" alt="" />
      </div>

      <div className="w-full sm:w-3/4 font-general-regular text-[#EDEADE] text-center sm:text-left leading-normal">
        <h2 className="mb-5 font-semibold text-[24px] happy-monkey-regular">
          About Me
        </h2>
        {aboutMe.map((bio) => (
          <p className="mb-4 text-[#EDEADE]" key={bio.id}>
            {bio.bio}
          </p>
        ))}
      </div>
    </div>
  );
};

export default AboutMeBio;
