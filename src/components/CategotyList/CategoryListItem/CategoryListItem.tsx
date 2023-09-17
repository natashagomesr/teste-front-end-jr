import React from "react";
import "./CategoryListItem.scss";

type CategoryListProps = {
  href: string;
  iconAlt: string;
  iconUrl: string;
  children: React.ReactNode;
};

const CategoryListItem = ({
  href,
  iconAlt,
  iconUrl,
  children,
}: CategoryListProps) => {
  return (
    <a className="category-item-container" href={href}>
      <div className="content-image">
        <img className="category-item-image" src={iconUrl} alt={iconAlt} />
      </div>
      <div className="category-item-children">{children}</div>
    </a>
  );
};

export default CategoryListItem;
