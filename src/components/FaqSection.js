import React, { useState } from "react";
import Container from "./Container";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordionToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Container>
      <section className="iv-px-20 sm:iv-pt-60 md:iv-pt-[130px] lg:iv-pt-100 xl:iv-pt-150">
        <div className="iv-container iv-mx-auto">
          <div className="sm:iv-pb-40 iv-pb-50 xl:iv-pb-75">
            <h2 className="iv-text-grey-85 dark:iv-text-grey-0 iv-text-center sm:iv-m-heading-xs md:iv-m-heading-2xl lg:iv-m-heading-2xl xl:iv-m-heading-3xl sm:iv-text-heading-xs md:iv-text-heading-2xl lg:iv-text-heading-2xl xl:iv-text-heading-3xl iv-font-extrabold">
              Want to{" "}
              <span className="iv-block iv-title-gradient iv-leading-tight">
                know more?
              </span>
            </h2>
          </div>
          <div className="iv-grid iv-grid-cols-4 md:iv-grid-cols-8 lg:iv-grid-cols-12 xl:iv-grid-cols-12 iv-gap-20 md:iv-gap-25 lg:iv-gap-40 xl:iv-gap-40">
            <div className="iv-col-span-4 md:iv-col-start-2 md:iv-col-end-8 lg:iv-col-start-3 lg:iv-col-end-11 xl:iv-col-start-3 xl:iv-col-end-11">
              <div className="accordion">
                {accordionData.map((item, index) => (
                  <div
                    key={index}
                    className={`sm:iv-py-15 md:iv-py-20 lg:iv-py-25 xl:iv-py-30 first:iv-pt-[0] sm:iv-text-heading-6xs md:iv-text-heading-4xs lg:iv-text-heading-3xs xl:iv-text-heading-2xs sm:iv-m-heading-6xs md:iv-m-heading-4xs lg:iv-m-heading-3xs xl:iv-m-heading-2xs iv-font-semibold dark:iv-text-white-85 iv-border-black-10 dark:iv-border-white-10 iv-border-b`}
                  >
                    <div
                      className="accordion__heading"
                      role="heading"
                      aria-level="3"
                      id={`accordion__heading-${index}`}
                      aria-expanded={openIndex === index}
                      aria-controls={`accordion__panel-${index}`}
                      role="button"
                      tabIndex={0}
                      onClick={() => handleAccordionToggle(index)}
                    >
                      <div className="iv-flex iv-justify-between iv-items-center iv-bg-transparent iv-border-0 sm:iv-text-heading-6xs md:iv-text-heading-4xs lg:iv-text-heading-3xs xl:iv-text-heading-2xs iv-outline-none">
                        {item.question}
                        <div className="iv-relative sm:iv-w-[20px] md:iv-w-[24px] lg:iv-w-[28px] xl:iv-w-[32px] sm:iv-h-[20px] md:iv-h-[24px] lg:iv-h-[28px] xl:iv-h-[32px] iv-flex">
                          <img
                            src="https://web-assets.invideo.io/common/prod/icons/rounded-close.svg"
                            alt="collapse"
                            width="28"
                            height="28"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion__panel"
                      aria-hidden={openIndex !== index}
                      id={`accordion__panel-${index}`}
                      hidden={openIndex !== index}
                    >
                      <div className="iv-text-black-70 dark:iv-text-white-70 sm:iv-pt-[6px] md:iv-pt-[9px] lg:iv-pt-[9px] xl:iv-pt-20 sm:iv-text-body-xl md:iv-text-body-2xl lg:iv-text-body-3xl xl:iv-text-body-4xl iv-font-medium">
                        <span className="iv-block iv-pt-10 sm:iv-pt-5">
                          {item.answer}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

const accordionData = [
  {
    question: "How does invideo AI convert text to video, automatically?",
    answer:
      "Invideo AI uses powerful AI models to generate scripts from your prompts. It then sifts through 8m+ stock images and videos and selects relevant content for your video. Additionally, it also produces voiceover for the script that was submitted while adding background music and other elements like transitions that it deems fit for your prompt.",
  },
  {
    question:
      "Do you need to download anything to use article to video feature by invideo AI?",
    answer:
      "No downloads needed to turn text to video using invideo AI. It is a web-based tool and it works well on all popular browsers such as Safari, Google Chrome and others on all devices from mobile to desktops.",
  },
  {
    question: "Which is the best AI powered text to video maker?",
    answer:
      "Invideo AI is a first of its kind AI powered text to video creation tool. You can use it to create first cuts for any video idea by simply entering the idea.",
  },
];

export default FaqSection;
