/* eslint-disable react-refresh/only-export-components */
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./AuthContext";

const WishlistContext = createContext();
const SERVER_URL = import.meta.env.VITE_API_BASE_URL;

export const WishlistContextProvider = ({ children }) => {
  const { isLoggedIn } = useAuthContext();
  const [wishlistBooks, setWishlistBooks] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const addToWishlist = async (bookId) => {
    axios.defaults.withCredentials = true;
    try {
      setIsLoading(true);
      const res = await axios.post(`${SERVER_URL}/api/v1/wishlist/add`, {
        bookId,
      });
      if (res.data.success) {
        getWishlistData();
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const removeFromWishlist = async (bookId) => {
    axios.defaults.withCredentials = true;
    try {
      setIsLoading(true);
      const res = await axios.delete(
        `${SERVER_URL}/api/v1/wishlist/remove/${bookId}`,
      );

      if (res.data.success) {
        getWishlistData();
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const getWishlistData = async () => {
    axios.defaults.withCredentials = true;
    if (!isLoggedIn) return;
    try {
      setIsLoading(true);
      const res = await axios.get(`${SERVER_URL}/api/v1/wishlist/data`);
      if (res.data.success) {
        setWishlistBooks(res.data.data);
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleWishlist = (e, bookId, isLiked, setIsLiked) => {
    e.preventDefault();
    if (!isLoggedIn) {
      navigate("/login");
      scrollTo(0, 0);
      return;
    }
    if (isLiked) {
      removeFromWishlist(bookId);
      setIsLiked(false);
    } else {
      addToWishlist(bookId);
      setIsLiked(true);
    }
  };

  useEffect(() => {
    getWishlistData();
  }, [isLoggedIn]);

  const value = {
    getWishlistData,
    wishlistBooks,
    toggleWishlist,
    isLoading,
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlistContext = () => {
  const context = useContext(WishlistContext);
  return context;
};
