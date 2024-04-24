import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const cartAlert = ({ product }: { product: any }) => {
  const { title } = product;

  toast.success(
    <div className="flex items-center text-black">
      <p className="font-semibold mr-2">¡Agregado al carrito!</p>
      <p>{title}</p>
    </div>,
    {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progressStyle: { backgroundColor: '#34D399' },
      //bodyClassName: 'bg-white',
    }
  );

  return null;
};

export default cartAlert;