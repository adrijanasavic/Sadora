"use client"
import { useState, useEffect, useMemo } from "react";
import getApiUrl from "../../../getApiUrl";
import Product from "@/app/components/Product";
import '../../app/globals.css';

export default function AllProducts() {
  const [products, setProducts] = useState([]); 
  const API_URL = useMemo(() => getApiUrl('products'), [] );

  useEffect(() => {
    fetch(`${API_URL}/api/products`)
      .then((res) => res.json())
      .then((json) => setProducts(json))
  }, [API_URL])

  console.log('===============PRODUCTS=====================');
  console.log(products);
  console.log('====================================');

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product._id}>
            <Product {...product}/>
          </div> 
        ))}
  
    </div>
  );
}
