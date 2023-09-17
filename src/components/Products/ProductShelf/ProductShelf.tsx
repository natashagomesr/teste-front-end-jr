import React, { useEffect, useState } from "react";
import { API_URL } from "../../../constants";
import Loader from "../../Loader/Loader";
import ProductDetailsModal from "../ProductDetailsModal/ProductDetailsModal";
import "./ProductShelf.scss";

export interface Product {
  descriptionShort: string;
  photo: string;
  price: number;
  productName: string;
}

function ProductShelf() {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<Product>();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("Error loading");
        }

        const responseData = await response.json();
        const products: Product[] = responseData.products;

        setData(products);
        setLoading(false);
        console.log(products);
      } catch (error) {
        console.error("An error occurred while searching", error);
      }
    }

    fetchProducts();
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <div className="container-product-shelf">
      {data.map((product, index) => (
        <div className="content-product-shelf" key={index}>
          <img
            className="image-product-shelf"
            src={product.photo}
            alt="product"
          />
          <div className="description-product-shelf">{product.productName}</div>
          <div className="price-before">R$ 30,90</div>
          <div className="price-product-shelf">R${product.price}</div>
          <div className="text-product-shelf">ou 2x de R$ 49,95 sem juros</div>
          <div className="freights-product-shelf">Frete grátis</div>
          <button
            onClick={() => setSelectedProduct(product)}
            className="button-product-shelf"
          >
            Comprar
          </button>
        </div>
      ))}

      {selectedProduct && (
        <ProductDetailsModal
          product={selectedProduct}
          onModalClose={() => {
            setSelectedProduct(undefined);
          }}
        ></ProductDetailsModal>
      )}
    </div>
  );
}

export default ProductShelf;
