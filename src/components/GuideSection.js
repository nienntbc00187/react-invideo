import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Container from "./Container";

const GuideSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
    arrows: true,
    prevArrow: (
      <button className="iv-absolute iv-backdrop-blur-[30px] iv-rounded-30 iv-top-1/2 iv--translate-y-2/4 iv-left-[40px] iv-px-25 iv-py-15 iv-bg-black-70 hover:iv-bg-grey-100 iv-transition iv-button-prev">
        <span className="iv-flex">
          <img
            src="https://web-assets.invideo.io/landing-pages/prod/homepage/previous-arrow.svg"
            width="25"
            height="14"
            alt="prev-button"
            loading="lazy"
          />
        </span>
      </button>
    ),
    nextArrow: (
      <button className="iv-absolute iv-backdrop-blur-[30px] iv-rounded-30 iv-top-1/2 iv--translate-y-2/4 iv-right-[40px] iv-px-25 iv-py-15 iv-bg-black-70 hover:iv-bg-grey-100 iv-transition iv-button-next">
        <span className="iv-flex">
          <img
            src="https://web-assets.invideo.io/landing-pages/prod/homepage/next-arrow.svg"
            width="28"
            height="17"
            alt="next-button"
            loading="lazy"
          />
        </span>
      </button>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <section
        id="iv-guide"
        className="xl:iv-pt-200 iv-pt-150 sm:iv-pt-100 iv-overflow-x-hidden"
      >
        <div className="iv-container iv-mx-auto">
          <div className="xl:iv-pb-75 iv-pb-50 sm:iv-pb-30 iv-pl-60 lg:iv-pl-75 sm:iv-px-20">
            <h2 className="iv-text-grey-100 xl:iv-text-heading-4xl iv-text-heading-2xl sm:iv-text-heading-2xs xl:iv-m-heading-4xl iv-m-heading-2xl sm:iv-m-heading-xs iv-font-extrabold iv-text-center">
              How to convert{" "}
              <span className="iv-title-gradient sm:iv-block">
                text to video with invideo AI?
              </span>
            </h2>
          </div>
        </div>
        <div className="iv-relative">
          <Slider {...settings}>
            <div className="iv-relative">
              <div className="iv-overflow-hidden">
                <div className="iv-rounded-30 iv-relative iv-overflow-hidden xl:iv-w-[440px] lg:iv-w-[402px] md:iv-w-[350px] sm:iv-w-[300px] xl:iv-h-[522px] lg:iv-h-[446px] md:iv-h-[436px] sm:iv-h-[401px] iv-mr-40 md:iv-mr-25 sm:iv-mr-20 iv-bg-black-4">
                  <div className="iv-h-full iv-relative iv-flex iv-flex-col iv-justify-between">
                    <div className="iv-flex iv-justify-between xl:iv-px-[26px] xl:iv-pt-[26px] lg:iv-px-[26px] lg:iv-pt-[26px] md:iv-px-25 md:iv-pt-[23px] iv-px-20 iv-pt-[12px]">
                      <div className="xl:iv-pl-[12px] xl:iv-pt-2 lg:iv-pl-7 md:iv-pl-8 sm:iv-pl-4 sm:iv-pt-5">
                        <h3 className="iv-relative iv-z-10 iv-font-extrabold iv-pr-20 iv-py-10 iv-text-heading-xs lg:iv-text-heading-2xs md:iv-text-heading-3xs sm:iv-text-heading-4xs iv-m-heading-xs lg:iv-m-heading-2xs md:iv-m-heading-3xs sm:iv-m-heading-4xs iv-text-grey-85">
                          <span className="iv-block md:iv-inline">
                            Prompt your idea
                          </span>
                        </h3>
                        <div className="iv-pr-10">
                          <div className="iv-font-medium xl:iv-text-heading-4xs lg:iv-text-body-3xl md:iv-text-body-2xl sm:iv-text-body-2xl xl:iv-pt-15 lg:iv-pt-8 md:iv-pt-[11px] sm:iv-pt-1 iv-text-black-50">
                            <span className="iv-text-black-85">
                              Choose a workflow from the dropdown, describe your
                              video idea. Share details about how you want your
                              video to be.
                            </span>
                            <span className="iv-block">Hit generate now!</span>
                          </div>
                        </div>
                      </div>
                      <div className="iv-font-extrabold iv-text-heading-7xl sm:iv-text-heading-5xl iv-text-black-7">
                        1
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="iv-relative">
              <div className="iv-overflow-hidden">
                <div className="iv-rounded-30 iv-relative iv-overflow-hidden xl:iv-w-[440px] lg:iv-w-[402px] md:iv-w-[350px] sm:iv-w-[300px] xl:iv-h-[522px] lg:iv-h-[446px] md:iv-h-[436px] sm:iv-h-[401px] iv-mr-40 md:iv-mr-25 sm:iv-mr-20 iv-bg-black-4">
                  <div className="iv-h-full iv-relative iv-flex iv-flex-col iv-justify-between">
                    <div className="iv-flex iv-justify-between xl:iv-px-[26px] xl:iv-pt-[26px] lg:iv-px-[26px] lg:iv-pt-[26px] md:iv-px-25 md:iv-pt-[23px] iv-px-20 iv-pt-[12px]">
                      <div className="xl:iv-pl-[12px] xl:iv-pt-2 lg:iv-pl-7 md:iv-pl-8 sm:iv-pl-4 sm:iv-pt-5">
                        <h3 className="iv-relative iv-z-10 iv-font-extrabold iv-pr-20 iv-py-10 iv-text-heading-xs lg:iv-text-heading-2xs md:iv-text-heading-3xs sm:iv-text-heading-4xs iv-m-heading-xs lg:iv-m-heading-2xs md:iv-m-heading-3xs sm:iv-m-heading-4xs iv-text-grey-85">
                          <span className="iv-block md:iv-inline">
                            Select your audience
                          </span>
                        </h3>
                        <div className="iv-pr-10">
                          <div className="iv-font-medium xl:iv-text-heading-4xs lg:iv-text-body-3xl md:iv-text-body-2xl sm:iv-text-body-2xl xl:iv-pt-15 lg:iv-pt-8 md:iv-pt-[11px] sm:iv-pt-1 iv-text-black-50">
                            <span className="iv-text-black-85">
                              Select the audience, platform, and appearance for
                              your video. This enables invideo AI to set the
                              tone for the title, script, background music, and
                              so on.
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="iv-font-extrabold iv-text-heading-7xl sm:iv-text-heading-5xl iv-text-black-7">
                        2
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="iv-relative">
              <div className="iv-overflow-hidden">
                <div className="iv-rounded-30 iv-relative iv-overflow-hidden xl:iv-w-[440px] lg:iv-w-[402px] md:iv-w-[350px] sm:iv-w-[300px] xl:iv-h-[522px] lg:iv-h-[446px] md:iv-h-[436px] sm:iv-h-[401px] iv-mr-40 md:iv-mr-25 sm:iv-mr-20 iv-bg-black-4">
                  <div className="iv-h-full iv-relative iv-flex iv-flex-col iv-justify-between">
                    <div className="iv-flex iv-justify-between xl:iv-px-[26px] xl:iv-pt-[26px] lg:iv-px-[26px] lg:iv-pt-[26px] md:iv-px-25 md:iv-pt-[23px] iv-px-20 iv-pt-[12px]">
                      <div className="xl:iv-pl-[12px] xl:iv-pt-2 lg:iv-pl-7 md:iv-pl-8 sm:iv-pl-4 sm:iv-pt-5">
                        <h3 className="iv-relative iv-z-10 iv-font-extrabold iv-pr-20 iv-py-10 iv-text-heading-xs lg:iv-text-heading-2xs md:iv-text-heading-3xs sm:iv-text-heading-4xs iv-m-heading-xs lg:iv-m-heading-2xs md:iv-m-heading-3xs sm:iv-m-heading-4xs iv-text-grey-85">
                          <span className="iv-block md:iv-inline">
                            Edit script & media
                          </span>
                        </h3>
                        <div className="iv-pr-10">
                          <div className="iv-font-medium xl:iv-text-heading-4xs lg:iv-text-body-3xl md:iv-text-body-2xl sm:iv-text-body-2xl xl:iv-pt-15 lg:iv-pt-8 md:iv-pt-[11px] sm:iv-pt-1 iv-text-black-50">
                            <span className="iv-text-black-85">
                              Change the script by clicking 'Edit script' or
                              replace stock media with your own with a simple
                              upload.
                            </span>
                            <span className="iv-block">
                              Once satisfied, export the video and share it on
                              any channel with your audience.
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="iv-font-extrabold iv-text-heading-7xl sm:iv-text-heading-5xl iv-text-black-7">
                        3
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="iv-relative">
              <div className="iv-overflow-hidden">
                <div className="iv-rounded-30 iv-relative iv-overflow-hidden xl:iv-w-[440px] lg:iv-w-[402px] md:iv-w-[350px] sm:iv-w-[300px] xl:iv-h-[522px] lg:iv-h-[446px] md:iv-h-[436px] sm:iv-h-[401px] iv-mr-40 md:iv-mr-25 sm:iv-mr-20 iv-bg-black-4">
                  <div className="iv-h-full iv-relative iv-flex iv-flex-col iv-justify-between">
                    <div className="iv-flex iv-justify-between xl:iv-px-[26px] xl:iv-pt-[26px] lg:iv-px-[26px] lg:iv-pt-[26px] md:iv-px-25 md:iv-pt-[23px] iv-px-20 iv-pt-[12px]">
                      <div className="xl:iv-pl-[12px] xl:iv-pt-2 lg:iv-pl-7 md:iv-pl-8 sm:iv-pl-4 sm:iv-pt-5">
                        <h3 className="iv-relative iv-z-10 iv-font-extrabold iv-pr-20 iv-py-10 iv-text-heading-xs lg:iv-text-heading-2xs md:iv-text-heading-3xs sm:iv-text-heading-4xs iv-m-heading-xs lg:iv-m-heading-2xs md:iv-m-heading-3xs sm:iv-m-heading-4xs iv-text-grey-85">
                          <span className="iv-block md:iv-inline">
                            Edit video & export
                          </span>
                        </h3>
                        <div className="iv-pr-10">
                          <div className="iv-font-medium xl:iv-text-heading-4xs lg:iv-text-body-3xl md:iv-text-body-2xl sm:iv-text-body-2xl xl:iv-pt-15 lg:iv-pt-8 md:iv-pt-[11px] sm:iv-pt-1 iv-text-black-50">
                            <span className="iv-text-black-85">
                              Use invideo AI's magic box to make edits to your
                              video. Use prompts like, delete scene, narrate in
                              a midwest male accent, etc.
                            </span>
                            <span className="iv-block">
                              Once satisfied, export the video and share it on
                              any channel with your audience.
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="iv-font-extrabold iv-text-heading-7xl sm:iv-text-heading-5xl iv-text-black-7">
                        4
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </Container>
  );
};

export default GuideSection;
