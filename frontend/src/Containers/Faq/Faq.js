import React from "react";
import { useNavigate } from "react-router-dom";

import { Accordion, Button, Navbar } from "../../components";
import { FaqImg } from "../../constants/Images";
import "./Faq.css";

const faq = [
  {
    title: "What is DevHub ?",
    contents: (
      <div>
        DevHub is all-one-software, where we curate all the latest events,
        quizzes , exciting communities, latest tech updates, developer news ,
        upcoming contests across various platforms all with a personal touch
        just for you!
      </div>
    ),
  },
  {
    title: "How to use DevHub: your quick start guide?",
    contents: (
      <div>
        Here you can find an embed video where it shows you how you can use
        DevHub, A quick start guide! Video embed here
      </div>
    ),
  },
  {
    title: "How does DevHub cost?",
    contents: <div>Click here to checkout the pricing plan. link here</div>,
  },
  {
    title: `Can i access a free trial?`,
    contents: (
      <div>No, as of today we don't provide a free trial to users.</div>
    ),
  },
];

const Faq = () => {
  const navigate = useNavigate();
  return (
    <div className="faq__main__container">
      <div className="faq__header">
        <Navbar show={"active"} theme="dark">
          <Button
            label={"Sign Up"}
            primary={true}
            onClick={() => navigate("/auth")}
          />
        </Navbar>
      </div>

      <div className="faq__content__container">
        <div className="faq__left__container">
          <img src={FaqImg} alt="faq-img" />
        </div>
        <div className="faq__right__container">
          <h2>Frequently asked question</h2>

          <Accordion items={faq} />
        </div>
      </div>
      <svg
        className="faq__wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#0099FF"
          fill-opacity="1"
          d="M0,256L80,240C160,224,320,192,480,154.7C640,117,800,75,960,48C1120,21,1280,11,1360,5.3L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Faq;
