import React from "react";
import "./TitleLine.scss";

type TitleLineProps = {
  children: React.ReactNode;
};

const TitleLine = ({ children }: TitleLineProps) => {
  return (
    <div className="container-title-line">
      <div className="title-children-line">{children}</div>
    </div>
  );
};

export default TitleLine;
