import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Title } from "../../components";
import { Poster1, Poster2, Poster3, Poster4 } from "../../constants/Images";
import { fetchContestData } from "../../redux/actions/apiActions";
import { DashboardSideNavigation, Header } from "../components";
import "./ContestsList.css";

const ContestsList = () => {
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

  useEffect(() => {
    dispatch(fetchContestData());
  }, [dispatch]);

  return (
    <div>
      <Title title="ContestsList" />

      <DashboardSideNavigation setIsNavActive={setIsNavActive} />
      <div className="contestlist__main__container">
        <div className="header__main__container">
          <div className="contestlist__header__container">
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
          className={`contestlist__body__container ${
            isNavActive ? "active" : ""
          }`}
        >
          <div
            style={{
              display: "flex",
              alignContent: "center",
              gap: "0.5rem",
            }}
          >
            <h2>Current contests</h2>
          </div>

          <div className="contest__cards__container">
            {contestData.slice(6, 30)?.map((contest, index) => (
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
          </div>
          <div className="contest__cards__container">
            {contestData.slice(30, 60)?.map((contest, index) => (
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
              height: "100%",
              position: "relative",
            }}
          >
            {popUpData?.data?.site === "HackerRank" && (
              <img
                style={{ width: "100%", height: "100%", zIndex: "-1" }}
                src={Poster1}
                alt="HackerRank"
              />
            )}
            {popUpData?.data?.site === "CodeChef" && (
              <img
                style={{ width: "100%", height: "100%", zIndex: "-1" }}
                src={Poster2}
                alt="CodeChef"
              />
            )}
            {popUpData?.data?.site === "HackerEarth" && (
              <img
                style={{ width: "100%", height: "100%", zIndex: "-1" }}
                src={Poster3}
                alt="HackerEarth"
              />
            )}

            {popUpData?.data?.site === "LeetCode" && (
              <img
                style={{ width: "100%", height: "100%", zIndex: "-1" }}
                src={Poster4}
                alt="LeetCode"
              />
            )}

            <div className="contest__model__button">
              <a href={popUpData?.data?.url} target="_blank" rel="noreferrer">
                Participate Now
              </a>
            </div>
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

export default ContestsList;
