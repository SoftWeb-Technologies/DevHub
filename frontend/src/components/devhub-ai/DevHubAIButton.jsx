import React from "react";
import { devhubAiImg } from "../../constants/Images";

export default function DevHubAIButton() {
  return (
    <div
      className="devhub-ai__container"
      onClick={() => window.open("http://localhost:5173/", "_blank")}
    >
      <img src={devhubAiImg} alt="devhub-ai" />
    </div>
  );
}
