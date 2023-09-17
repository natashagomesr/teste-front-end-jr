import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import "./Partners.scss";

function Partners() {
  return (
    <div className="partners-container">
      <ImageCard
        title="Parceiros"
        buttonText="Confira"
        imageAlt="partners"
        text="Lorem ipsum dolor sit amet, consectetur"
        type="big"
        imageUrl="./images/partners.png"
      ></ImageCard>

      <ImageCard
        title="Parceiros"
        buttonText="Confira"
        imageAlt="partners"
        text="Lorem ipsum dolor sit amet, consectetur"
        type="big"
        imageUrl="./images/partners.png"
      ></ImageCard>
    </div>
  );
}

export default Partners;
