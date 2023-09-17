import React from "react";
import "./Categories.scss";

type CategoriesProps = {
  href: string;
  children: React.ReactNode;
};

const Categories: React.FC<CategoriesProps> = ({ href, children }) => {
  return (
    <a className="categories-products" href={href}>
      {children}
    </a>
  );
};

export default Categories;
