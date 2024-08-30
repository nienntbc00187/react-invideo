import React from "react";
import Container from "./Container";

const WorkflowSection = () => {
  return (
    <Container>
      <section
        id="iv-workflow"
        className="xl:iv-px-20 lg:iv-px-40 md:iv-px-25 sm:iv-px-20 xl:iv-mt-200 iv-mt-150 sm:iv-mt-100 iv-grid-cols-12"
      >
        <div className="xl:iv-mb-75 iv-mb-50 sm:iv-mb-30 sm:iv-px-5 iv-col-span-12 iv-col-start-2">
          <h2 className="iv-text-grey-100 dark:iv-text-grey-0 iv-text-heading-4xl lg:iv-text-heading-2xl md:iv-text-heading-2xl sm:iv-text-heading-2xs iv-m-heading-3xl lg:iv-m-heading-2xl md:iv-m-heading-2xl sm:iv-m-heading-2xs iv-font-extrabold iv-text-center iv-w-full iv-h-full">
            AI powered{" "}
            <span className="iv-h-full iv-title-gradient iv-block">
              text-to-video maker
            </span>
          </h2>
        </div>
        <div>
          <div className="iv-grid iv-gap-40 md:iv-gap-25 sm:iv-gap-25">
            {/* First Block */}
            <div className="iv-bg-black-4 iv-rounded-3xl iv-overflow-hidden">
              <div className="xl:iv-grid lg:iv-grid xl:iv-grid-cols-12 lg:iv-grid-cols-12 sm:iv-gap-30 md:iv-flex md:iv-h-full sm:iv-flex sm:iv-flex-col sm:iv-h-full">
                <div className="iv-flex iv-flex-col iv-justify-between iv-h-full md:iv-flex-1 xl:iv-col-span-5 lg:iv-col-span-5 sm:iv-col-span-12 md:iv-flex-grow">
                  <div className="md:iv-flex md:iv-flex-col md:iv-items-start xl:iv-pl-40 lg:iv-pl-35 md:iv-px-35 sm:iv-px-25 xl:iv-pt-40 iv-pt-35 md:iv-pt-30 sm:iv-pt-20">
                    <h3 className="iv-text-grey-100 xl:iv-text-heading-s iv-text-heading-2xs sm:iv-text-heading-4xs xl:iv-m-heading-s iv-m-heading-2xs sm:iv-m-heading-4xs iv-font-extrabold">
                      <span className="xl:iv-block lg:iv-block">
                        Generate a video with just text
                      </span>
                    </h3>
                    <div className="xl:iv-pt-35 lg:iv-pt-20 md:iv-pt-15 iv-pt-15 iv-pb-20 md:iv-pb-15 sm:iv-pb-15 md:iv-pr-10 md:iv-flex-grow">
                      <div className="iv-text-black-50 xl:iv-text-heading-4xs iv-text-body-3xl sm:iv-text-body-xl xl:iv-m-heading-4xs lg:iv-m-body-3xl sm:iv-m-body-xl iv-font-semibold iv-whitespace-pre-wrap">
                        Type a topic and add any special instructions. Choose
                        the tone and the target audience, and pick where you
                        want to share the video to optimize it for the platform.
                        Using text-to-video on invideo AI is as easy as sending
                        a text.
                      </div>
                    </div>
                  </div>
                  <div className="xl:iv-pl-40 iv-pl-35 sm:iv-px-20 iv-pb-40 lg:iv-pb-35 sm:iv-pb-20">
                    <button
                      className="iv-button iv-transition iv-duration-150 iv-ease-in iv-inline-flex iv-items-center iv-cursor-pointer iv-mr-[25px] xl:iv-py-20 iv-py-[14px] sm:iv-py-5 xl:iv-px-[24px] iv-px-20 sm:iv-px-[14px] iv-border-2 iv-border-blue iv-rounded-full sm:iv-rounded-m iv-text-blue xl:iv-text-body-3xl iv-text-body-2xl sm:iv-text-body-xl xl:iv-font-bold iv-font-semibold hover:iv-bg-blue hover:iv-text-grey-0"
                      type="button"
                    >
                      Try now!
                    </button>
                  </div>
                </div>
                <div className="xl:iv-col-span-7 lg:iv-col-span-7 sm:iv-col-span-12 sm:iv-order-1 md:iv-flex-1">
                  <div className="iv-relative iv-flex iv-justify-end iv-h-full xl:iv-max-h-[560px] lg:iv-max-h-[480px] md:iv-max-h-[380px] iv-overflow-hidden">
                    <img
                      className="iv-h-full iv-object-cover iv-object-left iv-aspect-[1.35]"
                      loading="lazy"
                      src="https://assets-static.invideo.io/images/large/Export_68b89ed492.webp"
                      sizes="(min-width: 820px) calc((100vw - 50px) / 2), calc(100vw - 40px)"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Second Block */}
            <div className="iv-bg-black-4 iv-rounded-3xl iv-overflow-hidden">
              <div className="xl:iv-grid lg:iv-grid xl:iv-grid-cols-12 lg:iv-grid-cols-12 sm:iv-gap-30 md:iv-flex md:iv-h-full sm:iv-flex sm:iv-flex-col sm:iv-h-full">
                <div className="iv-flex iv-flex-col iv-justify-between iv-h-full md:iv-flex-1 xl:iv-col-span-5 lg:iv-col-span-5 sm:iv-col-span-12 md:iv-flex-grow">
                  <div className="md:iv-flex md:iv-flex-col md:iv-items-start xl:iv-pl-40 lg:iv-pl-35 md:iv-px-35 sm:iv-px-25 xl:iv-pt-40 iv-pt-35 md:iv-pt-30 sm:iv-pt-20">
                    <h3 className="iv-text-grey-100 xl:iv-text-heading-s iv-text-heading-2xs sm:iv-text-heading-4xs xl:iv-m-heading-s iv-m-heading-2xs sm:iv-m-heading-4xs iv-font-extrabold">
                      <span className="xl:iv-block lg:iv-block">
                        Edit videos with a text prompt
                      </span>
                    </h3>
                    <div className="xl:iv-pt-35 lg:iv-pt-20 md:iv-pt-15 iv-pt-15 iv-pb-20 md:iv-pb-15 sm:iv-pb-15 md:iv-pr-10 md:iv-flex-grow">
                      <div className="iv-text-black-50 xl:iv-text-heading-4xs iv-text-body-3xl sm:iv-text-body-xl xl:iv-m-heading-4xs lg:iv-m-body-3xl sm:iv-m-body-xl iv-font-semibold iv-whitespace-pre-wrap">
                        Use the prompt box to make changes and edit your video.
                        Just type in it like you would speak to a human video
                        editor and the AI will execute the job. Prompt invideo
                        AI's magic box to delete scenes, replace stock, change
                        accents, etc.
                      </div>
                    </div>
                  </div>
                  <div className="xl:iv-pl-40 iv-pl-35 sm:iv-px-20 iv-pb-40 lg:iv-pb-35 sm:iv-pb-20">
                    <button
                      className="iv-button iv-transition iv-duration-150 iv-ease-in iv-inline-flex iv-items-center iv-cursor-pointer iv-mr-[25px] xl:iv-py-20 iv-py-[14px] sm:iv-py-5 xl:iv-px-[24px] iv-px-20 sm:iv-px-[14px] iv-border-2 iv-border-blue iv-rounded-full sm:iv-rounded-m iv-text-blue xl:iv-text-body-3xl iv-text-body-2xl sm:iv-text-body-xl xl:iv-font-bold iv-font-semibold hover:iv-bg-blue hover:iv-text-grey-0"
                      type="button"
                    >
                      Try now!
                    </button>
                  </div>
                </div>
                <div className="xl:iv-col-span-7 lg:iv-col-span-7 sm:iv-col-span-12 sm:iv-order-1 md:iv-flex-1">
                  <div className="iv-relative iv-flex iv-justify-end iv-h-full xl:iv-max-h-[560px] lg:iv-max-h-[480px] md:iv-max-h-[380px] iv-overflow-hidden">
                    <img
                      className="iv-h-full iv-object-cover iv-object-left iv-aspect-[1.35]"
                      loading="lazy"
                      src="https://ik.imagekit.io/sb8yfmfebk/tr:w-1200/images/large/Export_24bd0d8be1.webp"
                      sizes="(min-width: 820px) calc((100vw - 50px) / 2), calc(100vw - 40px)"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Third Block */}
            <div className="iv-bg-black-4 iv-rounded-3xl iv-overflow-hidden">
              <div className="xl:iv-grid lg:iv-grid xl:iv-grid-cols-12 lg:iv-grid-cols-12 sm:iv-gap-30 md:iv-flex md:iv-h-full sm:iv-flex sm:iv-flex-col sm:iv-h-full">
                <div className="iv-flex iv-flex-col iv-justify-between iv-h-full md:iv-flex-1 xl:iv-col-span-5 lg:iv-col-span-5 sm:iv-col-span-12 md:iv-flex-grow">
                  <div className="md:iv-flex md:iv-flex-col md:iv-items-start xl:iv-pl-40 lg:iv-pl-35 md:iv-px-35 sm:iv-px-25 xl:iv-pt-40 iv-pt-35 md:iv-pt-30 sm:iv-pt-20">
                    <h3 className="iv-text-grey-100 xl:iv-text-heading-s iv-text-heading-2xs sm:iv-text-heading-4xs xl:iv-m-heading-s iv-m-heading-2xs sm:iv-m-heading-4xs iv-font-extrabold">
                      <span className="xl:iv-block lg:iv-block">
                        Turn any video into a new one
                      </span>
                    </h3>
                    <div className="xl:iv-pt-35 lg:iv-pt-20 md:iv-pt-15 iv-pt-15 iv-pb-20 md:iv-pb-15 sm:iv-pb-15 md:iv-pr-10 md:iv-flex-grow">
                      <div className="iv-text-black-50 xl:iv-text-heading-4xs iv-text-body-3xl sm:iv-text-body-xl xl:iv-m-heading-4xs lg:iv-m-body-3xl sm:iv-m-body-xl iv-font-semibold iv-whitespace-pre-wrap">
                        Upload any video and edit it by adding text prompts for
                        new scenes. Select the scene that you want to change,
                        describe what you want in the prompt, and invideo AI
                        will do the rest.
                      </div>
                    </div>
                  </div>
                  <div className="xl:iv-pl-40 iv-pl-35 sm:iv-px-20 iv-pb-40 lg:iv-pb-35 sm:iv-pb-20">
                    <button
                      className="iv-button iv-transition iv-duration-150 iv-ease-in iv-inline-flex iv-items-center iv-cursor-pointer iv-mr-[25px] xl:iv-py-20 iv-py-[14px] sm:iv-py-5 xl:iv-px-[24px] iv-px-20 sm:iv-px-[14px] iv-border-2 iv-border-blue iv-rounded-full sm:iv-rounded-m iv-text-blue xl:iv-text-body-3xl iv-text-body-2xl sm:iv-text-body-xl xl:iv-font-bold iv-font-semibold hover:iv-bg-blue hover:iv-text-grey-0"
                      type="button"
                    >
                      Try now!
                    </button>
                  </div>
                </div>
                <div className="xl:iv-col-span-7 lg:iv-col-span-7 sm:iv-col-span-12 sm:iv-order-1 md:iv-flex-1">
                  <div className="iv-relative iv-flex iv-justify-end iv-h-full xl:iv-max-h-[560px] lg:iv-max-h-[480px] md:iv-max-h-[380px] iv-overflow-hidden">
                    <img
                      className="iv-h-full iv-object-cover iv-object-left iv-aspect-[1.35]"
                      loading="lazy"
                      src="https://ik.imagekit.io/sb8yfmfebk/tr:w-1200/images/large/Export_8d35165045.webp"
                      sizes="(min-width: 820px) calc((100vw - 50px) / 2), calc(100vw - 40px)"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default WorkflowSection;
