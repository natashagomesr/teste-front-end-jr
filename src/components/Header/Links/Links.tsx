import React from "react";
import "./Links.scss";

type LinksProps = {
  href: string;
  children: React.ReactNode;
};

const Links: React.FC<LinksProps> = ({ href, children }) => {
  return (
    <a className="links" href={href}>
      {children}
    </a>
  );
};

export default Links;
