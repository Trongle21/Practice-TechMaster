import React from "react";
import PropTypes from "prop-types"
import Tag from "./Tag";
import ProductDetails from "./ProductDetails";
import ProductActionsButton from "./ProductActionsButton";
import ProductImg from "./ProductImg";

// Anh san pham (bat buoc)
// ten san pham (bat buoc)
// Gia san pham (ko bat buoc)
// Danh gia (ko bat buoc)


/**
 * @typedef ProductCardProps
 * 
 * @property {string,number,bool}
 */

/**
 * 
 * @param {ProductCardProps} props 
 * @returns 
 */

const ProductCard = ({ image, title, originalPrice, salePrice, vote }) => {
  return (
    <div>
      <div className="card h-100">
        {/* Sale badge*/}
        {salePrice && <Tag />}
        {/* Product image*/}
        <ProductImg src={image} alt={title} />
        {/* Product details*/}
        <ProductDetails
          title={title}
          originalPrice={originalPrice}
          salePrice={salePrice}
          vote={vote}
        />
        {/* Product actions*/}
        <ProductActionsButton />
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  originalPrice: PropTypes.number,
  vote: PropTypes.bool,
}

export default ProductCard;
