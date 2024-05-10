import React, { useEffect, useState } from "react";
import axios from "axios";
import "../index.css";
import Icon from "./Icon";

interface Product {
  nama: string;
  id: number;
  name: string;
  price: number;
  stock: number;
}

const Product: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  // Fetch data dari API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Product[]>(
          "http://localhost:3000/products"
        );
        setProducts(response.data);
      } catch (error) {}
    };

    fetchData();
  }, []);

  // detail product
  const detail = (product: Product) => {
    console.log(product);
  };

  return (
    <div className="w-full">
      <h2 className="text-rose-700">Daftar Produk</h2>
      <ul>
        {products.map((product) => (
          <li
            key={product.id}
            onClick={() => detail(product)}
            className="flex gap-2"
          >
            {product.nama}{" "}
            <span className="hover:cursor-pointer">
              <Icon nama="edit"></Icon>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Product;
