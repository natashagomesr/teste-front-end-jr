import React from "react";
import "./Banner.scss";

function Banner() {
  return (
    <div>
      <div className="container-banner">
        <img className="image" src="./images/Rectangle.png" alt="banner" />
        <div className="image-gradient"></div>
        <div className="content-banner">
          <div className="text-first">Venha conhecer nossas promoções</div>
          <div className="text-second">50% Off nos produtos</div>
          <button className="button-banner">Ver produto</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
