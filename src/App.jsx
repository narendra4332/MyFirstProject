import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "./Firebase";
import { doc, getDoc } from "firebase/firestore";

import Product from "./Pages/Products/Product";
import Cart from "./Pages/Cart/Cart";
import ChecKout from "./Pages/Checkout/ChecKout";
import ThankYou from "./Pages/Thankyou/Thankyou";
import Header from "./Components/Header/Header";
import About from "./Pages/About/About";
import ProductCard from "./Components/Main/ProductCard";
import Footer from "./Components/Footer/Footer";
import Contact from "./Pages/Contact/Contact";
import Orders from "./Pages/Orders/Orders";
import "./App.css";
import Auth from "./Pages/Authantication/Auth";

function App() {
  const [cart, setCart] = useState([]);
  const [admin, setAdmin] = useState(null);
  const [adminRole, setAdminRole] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        setAdmin(null);
        setAdminRole(null);
        return;
      }

      const ref = doc(db, "users", currentUser.uid);
      const snap = await getDoc(ref);

      if (snap.exists() && snap.data().role === "admin") {
        setAdmin(currentUser);
        setAdminRole("admin");
      } else {
        signOut(auth);
        setAdmin(null);
        setAdminRole(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleLogout = async () => {
    await signOut(auth);
    setAdmin(null);
    setAdminRole(null);
  };

  return (
    <Router basename="/">
      <Header cart={cart} userRole={adminRole} handleLogout={handleLogout} />

      <Routes>
        <Route path="/" element={<ProductCard />} />
        <Route path="/about" element={<About />} />
        <Route path="/Product" element={<Product addToCart={addToCart} />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route
          path="/checkout"
          element={<ChecKout cart={cart} setCart={setCart} />}
        />
        <Route path="/thankyou" element={<ThankYou />} />

        <Route path="/admin" element={<Auth />} />

        {adminRole === "admin" && <Route path="/Orders" element={<Orders />} />}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
