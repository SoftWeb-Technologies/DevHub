import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { DashboardSideNavigation } from "../components";
import { Button, Title } from "../../components";
import "./BlogSpace.css";
import UserHeader from "../components/UserHeader/UserHeader";
import { BookmarkIcon, RightArrowIcon } from "../../DevHubIcons";
import { addItemsToLibrary } from "../../redux/actions/libActions";
import { fetchDevToArticlesData } from "../../redux/actions/apiActions";

const BlogSpace = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { devToArticlesData } = useSelector(
    (state) => state.blogDevToArticlesApi
  );

  const [isNavActive, setIsNavActive] = useState(false);
  const [isPopUpBoxActive, setIsPopUpBoxActive] = useState(false);
  const [popUpData, setPopUpData] = useState(null);
  const [isAddedToLib, setIsAddedToLib] = useState(false);

  useEffect(() => {
    dispatch(fetchDevToArticlesData());
  }, [dispatch]);

  const addItemsToLib = () => {
    dispatch(addItemsToLibrary(popUpData.id, popUpData, isAddedToLib));
  };

  return (
    <div>
      <Title title="Blog Space" />

      <DashboardSideNavigation setIsNavActive={setIsNavActive} />
      <div id="blogSpace">
        <UserHeader displayName={currentUser?.displayName} />
        <FilterHeader />

        <div
          className={`blogSpace__main__container  ${
            isNavActive ? "active" : ""
          }`}
        >
          <div>
            {devToArticlesData.slice(0, 8).map((item, index) => {
              return (
                <BlogCard
                  key={index}
                  title={item?.title}
                  description={item?.description}
                  date={item?.published_at}
                  onClick={() => {
                    setIsPopUpBoxActive(true);
                    setPopUpData(item);
                  }}
                />
              );
            })}
          </div>
        </div>

        <div
          className={`blogSpace__popup__container ${
            isPopUpBoxActive ? "active" : ""
          }`}
        >
          <div
            style={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
              cursor: "pointer",
            }}
          >
            <div
              style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}
            >
              <div
                style={{
                  marginTop: "-5.5px",
                }}
              >
                <BookmarkIcon
                  onClick={() => {
                    setIsAddedToLib(!isAddedToLib);
                    addItemsToLib();
                  }}
                  fillColor={isAddedToLib ? "yellow" : "#fff"}
                />
              </div>
              <div onClick={() => setIsPopUpBoxActive(false)}>
                <div
                  style={{
                    width: "22px",
                    height: "2px",
                    background: "#fff",
                    transform: "rotate(45deg)  translate(2px,1px) ",
                  }}
                />
                <div
                  style={{
                    width: "22px",
                    height: "2px",
                    background: "#fff",
                    transform: "rotate(-45deg)",
                  }}
                />
              </div>
            </div>
          </div>

          <div className="popup__main__container">
            <div
              style={{
                width: "450px",
                height: "80vh",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <img
                src={popUpData?.social_image}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                alt="popup"
              />
            </div>

            <div className="popup__description">
              <h1
                style={{
                  color: "#F2F2F2",
                  marginBottom: "1rem",
                }}
              >
                {popUpData?.title}
              </h1>
              <p>{popUpData?.description}</p>

              <div style={{ marginTop: "1rem" }}>
                <Button
                  onClick={() => {
                    return window.open(popUpData?.url, "_blank");
                  }}
                  label={"Read more"}
                  renderIconRight={true}
                  Icon={RightArrowIcon}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FilterHeader = () => {
  const filterList = ["Web Dev", "Python", "Frontend", "Backend"];

  const [activeFilter, setActiveFilter] = useState("Web Dev");
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

const BlogCard = ({ title, description, date, onClick }) => {
  return (
    <div className="blogSpace__card" onClick={onClick}>
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
