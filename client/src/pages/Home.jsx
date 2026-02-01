import React, { useEffect } from "react";
import Hero from "../components/Hero";
import FeaturedCategories from "../components/FeaturedCategories";
import BestSellers from "../components/BestSellers";
import NewArrivals from "../components/NewArrivals";
import PopularGenres from "../components/PopularGenres";
import ReaderReviews from "../components/ReaderReviews";
import NewsLetter from "../components/NewsLetter";
import BooksForAllAges from "../components/BooksForAllAges";

const Home = () => {
  useEffect(() => {
    document.title = "DeerBooks";
  }, []);
  return (
    <>
      <Hero />
      <BooksForAllAges />
      <FeaturedCategories />
      <BestSellers />
      <NewArrivals />
      <PopularGenres />
      <ReaderReviews />
      <NewsLetter />
    </>
  );
};

export default Home;
