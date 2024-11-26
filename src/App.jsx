import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { useState, useEffect } from "react";
import SignUp from "./components/SignUp/SignUp";
import Dashboard from "./pages/Dashboard/Dashboard";
import Product from "./pages/Product/Product";
import Productlist from "./pages/Product/Productlist";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in by checking localStorage or any authentication logic
    const storedLoginStatus = localStorage.getItem("isLoggedIn");
    if (storedLoginStatus === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handlingLogin = () => {
    // Simulate a login function and set isLoggedIn state to true
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true"); // Save login status
  };

  const handleLogout = () => {
    // Logout function to reset login state
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn"); // Clear login status
  };

  return (
    <>
      <Navbar
        setShowLogin={setShowLogin}
        isLoggedIn={isLoggedIn}
        handleLogout={handleLogout}
      />

      {showLogin && (
        <SignUp setShowLogin={setShowLogin} handlingLogin={handlingLogin} />
      )}

      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/dashboard" /> : <Home />}/>
        <Route path="/dashboard" element={isLoggedIn ? <Dashboard/> : <Home/>} />
        <Route path="/product" element={isLoggedIn ? <Product/> : <Home/>} />
        <Route path="/productlist" element={isLoggedIn ? <Productlist/> : <Home/>} />
      </Routes>
    </>
  );
}

export default App;
