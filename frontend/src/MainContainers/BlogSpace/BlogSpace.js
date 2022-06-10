import React, { useEffect, useState } from "react";
import {
  // useDispatch,
  useSelector,
} from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { DashboardSideNavigation } from "../components";
import { Title } from "../../components";
import "./BlogSpace.css";
import UserHeader from "../components/UserHeader/UserHeader";

const BlogSpace = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const { isAuthenticated, currentUser } = useSelector((state) => state.user);
  const { githubRepoData } = useSelector((state) => state.blogGithubReposApi);
  const { devToArticlesData } = useSelector(
    (state) => state.blogDevToArticlesApi
  );

  const [isNavActive, setIsNavActive] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/auth", { replace: true });
    }
  }, [isAuthenticated, navigate]);
  return (
    <div>
      <Title title="Blog Space" />

      <DashboardSideNavigation setIsNavActive={setIsNavActive} />
      <div
        id="blogSpace"
        className={`blogSpace ${isNavActive}  ? "active" : ""`}
      >
        <UserHeader displayName={currentUser.displayName} />
        <FilterHeader />

        <div className="blogSpace__main__container">
          <div>
            {devToArticlesData.map((item, index) => {
              return (
                <BlogCard
                  title={item?.title}
                  description={item?.description}
                  date={item?.published_at}
                />
              );
            })}

            {githubRepoData.slice(0, 6).map((item, index) => {
              return (
                <BlogCard title={item?.name} description={item?.description} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const FilterHeader = () => {
  const filterList = ["Web Dev", "Python", "Frontend", "Backend"];

  const [activeFilter, setActiveFilter] = useState("Topic-1");
  return (
    <div className="blogSpace__filter__header">
      {filterList.map((item, index) => {
        return (
          <NavLink
            key={index}
            to={`#`}
            onClick={() => setActiveFilter(item)}
            style={{
              color: activeFilter === item ? "#fff" : "gray",
              background: activeFilter === item ? "#008bb7" : "",
              padding: "0.3rem 0.5rem",
              borderRadius: "50px",
              fontSize: "0.89rem",
              transition: "all 0.3s ease-in-out",
            }}
          >
            {item}
          </NavLink>
        );
      })}

      <p
        style={{
          color: "red",
          cursor: "pointer",
          fontSize: "0.89rem",
        }}
      >
        Clear All
      </p>
    </div>
  );
};

const BlogCard = ({ title, description, date }) => {
  return (
    <div className="blogSpace__card">
      <div>
        <h3
          style={{
            opacity: "0.7",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: "0.89rem",
            color: "gray",
            margin: "1rem 0",
          }}
        >
          {description?.slice(0, 100)}
        </p>

        <p
          style={{
            fontSize: "0.89rem",
            color: "gray",
            marginTop: "1rem",
          }}
        >
          {date?.split("T")[0]}
        </p>
      </div>
    </div>
  );
};

export default BlogSpace;
