import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/frontpages/HomePage";
import MainLayout from "./layouts/MainLayout";
import DetailPage from "./pages/frontpages/DetailPage";
import CheckoutPage from "./pages/frontpages/CheckoutPage";
import CartPage from "./pages/frontpages/CartPage";
import AdminLayout from "./layouts/AdminLayout";
import AdminDashboard from "./pages/adminpages/AdminDashboard";
import ProductForm from "./pages/adminpages/ProductForm";
import ProductEdit from "./pages/adminpages/ProductEdit";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/product/:id" element={<DetailPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        {/* Default route di dalam AdminLayout */}
        {/* mapping path ke component page, gunakan autocompletion */}
        <Route path="dashboard" element={<AdminDashboard />} />
        {/* <Route path="about" element={<AboutPage />} /> */}
        <Route path="add-product" element={<ProductForm />} />
        <Route path="edit-product/:id" element={<ProductEdit />} />
      </Route>
    </Routes>
  );
}

export default App;
