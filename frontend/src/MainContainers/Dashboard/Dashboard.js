import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
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
import { useDispatch } from "react-redux";
import {
  fetchDevToArticlesData,
  fetchGithubReposData,
  fetchNewsAppleData,
  fetchNewsTeslaData,
} from "../../redux/actions/apiActions";
import AutoLatestNews from "../components/autoSlider/autoSlider";

const Dashboard = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [isNavActive, setIsNavActive] = useState(false);

  const { newsAppleData } = useSelector((state) => state.newsAppleApi);
  const { githubRepoData } = useSelector((state) => state.blogGithubReposApi);
  const { devToArticlesData } = useSelector(
    (state) => state.blogDevToArticlesApi
  );
  const { newsTeslaData } = useSelector((state) => state.newsTeslaApi);

  const [randomNumber, setRandomNumber] = useState(0);

  useEffect(() => {
    dispatch(fetchNewsAppleData());
    dispatch(fetchGithubReposData());
    dispatch(fetchNewsTeslaData());
    dispatch(fetchDevToArticlesData());

    setRandomNumber(Math.floor(Math.random() * 5));
  }, [dispatch]);

  return (
    <div className={`dashboard ${isNavActive ? "active" : ""}`}>
      <Title title="Dashboard" />

      <DashboardSideNavigation setIsNavActive={setIsNavActive} />
      <DashboardHeader
        isNavActive={isNavActive}
        displayName={
          currentUser?.displayName ||
          currentUser?.user?.name ||
          currentUser?.email ||
          "User"
        }
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
              What would you like to do?
            </h2>
            <div className="feature__card__container">
              <div>
                <FeatureCard
                  title={"Create Task"}
                  Icon={TaskIcon}
                  path="/createtask"
                />
                <FeatureCard
                  title={"Read Blogs"}
                  Icon={CarbonBlogIcon}
                  path="/blogspace"
                />
              </div>
              <div>
                <FeatureCard
                  title={"Join Contest"}
                  Icon={TrophyIcon}
                  path="/contest"
                />
                <FeatureCard
                  title={"Read latest news"}
                  Icon={NewsIcon}
                  path="/techhunt"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard__right__container">
          <div
            style={{
              marginTop: "1.5rem",
            }}
          >
            <h2
              style={{
                color: "#0E80D3",
              }}
            >
              Trending Blogs
            </h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <CardData
                title={githubRepoData[randomNumber]?.name}
                description={githubRepoData[randomNumber]?.description}
                url={githubRepoData[randomNumber]?.url}
              />

              <CardData
                title={devToArticlesData[randomNumber]?.title}
                description={devToArticlesData[randomNumber]?.description}
                url={devToArticlesData[randomNumber]?.url}
              />
            </div>
          </div>

          <div
            style={{
              marginTop: "1.5rem",
            }}
          >
            <h2
              style={{
                color: "#0E80D3",
              }}
            >
              Latest News
            </h2>
            <div>
              <div>{/* Keep lastest new images */}</div>
              <div>
                <CardData
                  title={newsAppleData[randomNumber]?.title}
                  description={newsAppleData[randomNumber]?.description}
                  url={newsAppleData[randomNumber]?.url}
                />
              </div>

              <AutoLatestNews />
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
            color: "#fff",
          }}
        >
          Dashboard
        </h2>
        <h2
          className="hide-on-mobile"
          style={{
            fontSize: "1.2rem",
            color: "#fff",
          }}
        >
          Hello!{" "}
          <span
            style={{
              color: "#0E80D3",
            }}
          >
            {displayName}
          </span>
        </h2>
      </div>
    </div>
  );
};

const CardData = ({ title, description, url }) => {
  return (
    <div
      style={{
        width: "72%",
        minWidth: "570px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background:
          "linear-gradient(90deg, var(--secondary-clr), var(--primary-clr))",
        borderRadius: 10,
        padding: "1rem 2rem",
      }}
    >
      <div>
        <p
          style={{
            textDecoration: "none",
            textTransform: "Capitalize",
          }}
        >
          <b>{title}</b>
        </p>
        <span
          style={{
            color: "#000",
            opacity: 0.7,
          }}
        >
          {description?.slice(0, 100) + "..."}
        </span>
        <p
          style={{
            marginTop: "10px",
            color: "#0E80D3",
          }}
        >
          <a href={url} target="_blank" rel="noreferrer">
            Continue Reading
          </a>
        </p>
      </div>
      <div
        style={{
          width: "60px",
          height: "60px",
          background: "white",
        }}
      >
        {/* place image here */}
      </div>
    </div>
  );
};

export default Dashboard;
