import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import InvoicePage from "./pages/InvoicePage";
import CustomerPage from "./pages/CustomerPage";
import StatisticsPage from "./pages/StatisticsPage";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/invoices" element={<InvoicePage />} />
        <Route path="/customers" element={<CustomerPage />} />
        <Route path="/statistics" element={<StatisticsPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
