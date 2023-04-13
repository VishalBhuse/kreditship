import { useRef } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./Component/About/About";
import Faq from "./Component/FAQ/Faq";
import Footer from "./Component/Footer/Footer";
import Home from "./Component/Home/Home";
import Navbar from "./Component/Navbar/Navbar";

function App() {
  const inputRef = useRef();

  const handleGetLoanClick = () => {
    inputRef.current.focus();
  };
  return (
    <>
      <Navbar handleGetLoanClick={handleGetLoanClick} />
      <Routes>
        <Route
          path="/"
          element={
            <Home inputRef={inputRef} handleGetLoanClick={handleGetLoanClick} />
          }
        />
        <Route path="/about" element={<About inputRef={inputRef} />} />
        <Route path="/faq" element={<Faq inputRef={inputRef} />} />
      </Routes>
      <Footer handleGetLoanClick={handleGetLoanClick} />
    </>
  );
}

export default App;
