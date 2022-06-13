import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Title } from "../../components";
import { EmptyCuateImg } from "../../constants/Images";
import { BookmarkIcon, RightArrowIcon } from "../../DevHubIcons";
import { removeItemFromLibrary } from "../../redux/actions/libActions";
import { DashboardSideNavigation } from "../components";
import UserHeader from "../components/UserHeader/UserHeader";

import "./LibraryPage.css";

const LibraryPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, currentUser } = useSelector((state) => state.user);
  const { libItems } = useSelector((state) => state.lib);

  const [isNavActive, setIsNavActive] = useState(false);
  const [isPopUpBoxActive, setIsPopUpBoxActive] = useState(false);
  const [popUpData, setPopUpData] = useState(null);
  const [isAddedToLib, setIsAddedToLib] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/auth", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const removeItemFromLib = (id) => {
    dispatch(removeItemFromLibrary(id));
    console.log("removed => ", id);
  };

  return (
    <div>
      <Title title="Blog Space" />

      <DashboardSideNavigation setIsNavActive={setIsNavActive} />
      <div id="blogSpace">
        <UserHeader displayName={currentUser.displayName} />
        <div className="lib__header">
          <h1>
            Your <span style={{ color: "#008bb7" }}>Bookmarks!</span>
          </h1>
        </div>

        {libItems.length > 0 ? (
          <div
            className={`blogSpace__main__container  ${
              isNavActive ? "active" : ""
            }`}
          >
            <div>
              {libItems.slice(0, 5).map((item, index) => {
                return (
                  <BlogCard
                    key={index}
                    onClickDeleteItem={() => removeItemFromLib(item.id)}
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
        ) : (
          <div
            style={{
              height: "80vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                minWidth: "250px",
                opacity: "0.7",
                pointerEvents: "none",
              }}
            >
              <img src={EmptyCuateImg} alt="no-blogs" />
            </div>
            <h1
              style={{
                fontSize: "1.5rem",
                color: "blue",
                opacity: "0.5",
              }}
            >
              You have no bookmarks yet
            </h1>
            <p>Add </p>
          </div>
        )}

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
                    setIsAddedToLib(popUpData.bookmark);
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
                  color: "#ffff",
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

const BlogCard = ({ title, description, date, onClick, onClickDeleteItem }) => {
  return (
    <div className="blogSpace__card">
      <div
        onClick={onClickDeleteItem}
        style={{
          position: "absolute",
          top: "15px",
          right: "15px",
        }}
      >
        <div
          style={{
            width: "22px",
            height: "2px",
            background: "red",
            opacity: "0.6",
            transform: "rotate(45deg)  translate(2px,1px) ",
          }}
        />
        <div
          style={{
            width: "22px",
            height: "2px",
            background: "red",
            opacity: "0.6",
            transform: "rotate(-45deg)",
          }}
        />
      </div>
      <div onClick={onClick}>
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

export default LibraryPage;
