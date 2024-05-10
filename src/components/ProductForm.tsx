import { useState } from "react";
import React from "react";
import axios from "axios";
import { API_URL } from "../utils/constants";

const ProductForm = () => {
  const [formData, setFormData] = useState({
    id: "",
    nama: "",
    kategori: "",
    harga: "",
    stok: "",
  });

  // handle submit
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Kirim data ke server
    axios
      .post(API_URL + "products", formData)
      .then((res) => {
        console.log("1" + res);
      })
      .catch((err) => {
        console.log("0" + err);
      });
  };

  // handle change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="mb-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Nama
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            name="nama"
            type="text"
            value={formData.nama}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="kategori"
          >
            Kategori
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="kategori"
            name="kategori"
            type="text"
            value={formData.kategori}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="harga"
          >
            Harga
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="harga"
            name="harga"
            type="text"
            value={formData.harga}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="stok"
          >
            Stok
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="stok"
            name="stok"
            type="text"
            value={formData.stok}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-sky-600 text-white rounded-md w-full py-3 px-6 hover:bg-sky-700"
            type="submit"
          >
            Simpan
          </button>
        </div>
      </form>
    </div>
  );
};
export default ProductForm;
