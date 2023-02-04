import Home from "./pages/Home/Home";
import Checkout from "./pages/Checkout/Checkout";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Login from "./pages/Login/Login";
import { AppContextProvider } from "./contexts/AppContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { AuthContextProvider } from "./contexts/AuthContext";
function App() {
  return (
    <Router>
      <AuthContextProvider>
        <AppContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="productdetail/:id" element={<ProductDetail />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </AppContextProvider>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
