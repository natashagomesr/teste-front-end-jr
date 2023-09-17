import React from "react";
import Icons from "./Icons/Icons";
import IconText from "./IconText/IconText";
import Search from "./Search/Search";
import "./Header.scss";
import Links from "./Links/Links";

function Header() {
  return (
    <header className="container-header">
      <div className="container-icon-text">
        <IconText
          href="#"
          iconAlt="shield-check"
          iconUrl="/images/ShieldCheck.svg"
        >
          <div className="text-gray">Compra</div>{" "}
          <div className="ml-2">100% segura</div>
        </IconText>

        <IconText href="#" iconAlt="truck" iconUrl="/images/Truck.svg">
          <div className="mr-2">Frete grátis</div>
          <div className="text-gray">acima de R$ 200</div>
        </IconText>

        <IconText
          href="#"
          iconAlt="credit-card"
          iconUrl="/images/CreditCard.svg"
        >
          <div className="mr-2">Parcele</div>{" "}
          <div className="text-gray">suas compras</div>
        </IconText>
      </div>

      <div className="container-content">
        <div className="logo-header">
          <img src="/images/Logo.svg" alt="Logo" />
        </div>

        <Search />

        <Icons href="#" iconAlt="group" iconUrl="/images/Group.svg"></Icons>
        <Icons href="#" iconAlt="heart" iconUrl="/images/Heart.svg"></Icons>
        <Icons href="#" iconAlt="user" iconUrl="/images/UserCircle.svg"></Icons>
        <Icons
          href="#"
          iconAlt="cart"
          iconUrl="/images/ShoppingCart.svg"
        ></Icons>
      </div>

      <div className="container-header-links">
        <Links href="#">Todas categorias</Links>
        <Links href="#">Supermercado</Links>
        <Links href="#">Livros</Links>
        <Links href="#">Moda</Links>
        <Links href="#">Lançamentos</Links>
        <Links href="#">Ofertas do dia</Links>
        <IconText href="#" iconAlt="crown" iconUrl="/images/CrownSimple.svg">
          <div className="links">assinatura</div>
        </IconText>
      </div>
    </header>
  );
}

export default Header;
