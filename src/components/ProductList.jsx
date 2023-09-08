import React from "react";
import PropTypes from "prop-types"
import ProductCard from "./ProductCard";

/**
 * @typedef ProductListProps
 * 
 * @property {array} products
 */

/**
 * 
 * @param {ProductListProps} props 
 * @returns 
 */

const ProductList = ({ products }) => {
  const productCard = products.map((product) => (
    <div key={product.id} className="col mb-5">
      <ProductCard {...product}/>
    </div>
  ));

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {productCard}
        </div>
      </div>
    </section>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
}

export default ProductList;
