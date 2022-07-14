import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Title } from "../../components";
import { EmptyCuateImg } from "../../constants/Images";
import { removeItemFromLibrary } from "../../redux/actions/libActions";
import { DashboardSideNavigation } from "../components";
import UserHeader from "../components/UserHeader/UserHeader";

import "./RemindersPage.css";

const RemindersPage = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { libItems } = useSelector((state) => state.lib);

  const [isNavActive, setIsNavActive] = useState(false);
  const [isPopUpBoxActive, setIsPopUpBoxActive] = useState(false);
  const [popUpData, setPopUpData] = useState(null);

  const removeItemFromLibrary = (id) => {
    dispatch(removeItemFromLibrary(id));
  };

  return (
    <div>
      <Title title="Reminders" />

      <DashboardSideNavigation setIsNavActive={setIsNavActive} />
      <div id="blogspace">
        <UserHeader displayName={currentUser?.displayName} />
        <div className="reminders__header">
          <h1>
            Your <span style={{ color: "#008bb7" }}>Reminders!</span>
          </h1>
        </div>

        {libItems.length > 0 ? (
          <div
            className={`reminders__main__container  ${
              isNavActive ? "active" : ""
            }`}
          >
            {/* <div>{libItems.slice(0, 5).map((item, index) => {})}</div> */}
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
              <img src={EmptyCuateImg} alt="no-reminders" />
            </div>
            <h1
              style={{
                fontSize: "1.5rem",
                color: "grey",
                opacity: "0.5",
              }}
            >
              You have no reminders
            </h1>
            <p>Add</p>
          </div>
        )}

        <div
          onClick={() => setIsPopUpBoxActive(false)}
          className={`popup__bg__main__container ${
            isPopUpBoxActive ? "active" : ""
          }`}
        />

        <div
          className={`TaskCard__popup__container ${
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

                {/* <div style={{ marginTop: "1rem" }}>
                  <Button
                    onClick={() => {
                      // return window.open(popUpData?.url, "_blank");
                    }}
                    label={"Read more"}
                    renderIconRight={true}
                    //Icon={}
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemindersPage;
