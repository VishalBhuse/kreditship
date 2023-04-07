import { Route, Routes } from "react-router-dom";
import About from "./Component/About/About";
import Faq from "./Component/FAQ/Faq";
import Footer from "./Component/Footer/Footer";
import Home from "./Component/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
