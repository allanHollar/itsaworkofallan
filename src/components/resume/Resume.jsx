import { useContext, useState, useEffect } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { useInView } from "react-intersection-observer";
import ResumeContext from "../../context/ResumeContext";

const AnimatedProgressBar = ({ resume }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [animatedCompleted, setAnimatedCompleted] = useState(0);

  useEffect(() => {
    if (inView) {
      setAnimatedCompleted(resume.completed);
    }
  }, [inView, resume.completed]);

  return (
    <div ref={ref}>
      <ProgressBar
        baseBgColor="#f5e8d7"
        bgColor={resume.bgColor}
        borderRadius={0}
        className="mb-4"
        completed={animatedCompleted}
        height={45}
        isLabelVisible={false}
        width={550}
        transitionDuration="2s"
      />
    </div>
  );
};

const Resume = () => {
  const { resume } = useContext(ResumeContext);

  return (
    <div className="flex sm:flex-row flex-col sm:gap-3 mx-auto py-16 font-general-regular container">
      <div className="w-1/4">
        <h3 className="mb-5 font-semibold text-[24px] tracking-wide">
          <span className="border-[#efd5b4] border-b-4 text-[#5A5A5A]">
            Core Skills
          </span>
        </h3>
      </div>

      <div className="flex justify-center items-center pb-16 w-3/4">
        <ul>
          {resume.languages.map((resumeItem) => (
            <li>
              <p className="mb-2 font-semibold text-[16px]">
                {resumeItem.title}
              </p>
              <AnimatedProgressBar resume={resumeItem} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Resume;
