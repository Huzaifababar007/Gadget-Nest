import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NewsLetter from "./components/Home/NewsLetter/NewsLetter";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Contact from "./components/contact/Contact";
import AllProducts from "./components/Products/AllProducts/AllProducts";
import AppContext from "./utils/context";
import SingleProducts from "./components/SingleProducts/SingleProducts";
import Category from "./components/Category/Category";
// import SingleProducts from "./components/SingleProducts/SingleProducts";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppContext>
          <Header />
          {/* <SingleProducts /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<AllProducts />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/product/:id" element={<SingleProducts />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <NewsLetter />
          <Footer />
        </AppContext>
      </BrowserRouter>
    </>
  );
}

export default App;
