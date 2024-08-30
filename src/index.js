import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import RatingsSection from "./components/RatingsSection";
import WorkflowSection from "./components/WorkflowSection";
import Testimonial from "./components/Testimonials";
import FeaturesSection from "./components/FeaturesSection";
import PricingSection from "./components/PricingSection";
import CompareFeaturesButton from "./components/CompareFeaturesButton";
import GuideSection from "./components/GuideSection";
import FaqSection from "./components/FaqSection";
import VideoSection from "./components/VideoSection";
import DiscoverMore from "./components/DiscoverMore";
import StartCreating from "./components/StartCreating";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <HeroSection />
    <RatingsSection />
    <WorkflowSection />
    <Testimonial />
    <FeaturesSection />
    <PricingSection />
    <CompareFeaturesButton />
    <GuideSection />
    <FaqSection />
    <VideoSection />
    <DiscoverMore />
    <StartCreating />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
