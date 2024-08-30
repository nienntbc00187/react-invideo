import React from "react";

const VideoSection = () => {
  return (
    <div className="iv-container iv-mx-auto iv-pt-200 md:iv-pt-100 sm:iv-pt-100">
      <div className="iv-grid iv-col-span-12 xl:iv-col-start-1 lg:iv-col-start-1 xl:iv-px-15 lg:iv-px-20 iv-text-center iv-mb-75 md:iv-mb-50 sm:iv-mb-40">
        <h2 className="iv-text-grey-100 dark:iv-text-grey-0 iv-text-heading-4xl lg:iv-text-heading-2xl md:iv-text-heading-2xl sm:iv-text-heading-2xs iv-m-heading-3xl lg:iv-m-heading-2xl md:iv-m-heading-2xl sm:iv-m-heading-2xs iv-font-extrabold iv-text-center iv-w-full iv-h-full">
          Turn a prompt into a video with{" "}
          <span className="iv-h-full iv-title-gradient iv-block">
            invideo AI
          </span>
        </h2>
      </div>
      <div className="iv-relative iv-flex iv-justify-center iv-items-center iv-mx-20">
        <img
          src="https://img.youtube.com/vi/x4VJ7DSkOqg/maxresdefault.jpg"
          alt="Video Poster"
          loading="lazy"
          className="iv-rounded-30 iv-aspect-video iv-object-cover iv-max-w-7xl iv-w-full"
        />
        <button
          className="iv-absolute iv-top-1/2 iv-left-1/2 -iv-translate-x-1/2 -iv-translate-y-1/2 iv-cursor-pointer"
          aria-label="preview-tutorial"
          type="button"
        >
          <svg
            width="240"
            height="240"
            viewBox="0 0 240 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="iv-w-[150px] iv-h-[150px] sm:iv-w-[75px] sm:iv-h-[75px]"
          >
            <g filter="url(#filter0)">
              <rect
                width="240"
                height="240"
                rx="120"
                fill="black"
                fillOpacity="0.25"
              ></rect>
              <path
                d="M90.3902 68.9124C89.0527 68.1402 87.3809 69.1055 87.3809 70.6499V177.321C87.3809 178.865 89.0527 179.83 90.3902 179.058L182.77 125.723C184.107 124.95 184.107 123.02 182.77 122.248L90.3902 68.9124Z"
                fill="white"
              ></path>
            </g>
            <defs>
              <filter
                id="filter0"
                x="-160"
                y="-160"
                width="560"
                height="560"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feGaussianBlur
                  in="BackgroundImageFix"
                  stdDeviation="80"
                ></feGaussianBlur>
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_784_242613"
                ></feComposite>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_784_242613"
                  result="shape"
                ></feBlend>
              </filter>
            </defs>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default VideoSection;
