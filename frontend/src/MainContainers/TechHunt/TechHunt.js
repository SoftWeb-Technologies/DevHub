import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Title } from "../../components";
import { ArrowInCircle, RightArrowIcon } from "../../DevHubIcons";
import { fetchTechHuntNewsData } from "../../redux/actions/apiActions";
import { DashboardSideNavigation, Header } from "../components";

import "./TechHunt.css";

const TechHunt = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { techHuntData } = useSelector((state) => state.techHuntApi);

  const [isNavActive, setIsNavActive] = useState(false);
  const [isPopUpBoxActive, setIsPopUpBoxActive] = useState(false);
  const [popUpData, setPopUpData] = useState({
    data: null,
    index: null,
  });

  const [filteredDate, setFilteredData] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    dispatch(fetchTechHuntNewsData());
  }, [dispatch]);

  useEffect(() => {
    let data = techHuntData.articles?.filter((item) => {
      return (
        item.title.toLowerCase().includes(filter.toLowerCase()) ||
        item.description.toLowerCase().includes(filter.toLowerCase()) ||
        item.publishedAt.includes(filter.toLowerCase()) ||
        item.author.toLowerCase().includes(filter.toLowerCase()) ||
        item.content.toLowerCase().includes(filter.toLowerCase())
      );
    });

    setFilteredData(data);
  }, [techHuntData, filter]);

  return (
    <div>
      <Title title="Tech-Hunt" />

      <DashboardSideNavigation setIsNavActive={setIsNavActive} />
      <div className="techHunt__main__container">
        <div className="header__main__container">
          <div className="techHunt__header__container">
            <Header
              displayName={currentUser?.displayName}
              setFilter={setFilter}
            />
          </div>
          <div className="user__name__container">
            <h2 style={{ color: "#fff", marginTop: "0.7rem" }}>
              Discover Tech News 🤩
            </h2>
          </div>
        </div>

        <div
          className={`techHunt__body__container ${isNavActive ? "active" : ""}`}
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
                <h2>Trending News</h2>
                <div style={{ cursor: "pointer" }}>
                  <ArrowInCircle />
                </div>
              </div>

              <div className="techHunt__cards__container">
                {techHuntData.articles?.slice(0, 3)?.map((article, index) => (
                  <TechHuntCard
                    key={index}
                    title={article.title}
                    description={article.description}
                    openPoster={() => {
                      setIsPopUpBoxActive(true);
                      setPopUpData({
                        data: article,
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
                <h2>Tech Hunt</h2>
                <div style={{ cursor: "pointer" }}>
                  <ArrowInCircle />
                </div>
              </div>
              <div className="techHunt__cards__container">
                {techHuntData.articles
                  ?.slice(3, techHuntData.articles?.length || 0)
                  ?.map((article, index) => (
                    <TechHuntCard
                      key={index}
                      title={article.title}
                      description={article.description}
                      openPoster={() => {
                        setIsPopUpBoxActive(true);
                        setPopUpData({
                          data: article,
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
                {filteredDate?.map((article, index) => (
                  <TechHuntCard
                    key={index}
                    title={article.title}
                    description={article.description}
                    openPoster={() => {
                      setIsPopUpBoxActive(true);
                      setPopUpData({
                        data: article,
                        index: index,
                      });
                    }}
                  />
                ))}
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
          className={`techHunt__poster__model ${
            isPopUpBoxActive ? "active" : ""
          }`}
        />

        <div
          className={`techHunt__poster__container ${
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
            <div
              className="techHunt__poster__card__container"
              style={{
                width: "100%",
                height: "80vh",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <img
                src={popUpData.data?.urlToImage}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                alt="popup"
              />

              <div className="techHunt__poster__popup__description">
                <h1
                  style={{
                    color: "#F2F2F2",
                    marginBottom: "1rem",
                  }}
                >
                  {popUpData.data?.title}
                </h1>
                <p>{popUpData.data?.description}</p>

                <div
                  style={{
                    display: "inline-block",
                    margin: "auto",
                  }}
                >
                  <Button
                    onClick={() => {
                      return window.open(popUpData.data?.url, "_blank");
                    }}
                    customStyle={{ marginTop: "1.5rem" }}
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
    </div>
  );
};

const TechHuntCard = (props) => {
  return (
    <div onClick={props.openPoster} className="techHunt__card__container">
      <div>
        <h3
          style={{
            color: "#008bb7",
          }}
        >
          {props.title.slice(0, 60) + "..."}
        </h3>
        <p
          style={{
            color: "#000",
            fontSize: "0.85rem",
            marginTop: "1rem",
            opacity: "0.7",
          }}
        >
          {props.description?.slice(0, 150) + "..."}
        </p>
      </div>
    </div>
  );
};

export default TechHunt;
