"use client";
import Toast from "@/interfaces/toastfy.interface";
import { toast } from "react-toastify";

const Toastfy = ({ message, isSucess = false }: Toast) => {
  return isSucess
    ? toast.success(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
    : toast.error(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
};

export default Toastfy;
