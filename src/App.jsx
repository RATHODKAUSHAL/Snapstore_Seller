import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";
import SignUp from "./components/SignUp/SignUp";

function App() {
  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
    {
      showLogin ? <SignUp setShowLogin={setShowLogin}/>:<></>
    }
       <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
