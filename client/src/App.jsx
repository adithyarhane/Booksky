import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Booklist from "./pages/Booklist";
import BookDetails from "./pages/BookDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyAndPolicy from "./pages/PrivacyAndPolicy";
import Terms from "./pages/Terms";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import TrackOrder from "./pages/TrackOrder";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import VerifyAccount from "./pages/VerifyAccount";
import ResetPassword from "./pages/ResetPassword";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import Collections from "./pages/Collections";
import NewReleases from "./pages/NewReleases";
import BestSellersList from "./pages/BestSellersList";
import Checkout from "./pages/Checkout";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/privacy-policy" element={<PrivacyAndPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/book-list/*" element={<Booklist />} />
        <Route path="/collections/*" element={<Collections />} />
        <Route path="/new-releases" element={<NewReleases />} />
        <Route path="/bestsellers" element={<BestSellersList />} />
        <Route path="/book-details/:slug/:bookId" element={<BookDetails />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/verify-account" element={<VerifyAccount />} />
          <Route path="/track-order/:orderId" element={<TrackOrder />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<Orders />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
