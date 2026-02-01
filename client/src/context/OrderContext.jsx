/* eslint-disable react-refresh/only-export-components */
import axios from "axios";
import { createContext, useContext, useState } from "react";
import generateTrackingSteps from "../utils/generateTrackingSteps";

const OrderContext = createContext();
const SERVER_URL = import.meta.env.VITE_API_BASE_URL;

export const OrderContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [ordersData, setOrdersData] = useState();
  const [orderData, setOrderData] = useState();
  const [trackSteps, setTrackSteps] = useState([]);
  const [address, setAddress] = useState({
    name: "",
    phone: "",
    street_address: "",
    city: "",
    postal_code: "",
  });

  const getOrdersData = async () => {
    axios.defaults.withCredentials = true;
    try {
      setIsLoading(true);
      const res = await axios.get(`${SERVER_URL}/api/v1/order/data`);
      if (res.data.success) {
        setOrdersData(res.data.data);
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const getOrderData = async (orderId) => {
    axios.defaults.withCredentials = true;
    try {
      setIsLoading(true);
      const res = await axios.get(`${SERVER_URL}/api/v1/order/${orderId}`);
      if (res.data.success) {
        setOrderData(res.data.data);
        setTrackSteps(generateTrackingSteps(res.data.data));
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const value = {
    isLoading,
    ordersData,
    getOrdersData,
    getOrderData,
    orderData,
    trackSteps,
    address,
    setAddress,
  };

  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
};

export const useOrderContext = () => {
  const context = useContext(OrderContext);
  return context;
};
