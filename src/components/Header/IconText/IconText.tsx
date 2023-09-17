import React from "react";
import "./IconText.scss";

type IconTextProps = {
  href: string;
  iconAlt: string;
  iconUrl: string;
  children: React.ReactNode;
};

const IconText = ({ href, iconAlt, iconUrl, children }: IconTextProps) => {
  return (
    <a className="icon-text-container" href={href}>
      <img className="icon-text-image" src={iconUrl} alt={iconAlt} />
      {children}
    </a>
  );
};

export default IconText;
