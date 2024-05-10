import { FONTAWSOME_URL } from "./Index";

interface IconProps {
  nama: string;
}

const Icon = ({ nama }: IconProps) => {
  return (
    <div>
      <link rel="stylesheet" href={FONTAWSOME_URL} />
      {nama === "Product" && <i className="mr-3 fa-solid fa-shirt"></i>}
      {nama === "Dashboard" && (
        <i className="mr-3 fa-solid fa-table-cells-large"></i>
      )}
      {nama === "plus" && <i className="mr-3 fa-solid fa-plus"></i>}
      {nama === "minus" && <i className="mr-3 fa-solid fa-minus"></i>}
      {nama === "edit" && <i className="fa-solid fa-pencil"></i>}
    </div>
  );
};

export default Icon;
