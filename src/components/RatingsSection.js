import React from "react";
import Container from "./Container";

const RatingsSection = () => {
  return (
    <Container>
      <section className="xl:iv-mt-150 iv-mt-150 sm:iv-mt-75 lg:iv-px-[21px] md:iv-px-25 xl:iv-mb-[-15px] lg:iv-mb-[-15px] md:iv-mb-[-28px]">
        <div className="iv-grid iv-grid-cols-12 md:iv-flex sm:iv-flex iv-flex-wrap iv-justify-center md:iv-px-10 sm:iv-px-10 sm:iv-pt-2">
          <div className="iv-col-span-2 xl:iv-col-start-2 lg:iv-col-start-2 iv-text-center md:iv-w-1/3 sm:iv-w-1/2">
            <div className="sm:iv-mt-15 iv-mx-20 md:iv-mt-[13px] md:iv-mb-[34px] sm:iv-mb-[34px]">
              <div className="iv-pb-10 md:iv-pb-8 sm:iv-pb-8 xl:iv-text-heading-xl iv-text-heading-m sm:iv-text-heading-2xs xl:iv-m-heading-xl iv-m-heading-2xl sm:iv-m-heading-2xs iv-font-extrabold">
                25M
              </div>
              <div className="iv-pb-10 iv-pt-9 lg:iv-py-8 iv-text-body-2xl sm:iv-text-body-m iv-m-heading-2xl sm:iv-m-heading-m iv-font-semibold">
                Customers
              </div>
              <div className="iv-my-4 sm:iv-my-3 iv-text-heading-3xs sm:iv-text-heading-3xs iv-m-heading-3xs sm:iv-m-heading-3xs iv-font-bold">
                190
                <span className="iv-inline-block iv-align-middle iv-ml-7 iv-text-body-m sm:iv-text-body-xs iv-m-body-xl sm:iv-text-body-xs iv-font-bold">
                  countries
                </span>
              </div>
            </div>
          </div>

          <div className="iv-col-span-2 iv-text-center md:iv-w-1/3 sm:iv-w-1/2">
            <a
              href="https://www.producthunt.com/posts/invideo/reviews"
              className="iv-block sm:iv-mt-15 iv-mx-20 md:iv-mt-[13px] md:iv-mb-[34px] sm:iv-mb-[34px]"
            >
              <div className="iv-m-heading-4xl iv-max-w-[108px] iv-mx-auto xl:iv-mb-6 lg:iv-mb-10 md:iv-mb-8 sm:iv-mb-7 lg:iv-px-9 md:iv-px-9 sm:iv-px-[19px]">
                <img
                  src="https://web-assets.invideo.io/landing-pages/prod/homepage/rating.svg"
                  alt="company"
                  loading="lazy"
                  width="108"
                  height="60"
                />
              </div>
              <div className="iv-pb-10 iv-pt-9 lg:iv-py-8 iv-text-body-2xl sm:iv-text-body-m iv-m-heading-2xl sm:iv-m-heading-m iv-font-semibold">
                Product of the month
              </div>
              <div
                className="iv-m-heading-3xs iv-mx-auto xl:iv-pt-10 lg:iv-pt-[14px] iv-pt-8 lg:iv-px-5 md:iv-px-5 sm:iv-px-7"
                style={{ maxWidth: "110px" }}
              >
                <img
                  src="https://web-assets.invideo.io/landing-pages/prod/homepage/product-hunt.svg"
                  alt="image"
                  loading="lazy"
                  width="110"
                  height="27"
                />
              </div>
            </a>
          </div>

          <div className="iv-col-span-2 iv-text-center md:iv-w-1/3 sm:iv-w-1/2">
            <a
              href="https://www.capterra.com/p/180680/InVideo/"
              className="iv-block sm:iv-mt-15 iv-mx-20 md:iv-mt-[13px] md:iv-mb-[34px] sm:iv-mb-[34px] sm:iv-mb-[34px]"
            >
              <div className="iv-pb-10 md:iv-pb-8 sm:iv-pb-8 xl:iv-text-heading-xl iv-text-heading-m sm:iv-text-heading-2xs xl:iv-m-heading-xl iv-m-heading-2xl sm:iv-m-heading-2xs iv-font-extrabold">
                4.8
              </div>
              <div className="xl:iv-my-10 lg:iv-my-7 md:iv-my-7 sm:iv-my-7">
                <span className="iv-flex iv-justify-center iv-relative">
                  <span
                    className="iv-achievement-ratings"
                    style={{
                      "--star-rating": 4.8,
                      "--star-size": "var(--rating-star-default-size)",
                      "--star-background": "var(--achievement-capterra)",
                      "--star-mask": "var(--achievement-capterra-mask)",
                    }}
                  ></span>
                </span>
              </div>
              <div
                className="iv-m-heading-3xs iv-mx-auto xl:iv-pt-10 lg:iv-pt-[14px] iv-pt-8 lg:iv-px-5 md:iv-px-5 sm:iv-px-7"
                style={{ maxWidth: "110px" }}
              >
                <img
                  src="https://web-assets.invideo.io/landing-pages/prod/homepage/captera.svg"
                  alt="image"
                  loading="lazy"
                  width="110"
                  height="27"
                />
              </div>
            </a>
          </div>

          <div className="iv-col-span-2 iv-text-center md:iv-w-1/3 sm:iv-w-1/2">
            <a
              href="https://www.trustpilot.com/review/invideo.io"
              className="iv-block sm:iv-mt-15 iv-mx-20 md:iv-mt-[13px] md:iv-mb-[34px] sm:iv-mb-[34px] sm:iv-mb-[34px]"
            >
              <div className="iv-pb-10 md:iv-pb-8 sm:iv-pb-8 xl:iv-text-heading-xl iv-text-heading-m sm:iv-text-heading-2xs xl:iv-m-heading-xl iv-m-heading-2xl sm:iv-m-heading-2xs iv-font-extrabold">
                4.6
              </div>
              <div className="xl:iv-my-10 lg:iv-my-7 md:iv-my-7 sm:iv-my-7">
                <span className="iv-flex iv-justify-center iv-relative">
                  <span
                    className="iv-achievement-ratings"
                    style={{
                      "--star-rating": 4.6,
                      "--star-size": "var(--rating-star-default-size)",
                      "--star-background": "var(--achievement-trustpilot)",
                      "--star-mask": "var(--achievement-trustpilot-mask)",
                    }}
                  ></span>
                </span>
              </div>
              <div
                className="iv-m-heading-3xs iv-mx-auto xl:iv-pt-10 lg:iv-pt-[14px] iv-pt-8 lg:iv-px-5 md:iv-px-5 sm:iv-px-7"
                style={{ maxWidth: "110px" }}
              >
                <img
                  src="https://web-assets.invideo.io/landing-pages/prod/homepage/trustpilot.svg"
                  alt="image"
                  loading="lazy"
                  width="110"
                  height="27"
                />
              </div>
            </a>
          </div>

          <div className="iv-col-span-2 iv-text-center md:iv-w-1/3 sm:iv-w-1/2">
            <a
              href="https://www.g2.com/products/invideo/reviews"
              className="iv-block sm:iv-mt-15 iv-mx-20 md:iv-mt-[13px] md:iv-mb-[34px] sm:iv-mb-[34px] sm:iv-mb-[20px]"
            >
              <div className="iv-pb-10 md:iv-pb-8 sm:iv-pb-8 xl:iv-text-heading-xl iv-text-heading-m sm:iv-text-heading-2xs xl:iv-m-heading-xl iv-m-heading-2xl sm:iv-m-heading-2xs iv-font-extrabold">
                4.8
              </div>
              <div className="xl:iv-my-10 lg:iv-my-7 md:iv-my-7 sm:iv-my-7">
                <span className="iv-flex iv-justify-center iv-relative">
                  <span
                    className="iv-achievement-ratings"
                    style={{
                      "--star-rating": 4.8,
                      "--star-size": "var(--rating-star-default-size)",
                      "--star-background": "var(--achievement-g2)",
                      "--star-mask": "var(--achievement-g2-mask)",
                    }}
                  ></span>
                </span>
              </div>
              <div
                className="iv-m-heading-3xs iv-mx-auto xl:iv-pt-10 lg:iv-pt-[14px] iv-pt-8 lg:iv-px-5 md:iv-px-5 sm:iv-px-7"
                style={{ maxWidth: "34px" }}
              >
                <img
                  src="https://web-assets.invideo.io/landing-pages/prod/homepage/grating.svg"
                  alt="image"
                  loading="lazy"
                  width="34"
                  height="34"
                />
              </div>
            </a>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default RatingsSection;
