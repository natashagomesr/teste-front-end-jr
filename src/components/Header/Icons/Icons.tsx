import React from "react";
import "./Icons.scss";

type IconProps = {
  href: string;
  iconAlt: string;
  iconUrl: string;
};
const Icons = ({ href, iconAlt, iconUrl }: IconProps) => {
  return (
    <div className="container-icons">
      <a className="icon" href={href}>
        <img src={iconUrl} alt={iconAlt} />
      </a>
    </div>
  );
};

export default Icons;
