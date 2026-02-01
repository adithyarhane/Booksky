/* eslint-disable react-refresh/only-export-components */
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuthContext } from "./AuthContext";

const CartContext = createContext();
const SERVER_URL = import.meta.env.VITE_API_BASE_URL;

export const CartContextProvider = ({ children }) => {
  const { isLoggedIn } = useAuthContext();
  const navigate = useNavigate();
  const [cartData, setCartData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const addToCart = async (e, bookId) => {
    e.preventDefault();
    axios.defaults.withCredentials = true;
    if (!isLoggedIn) {
      return navigate("/login");
    }
    try {
      const res = await axios.post(`${SERVER_URL}/api/v1/cart/add`, {
        bookId,
        quantity: 1,
      });

      if (res.data.success) {
        toast.success(res.data.message);
        getCart();
      } else {
        alert(res.data.message);
      }
    } catch {
      toast.error("Something went wrong.");
    }
  };

  const getCart = async () => {
    axios.defaults.withCredentials = true;
    if (!isLoggedIn) return;
    try {
      setIsLoading(true);
      const res = await axios.get(`${SERVER_URL}/api/v1/cart/data`);

      if (res.data.success) {
        setCartData(res.data.data);
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const updateQuantity = async (e, bookId, quantity) => {
    e.preventDefault();
    axios.defaults.withCredentials = true;
    try {
      setIsLoading(true);
      const res = await axios.patch(
        `${SERVER_URL}/api/v1/cart/update/${bookId}`,
        { quantity },
      );
      if (res.data.success) {
        getCart();
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const removeFromCart = async (e, bookId) => {
    e.preventDefault();
    axios.defaults.withCredentials = true;
    try {
      setIsLoading(true);
      const res = await axios.delete(
        `${SERVER_URL}/api/v1/cart/remove/${bookId}`,
      );
      if (res.data.success) {
        getCart();
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCart();
  }, []);

  const value = {
    addToCart,
    getCart,
    cartData,
    isLoading,
    updateQuantity,
    removeFromCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  return context;
};
