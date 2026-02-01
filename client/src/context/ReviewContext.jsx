/* eslint-disable react-refresh/only-export-components */
import axios from "axios";
import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const ReviewContext = createContext();
const SERVER_URL = import.meta.env.VITE_API_BASE_URL;

export const ReviewContextProvider = ({ children }) => {
  const [reviews, setReviews] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const addReview = async (e, bookId, review) => {
    e.preventDefault();
    const { rating, comment } = review;

    try {
      setIsLoading(true);

      const res = await axios.post(
        `${SERVER_URL}/api/v1/review/add-review/${bookId}`,
        { rating, comment },
      );

      if (res.data.success) {
        getReviews();
      } else {
        toast.success(res.data.message);
      }
    } catch (error) {
      const msg = error.response?.data?.message || "Something went wrong";
      alert(msg);
    } finally {
      setIsLoading(false);
    }
  };

  const getReviews = async (bookId) => {
    try {
      setIsLoading(true);
      const res = await axios.post(
        `${SERVER_URL}/api/v1/review/get-reviews/${bookId}`,
        {
          page: 1,
          limit: 5,
          sort: "latest",
        },
      );
      if (res.data.success) {
        setReviews(res.data.data);
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const removeReview = async (e, reviewId) => {
    e.preventDefault();
    axios.defaults.withCredentials = true;

    console.log(reviewId);
    try {
      setIsLoading(true);
      const res = await axios.delete(
        `${SERVER_URL}/api/v1/review/delete-review/${reviewId}`,
      );
      if (res.data.success) {
        toast.success(res.data.message);
        getReviews();
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      const msg = error.response?.data?.message || "Something went wrong";
      alert(msg);
    } finally {
      setIsLoading(false);
    }
  };

  const value = { addReview, getReviews, removeReview, reviews, isLoading };

  return (
    <ReviewContext.Provider value={value}>{children}</ReviewContext.Provider>
  );
};

export const useReviewContext = () => {
  const context = useContext(ReviewContext);
  return context;
};
