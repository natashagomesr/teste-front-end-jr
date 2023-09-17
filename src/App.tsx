import React from "react";
import "./App.scss";
import Banner from "./components/Banner/Banner";
import CategoryList from "./components/CategotyList/CategoryList";
import Header from "./components/Header/Header";
import Partners from "./components/Partners/Partners";
import Products from "./components/Products/Products";
import RelatedProducts from "./components/RelatedProducts/RelatedProducts";
import TitleLine from "./components/Title/TitleLine";
import Title from "./components/Title/Title";
import SmallCarrousel from "./components/SmallCarrousel/SmallCarrousel";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <Banner />
      <CategoryList />
      <TitleLine>Produtos relacionados</TitleLine>
      <Products />
      <Partners />
      <TitleLine>Produtos relacionados</TitleLine>
      <RelatedProducts />
      <Title>Navegue por marcas</Title>
      <SmallCarrousel />
      <Footer />
    </div>
  );
}

export default App;
