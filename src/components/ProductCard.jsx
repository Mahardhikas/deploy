import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../store/slices/cartSlices";

const ProductsCard = (props) => {
  const { img, title, kalori } = props;

  const [isAdded, setIsAdded] = useState(false);

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    // Di sini, kita tidak bisa langsung mengoper `props`, jika kita perlu mengakses nilai yang sama di dalam komponen turunan. Jadi, kita harus mengopernya sebagai prop yang berbeda seperti ini- `{...props}`
    const item = { ...props };
    dispatch(addItem(item));

    setIsAdded(true);

    setTimeout(() => {
      setIsAdded(false);
    }, 3000);
  };

  return (
    <>
      <div className="product_card">
        <figure>
          <img src={img} alt="item-img" />
        </figure>
        <h4 className="title">{title}</h4>

        <h3 className="kalori"> {kalori.toLocaleString()} kal / 100 gram</h3>
        <button
          type="button"
          className={`btn ${isAdded ? "added" : ""}`}
          onClick={handleAddToCart}
        >
          {isAdded ? "Ditambahkan" : "Tambah"}
        </button>
      </div>
    </>
  );
};

export default ProductsCard;
