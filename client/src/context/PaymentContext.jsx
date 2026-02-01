import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PaymentContext = createContext();
const SERVER_URL = import.meta.env.VITE_API_BASE_URL;

export const PaymentContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const placeRazorpayOrder = async (e, shippingAddress, isAccountVerified) => {
    e.preventDefault();
    axios.defaults.withCredentials = true;

    const { name, city, phone, postal_code, street_address } = shippingAddress;
    if (!name || !city || !phone || !postal_code || !street_address)
      return alert("Fill the all address boxes.");
    if (!isAccountVerified) {
      return toast.error("🔐 Account is not verified.");
    }
    try {
      setIsLoading(true);

      // create order in db
      const orderRes = await axios.post(
        `${SERVER_URL}/api/v1/order/create-order-from-cart`,
        {
          paymentMethod: "razorpay",
          shippingAddress: {
            name,
            phone,
            addressLine1: street_address,
            city: city.split(", ")[0],
            state: city.split(", ")[1],
            postalCode: postal_code,
          },
        },
      );

      if (!orderRes.data.success) {
        return toast.error(orderRes.data.message);
      }

      const dbOrder = orderRes.data.data;

      // 2. create razorpay order
      const razorpayRes = await axios.post(
        `${SERVER_URL}/api/v1/payment/create-razorpay-order`,
        {
          amount: dbOrder.pricing.totalPayable,
          reciept: dbOrder.orderId,
        },
      );

      const razorpayOrder = razorpayRes.data.order;

      // 3. open razorpay
      const options = {
        key: import.meta.env.VITE_RAZORPAY_API_KEY,
        amount: razorpayOrder.amount,
        currency: "INR",
        name: "Booksky",
        description: "Secure Payment",
        order_id: razorpayOrder.id,

        handler: async (response) => {
          const verifyRes = await axios.post(
            `${SERVER_URL}/api/v1/payment/verify-razorpay-payment`,
            {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              orderId: dbOrder.orderId,
            },
          );

          if (verifyRes.data.success) {
            navigate("/orders", { replace: true });
            scrollTo(0, 0);
            toast.success("Payment Successfull");
          }
        },

        prefill: {
          name: "Deer Books",
          email: "deerbooks@support.com",
          contact: "+91788242424",
        },

        theme: {
          color: "#3E2723",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();

      razorpay.on("payment.failed", function () {
        toast.error("Payment failed");
      });
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const value = { isLoading, placeRazorpayOrder };

  return (
    <PaymentContext.Provider value={value}>{children}</PaymentContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const usePaymentContext = () => {
  const context = useContext(PaymentContext);
  return context;
};
