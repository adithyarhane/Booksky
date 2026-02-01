/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const UIContext = createContext();

export const UIContextProvider = ({ children }) => {
  const [viewMode, setViewMode] = useState("grid");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navLinks = [
    { name: "Book List", href: "/book-list" },
    { name: "Collections", href: "/collections" },
    { name: "New Releases", href: "/new-releases" },
    { name: "Best Sellers", href: "/bestsellers" },
  ];

  const categories = [
    "All",
    "Thriller",
    "Mythology",
    "Sci-Fi",
    "Philosophy",
    "Contemporary",
    "Classic",
    "Literature",
    "Self-Help",
    "Fantasy",
  ];

  const handleChange = (element, index, otp, setOtp, inputRefs) => {
    if (isNaN(element.value)) return false;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Focus next input
    if (element.value !== "" && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index, otp, inputRefs) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  // --- NEW: PASTE HANDLER ---
  const handlePaste = (e, otp, inputRefs, setOtp) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").trim();

    // Check if pasted content is numeric
    if (!/^\d+$/.test(pasteData)) return;

    const pasteValues = pasteData.split("").slice(0, 6);
    const newOtp = [...otp];

    pasteValues.forEach((value, index) => {
      newOtp[index] = value;
      if (inputRefs.current[index]) {
        inputRefs.current[index].value = value;
      }
    });

    setOtp(newOtp);

    // Focus the last filled input or the 6th input
    const lastIndex = Math.min(pasteValues.length, 5);
    inputRefs.current[lastIndex].focus();
  };

  const value = {
    isMenuOpen,
    setIsMenuOpen,
    navLinks,
    setIsSidebarOpen,
    isSidebarOpen,
    handleChange,
    handleKeyDown,
    handlePaste,
    viewMode,
    setViewMode,
    categories,
  };
  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

export const useUIContext = () => {
  const context = useContext(UIContext);
  return context;
};
