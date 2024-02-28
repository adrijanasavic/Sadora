import React from "react";
import Link from "next/link"

function Product({ name, image, price }) {
  return (
    <Link href="">
      <div className="rounded overflow-hidden aspect-square">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <p className="text-gray-600 text-sm md:text-base">{name}</p>
      <span className="block font-semibold">${price}</span>
    </Link>
  );
}

export default Product;
