/* eslint-disable react-refresh/only-export-components */
import axios from "axios";
import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const BookContext = createContext();
const SERVER_URL = import.meta.env.VITE_API_BASE_URL;
const LIMIT = 12;

export const BookContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [booksData, setBooksData] = useState();
  const [book, setBook] = useState();
  const [isLiked, setIsLiked] = useState(false);
  const [relatedBooks, setRelatedBooks] = useState();
  const [bestSellerBooks, setBestSellerBooks] = useState();
  const [newReleases, setNewReleases] = useState();
  const [booksForEveryone, setBooksForEveryone] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const page = searchParams.get("page") || 1;
  const category = searchParams.get("category") || "all";
  const searchQuery = searchParams.get("search");

  const fetchBooksData = async (page, limit = LIMIT, category, searchQuery) => {
    try {
      setIsLoading(true);
      const res = await axios.post(`${SERVER_URL}/api/v1/book`, {
        page,
        limit,
        category,
        search: searchQuery,
      });
      if (res.data.success) {
        setBooksData(res.data);
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchBook = async (slug, wishlistBooks) => {
    try {
      setIsLoading(true);
      const res = await axios.get(`${SERVER_URL}/api/v1/book/${slug}`);
      if (res.data.success) {
        setBook(res.data.data);
        fetchRelatedBooks(slug);
        if (wishlistBooks) {
          const existInWishlist = wishlistBooks.filter(
            (wbook) => wbook.book._id === res.data.data._id,
          );
          if (existInWishlist.length === 1) {
            setIsLiked(true);
          } else {
            setIsLiked(false);
          }
        }
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchRelatedBooks = async (slug) => {
    try {
      setIsLoading(true);
      const res = await axios.get(`${SERVER_URL}/api/v1/book/${slug}/related`);
      if (res.data.success) {
        setRelatedBooks(res.data.data);
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const getBestsellers = async () => {
    try {
      setIsLoading(true);
      const res = await axios.post(`${SERVER_URL}/api/v1/book/bestsellers`, {
        limit: LIMIT,
      });
      if (res.data.success) {
        setBestSellerBooks(res.data.data);
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const getNewReleases = async () => {
    try {
      setIsLoading(true);
      const res = await axios.post(`${SERVER_URL}/api/v1/book/new-releases`, {
        limit: LIMIT,
      });

      if (res.data.success) {
        setNewReleases(res.data.data);
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const getBooksForEveryone = async () => {
    try {
      setIsLoading(true);
      const res = await axios.post(
        `${SERVER_URL}/api/v1/book/books-for-everyone`,
        { limit: LIMIT },
      );
      if (res.data.success) {
        setBooksForEveryone(res.data.data);
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFilterUrl = (field, value) => {
    setSearchParams((searchParams) => {
      searchParams.set(field, value);
      scrollTo(0, 0);
      return searchParams;
    });
  };

  window.addEventListener("keydown", (e) => {
    if (!search) return;
    if (e.key === "Enter") {
      navigate(`/book-list?search=${search}`);
      scrollTo(0, 0);
      setIsSearchOpen(false);
    }
  });

  useEffect(() => {
    fetchBooksData(page, LIMIT, category, searchQuery);
  }, [page, category, searchQuery]);

  useEffect(() => {
    getBooksForEveryone();
    getBestsellers();
    getNewReleases();
  }, []);

  const value = {
    booksData,
    isLoading,
    fetchBooksData,
    fetchBook,
    book,
    isLiked,
    setIsLiked,
    fetchRelatedBooks,
    relatedBooks,
    bestSellerBooks,
    newReleases,
    booksForEveryone,
    search,
    setSearch,
    page,
    category,
    handleFilterUrl,
    setSearchParams,
    isSearchOpen,
    setIsSearchOpen,
  };

  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
};

export const useBookContext = () => {
  const context = useContext(BookContext);
  return context;
};
