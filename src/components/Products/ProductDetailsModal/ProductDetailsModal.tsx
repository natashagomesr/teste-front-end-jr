import React, { useState } from "react";
import { Product } from "../ProductShelf/ProductShelf";
import "./ProductDetailsModal.scss";

interface ProductDetailsModalProps {
  product: Product;
  onModalClose: () => void;
}

const ProductDetailsModal: React.FC<ProductDetailsModalProps> = ({
  product,
  onModalClose,
}) => {
  const [count, setCount] = useState(1);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const closeModal = () => {
    onModalClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="close-button" onClick={closeModal}>
          X
        </div>
        <div className="modal-left">
          <img src={product.photo} alt="ProductImage" />
        </div>
        <div className="modal-right">
          <h2>{product.productName}</h2>
          <div className="price">
            {product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </div>
          <div className="description">{product.descriptionShort}</div>
          <a href="#">Veja mais detalhes do produto</a>
          <div className="product-count">
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button onClick={incrementCount}>+</button>
          </div>
          <button className="buy-button">Comprar</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsModal;
