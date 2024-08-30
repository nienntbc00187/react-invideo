import React from "react";

const StartCreating = () => {
  return (
    <section className="iv-bg-grey-100 xl:iv-py-100 iv-pt-30 iv-pb-35 iv-text-center">
      <div className="iv-inline-block iv-my-35 sm:iv-my-[42px] iv-relative iv-h-[54px] sm:iv-h-[37px] iv-w-[56px] sm:iv-w-[36px]">
        <img
          src="https://web-assets.invideo.io/common/prod/logos/invideo-logo-heart.svg"
          alt="InVideo logo"
          loading="lazy"
        />
      </div>
      <h2 className="xl:iv-pt-40 iv-pt-[24px] sm:iv-pt-7 md:iv-px-35 sm:iv-px-20 iv-text-center iv-text-grey-0 xl:iv-text-heading-5xl iv-text-heading-4xl sm:iv-text-heading-s xl:iv-m-heading-5xl iv-m-heading-4xl sm:iv-m-heading-s iv-font-extrabold md:iv-w-full sm:iv-w-full">
        <span>Start creating videos.</span>
        <span className="iv-block iv-text-center iv-title-gradient iv-font-extrabold">
          No experience needed.
        </span>
      </h2>
      <button className="iv-button iv-transition iv-duration-150 iv-ease-in iv-bg-blue hover:iv-bg-blue-strong iv-transition iv-flex iv-justify-center iv-items-center iv-cursor-pointer iv-rounded-full xl:iv-mt-80 iv-mt-75 sm:iv-mt-60 xl:iv-mb-50 iv-mb-40 iv-mx-auto xl:iv-px-20 iv-px-20 xl:iv-h-65 iv-h-52 xl:iv-text-body-3xl iv-text-body-2xl iv-text-grey-0 iv-font-bold">
        Get Started - It's free
      </button>
    </section>
  );
};

export default StartCreating;
