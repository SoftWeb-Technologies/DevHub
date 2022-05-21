import { useEffect } from "react";

const Title = ({ title }) => {
  useEffect(() => {
    document.title = `DevHub | ${title}`;
  }, [title]);
  return;
};

export default Title;
