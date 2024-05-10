import React, { useMemo } from "react";
import axios from "axios";
import mData from "../../db.json";
import { useReactTable, flexRender } from "@tanstack/react-table";

const ProductTable = () => {
  // get produk from axios
  const fetchData = async () => {
    const response = await axios.get("http://localhost:3000/products");
    console.log(response.data);

    return response.data;
  };

  const data = useMemo(() => fetchData(), []);

  //   @type import('@tanstack/react-table').columnDef<any>;
  const columns = [
    {
      Header: "ID",
      accessorKey: "id",
    },
    {
      Header: "Name",
      accessorKey: "name",
    },
    {
      Header: "Category ID",
      accessorKey: "category_id",
    },
    {
      Header: "Price",
      accessorKey: "price",
    },
    {
      Header: "Stock",
      accessorKey: "stock",
    },
  ];

  const table = useReactTable({ data, columns });

  return (
    <div>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
