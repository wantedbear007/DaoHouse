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
import { useAuth } from "../../Components/utils/useAuthClient";
import { Principal } from "@dfinity/principal";

const CreateDao = () => {
  
  const className = "CreateDAO";
  const [activeStep, setActiveStep] = React.useState(0);
  const { backendActor, frontendCanisterId, identity } = useAuth();
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
  // // Create Agent
  // const isLocal = !window.location.host.endsWith('ic0.app');
  // const agent = new HttpAgent({
  //   host: isLocal ? http://127.0.0.1:${window.location.port} : 'https://ic0.app', identity,
  // });
  // if (isLocal) {
  //   agent.fetchRootKey();
  // }


  // // Initiate AssetManager
  // const assetManager = new AssetManager({
  //   canisterId: frontendCanisterId,
  //   agent: agent,
  // });

  const handleDaoClick = async() => {
    // const DaoPayload = {
    //     dao_name: "Step1.DAOIdentifier",
    //     purpose: "Step1.Purpose",
    //     daotype:    "Step1.DAOType",
    //     link_of_document: " ",
    //     cool_down_period: "",
    //     members: "",
    //     tokenissuer: "",
    //     linksandsocials: [
    //         "https://twitter.com/sampledao"
    //     ],
    //     required_votes: " ",
    //     image_content:  " ",
    //     image_title: "",
    //     image_content_type: ""
    // };

    let princi = Principal.fromText("qnrhg-uveun-uk5ve-46qq6-eeqio-rnh2l-f6mvk-hbhan-vccrc-wdmbn-fqe")
    const daoPayload = {
      dao_name: Step1.DAOIdentifier,
      purpose: "this is by bhanu",
      daotype: "Non-profit",
      link_of_document: "https://example.com/charter.pdf",
      cool_down_period: "7 days",
      members: [princi],
      tokenissuer: "sample",
      linksandsocials: ["https://twitter.com/sampledao"],
      required_votes: 100,
      image_content: [10],
      image_title: "samppe.jpg",
      image_content_type: "image/jpg"
    };
 console.log(daoPayload);
    const canisterId = process.env.CANISTER_ID_IC_ASSET_HANDLER;

    try {
      console.log("canister id of asset ", canisterId)
      const response = await backendActor.create_dao(canisterId, daoPayload);
      console.log({ response })

      if (response.Err) {
        toast.error(`${response.Err}`);
      } else {
        toast.success("Dao created successfully");
      }

    } catch (error) {
      console.error("Error creating Dao:", error);
    }
  };




  const Step1Ref = useRef(null);
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
          <Step3 setData={setData} setActiveStep={setActiveStep} Step1Ref={Step1Ref} Step4Ref={Step4Ref} />
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
          <Step6 data={data} setData={setData} setActiveStep={setActiveStep} handleDaoClick={handleDaoClick} />
        );
      default:
        return null;
    }
  }

  return (
    <Fragment>
      <TopComponent showButtons={false} />

      {/** Heading */}
      <div className={className + " bg-[#c8ced3] mobile:py-8 py-4 mobile:px-10 px-5"}>
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
              ref={index >= 3 ? Step4Ref : Step1Ref}
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
                <FaCircleCheck className="mobile:text-2xl text-[1.2rem] text-[#0E3746]" />
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
}

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