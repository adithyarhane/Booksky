import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { UIContextProvider } from "./context/UIContext.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { BookContextProvider } from "./context/BookContext.jsx";
import { ReviewContextProvider } from "./context/ReviewContext.jsx";
import { WishlistContextProvider } from "./context/WishlistContext.jsx";
import { CartContextProvider } from "./context/CartContext.jsx";
import { PaymentContextProvider } from "./context/PaymentContext.jsx";
import { OrderContextProvider } from "./context/OrderContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthContextProvider>
      <CartContextProvider>
        <WishlistContextProvider>
          <BookContextProvider>
            <ReviewContextProvider>
              <PaymentContextProvider>
                <OrderContextProvider>
                  <UIContextProvider>
                    <App />
                  </UIContextProvider>
                </OrderContextProvider>
              </PaymentContextProvider>
            </ReviewContextProvider>
          </BookContextProvider>
        </WishlistContextProvider>
      </CartContextProvider>
    </AuthContextProvider>
  </BrowserRouter>,
);
