import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import CheckoutPage from "./pages/CheckoutPage";
import Header from "./components/Header";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CartProvider } from "./context/CartContext";

const theme = createTheme({
  spacing: 8, // This sets the spacing function, you can customize it as needed
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </CartProvider>
    </ThemeProvider>
  );
};

export default App;
