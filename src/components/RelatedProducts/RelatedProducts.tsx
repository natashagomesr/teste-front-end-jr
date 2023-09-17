import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import "./RelatedProducts.scss";

function RelatedProducts() {
  return (
    <div className="related-products-container">
      <ImageCard
        title="Produtos"
        buttonText="Confira"
        imageAlt="product-related"
        text="Lorem ipsum dolor sit amet, consectetur"
        type="small"
        imageUrl="./images/partners.png"
      ></ImageCard>

      <ImageCard
        title="Produtos"
        buttonText="Confira"
        imageAlt="product-related"
        text="Lorem ipsum dolor sit amet, consectetur"
        type="small"
        imageUrl="./images/partners.png"
      ></ImageCard>
    </div>
  );
}

export default RelatedProducts;
