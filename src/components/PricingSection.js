import React, { useState } from "react";

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(true);

  const togglePlan = () => {
    setIsYearly((prevState) => !prevState);
  };

  return (
    <section id="iv-ai-pricing" className="xl:iv-pt-150 iv-pt-100 sm:iv-pt-75">
      <div className="iv-container iv-mx-auto xl:iv-px-20 lg:iv-px-40 md:iv-px-25 sm:iv-px-20">
        <div className="iv-col-span-12 iv-grid iv-text-center iv-mb-50 sm:iv-mb-40">
          <h2 className="iv-text-grey-100 dark:iv-text-grey-0 iv-text-heading-4xl lg:iv-text-heading-2xl md:iv-text-heading-2xl sm:iv-text-heading-2xs iv-m-heading-3xl lg:iv-m-heading-2xl md:iv-m-heading-2xl sm:iv-m-heading-2xs iv-font-extrabold iv-text-center iv-w-full iv-h-full">
            The right plans,
            <span className="iv-h-full iv-title-gradient iv-block">
              for the right price
            </span>
          </h2>
        </div>
        <div className="iv-text-center xl:iv-mt-75 iv-mt-50 sm:iv-mt-20">
          <div className="iv-relative iv-flex-col iv-justify-self-center iv-text-center iv-w-[208px] iv-mx-auto">
            <button
              className="iv-relative iv-p-3 iv-bg-grey-5 iv-border-none iv-rounded-[80px] iv-text-body-l"
              onClick={togglePlan}
            >
              <div className="iv-relative iv-flex iv-items-center iv-w-[204px] iv-h-[38px] iv-z-0 iv-pt-5 iv-pb-6 iv-px-15 sm:iv-py-8">
                <span
                  className={`iv-absolute iv-h-[39px] iv-top-0 iv-rounded-[80px] iv-bg-grey-0 iv-transition-all iv-ease-out iv-duration-300 iv-top-[-1px] ${
                    isYearly
                      ? "iv-translate-x-[85px] iv-w-[124px]"
                      : "iv-translate-x-[0] iv-w-[80px]"
                  } iv-left-[-4px] iv-z-[0]`}
                ></span>
                <span
                  className={`iv-absolute iv-h-[39px] iv-top-0 iv-rounded-[80px] iv-transition-all iv-ease-out iv-duration-300 iv-top-[-1px] ${
                    isYearly
                      ? "iv-translate-x-[85px] iv-w-[124px]"
                      : "iv-translate-x-[0] iv-w-[80px]"
                  } iv-left-[-4px] pricing-toggle iv-bg-grey-0`}
                >
                  <span className="iv-bg-grey-0 pricing-toggle-inner iv-transition-all iv-ease-out iv-duration-300"></span>
                </span>
                <span
                  className={`iv-w-[80px] iv-inline-block iv-mr-10 iv-text-grey-100 iv-font-semibold iv-absolute iv-left-[-1px] iv-z-[4] ${
                    isYearly ? "iv-text-grey-50" : "iv-text-grey-100"
                  }`}
                >
                  Monthly
                </span>
                <span
                  className={`iv-w-[98px] iv-inline-block iv-text-grey-100 iv-font-semibold iv-absolute iv-right-[15px] iv-z-[4] ${
                    isYearly ? "iv-text-grey-100" : "iv-text-grey-50"
                  }`}
                >
                  <span className="iv-text-grey-100 iv-font-semibold">
                    Yearly
                  </span>
                  <span className="iv-text-black-20"> · </span>
                  <span className="iv-gradient-blue-deepblue-raspberry iv-text-clip clip-text">
                    20% off
                  </span>
                </span>
              </div>
            </button>
          </div>
        </div>
        <div className="iv-grid iv-grid-cols-3 md:iv-grid-cols-1 sm:iv-grid-cols-1 iv-gap-60 md:iv-gap-35 sm:iv-gap-30 iv-max-w-[70rem] iv-mx-auto xl:iv-mt-75 iv-mt-50 xl:iv-pb-4">
          <PricingCard
            title="Free"
            price={isYearly ? "$0" : "$0"}
            features={[
              "10 mins/wk of AI generation",
              "iStock",
              "10 GB storage",
              "4 exports/wk with invideo logo",
              "2.5M+ standard media",
              "voice clones",
            ]}
            buttonLabel="Try for free"
          />
          <PricingCard
            title="Plus"
            price={isYearly ? "$200" : "$20"}
            features={[
              "50 mins/mo of AI generation",
              "80/mo iStock",
              "100 GB storage",
              "Unlimited exports",
              "2 voice clones",
              "Upto 1 user",
            ]}
            buttonLabel="Get Plus"
            isBestValue={false}
          />
          <PricingCard
            title="Max"
            price={isYearly ? "$480" : "$48"}
            features={[
              "200 mins/mo of AI generation",
              "160/mo iStock",
              "200 GB storage",
              "Unlimited exports",
              "5 voice clones",
              "Upto 5 users",
            ]}
            buttonLabel="Get Max"
            isBestValue={true}
          />
        </div>
      </div>
    </section>
  );
};

const PricingCard = ({ title, price, features, buttonLabel, isBestValue }) => {
  return (
    <div
      className={`iv-overflow-hidden iv-rounded-[25px] iv-border-2 iv-border-solid iv-flex xl:iv-flex-col lg:iv-flex-col md:iv-flex-wrap sm:iv-flex-col iv-border-grey-5 ${
        isBestValue ? "iv-gradient-border iv-border-transparent" : ""
      }`}
    >
      <div className="iv-relative iv-overflow-hidden iv-bg-grey-0 iv-p-[38px] iv-w-[330px] sm:iv-w-full">
        {isBestValue && (
          <div className="iv-gradient-border iv-absolute iv-top-[30px] lg:iv-top-[32px] iv-right-[-39%] md:iv-right-[-38%] lg:iv-right-[-37.5%] iv-w-full iv-transform iv-rotate-45 iv-text-center iv-text-grey-0 iv-font-semibold iv-text-body-xl md:iv-text-body-l iv-m-body-xl">
            Best Value
          </div>
        )}
        <div className="iv-pb-[12px] sm:iv-pb-[0px] iv-flex iv-justify-between">
          <span className="iv-text-black-85 iv-text-heading-s sm:iv-text-[30px] iv-leading-[36px] iv-font-extrabold">
            {title}
          </span>
          <div className="sm:iv-block iv-hidden">
            <div className="iv-inline-block iv-text-[46px] iv-leading-[50px] sm:iv-text-[30px] iv-leading-[36px] iv-font-extrabold">
              {price}
            </div>
            <div className="iv-inline-block xl:iv-pl-6 lg:iv-pl-4 iv-pl-7 iv-text-black-50 iv-text-body-3xl iv-font-semibold">
              /mo*
            </div>
          </div>
        </div>
        <div className="lg:iv-pr-5 iv-text-grey-50 iv-text-body-3xl iv-font-medium sm:iv-text-body-xl">
          {title === "Free"
            ? "For anyone who wishes to try AI video creation"
            : title === "Plus"
            ? "For creators starting their journey"
            : "For growing & established creators"}
        </div>
        <div className="iv-py-15 sm:iv-hidden">
          <div className="iv-inline-block iv-text-[46px] iv-leading-[50px] sm:iv-text-[30px] iv-leading-[36px] iv-font-extrabold">
            {price}
          </div>
          <div className="iv-inline-block xl:iv-pl-6 lg:iv-pl-4 iv-pl-7 iv-text-black-50 iv-text-body-3xl iv-font-semibold">
            /mo*
          </div>
        </div>
        <div className="iv-py-20 sm:iv-pb-[0px]">
          <div className="iv-text-center iv-text-body-xs iv-h-[16px] sm:iv-block iv-hidden">
            <div className="iv-font-medium iv-text-black-50">
              *Billed{" "}
              {title === "Free" ? "" : title === "Plus" ? "$240 " : "$576"}
            </div>
          </div>
          <button className="iv-button iv-transition iv-duration-150 iv-ease-in iv-inline-flex iv-justify-center iv-items-center iv-cursor-pointer iv-rounded-full iv-px-15 iv-h-52 iv-w-full xl:iv-text-body-3xl lg:iv-text-body-3xl sm:iv-hidden iv-font-semibold iv-bg-grey-90 iv-text-grey-0">
            {buttonLabel}
          </button>
        </div>
      </div>
      <div className="iv-bg-grey-7 iv-flex sm:iv-block xl:iv-flex-col lg:iv-flex-col md:iv-flex-wrap iv-py-[14px] iv-px-[28px] iv-flex-grow">
        <div className="iv-py-10 md:iv-ml-15 sm:iv-ml-8 iv-flex-grow">
          {features.map((feature, index) => (
            <div
              className="iv-flex iv-items-center iv-relative iv-pb-[9px]"
              key={index}
            >
              <span className="iv-pr-9 lg:iv-pr-[11px]">
                <img
                  src="https://web-assets.invideo.io/common/prod/pricing/tick.svg"
                  loading="lazy"
                  className="iv-w-[12px] iv-h-[12px] iv-object-contain iv-inline-block"
                  alt=""
                />
              </span>
              <div className="iv-text-body-xl iv-text-black-85 iv-w-full iv-text-left">
                {feature}
              </div>
            </div>
          ))}
        </div>
        <button className="iv-button iv-transition iv-duration-150 iv-ease-in xl:iv-hidden iv-inline-flex iv-justify-center iv-items-center iv-cursor-pointer iv-rounded-full iv-px-15 iv-h-52 iv-w-full xl:iv-text-body-3xl lg:iv-text-body-3xl sm:iv-hidden iv-font-semibold iv-bg-grey-90 iv-text-grey-0">
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default PricingSection;
