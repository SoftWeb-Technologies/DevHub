import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Title } from "../../components";
import { ArrowInCircle } from "../../DevHubIcons";
import { fetchContestData } from "../../redux/actions/apiActions";
import { DashboardSideNavigation, Header } from "../components";
import UserHeader from "../components/UserHeader/UserHeader";
import "./Contest.css";

const Contest = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { contestData } = useSelector((state) => state.contestApi);

  const [isNavActive, setIsNavActive] = useState(false);
  const [isPopUpBoxActive, setIsPopUpBoxActive] = useState(false);
  const [popUpData, setPopUpData] = useState(null);
  const [isAddedToLib, setIsAddedToLib] = useState(false);

  useEffect(() => {
    dispatch(fetchContestData());
  }, [dispatch]);

  return (
    <div>
      <Title title="Contest" />

      <DashboardSideNavigation setIsNavActive={setIsNavActive} />
      <div className="contest__main__container">
        <div className="header__main__container">
          <div className="contest__header__container">
            <Header displayName={currentUser?.displayName} />
          </div>
          <div className="user__name__container">
            <h2 style={{ color: "#fff", marginTop: "0.7rem" }}>
              Hello! {currentUser?.displayName}
            </h2>
          </div>
        </div>

        <div
          className={`contest__body__container ${isNavActive ? "active" : ""}`}
        >
          <div
            style={{
              display: "flex",
              alignContent: "center",
              gap: "0.5rem",
            }}
          >
            <h2>Current Contest</h2>
            <div style={{ cursor: "pointer" }}>
              <ArrowInCircle />
            </div>
          </div>

          <div className="contest__cards__container">
            {contestData.slice(0, 6).map((contest, index) => (
              <ContestCard
                key={index}
                title={contest.site}
                description={contest.name}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ContestCard = (props) => {
  return (
    <div className="contest__card__container">
      <div>
        <h3
          style={{
            color: "#008bb7",
          }}
        >
          {props.title}
        </h3>
        <p
          style={{
            color: "#000",
            fontSize: "0.85rem",
            marginTop: "0.5rem",
            opacity: "0.7",
          }}
        >
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default Contest;
