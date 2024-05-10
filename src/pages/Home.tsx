import React from "react";
import { SideBar, ProductTable, Product } from "../components/Index";
import { useNavigate } from "react-router-dom";

import "../App.css";
import ProductForm from "../components/ProductForm";

const App: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-100 h-screen">
      <SideBar />
      <div className="main pt-8">
        <div className="bg-white p-10 max-w-screen-xl shadow-md mr-10 rounded-md flex justify-between">
          <h1 className="font-slate-600 font-semibold text-3xl content-center	">
            Product
          </h1>
          <button
            className="bg-sky-600 text-white rounded-md py-3 px-6 hover:bg-sky-700"
            onClick={() => navigate("/add-product")}
          >
            Tambah
          </button>
        </div>
        <div className="bg-white p-8 max-w-screen-xl mt-8 shadow-md mr-10">
          {/* <ProductTable /> */}
          <Product></Product>
        </div>
      </div>
    </div>
  );
};

export default App;
