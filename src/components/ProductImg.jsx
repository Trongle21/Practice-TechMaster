import React from "react";
import PropTypes from "prop-types";

/**
 * @typedef ProductImgProps
 *
 * @property {string}
 *
 */

/**
 *
 * @param {string} props
 * @returns
 */

const ProductImg = ({ src, alt }) => {
  return <img className="card-img-top" src={src} alt={alt} />;
};

ProductImg.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ProductImg;
