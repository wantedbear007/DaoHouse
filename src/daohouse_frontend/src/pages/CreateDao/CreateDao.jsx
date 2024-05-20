import React, { Fragment, useEffect, useRef, useState } from "react";
import "./CreateDao.scss";
import { FaCircleCheck } from "react-icons/fa6";
import Step1 from "../../Components/Dao/Step1";
import Step2 from "../../Components/Dao/Step2";
import Step3 from "../../Components/Dao/Step3";
import Step4 from "../../Components/Dao/Step4";
import Step5 from "../../Components/Dao/Step5";
import Step6 from "../../Components/Dao/Step6";
import TopComponent from "../../Components/Dao/TopComponent";

const CreateDao = () => {
  const className = "CreateDAO";
  const [activeStep, setActiveStep] = React.useState(0);

  const [data, setData] = useState({
    step1: {},
    step2: {},
    step3: {},
    step4: {},
    step5: {},
    step6: {
      imageURI: "",
    },
  });

  const Step4Ref = useRef(null);

  const Form = () => {
    switch (activeStep) {
      case 0:
        return (
          <Step1 setData={setData} setActiveStep={setActiveStep} />
        );
      case 1:
        return (
          <Step2 setData={setData} setActiveStep={setActiveStep} />
        );
      case 2:
        return (
          <Step3 setData={setData} setActiveStep={setActiveStep} Step4Ref={Step4Ref} />
        );
      case 3:
        return (
          <Step4 data={data} setData={setData} setActiveStep={setActiveStep} />
        );
      case 4:
        return (
          <Step5 setData={setData} setActiveStep={setActiveStep} />
        );
      case 5:
        return (
          <Step6 data={data} setData={setData} setActiveStep={setActiveStep} />
        );
      default:
        return null;
    }
  };

  return (
    <Fragment>
      <TopComponent showButtons={false} />

      {/** Heading */}
      <div className={className + " bg-[#c8ced3] mobile:py-8 py-4 mobile:px-10 px-6"}>
        <div className={className + "__label py-2 mobile:px-4 px-2 w-full"}>
          <div className="phone:text-4xl text-2xl flex flex-row items-center gap-4">
            Create DAO
            <div className="flex flex-col items-start">
              <div className="phone:w-32 w-12 border-t-2 border-black"></div>
              <div className="phone:w-14 w-7 mobile:mt-2 mt-1 border-t-2 border-black"></div>
            </div>
          </div>
        </div>

        {/** Steps */}
        <div
          className={
            className +
            "__steps overflow-x-scroll mobile:py-4 py-2 mobile:gap-20 gap-6 flex flex-row w-full mobile:items-center justify-between"
          }
        >
          {steps.map(({ step, name }, index) => (
            <div
              key={index}
              ref={index >= 3 ? Step4Ref : null}
              className={
                "flex mobile:flex-row flex-col py-4 items-center gap-2 " +
                `${activeStep >= index ? "opacity-100" : "opacity-50"}`
              }
            >
              {index >= activeStep ? (
                <div
                  className={
                    "border border-[#007a7b] " +
                    (activeStep === index
                      ? "bg-[#007a7b] text-white font-semibold"
                      : "bg-white text-[#007a7b]") +
                    " rounded-[2rem] mobile:min-w-7 min-w-5 mobile:h-7 h-5 flex items-center justify-center"
                  }
                >
                  <p className="text-center mobile:text-base text-xs">{step}</p>
                </div>
              ) : (
                <FaCircleCheck className="text-2xl text-[#0E3746]" />
              )}
              <span className="text-nowrap mobile:text-base text-xs">{name}</span>
            </div>
          ))}
        </div>

        {/** Form */}
        {Form()}
      </div>
    </Fragment>
  );
};

export default CreateDao;

const steps = [
  {
    step: 1,
    name: "Basic Info",
  },
  {
    step: 2,
    name: "Settle Down Period",
  },
  {
    step: 3,
    name: "Add members & Groups",
  },
  {
    step: 4,
    name: "Permissions",
  },
  {
    step: 5,
    name: "Quorum",
  },
  {
    step: 6,
    name: "DAO Asset",
  },
];
