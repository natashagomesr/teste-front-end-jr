import React from "react";
import "./Title.scss";

type TitleProps = {
  children: React.ReactNode;
};

const Title = ({ children }: TitleProps) => {
  return <div className="content-title-simple">{children}</div>;
};

export default Title;
