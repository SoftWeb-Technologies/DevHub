import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader, Title } from "../../components";
import {
  Poster1,
  Poster2,
  Poster3,
  Poster4,
  Poster5,
  Poster6,
  Poster7,
  Poster8,
  contestImg1,
  contestImg2,
  contestImg3,
  contestImg4,
  contestImg5,
  contestImg6,
} from "../../constants/Images";
import { ArrowInCircle } from "../../DevHubIcons";
import { fetchContestData } from "../../redux/actions/apiActions";
import { DashboardSideNavigation, Header } from "../components";
import "./Contest.css";
import DevHubAIButton from "../../components/devhub-ai/DevHubAIButton";

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

  const [filteredData, setFilteredData] = useState(null);
  const [filter, setFilter] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    dispatch(fetchContestData());
  }, [dispatch]);

  useEffect(() => {
    const fetchContestData = (keyword) => {
      var config = {
        method: "get",
        url: `https://kontests.net/api/v1/all`,
      };

      axios(config).then((response) => {
        setIsLoading(true);
        const data = response.data.filter((item) => {
          return (
            item.site.toLowerCase().includes(keyword.toLowerCase()) ||
            item.name.toLowerCase().includes(keyword.toLowerCase()) ||
            item.status.toLowerCase().includes(keyword.toLowerCase())
          );
        });

        setFilteredData(data);

        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      });
    };

    filter && fetchContestData(filter);
  }, [filter]);

  return (
    <div>
      <Title title="Contest" />

      <DashboardSideNavigation setIsNavActive={setIsNavActive} />
      <DevHubAIButton />

      <div className="contest__main__container">
        <div className="header__main__container">
          <div className="contest__header__container">
            <Header
              displayName={
                currentUser?.displayName ||
                currentUser?.user?.name ||
                currentUser?.email ||
                "User"
              }
              setFilter={setFilter}
            />
          </div>
          <div className="user__name__container">
            <h2
              className="hide-on-mobile"
              style={{ color: "#DAF5FF", marginTop: "0.7rem" }}
            >
              Contest mania made for you!{" "}
              {currentUser?.displayName ||
                currentUser?.user?.name ||
                currentUser?.email ||
                "User"}
            </h2>
            <h2
              className="hide-on-desktop"
              style={{ color: "#fff", marginTop: "0.7rem" }}
            >
              Contests 🎉
            </h2>
          </div>
        </div>

        <div
          className={`contest__body__container ${isNavActive ? "active" : ""}`}
        >
          {filter === "" ? (
            <>
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
                {contestData.slice(0, 10).map((contest, index) => (
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
                {contestData.slice(10, 20).map((contest, index) => (
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
            </>
          ) : (
            <div>
              <div className="techHunt__cards__container">
                {filteredData?.length === 0 || isLoading ? (
                  <>
                    <div
                      style={{
                        width: "100%",
                        height: "330px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <Loader />
                      <h2
                        style={{
                          marginTop: "4rem",
                          textAlign: "center",
                        }}
                      >
                        Fetching {filter} contests...
                      </h2>
                    </div>
                  </>
                ) : (
                  filteredData?.map((contest, index) => (
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
                  ))
                )}
              </div>
            </div>
          )}
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

            {popUpData?.data?.site === "AtCoder" && (
              <img
                style={{ width: "100%", height: "100%", zIndex: "-1" }}
                src={Poster5}
                alt="AtCoder"
              />
            )}

            {popUpData?.data?.site === "TopCoder" && (
              <img
                style={{ width: "100%", height: "100%", zIndex: "-1" }}
                src={Poster6}
                alt="TopCoder"
              />
            )}

            {popUpData?.data?.site === "Codeforces" && (
              <img
                style={{ width: "100%", height: "100%", zIndex: "-1" }}
                src={Poster7}
                alt="Codeforces"
              />
            )}

            {popUpData?.data?.site === "Kick Start" && (
              <img
                style={{ width: "100%", height: "100%", zIndex: "-1" }}
                src={Poster8}
                alt="Kick Start"
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
        <div className="contest__card__image">
          <div>
            {props.title === "CodeChef" && (
              <img
                src={contestImg1}
                width={"100%"}
                height={"100%"}
                alt="contest_poster"
              />
            )}
            {props.title === "HackerEarth" && (
              <img
                src={contestImg2}
                width={"100%"}
                height={"100%"}
                alt="contest_poster"
              />
            )}
            {props.title === "HackerRank" && (
              <img
                src={contestImg3}
                width={"100%"}
                height={"100%"}
                alt="contest_poster"
              />
            )}
            {props.title === "CodeForces" && (
              <img
                src={contestImg4}
                width={"100%"}
                height={"100%"}
                alt="contest_poster"
              />
            )}

            {props.title === "CodeForces::Gym" && (
              <img
                src={contestImg4}
                width={"100%"}
                height={"100%"}
                alt="contest_poster"
              />
            )}

            {props.title === "AtCoder" && (
              <img
                src={contestImg5}
                width={"100%"}
                height={"100%"}
                alt="contest_poster"
              />
            )}
            {props.title === "LeetCode" && (
              <img
                src={contestImg6}
                width={"100%"}
                height={"100%"}
                alt="contest_poster"
              />
            )}

            {props.title !== "CodeForces" ||
              props.title !== "HackerRank" ||
              props.title !== "HackerEarth" ||
              (props.title !== "CodeChef" ? (
                <h1 style={{ color: "#fff", fontWeight: "bold" }}>No Image</h1>
              ) : null)}
          </div>
        </div>
        <div
          style={{
            padding: "1rem",
          }}
        >
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
            {props.description.length > 20
              ? props.description.slice(0, 20) + "..."
              : props.description}
          </p>

          <div
            style={{
              marginTop: "1.5rem",
            }}
          >
            <p
              style={{
                color: "green",
                fontWeight: "bold",
                opacity: "0.6",
                fontSize: "0.9rem",
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
                fontWeight: "bold",
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
    </div>
  );
};

export default Contest;
