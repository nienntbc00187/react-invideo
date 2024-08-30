import React from "react";
import Container from "./Container";

const FeaturesSection = () => (
  <Container>
    <section
      id="iv-features"
      className="xl:iv-pt-200 lg:iv-pt-150 md:iv-pt-150 sm:iv-pt-75"
    >
      <div className="sm:iv-px-20">
        <h2 className="iv-text-grey-100 dark:iv-text-grey-0 iv-text-heading-4xl lg:iv-text-heading-2xl md:iv-text-heading-2xl sm:iv-text-heading-2xs iv-m-heading-3xl lg:iv-m-heading-2xl md:iv-m-heading-2xl sm:iv-m-heading-2xs iv-font-extrabold iv-text-center iv-w-full iv-h-full">
          Easy text-to-video converter
          <span className="iv-h-full iv-title-gradient iv-block sm:iv-inline"></span>
        </h2>
      </div>
      <div className="iv-grid iv-grid-cols-12 md:iv-grid-cols-8 iv-gap-40 md:iv-gap-25 sm:iv-gap-20 xl:iv-px-20 lg:iv-px-40 md:iv-px-25 sm:iv-px-20 xl:iv-mt-75 iv-mt-50 sm:iv-mt-30">
        <div className="iv-col-span-6 md:iv-col-span-4 sm:iv-col-span-12 sm:iv-order-1">
          <div className="iv-bg-black-4 iv-rounded-3xl iv-overflow-hidden">
            <div className="xl:iv-rounded-30 iv-rounded-25 iv-relative iv-overflow-hidden">
              <div className="iv-flex iv-flex-col xl:iv-py-40 iv-py-35 sm:iv-py-25 xl:iv-h-[600px] lg:iv-h-[550px] md:iv-h-[500px] sm:iv-min-h-[320px] iv-justify-between">
                <div className="xl:iv-px-40 iv-px-35 sm:iv-px-25">
                  <h3 className="iv-relative iv-z-10 iv-font-extrabold xl:iv-text-heading-s iv-text-heading-2xs sm:iv-text-heading-4xs xl:iv-m-heading-s iv-m-heading-2xs sm:iv-m-heading-4xs iv-text-grey-85">
                    <span className="iv-block md:iv-inline sm:iv-inline">
                      Text to video
                    </span>
                    <span>generator</span>
                  </h3>
                </div>
                <div className="iv-flex-grow iv-relative sm:iv-mb-10">
                  <div className="iv-absolute xl:iv-top-[-25px] iv-top-[-13px] md:iv-top-[-7px] iv-h-full iv-w-full">
                    <img
                      src="https://assets-static.invideo.io/images/large/image3_7b9e283cfd.webp"
                      alt=""
                      className="iv-object-contain iv-absolute iv-inset-0 iv-w-full iv-h-full"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="xl:iv-px-40 iv-px-35 sm:iv-px-25">
                  <button
                    className="iv-inline-flex iv-justify-center iv-items-center iv-cursor-pointer iv-rounded-full iv-border-2 iv-border-grey-85 iv-px-15 iv-h-32 iv-mt-25 iv-text-body-xl iv-m-body-xl iv-text-grey-85 iv-font-semibold iv-transition hover:iv-bg-grey-85 hover:iv-text-grey-0"
                    type="button"
                  >
                    Generate now!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="iv-col-span-6 md:iv-col-span-4 sm:iv-col-span-12 sm:iv-order-2">
          <div className="iv-bg-black-4 iv-rounded-3xl iv-overflow-hidden">
            <div className="xl:iv-rounded-30 iv-rounded-25 iv-relative iv-overflow-hidden">
              <div className="iv-flex iv-flex-col xl:iv-py-40 iv-py-35 sm:iv-py-25 xl:iv-h-[600px] lg:iv-h-[550px] md:iv-h-[500px] sm:iv-min-h-[320px] iv-justify-between">
                <div className="xl:iv-px-40 iv-px-35 sm:iv-px-25">
                  <h3 className="iv-relative iv-z-10 iv-font-extrabold xl:iv-text-heading-s iv-text-heading-2xs sm:iv-text-heading-4xs xl:iv-m-heading-s iv-m-heading-2xs sm:iv-m-heading-4xs iv-text-grey-0">
                    <span className="iv-block md:iv-inline">
                      8 million+ stock media
                    </span>
                  </h3>
                </div>
                <div className="iv-absolute iv-top-0 iv-left-0 iv-h-full iv-w-full">
                  <video
                    className="iv-object-cover iv-h-full iv-w-full xl:iv-rounded-30 iv-rounded-25 lazyload"
                    autoPlay
                    muted
                    playsInline
                    preload="auto"
                    loop
                    data-poster="https://assets-static.invideo.io/images/large/Card_BG_optional_477984dca7_de4f64c83e.webp"
                    poster="https://assets-static.invideo.io/images/large/Card_BG_optional_477984dca7_de4f64c83e.webp"
                    data-loaded="true"
                  >
                    <source
                      data-src="https://assets-static.invideo.io/files/Stock_Footage2x_V2_78c7e1c798.mp4"
                      type="video/mp4"
                      src="https://assets-static.invideo.io/files/Stock_Footage2x_V2_78c7e1c798.mp4"
                    />
                  </video>
                </div>
                <div className="iv-flex xl:iv-pl-40 iv-pl-35 sm:iv-pl-25 iv-relative iv-top-[7px] iv-left-[-3px] sm:iv-left-[-1px]">
                  <div className="iv-flex iv-items-center">
                    <div className="iv-relative iv-w-[94px] md:iv-w-[65px] sm:iv-w-[55px] iv-mr-40 md:iv-mr-25 sm:iv-mr-25">
                      <picture
                        height="33"
                        width="94"
                        src="https://web-assets.invideo.io/landing-pages/prod/homepage/Istock-logo.svg"
                        alt="image"
                        loading="lazy"
                      />
                    </div>
                    <div className="iv-relative iv-w-[143px] md:iv-w-[100px] sm:iv-w-[90px] iv-mr-35 md:iv-mr-25 sm:iv-mr-20">
                      <picture
                        height="31"
                        width="143"
                        src="https://web-assets.invideo.io/landing-pages/prod/homepage/Storyblocks-logo.svg"
                        alt="image"
                        loading="lazy"
                      />
                    </div>
                    <div className="iv-relative iv-w-[136px] md:iv-w-[95px] sm:iv-w-[85px]">
                      <img
                        height="20"
                        width="136"
                        src="https://web-assets.invideo.io/landing-pages/prod/homepage/Shutterstock-logo.svg"
                        alt="logo"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="iv-col-span-12 md:iv-col-span-8 sm:iv-col-span-12 sm:iv-order-3">
          <div className="iv-bg-black-4 iv-rounded-3xl iv-overflow-hidden">
            <div className="xl:iv-rounded-30 iv-rounded-25 iv-relative iv-overflow-hidden">
              <div className="iv-flex iv-flex-col xl:iv-py-40 iv-py-35 sm:iv-py-25 xl:iv-h-[600px] lg:iv-h-[550px] md:iv-h-[500px] sm:iv-min-h-[320px] iv-justify-between sm:iv-h-[480px]">
                <div className="xl:iv-px-40 iv-px-35 sm:iv-px-25">
                  <h3 className="iv-relative iv-z-10 iv-font-extrabold iv-text-shadow xl:iv-text-heading-xl iv-text-heading-m xl:iv-m-heading-xl iv-m-heading-m sm:iv-hidden iv-text-grey-0">
                    <span className="iv-block">Text to video creation</span>
                    <span>made easy</span>
                  </h3>
                </div>
                <div className="iv-absolute iv-left-0 iv-top-0 iv-w-full iv-h-full iv-z-0">
                  <video
                    id="myVideo"
                    autoPlay
                    muted
                    playsInline
                    preload="auto"
                    loop
                    className="iv-object-cover iv-w-full iv-h-full xl:iv-rounded-30 iv-rounded-25 lazyload"
                    data-poster="https://assets-static.invideo.io/images/large/Main_Video_2_0_00_10_11_1_172d8f1961.webp"
                    poster="https://assets-static.invideo.io/images/large/Main_Video_2_0_00_10_11_1_172d8f1961.webp"
                    data-loaded="true"
                  >
                    <source
                      data-src="https://assets-static.invideo.io/files/Landing_Page_Banner_09_08_2023_7a66e00aa8.mp4"
                      type="video/mp4"
                      src="https://assets-static.invideo.io/files/Landing_Page_Banner_09_08_2023_7a66e00aa8.mp4"
                    />
                  </video>
                </div>
                <div className="iv-flex xl:iv-pl-40 iv-pl-35 sm:iv-pl-25 iv-relative iv-top-[7px] iv-left-[-3px] sm:iv-left-[-1px]">
                  <div className="iv-text-heading-4xs sm:iv-text-body-2xl iv-font-semibold iv-z-10 iv-overflow-auto iv-whitespace-nowrap iv-no-scroll-bar-container">
                    <span
                      id="editMedia"
                      className="iv-relative iv-cursor-pointer xl:iv-mr-[28px] iv-mr-[19px] sm:iv-mr-15 iv-text-grey-0"
                    >
                      Edit media
                    </span>
                    <span
                      id="editText"
                      className="iv-relative iv-cursor-pointer xl:iv-mr-[28px] iv-mr-[19px] sm:iv-mr-15 iv-text-white-60"
                    >
                      Edit text
                    </span>
                    <span
                      id="transitions"
                      className="iv-relative iv-cursor-pointer xl:iv-mr-[28px] iv-mr-[19px] sm:iv-mr-15 iv-text-white-60"
                    >
                      Transitions
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="iv-col-span-6 md:iv-col-span-4 sm:iv-col-span-12 sm:iv-order-5">
          <div className="iv-bg-black-4 iv-rounded-3xl iv-overflow-hidden">
            <div className="xl:iv-rounded-30 iv-rounded-25 iv-relative iv-overflow-hidden">
              <div className="iv-flex iv-flex-col xl:iv-py-40 iv-py-35 sm:iv-py-25 xl:iv-h-[600px] lg:iv-h-[550px] md:iv-h-[500px] sm:iv-min-h-[320px] iv-gradient-light-blue">
                <div className="xl:iv-px-40 iv-px-35 sm:iv-px-25">
                  <h3 className="iv-relative iv-z-10 iv-font-extrabold xl:iv-text-heading-s iv-text-heading-2xs sm:iv-text-heading-4xs xl:iv-m-heading-s iv-m-heading-2xs sm:iv-m-heading-4xs iv-text-grey-85">
                    <span className="iv-block">
                      Human-sounding voiceovers to bring your videos to life
                    </span>
                  </h3>
                </div>
                <div className="iv-relative iv-flex-grow iv-my-25">
                  <img
                    src="https://web-assets.invideo.io/landing-pages/prod/homepage/voiceover-graphic.webp"
                    alt="image"
                    className="iv-object-contain iv-absolute iv-inset-0 iv-w-full iv-h-full iv-max-w-[560px] iv-m-auto"
                    loading="lazy"
                  />
                </div>
                <div className="xl:iv-px-40 iv-px-35 sm:iv-px-25">
                  <div className="xl:iv-m-body-3xl iv-m-body-2xl sm:iv-m-body-xl xl:iv-text-body-3xl iv-text-body-2xl sm:iv-text-body-xl iv-text-grey-85 iv-font-medium"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="iv-col-span-6 md:iv-col-span-4 sm:iv-col-span-12 sm:iv-order-4">
          <div className="iv-bg-black-4 iv-rounded-3xl iv-overflow-hidden">
            <div className="xl:iv-rounded-30 iv-rounded-25 iv-relative iv-overflow-hidden">
              <div className="iv-flex iv-flex-col xl:iv-py-40 iv-py-35 sm:iv-py-25 xl:iv-h-[600px] lg:iv-h-[550px] md:iv-h-[500px] sm:iv-min-h-[320px] iv-justify-between iv-bg-grey-90">
                <div className="xl:iv-px-40 iv-px-35 sm:iv-px-25">
                  <h3 className="iv-relative iv-z-10 iv-font-extrabold xl:iv-text-heading-s iv-text-heading-2xs sm:iv-text-heading-4xs xl:iv-m-heading-s iv-m-heading-2xs sm:iv-m-heading-4xs iv-text-grey-0">
                    <span className="iv-block">
                      Collaborate in real-time with multiplayer editing
                    </span>
                  </h3>
                </div>
                <div className="iv-relative iv-flex-grow iv-my-25">
                  <img
                    src="https://web-assets.invideo.io/landing-pages/prod/homepage/collaborate-ai-3x.webp"
                    alt="image"
                    className="iv-object-contain iv-absolute iv-inset-0 iv-w-full iv-h-full"
                    loading="lazy"
                  />
                </div>
                <div className="xl:iv-px-40 iv-px-35 sm:iv-px-25">
                  <div className="iv-inline-flex iv-justify-center iv-items-center iv-cursor-pointer iv-rounded-full iv-border-2 iv-border-white-85 iv-px-12 iv-py-6 iv-h-32 iv-mt-10 iv-text-body-xl iv-text-white-85 iv-font-semibold iv-transition hover:iv-bg-white-85 hover:iv-text-grey-100">
                    Coming soon
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Container>
);

export default FeaturesSection;
