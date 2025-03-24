import ProgressBar from "@ramonak/react-progress-bar";
import { useContext, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import ResumeContext from "../../../context/ResumeContext";
import CuteDog from "../../reusable/CuteDog/CuteDog";

const AnimatedProgressBar = ({ resume }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const [animatedCompleted, setAnimatedCompleted] = useState(0);

  useEffect(() => {
    if (inView) {
      setAnimatedCompleted(resume.completed);
    }
  }, [inView, resume.completed]);

  return (
    <div className="mb-4 w-full" ref={ref}>
      <ProgressBar
        baseBgColor="#f5e8d7"
        bgColor={resume.bgColor}
        borderRadius={0}
        completed={animatedCompleted}
        height={45}
        isLabelVisible={false}
        width="97%"
        transitionDuration="2s"
      />
    </div>
  );
};

const CoreSkills = () => {
  const { resume } = useContext(ResumeContext);

  return (
    <div className="flex sm:flex-row flex-col sm:gap-3 mx-auto pt-20 pb-0 container">
      <div className="w-1/4">
        <h3 className="mb-5 font-semibold text-[24px] tracking-wide">
          <span className="border-[#efd5b4] border-b-4 text-[#5A5A5A]">
            Core Skills
          </span>
        </h3>
        <CuteDog />
      </div>

      <div className="pb-12 w-3/4">
        <div className="flex justify-center items-center mb-10">
          <ul className="w-full">
            {resume.languages.map((resumeItem) => (
              <li key={resumeItem.id}>
                <p className="mb-2 font-semibold text-[16px]">
                  {resumeItem.title}
                </p>
                <AnimatedProgressBar resume={resumeItem} />
              </li>
            ))}
          </ul>
        </div>

        <ul className="block mb-10 leading-relaxed">
          <li className="inline-block mr-1 underline">
            Technologies and Tools:&nbsp;
          </li>
          {resume.technologiesAndTools.map((techTool, index) => (
            <li className="inline-block" key={index}>
              {techTool}
              {index < resume.technologiesAndTools.length - 1 && ",\u00A0"}
            </li>
          ))}
        </ul>

        <ul className="block leading-relaxed">
          <li className="inline-block mr-1 underline">Soft Skills:&nbsp;</li>
          {resume.softSkills.map((friendlySkills, index) => (
            <li className="inline-block" key={index}>
              {friendlySkills}
              {index < resume.softSkills.length - 1 && ",\u00A0"}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CoreSkills;
