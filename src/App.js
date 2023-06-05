import { Routes, Route } from "react-router-dom"
import "./App.css";
import Mockman from "mockman-js";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products/Products";
import { Product } from "./pages/Product/Product";
import { Cart } from "./pages/Cart/Cart";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>

    </div>
  );
}

export default App;
