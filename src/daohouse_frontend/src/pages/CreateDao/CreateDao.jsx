import React, { Fragment } from "react";
import TopComponent from "../../Components/Dao/TopComponent";
import Step1 from "../../Components/Dao/Step1";
import Step2 from "../../Components/Dao/Step2";
import Step3 from "../../Components/Dao/Step3";

const CreateDao = () => {
  const className = "CreateDAO";
  const [activeStep, setActiveStep] = React.useState(0);
  const [tokenStatus, setTokenStatus] = React.useState(true);

  console.log(activeStep);

  const Form = () => {
    switch (activeStep) {
      case 0:
        return <Step1 tokenStatus={tokenStatus} setActiveStep={setActiveStep} setTokenStatus={setTokenStatus} />;
      case 1:
        return <Step2 setActiveStep={setActiveStep} />;
      case 2:
        return <Step3 setActiveStep={setActiveStep} />;
      default:
        return null;
    }
  }

  return (
    <Fragment>
      <TopComponent showButtons={false} />

      {/** Heading */}
      <div className={className + " bg-[#c8ced3] py-8 px-10"}>
        <div className={className + "__label py-2 px-4 w-full"}>
          <p className="text-4xl flex flex-row items-center gap-4">
            Create DAO
            <div className="flex flex-col items-start">
              <div className="w-32 border-t-2 border-black"></div>
              <div className="w-14 mt-2 border-t-2 border-black"></div>
            </div>
          </p>
        </div>

        {/** Steps */}
        <div
          className={
            className +
            "__steps py-4 flex flex-row w-full justify-between"
          }
        >
          {steps.map(({ step, name }, index) => (
            <div
              key={index}
              className={
                "flex flex-row gap-2 p-4 " +
                `${activeStep === index ? "opacity-100" : "opacity-50"}`
              }
            >
              <div
                className={
                  "border border-[#0E3746] " +
                  `${activeStep === index
                    ? "bg-[#0E3746] text-white font-semibold"
                    : "bg-white text-black"
                  }` +
                  " rounded-[2rem] min-w-7 h-7"
                }
              >
                <p className="w-full text-center">{step}</p>
              </div>
              <span>{name}</span>
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
