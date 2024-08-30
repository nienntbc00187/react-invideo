import React from "react";

const HeroSection = () => {
  return (
    <div className="iv-max-w-[100vw] iv-overflow-hidden iv-pb-60 iv-mb-[-100px]">
      <div className="xl:iv-container xl:iv-mx-auto">
        <div
          id="iv-hero"
          className="iv-grid iv-grid-cols-12 md:iv-grid-cols-8 sm:iv-grid-cols-4 iv-gap-x-40 md:iv-gap-x-25 sm:iv-gap-x-20 iv-mt-100 lg:iv-mt-80 md:iv-mt-75 sm:iv-mt-50 lg:iv-px-40 md:iv-px-25 iv-px-20 xl:iv-ml-10 lg:iv-ml-8"
        >
          <div className="iv-col-span-12 md:iv-col-span-8 sm:iv-col-span-4 xl:iv-col-start-1 lg:iv-col-start-2 lg:iv-col-end-12 sm:iv-col-start-1 xl:iv-px-15 lg:iv-px-20 iv-w-full iv-text-center lg:iv-h-[140px]">
            <h1 className="iv-text-heading-5xl lg:iv-text-heading-4xl md:iv-text-heading-4xl sm:iv-text-heading-s iv-m-heading-5xl lg:iv-m-heading-4xl md:iv-m-heading-4xl sm:iv-m-heading-s md:iv-text-center sm:iv-text-center iv-text-grey-100 iv-font-extrabold">
              <span className="iv-block md:iv-inline sm:iv-inline">
                <span className="iv-decoration-clone">Convert </span>
                <span className="iv-title-gradient iv-decoration-clone">
                  Text to Video{" "}
                </span>
              </span>
              <span className="iv-block md:iv-inline sm:iv-inline">
                <span className="iv-decoration-clone">with AI</span>
                <span className="iv-title-gradient iv-decoration-clone"></span>
              </span>
            </h1>
          </div>
          <div className="iv-col-span-12 md:iv-col-span-8 sm:iv-col-span-4 iv-col-start-3 iv-col-end-11 md:iv-col-start-2 md:iv-col-end-8 sm:iv-col-start-1 iv-pt-50 md:iv-pt-60 sm:iv-pt-40">
            <div className="xl:iv-text-heading-3xs lg:iv-text-heading-4xs md:iv-text-heading-4xs sm:iv-text-body-2xl xl:iv-m-heading-3xs lg:iv-m-heading-4xs md:iv-m-heading-4xs sm:iv-m-body-2xl iv-font-semibold iv-text-center xl:iv-px-5">
              <span className="iv-text-black-85 md:iv-inline sm:iv-inline">
                The easiest way to turn text to video with AI is here.
              </span>
              <span className="iv-text-black-50 lg:iv-block md:iv-inline sm:iv-inline">
                Create videos for YouTube, Instagram and TikTok with simple text
                prompts. Just type in your idea to generate a video with stock
                footage, voiceover, background music, transitions and more.
              </span>
            </div>
          </div>
          <div className="iv-col-span-12 md:iv-col-span-8 sm:iv-col-span-4 iv-mt-50 md:iv-mt-60 sm:iv-mt-40 iv-text-center">
            <button
              className="iv-button iv-transition iv-duration-150 iv-ease-in iv-flex iv-justify-center iv-items-center iv-cursor-pointer iv-h-65 sm:iv-h-52 iv-rounded-full iv-transition iv-bg-blue hover:iv-bg-blue-strong iv-text-grey-0 iv-px-[24px] iv-py-20 sm:iv-px-20 iv-text-body-3xl sm:iv-text-body-2xl iv-font-bold sm:iv-font-semibold iv-mx-auto"
              type="button"
            >
              Turn text to video, now!
            </button>
            <div className="iv-mt-[16px] sm:iv-mt-10 md:iv-pb-0 sm:iv-pb-0 md:iv-mx-auto sm:iv-mx-auto iv-text-grey-50 iv-text-body-m sm:iv-text-body-xs iv-font-medium">
              No credit card required
            </div>
          </div>
          <div className="iv-relative lg:iv-pl-40 iv-col-span-12 md:iv-col-span-8 sm:iv-col-span-4 xl:iv-col-start-1 lg:iv-col-start-1 iv-mt-50 md:iv-mt-60 sm:iv-mt-40">
            <div className="md:iv-relative sm:iv-relative iv-h-[650px] md:iv-h-[570px] sm:iv-h-[230px]">
              <div className="iv-w-full iv-h-full">
                <img
                  src="https://assets-static.invideo.io/images/large/Simplified_Editor_UI_7d2075fd30.webp"
                  srcSet="https://assets-static.invideo.io/images/medium/Simplified_Editor_UI_7d2075fd30.webp 680w, https://assets-static.invideo.io/images/large/Simplified_Editor_UI_7d2075fd30.webp 1390w"
                  sizes="(min-width: 720px) calc(100vw - 50px), calc(100vw - 40px)"
                  className="iv-h-full iv-object-contain"
                  alt="hero"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
