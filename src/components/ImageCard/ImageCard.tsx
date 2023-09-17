import React from "react";
import "./ImageCard.scss";

type ImageCardProps = {
  title: string;
  text: string;
  buttonText: string;
  imageUrl: string;
  imageAlt: string;
  type: "big" | "small";
};

const ImageCard = ({
  title,
  text,
  buttonText,
  imageUrl,
  imageAlt,
  type,
}: ImageCardProps) => {
  return (
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className={`container-image-card ${
        type === "big" ? "big-container" : "small-container"
      }`}
    >
      <div className="image-gradient"></div>
      <div className="content">
        <div className="text-big">{title}</div>
        <div className="text-small">{text}</div>
        <button className="button-text">{buttonText}</button>
      </div>
    </div>
  );
};

export default ImageCard;
