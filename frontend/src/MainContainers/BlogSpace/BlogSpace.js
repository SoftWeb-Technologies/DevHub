import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { DashboardSideNavigation } from "../components";
import { Title } from "../../components";
import "./BlogSpace.css";
import UserHeader from "../components/UserHeader/UserHeader";

const BlogSpace = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, currentUser } = useSelector((state) => state.user);
  const [isNavActive, setIsNavActive] = useState(false);

  const { newsAppleData } = useSelector((state) => state.newsAppleApi);

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
      </div>
    </div>
  );
};

const FilterHeader = () => {
  const filterList = ["Topic-1", "Topic-2", "Topic-3", "Topic-4"];

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

export default BlogSpace;
