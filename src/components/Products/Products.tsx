import React from "react";
import Categories from "./Categories/Categories";
import "./Products.scss";
import ProductShelf from "./ProductShelf/ProductShelf";

function Products() {
  return (
    <div className="container-products">
      <div className="container-categories-products">
        <Categories href="#">Celular</Categories>
        <Categories href="#">Acessórios</Categories>
        <Categories href="#">Tablets</Categories>
        <Categories href="#">Notebooks</Categories>
        <Categories href="#">TVs</Categories>
        <Categories href="#">Ver Todos</Categories>
      </div>

      <div className="container-product-shelf">
        <ProductShelf />
      </div>
    </div>
  );
}

export default Products;
