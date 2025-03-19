import profileImage from "../../images/ar-profile.jpeg";
import { useContext } from "react";
import AboutMeContext from "../../context/AboutMeContext";

const AboutMeBio = () => {
  const { aboutMe } = useContext(AboutMeContext);

  return (
    <div className="flex sm:flex-row flex-col justify-center items-center sm:gap-20 mx-auto py-16 container">
      <div className="flex justify-center items-center rounded-full w-40 h-40 overflow-hidden">
        <img src={profileImage} className="w-full h-full object-cover" alt="" />
      </div>

      <div className="w-full sm:w-3/4 font-general-regular text-center text-white sm:text-left leading-normal">
        <h2 className="mb-5 font-semibold text-[24px]">About Me</h2>
        {aboutMe.map((bio) => (
          <p className="mb-4 text-base text-white" key={bio.id}>
            {bio.bio}
          </p>
        ))}
      </div>
    </div>
  );
};

export default AboutMeBio;
