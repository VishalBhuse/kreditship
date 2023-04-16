import { useRef } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./Component/About/About";
import Faq from "./Component/FAQ/Faq";
import Footer from "./Component/Footer/Footer";
import Home from "./Component/Home/Home";
import Navbar from "./Component/Navbar/Navbar";
import MessengerCustomerChat from "react-messenger-customer-chat";

function App() {
  const myDivRef = useRef(null);
  const handleGetLoanClick = () => {
    // inputRef.current.focus();
    myDivRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Navbar handleGetLoanClick={handleGetLoanClick} />
      <Routes>
        <Route
          path="/"
          element={
            <Home myDivRef={myDivRef} handleGetLoanClick={handleGetLoanClick} />
          }
        />
        <Route path="/about" element={<About myDivRef={myDivRef} />} />
        <Route path="/faq" element={<Faq myDivRef={myDivRef} />} />
      </Routes>
      <Footer handleGetLoanClick={handleGetLoanClick} />

      <MessengerCustomerChat
        pageId="100091637392424"
        appId="241863775003690"
      />
    </>
  );
}

export default App;
