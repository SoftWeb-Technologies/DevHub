import React from "react";
import { devhubAiImg } from "../../constants/Images";

export default function DevHubAIButton() {
  return (
    <div
      className="devhub-ai__container"
      onClick={() => window.open("https://devhub-ai.netlify.app", "_blank")}
    >
      <img src={devhubAiImg} alt="devhub-ai" />
    </div>
  );
}
