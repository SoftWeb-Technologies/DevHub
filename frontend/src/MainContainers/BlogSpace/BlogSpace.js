import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { DashboardSideNavigation } from "../components";
import { Button, Title } from "../../components";
import "./BlogSpace.css";
import UserHeader from "../components/UserHeader/UserHeader";
import {
  BookmarkIcon,
  MenuVerticalIcon,
  RightArrowIcon,
} from "../../DevHubIcons";
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

  const [filteredData, setFilteredData] = useState(null);
  const [filter, setFilter] = useState("career");

  useEffect(() => {
    dispatch(fetchDevToArticlesData());
  }, [dispatch]);

  useEffect(() => {
    let data = devToArticlesData.filter((item) => {
      return (
        item.tags.includes(filter.toLowerCase()) ||
        item.title.includes(filter.toLowerCase()) ||
        item.description.includes(filter.toLowerCase()) ||
        item.slug.includes(filter.toLowerCase()) ||
        item.published_at.includes(filter.toLowerCase())
      );
    });

    setFilteredData(data);
  }, [devToArticlesData, filter]);

  const addItemsToLib = () => {
    dispatch(addItemsToLibrary(popUpData.id, popUpData, isAddedToLib));
  };

  console.log(filteredData);

  return (
    <div>
      <Title title="Blog Space" />

      <DashboardSideNavigation setIsNavActive={setIsNavActive} />
      <div id="blogSpace">
        <UserHeader displayName={currentUser?.displayName} />
        <FilterHeader setFilter={setFilter} />
        <MoreFilterOption setFilter={setFilter} />

        <div
          className={`blogSpace__main__container  ${
            isNavActive ? "active" : ""
          }`}
        >
          <div>
            {filteredData?.length !== 0 ? (
              filteredData?.map((item, index) => {
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
              })
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "56vh",
                }}
              >
                <h2
                  style={{
                    color: "gray",
                    fontSize: "1.5rem",
                    opacity: "0.5",
                  }}
                >
                  Articles not found
                </h2>
              </div>
            )}
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

const FilterHeader = ({ setFilter }) => {
  const filterList = ["Discuss", "Python", "Javascript", "Node", "Programming"];

  const [activeFilter, setActiveFilter] = useState("WebDev");

  return (
    <div className="blogSpace__filter__header">
      {filterList.map((item, index) => {
        return (
          <NavLink
            key={index}
            to={`#`}
            onClick={() => {
              setActiveFilter(item);
              setFilter(item);
            }}
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
        onClick={() => {
          setFilter("career");
          setActiveFilter("Career");
        }}
      >
        Clear All
      </p>
    </div>
  );
};

const MoreFilterOption = ({ setFilter }) => {
  const [isFilterModelActive, setIsFilterModelActive] = useState(false);

  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="moreFilterOption__main__container">
      <div>
        <p
          style={{
            color: "#008bb7",
            fontWeight: "bold",
            cursor: "pointer",
            display: "inline-block",
          }}
          onClick={() => {
            setIsFilterModelActive(!isFilterModelActive);
          }}
        >
          Add more filters
        </p>
      </div>

      <div
        onClick={() => setIsFilterModelActive(false)}
        className={`addMoreFilter__main__container ${
          isFilterModelActive ? "active" : ""
        }`}
      ></div>
      <div
        className={`addMoreFilter__model__container ${
          isFilterModelActive ? "active" : ""
        }`}
      >
        <input
          type={"text"}
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
            if (searchValue.length > 0 && searchValue !== "") {
              setFilter(e.target.value);
            }
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && searchValue.length > 0) {
              setFilter(searchValue);
            }
          }}
          placeholder="Search articles"
        />

        <div className="addMoreFilter__search__items__container">
          <p
            className={`${isFilterModelActive ? "active" : ""}`}
            style={{
              color: "gray",
              fontWeight: "500",
              fontSize: "1.05rem",
              padding: "0.5rem 1rem",
            }}
          >
            Select an filter or search one
          </p>

          <div className={`${isFilterModelActive ? "active" : ""}`}>
            {["beginners", "WebDev", "Career", "Productivity"].map(
              (item, index) => (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                    padding: "0 1rem",
                  }}
                >
                  <MenuVerticalIcon />
                  <p
                    style={{
                      width: "110px",
                      color: "#fff",
                      background: "#008bb7",
                      display: "flex",
                      flexDirection: "column",
                      padding: "0.3rem 0.7rem",
                      margin: "0.3rem 0rem",
                      borderRadius: "10px",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setFilter(item);
                      setIsFilterModelActive(false);
                    }}
                    key={index}
                  >
                    {item}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
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
