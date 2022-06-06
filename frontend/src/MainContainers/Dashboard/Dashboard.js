import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Title } from "../../components";
import {
  CarbonBlogIcon,
  NewsIcon,
  TaskIcon,
  TrophyIcon,
} from "../../DevHubIcons";
import { Header } from "../components";
import FeatureCard from "../components/FeatureCard/FeatureCard";
import DashboardSideNavigation from "../components/Navigation/DashboardSideNavigation/DashboardSideNavigation";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const { isAuthenticated, currentUser } = useSelector((state) => state.user);

  const [isNavActive, setIsNavActive] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/auth", { replace: true });
    }
  });

  return (
    <div className={`dashboard ${isNavActive ? "active" : ""}`}>
      <Title title="Dashboard" />

      <DashboardSideNavigation setIsNavActive={setIsNavActive} />
      <DashboardHeader
        isNavActive={isNavActive}
        displayName={currentUser?.displayName || "User"}
      />

      <div
        className={`dashboard__main__container  ${isNavActive ? "active" : ""}`}
      >
        <div className="dashboard__left__container">
          <div>
            <h2
              style={{
                color: "#008bb7",
              }}
            >
              Features
            </h2>
            <div>
              <FeatureCard title={"Create Task"} Icon={TaskIcon} />
              <FeatureCard title={"Read Blogs"} Icon={CarbonBlogIcon} />
              <FeatureCard title={"Join Contest"} Icon={TrophyIcon} />
              <FeatureCard title={"Read latest news"} Icon={NewsIcon} />
            </div>
          </div>
        </div>
        <div className="dashboard__right__container">
          <div>
            <h2
              style={{
                color: "#008bb7",
              }}
            >
              Trending Blogs
            </h2>
            <div className="latestNewsAndBlogs__container">
              <p>CSS tricks by John Doe</p>
              <p>Design use cases by John Doe</p>
              <p>Intro to JS by John Doe</p>
            </div>
          </div>

          <div>
            <h2
              style={{
                color: "#008bb7",
              }}
            >
              Latest News
            </h2>
            <div className="latestNewsAndBlogs__container">
              <p>CSS tricks by John Doe</p>
              <p>Design use cases by John Doe</p>
              <p>Intro to JS by John Doe</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const DashboardHeader = ({ isNavActive, displayName }) => {
  return (
    <div className={`dashboard__header ${isNavActive}  ? "active" : ""`}>
      <div className="dashboard__header__container">
        <Header displayName={displayName} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <h2
          style={{
            fontSize: "1.2rem",
          }}
        >
          Dashboard
        </h2>
        <h2
          style={{
            fontSize: "1.2rem",
          }}
        >
          Hello!{" "}
          <span
            style={{
              color: "#008bb7",
            }}
          >
            {displayName}
          </span>
        </h2>
      </div>
    </div>
  );
};

export default Dashboard;
