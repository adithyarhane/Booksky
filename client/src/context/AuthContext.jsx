/* eslint-disable react-refresh/only-export-components */
import { useEffect, useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AuthContext = createContext();
const SERVER_URL = import.meta.env.VITE_API_BASE_URL;

export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [resetOtp, setResetOtp] = useState();
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isOtpSubmitted, setIsOtpSubmitted] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);

  const signup = async (e, name, email, password) => {
    e.preventDefault();
    axios.defaults.withCredentials = true;
    try {
      setIsLoading(true);
      const res = await axios.post(`${SERVER_URL}/api/v1/auth/signup`, {
        name,
        email,
        password,
      });
      if (res.data.success) {
        setIsLoggedIn(true);
        getUserData();
        navigate("/");
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (e, email, password, getCart) => {
    e.preventDefault();
    axios.defaults.withCredentials = true;
    try {
      setIsLoading(true);
      const res = await axios.post(`${SERVER_URL}/api/v1/auth/login`, {
        email,
        password,
      });

      if (res.data.success) {
        setIsLoggedIn(true);
        getUserData(res.data.user);
        getCart();
        navigate("/");
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      setIsLoading(true);
      const res = await axios.post(`${SERVER_URL}/api/v1/auth/logout`);

      if (res.data.success) {
        setIsLoggedIn(false);
        setUserData(false);
        navigate("/");
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const sendVerificationOTP = async () => {
    axios.defaults.withCredentials = true;
    try {
      const res = await axios.post(
        `${SERVER_URL}/api/v1/auth/send-verification-otp`,
      );
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/verify-account");
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const verifyAccount = async (e, otp) => {
    e.preventDefault();
    axios.defaults.withCredentials = true;

    try {
      setIsLoading(true);
      const res = await axios.post(`${SERVER_URL}/api/v1/auth/verify-account`, {
        otp,
      });
      if (res.data.success) {
        setIsLoggedIn(true);
        getUserData();
        navigate("/");
        toast.success(res.data.message);
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const sendResetOTP = async (e, email, setIsEmailSent) => {
    e.preventDefault();
    axios.defaults.withCredentials = true;
    try {
      setIsLoading(true);
      const res = await axios.post(`${SERVER_URL}/api/v1/auth/send-reset-otp`, {
        email,
      });
      if (res.data.success) {
        setIsEmailSent(true);
        toast.success(res.data.message);
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const ResetPassword = async (
    e,
    email,
    password,
    resetOtp,
    hasMinLength,
    hasSymbol,
    matches,
  ) => {
    e.preventDefault();

    if (!hasMinLength || !hasSymbol) {
      return alert("Use strong password");
    }
    if (!matches) {
      return alert("Passwords do not match.");
    }

    try {
      setIsLoading(true);
      const res = await axios.post(`${SERVER_URL}/api/v1/auth/reset-password`, {
        email,
        otp: resetOtp,
        newPassword: password,
      });

      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const getUserData = async () => {
    axios.defaults.withCredentials = true;
    if (!isLoggedIn) return;
    try {
      setIsLoading(true);
      const res = await axios.get(`${SERVER_URL}/api/v1/user/data`);
      if (res.data.success) {
        setUserData(res.data.userData);
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
    const getAuthState = async () => {
      axios.defaults.withCredentials = true;
      if (!isLoggedIn) return;
      try {
        setAuthLoading(true);
        const res = await axios.get(`${SERVER_URL}/api/v1/auth/is-auth`);

        if (res.data.success) {
          setIsLoggedIn(true);
          getUserData();
        } else {
          alert(res.data.message);
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        setAuthLoading(false);
      }
    };
    getAuthState();
  }, [isLoggedIn]);

  const value = {
    isLoggedIn,
    setIsLoggedIn,
    signup,
    login,
    logout,
    userData,
    sendVerificationOTP,
    verifyAccount,
    sendResetOTP,
    ResetPassword,
    authLoading,
    email,
    setEmail,
    resetOtp,
    setResetOtp,
    isEmailSent,
    setIsEmailSent,
    isOtpSubmitted,
    setIsOtpSubmitted,
    isLoading,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  return context;
};
