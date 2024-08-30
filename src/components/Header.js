import React from "react";
import "../style/css/app.css";

const Header = () => {
  return (
    <div className="iv-h-[56px]">
      <div className="iv-fixed iv-w-full iv-z-20 iv-backdrop-blur-[30px] iv-bg-white-75">
        <div className="xl:iv-container xl:iv-mx-auto">
          <div className="xl:iv-px-[24px] md:iv-px-25 lg:iv-px-40">
            <div className="iv-grid iv-grid-cols-12">
              <div className="xl:iv-col-span-10 iv-col-span-12 xl:iv-col-start-2">
                <div className="iv-flex">
                  <a
                    href="https://invideo.io/ai/"
                    className="iv-align-middle iv-self-center"
                  >
                    <picture>
                      <source
                        height="36"
                        width="116"
                        srcSet="https://web-assets.invideo.io/common/prod/logos/invideo-ai-light.svg"
                        media="(min-width: 1480px)"
                      />
                      <img
                        height="32"
                        width="103.11"
                        alt="invideo logo"
                        src="https://web-assets.invideo.io/common/prod/logos/invideo-ai-light.svg"
                      />
                    </picture>
                  </a>
                  <div className="iv-flex-grow iv-relative iv-z-10">
                    <div className="iv-pt-[12px] iv-flex xl:iv-pl-4 lg:iv-pl-4 md:iv-pl-[14px]">
                      <span className="iv-header-link iv-text-hot-pink iv-header-link iv-cursor-pointer iv-pl-30 md:iv-pl-15 md:iv-pr-[11px] iv-pr-2 iv-pt-5 md:iv-pt-10 iv-pb-[18px] md:iv-pb-[24px] iv-text-body-xl md:iv-text-body-m iv-text-grey-50 dark:iv-text-grey-20 iv-font-semibold">
                        invideo AI
                        <img
                          src="https://web-assets.invideo.io/common/prod/header-icons/angle-bottom-v1.svg"
                          alt="angle bottom"
                          height="8"
                          width="8"
                          className="iv-inline-block iv-ml-8"
                        />
                      </span>
                      <span className="iv-header-link iv-text-grey-50 iv-header-link iv-cursor-pointer iv-pl-30 md:iv-pl-15 md:iv-pr-[11px] iv-pr-2 iv-pt-5 md:iv-pt-10 iv-pb-[18px] md:iv-pb-[24px] iv-text-body-xl md:iv-text-body-m iv-text-grey-50 dark:iv-text-grey-20 iv-font-semibold">
                        invideo Studio
                        <img
                          src="https://web-assets.invideo.io/common/prod/header-icons/angle-bottom-v1.svg"
                          alt="angle bottom"
                          height="8"
                          width="8"
                          className="iv-inline-block iv-ml-8"
                        />
                      </span>
                      <span className="iv-header-link iv-text-grey-50 iv-header-link iv-cursor-pointer iv-pl-30 md:iv-pl-15 md:iv-pr-[11px] iv-pr-2 iv-pt-5 md:iv-pt-10 iv-pb-[18px] md:iv-pb-[24px] iv-text-body-xl md:iv-text-body-m iv-text-grey-50 dark:iv-text-grey-20 iv-font-semibold">
                        Help
                        <img
                          src="https://web-assets.invideo.io/common/prod/header-icons/angle-bottom-v1.svg"
                          alt="angle bottom"
                          height="8"
                          width="8"
                          className="iv-inline-block iv-ml-8"
                        />
                      </span>
                      <a
                        href="https://discord.gg/invideo-ai"
                        className="iv-pl-30 iv-pr-2 iv-pb-[18px] iv-pt-5 md:iv-pt-10 iv-text-body-xl md:iv-text-body-m iv-text-grey-50 dark:iv-text-grey-20 iv-font-semibold iv-cursor-pointer"
                      >
                        Community
                      </a>
                      <a
                        href="https://invideo.io/pricing/"
                        className="iv-pl-30 iv-pr-2 iv-pb-[18px] iv-pt-5 md:iv-pt-10 iv-text-body-xl md:iv-text-body-m iv-text-grey-50 dark:iv-text-grey-20 iv-font-semibold iv-cursor-pointer"
                      >
                        Pricing
                      </a>
                      <div className="iv-flex-grow"></div>
                      <div className="xl:iv-pt-2 lg:iv-pt-2 md:iv-pt-5">
                        <button
                          className="iv-inline-block iv-text-body-xl md:iv-text-body-m iv-text-black-50 dark:iv-text-grey-30 iv-font-semibold iv-cursor-pointer"
                          type="button"
                        >
                          Login
                        </button>
                        <button
                          className="iv-button iv-transition iv-duration-150 iv-ease-in iv-inline-flex iv-justify-center iv-items-center iv-cursor-pointer iv-rounded-3xl iv-border-2 iv-border-blue dark:iv-border-blue iv-ml-[33px] md:iv-ml-[28px] iv-px-[13px] iv-h-28 iv-text-body-xl md:iv-text-body-m hover:iv-text-grey-0 dark:hover:iv-text-grey-0 hover:iv-bg-blue dark:hover:iv-bg-blue iv-font-semibold iv-leading-none iv-text-blue dark:iv-text-light-blue"
                          type="button"
                        >
                          Sign up
                        </button>
                      </div>
                      <div className="iv-header-dropdown">
                        <div
                          className="iv-drop-down-box-shadow iv-absolute iv-rounded-[10px] iv-bg-grey-0 iv-z-20 dark:iv-bg-grey-85 iv-transition-all iv-duration-300 iv-p-30 iv-top-[44px]"
                          style={{ left: "14px" }}
                        >
                          {/* Dropdown content */}
                          <div className="xl:iv-inline-block lg:iv-inline-block iv-align-top md:iv-mb-30 iv-mr-50 iv-w-[170px]">
                            <div className="iv-mb-30">
                              <span className="iv-block iv-text-body-xl iv-m-body-xl iv-font-medium iv-font-semibold iv-text-grey-85 dark:iv-text-grey-15">
                                invideo AI
                              </span>
                            </div>
                            <div className="xl:iv-pt-2 lg:iv-pt-2 md:iv-pt-5 iv-mb-25">
                              <button
                                className="iv-button iv-transition iv-duration-150 iv-ease-in iv-inline-flex iv-justify-center iv-items-center iv-cursor-pointer iv-rounded-3xl iv-border-2 iv-border-blue dark:iv-border-blue iv-px-[10px] iv-h-28 iv-text-body-m hover:iv-text-grey-0 dark:hover:iv-text-grey-0 hover:iv-bg-blue-strong dark:hover:iv-bg-blue-strong iv-font-semibold iv-leading-none iv-mr-8 iv-mb-5 iv-text-blue dark:iv-text-light-blue"
                                type="button"
                              >
                                AI login
                              </button>
                              <button
                                className="iv-button iv-transition iv-duration-150 iv-ease-in iv-inline-flex iv-justify-center iv-items-center iv-cursor-pointer iv-rounded-3xl iv-border-2 iv-border-blue dark:iv-border-blue iv-px-[10px] iv-h-28 iv-text-body-m iv-text-grey-0 iv-bg-blue dark:hover:iv-bg-blue-strong hover:iv-bg-blue-strong iv-font-semibold iv-leading-none iv-text-blue dark:iv-text-light-blue"
                                type="button"
                              >
                                AI sign up
                              </button>
                            </div>
                            <div className="iv-block iv-w-[155px]">
                              <div className="iv-pb-25">
                                <a
                                  href="https://invideo.io/make/ai-video-generator/"
                                  className="iv-block iv-text-body-xl iv-m-body-xl iv-font-medium iv-text-grey-50 dark:iv-text-grey-30 dark:hover:iv-text-grey-20 hover:iv-text-black-85"
                                  target="_self"
                                  rel="noreferrer noopener"
                                >
                                  AI Video Generator
                                </a>
                              </div>
                            </div>
                            <div className="iv-block iv-w-[155px]">
                              <div className="iv-pb-25">
                                <a
                                  href="https://invideo.io/make/ai-video-editor/"
                                  className="iv-block iv-text-body-xl iv-m-body-xl iv-font-medium iv-text-grey-50 dark:iv-text-grey-30 dark:hover:iv-text-grey-20 hover:iv-text-black-85"
                                  target="_self"
                                  rel="noreferrer noopener"
                                >
                                  AI Video Editor
                                </a>
                              </div>
                            </div>
                            <div className="iv-block iv-w-[155px]">
                              <div className="iv-pb-25">
                                <a
                                  href="https://invideo.io/make/ai-faceless-video-generator/"
                                  className="iv-block iv-text-body-xl iv-m-body-xl iv-font-medium iv-text-grey-50                                   dark:iv-text-grey-30 dark:hover:iv-text-grey-20 hover:iv-text-black-85"
                                  target="_self"
                                  rel="noreferrer noopener"
                                >
                                  Faceless Video Generator
                                </a>
                              </div>
                            </div>
                            <div className="iv-block iv-w-[155px]">
                              <div className="iv-pb-25">
                                <a
                                  href="https://invideo.io/make/add-text-to-video-online/"
                                  className="iv-block iv-text-body-xl iv-m-body-xl iv-font-medium iv-text-grey-50 dark:iv-text-grey-30 dark:hover:iv-text-grey-20 hover:iv-text-black-85"
                                  target="_self"
                                  rel="noreferrer noopener"
                                >
                                  Text to Video
                                </a>
                              </div>
                            </div>
                            <div className="iv-block iv-w-[155px]">
                              <div className="iv-pb-25">
                                <a
                                  href="https://invideo.io/make/ai-youtube-shorts-generator/"
                                  className="iv-block iv-text-body-xl iv-m-body-xl iv-font-medium iv-text-grey-50 dark:iv-text-grey-30 dark:hover:iv-text-grey-20 hover:iv-text-black-85"
                                  target="_self"
                                  rel="noreferrer noopener"
                                >
                                  Youtube Shorts Generator
                                </a>
                              </div>
                            </div>
                            <div className="iv-block iv-w-[155px]">
                              <div className="iv-pb-25">
                                <a
                                  href="https://invideo.io/make/ai-subtitle-generator/"
                                  className="iv-block iv-text-body-xl iv-m-body-xl iv-font-medium iv-text-grey-50 dark:iv-text-grey-30 dark:hover:iv-text-grey-20 hover:iv-text-black-85"
                                  target="_self"
                                  rel="noreferrer noopener"
                                >
                                  AI Subtitle Generator
                                </a>
                              </div>
                            </div>
                            <div className="iv-block iv-w-[155px]">
                              <div className="iv-pb-25">
                                <a
                                  href="https://invideo.io/make/slideshow-maker/"
                                  className="iv-block iv-text-body-xl iv-m-body-xl iv-font-medium iv-text-grey-50 dark:iv-text-grey-30 dark:hover:iv-text-grey-20 hover:iv-text-black-85"
                                  target="_self"
                                  rel="noreferrer noopener"
                                >
                                  Slideshow Maker
                                </a>
                              </div>
                            </div>
                            <div className="iv-block iv-w-[155px]">
                              <div className="iv-pb-25">
                                <a
                                  href="https://invideo.io/make/youtube-video-editor/"
                                  className="iv-block iv-text-body-xl iv-m-body-xl iv-font-medium iv-text-grey-50 dark:iv-text-grey-30 dark:hover:iv-text-grey-20 hover:iv-text-black-85"
                                  target="_self"
                                  rel="noreferrer noopener"
                                >
                                  Youtube Video Generator
                                </a>
                              </div>
                            </div>
                            <div className="iv-block iv-w-[155px]">
                              <div className="iv-pb-25">
                                <a
                                  href="https://invideo.io/make/ai-news-generator/"
                                  className="iv-block iv-text-body-xl iv-m-body-xl iv-font-medium iv-text-grey-50 dark:iv-text-grey-30 dark:hover:iv-text-grey-20 hover:iv-text-black-85"
                                  target="_self"
                                  rel="noreferrer noopener"
                                >
                                  AI News Generator
                                </a>
                              </div>
                            </div>
                            <div className="iv-block iv-w-[155px]">
                              <div className="iv-pb-25">
                                <a
                                  href="https://invideo.io/tools/ai-voiceover-generator/"
                                  className="iv-block iv-text-body-xl iv-m-body-xl iv-font-medium iv-text-grey-50 dark:iv-text-grey-30 dark:hover:iv-text-grey-20 hover:iv-text-black-85"
                                  target="_self"
                                  rel="noreferrer noopener"
                                >
                                  AI Voiceover Generator
                                </a>
                              </div>
                            </div>
                            <div className="iv-block iv-w-[155px]">
                              <div className="iv-pb-25">
                                <a
                                  href="https://invideo.io/make/make-money-online/"
                                  className="iv-block iv-text-body-xl iv-m-body-xl iv-font-medium iv-text-grey-50 dark:iv-text-grey-30 dark:hover:iv-text-grey-20 hover:iv-text-black-85"
                                  target="_self"
                                  rel="noreferrer noopener"
                                >
                                  Make Money Online
                                </a>
                              </div>
                            </div>
                            <div className="iv-block iv-w-[155px]">
                              <div>
                                <a
                                  href="https://invideo.io/tools/script-generator/"
                                  className="iv-block iv-text-body-xl iv-m-body-xl iv-font-medium iv-text-grey-50 dark:iv-text-grey-30 dark:hover:iv-text-grey-20 hover:iv-text-black-85"
                                  target="_self"
                                  rel="noreferrer noopener"
                                >
                                  AI Script Generator
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
