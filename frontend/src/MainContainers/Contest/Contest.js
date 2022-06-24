import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Title } from "../../components";
import { contestPosterData } from "../../constants/contestData";
import { Poster1, Poster2, Poster3 } from "../../constants/Images";
import { ArrowInCircle } from "../../DevHubIcons";
import { fetchContestData } from "../../redux/actions/apiActions";
import { DashboardSideNavigation, Header } from "../components";
import "./Contest.css";

const Contest = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { contestData } = useSelector((state) => state.contestApi);

  const [isNavActive, setIsNavActive] = useState(false);
  const [isPopUpBoxActive, setIsPopUpBoxActive] = useState(false);
  const [popUpData, setPopUpData] = useState({
    data: null,
    index: null,
  });

  const [filteredDate, setFilteredData] = useState(null);
  const [filter, setFilter] = useState("");
  console.log(filteredDate);

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
            <Header
              displayName={currentUser?.displayName}
              setFilter={setFilter}
            />
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
              <ArrowInCircle pushTo={`/contestslist`} />
            </div>
          </div>

          <div className="contest__cards__container">
            {contestData.slice(0, 6).map((contest, index) => (
              <ContestCard
                key={index}
                title={contest.site}
                description={contest.name}
                start_time={contest.start_time}
                end_time={contest.end_time}
                openPoster={() => {
                  setIsPopUpBoxActive(true);
                  setPopUpData({
                    data: contest,
                    index: index,
                  });
                }}
              />
            ))}
          </div>
          <div
            style={{
              display: "flex",
              alignContent: "center",
              gap: "0.5rem",
              marginTop: "2rem",
            }}
          >
            <h2>Upcoming Contest</h2>
            <div style={{ cursor: "pointer" }}>
              <ArrowInCircle pushTo={`/contestslist`} />
            </div>
          </div>
          <div className="contest__cards__container">
            {contestData.slice(6, 12).map((contest, index) => (
              <ContestCard
                key={index}
                title={contest.site}
                description={contest.name}
                start_time={contest.start_time}
                end_time={contest.end_time}
                openPoster={() => {
                  setIsPopUpBoxActive(true);
                  setPopUpData({
                    data: contest,
                    index: index,
                  });
                }}
              />
            ))}
          </div>
        </div>

        {/* modal */}
        <div
          onClick={() => {
            setIsPopUpBoxActive(false);
            setPopUpData({
              data: null,
              index: null,
            });
          }}
          className={`contest__poster__model ${
            isPopUpBoxActive ? "active" : ""
          }`}
        />

        <div
          className={`contest__poster__container ${
            isPopUpBoxActive ? "active" : ""
          }`}
        >
          <div
            style={{
              width: "100%",
              position: "relative",
            }}
          >
            {popUpData?.data?.site === "HackerRank" && (
              <img style={{ width: "100%" }} src={Poster1} alt="HackerRank" />
            )}
            {popUpData?.data?.site === "CodeChef" && (
              <img style={{ width: "100%" }} src={Poster2} alt="CodeChef" />
            )}
            {popUpData?.data?.site === "HackerEarth" && (
              <img style={{ width: "100%" }} src={Poster3} alt="HackerEarth" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ContestCard = (props) => {
  return (
    <div onClick={props.openPoster} className="contest__card__container">
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

        <div
          style={{
            marginTop: "1.5rem",
          }}
        >
          <p
            style={{
              color: "green",
              opacity: "0.6",
              fontSize: "0.90rem",
            }}
          >
            Start:{" "}
            <span>
              {props?.start_time?.split("T")[0] ||
                props.start_time?.split(" ")[0]}
            </span>
          </p>
          <p
            style={{
              color: "red",
              opacity: "0.6",
              marginTop: "0.5rem",
              fontSize: "0.90rem",
            }}
          >
            End: <span>{props?.end_time?.split("T")[0]}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contest;
