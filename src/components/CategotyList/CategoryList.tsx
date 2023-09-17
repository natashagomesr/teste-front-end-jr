import React from "react";
import CategoryListItem from "./CategoryListItem/CategoryListItem";
import "./CategoryList.scss";

function CategoryList() {
  return (
    <div className="container-category-list">
      <CategoryListItem
        href="#"
        iconAlt="tecnologia"
        iconUrl="/images/tecnologia.png"
      >
        Tecnologia
      </CategoryListItem>

      <CategoryListItem
        href="#"
        iconAlt="supermercado"
        iconUrl="/images/supermercados.png"
      >
        Supermercado
      </CategoryListItem>

      <CategoryListItem
        href="#"
        iconAlt="bebidas"
        iconUrl="/images/whiskey.png"
      >
        Bebidas
      </CategoryListItem>

      <CategoryListItem
        href="#"
        iconAlt="ferramentas"
        iconUrl="/images/ferramentas.png"
      >
        Ferramentas
      </CategoryListItem>
      <CategoryListItem href="#" iconAlt="saúde" iconUrl="/images/saude.png">
        Saúde
      </CategoryListItem>
      <CategoryListItem
        href="#"
        iconAlt="esportes"
        iconUrl="/images/esporte.png"
      >
        Esportes e Fitness
      </CategoryListItem>
      <CategoryListItem href="#" iconAlt="moda" iconUrl="/images/moda.png">
        Moda
      </CategoryListItem>
    </div>
  );
}

export default CategoryList;
