import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer-background"></div>
      <footer className="footer">
        <div className="column">
          <h3>sobre nós</h3>
          <ul>
            <li>conheça</li>
            <li>como comprar</li>
            <li>indicação e desconto</li>
          </ul>
          <div className="icons">
            <img src="/images/facebook.svg" alt="facebook"></img>
            <img src="/images/instagram.svg" alt="instagram"></img>
            <img src="/images/youtube.svg" alt="youtube"></img>
          </div>
        </div>
        <div className="column">
          <h3>informações úteis</h3>
          <ul>
            <li>fale conosco</li>
            <li>dúvidas</li>
            <li>prazos de entrega</li>
            <li>formas de pagamento</li>
            <li>política de privacidade</li>
            <li>trocas e devoluções</li>
          </ul>
        </div>
        <div className="column">
          <h3>formas de pagamento</h3>

          <div className="payment-svg">
            <img src="/images/formas_pagamento.svg" alt="pgto"></img>
          </div>
        </div>
        <div className="column newsletter big">
          <h3>
            cadastre-se e receba nossas <b>novidades e promoções</b>
          </h3>
          <p>
            excepteur sint occaecat cudatat non ent, sunt in culpa qui officia
            lorem ipsum
          </p>
          <form>
            <input type="email" placeholder="seu e-mail" required />
            <div className="submit-button">OK</div>
          </form>
        </div>
      </footer>
      <hr />
      <div className="copyright">
        <div className="text">
          copyright © 2019. todos os direitos reservados. todas as marcas e suas
          imagens são de propriedade de seus respectivos donos. é vedada a
          reprodução, total ou parcial, de qualquer conteúdo sem expressa
          autorização.
        </div>
        <div className="logos">
          <img src="/images/logos-footer.svg" alt="logo-footer"></img>
        </div>
      </div>
    </>
  );
};

export default Footer;
