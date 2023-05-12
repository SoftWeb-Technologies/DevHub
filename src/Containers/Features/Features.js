import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Feature1,
  Feature2,
  Feature3,
  Feature4,
  Feature5,
} from "../../constants/Images";
import { Button, Navbar, SideNavigation, Title } from "../../components";
import { DownArrowIcon } from "../../DevHubIcons";
import "./Features.css";

export default function Features() {
  const [isNavActive, setIsNavActive] = useState(false);
  const navigate = useNavigate();

  const { currentUser, isAuthenticated } = useSelector((state) => state.user);
  return (
    <div id="features">
      <Title title="Features" />
      <SideNavigation setIsNavActive={setIsNavActive} />
      {isAuthenticated ? (
        <Button
          label="Dashboard"
          onClick={() => navigate("/dashboard")}
          customStyle={{
            left: "85%",
            top: "10px",
            background: "#008bb7",
            color: "#fff",
          }}
        />
      ) : (
        <Button
          label="Sign Up"
          onClick={() => navigate("/auth")}
          customStyle={{
            left: "85%",
            top: "10px",
            background: "#008bb7",
            color: "#fff",
          }}
        />
      )}

      <div className="feature__container">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="feature__heading__container">
            <div className="feature__heading__1">Reach goals that matter</div>
            <h1>One product, Many uses</h1>
            <p>
              Discover the powerful and innovative features that make DevHub the
              ultimate platform for developers, entrepreneurs, and businesses
              alike.
            </p>
          </div>

          {/* Items */}
          <div className="feature__item__container">
            {/* 1st item */}
            <FeatureCard
              featureImg={Feature1}
              title1={"More speed. Less spend"}
              title2={" Discover the world of blogs"}
              description={
                "Discover the world of blogs with our platform, where you can explore a vast collection of articles on various topics that matter to you."
              }
              checkListData={[
                "Discover the latest insights and trends in the blogosphere.",
                "Follow your interests and passions with DevHub's personalized blog recommendations.",
                "Specially curated by the developers, to the developer.",
              ]}
            />
            <FeatureCard
              featureImg={Feature2}
              order={1}
              title1={"Be productive, stay organized"}
              title2={" Stay organized & productive with DevHub's Task List"}
              description={
                "Stay on top of your to-do list and accomplish your goals efficiently with our intuitive and easy-to-use task list, designed to help you prioritize and manage your tasks effectively."
              }
              checkListData={[
                "Never forget a task again: keep everything organized with our task list.",
                "Stay on track and achieve your goals.",
                "Prioritize like a pro",
              ]}
            />
            <FeatureCard
              featureImg={Feature3}
              title1={"Explore the latest in tech, with Tech Hunt"}
              title2={" Tech Hunt: Your guide to the world of technology."}
              description={
                " Fuel your curiosity and stay ahead of the curve with Tech Hunt by DevHub. Discover the most exciting developments in technology before anyone else."
              }
              checkListData={[
                "Unleash your curiosity and explore the world of technology.",
                "Get ahead of the game by staying up-to-date.",
                "Tech hunting made easy.",
              ]}
            />

            <FeatureCard
              order={1}
              featureImg={Feature4}
              title1={"Compete, Win, Repeat"}
              title2={
                "Compete to Win: Join the Exciting World of Contests with DevHub"
              }
              description={
                "Discover the thrill of the competition with DevHub's Contests. Our platform offers a range of challenges and prizes to motivate and inspire you, no matter what your skill level or area of interest."
              }
              checkListData={[
                "Stand out from the crowd and show off your talents in our Contests section.",
                "Compete, create, and conquer in exciting contests.",
                "Join the race to win big prizes.",
              ]}
            />

            <FeatureCard
              featureImg={Feature5}
              title1={"Unleashing the power of DevHub's AI"}
              title2={"The smart way to stay ahead."}
              description={
                "Revolutionize your productivity with Devhub's AI: The ultimate solution for automating your development workflow and summarize anything in seconds."
              }
              checkListData={[
                "Unlock the power of AI in your learning game.",
                "Transform your coding experience with DevHub's AI-powered platform.",
                "Say goodbye to manual learning.",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  order,
  title1,
  title2,
  description,
  checkListData,
  featureImg,
}) => {
  return (
    <div className="feature__item">
      {/* Image */}
      <div className="feature__item__image__container" style={{ order: order }}>
        <img src={featureImg} alt="Feature1" />
      </div>

      {/* Content */}
      <div className="feature__item__content__container" data-aos="fade-right">
        <div className="feature__item__content">
          <div className="feature__item__title">{title1}</div>
          <h2>{title2}</h2>
          <p>{description}</p>
          <ul>
            {checkListData.map((item, _) => {
              return (
                <li>
                  <svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>{item}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
