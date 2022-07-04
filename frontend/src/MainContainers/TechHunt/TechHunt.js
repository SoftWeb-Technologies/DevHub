import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Loader, Title } from "../../components";
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

  const [filteredData, setFilteredData] = useState([]);
  const [filter, setFilter] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    dispatch(fetchTechHuntNewsData());
  }, [dispatch]);

  useEffect(() => {
    const fetchAllNews = (keyword) => {
      var config = {
        method: "get",
        url: `/api/news-keyword/${keyword}`,
      };

      axios(config).then((response) => {
        // console.log(response.data);
        setIsLoading(true);
        setFilteredData(response.data);

        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      });
    };

    filter && fetchAllNews(filter);
  }, [filter]);

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
                  marginBottom: "1rem",
                }}
              >
                <h2>Trending News</h2>
                <div style={{ cursor: "pointer" }}>
                  <ArrowInCircle pushTo={`/techhuntlist`}/>
                </div>
              </div>

              <div className="techHunt__cards__container">
                {techHuntData.articles?.slice(0, 4)?.map((article, index) => (
                  <Card
                    key={index}
                    image={article.urlToImage}
                    title={article.title}
                    description={article.description}
                    openModel={() => {
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
                  marginTop: "4rem",
                  marginBottom: "1rem",
                }}
              >
                <h2>Tech Hunt</h2>
                <div style={{ cursor: "pointer" }}>
                  <ArrowInCircle />
                </div>
              </div>
              <div className="techHunt__cards__container">
                {techHuntData.articles
                  ?.slice(1, techHuntData.articles?.length || 0)
                  ?.slice(4, techHuntData.articles?.length || 0)
                  ?.map((article, index) => (
                    <Card
                      key={index}
                      image={article.urlToImage}
                      title={article.title}
                      description={article.description}
                      openModel={() => {
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
                {filteredData.length === 0 || isLoading ? (
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
                        Fetching Latest News
                      </h2>
                    </div>
                  </>
                ) : (
                  filteredData?.map((article, index) => (
                    <Card
                      key={index}
                      title={article.title}
                      image={article.urlToImage}
                      description={article.description}
                      openModel={() => {
                        setIsPopUpBoxActive(true);
                        setPopUpData({
                          data: article,
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

// const TechHuntCard = (props) => {
//   return (
//     <div onClick={props.openPoster} className="techHunt__card__container">
//       <div>
//         <h3
//           style={{
//             color: "#008bb7",
//           }}
//         >
//           {props.title.slice(0, 60) + "..."}
//         </h3>
//         <p
//           style={{
//             color: "#000",
//             fontSize: "0.85rem",
//             marginTop: "1rem",
//             opacity: "0.7",
//           }}
//         >
//           {props.description?.slice(0, 150) + "..."}
//         </p>
//       </div>
//     </div>
//   );
// };

export default TechHunt;
