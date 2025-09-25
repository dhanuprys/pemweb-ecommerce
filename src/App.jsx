import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import DetailPage from "./pages/DetailPage";
import CheckoutPage from "./pages/CheckoutPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/product/:id" element={<DetailPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Route>
    </Routes>
  );
}

export default App;
