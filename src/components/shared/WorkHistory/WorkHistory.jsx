import { useContext } from "react";
import ResumeContext from "../../../context/ResumeContext";
import CoffeeCup from "../../reusable/CoffeeCup/CoffeeCup";

const WorkHistory = () => {
  const { resume } = useContext(ResumeContext);

  return (
    <div className="flex sm:flex-row flex-col sm:gap-3 mx-auto pt-20 pb-0 container">
      <div className="w-1/4">
        <h3 className="mb-5 font-semibold text-[24px] tracking-wide">
          <span className="border-[#efd5b4] border-b-4 text-[#5A5A5A]">
            Work History
          </span>
        </h3>
        <CoffeeCup />
      </div>

      <div className="pb-12 w-3/4">
        {resume.workHistory.map((workItem, index) => (
          <div className="mb-10 leading-relaxed">
            <h4 className="font-semibold text-[21px] tracking-wide">
              {workItem.company}
            </h4>

            <p className="mb-5 text-lg italic">
              {workItem.jobTitle} - {workItem.tenure}
            </p>

            <ul className="mb-10 ml-3 list-disc">
              {workItem.responsibilities.map((responsibility, index) => (
                <li key={index} className="mb-3">
                  {responsibility}
                </li>
              ))}
            </ul>

            {index !== resume.workHistory.length - 1 && <hr />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkHistory;
