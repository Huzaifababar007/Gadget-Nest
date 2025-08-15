import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.jpg";
// import logo from "../../assets/logo.png";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../utils/context";
import Cart from "../cart/Cart";
import Search from "./Search/Search";

const Header = () => {
  const [scrolled, setscrolled] = useState(false);
  const [search, setsearch] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const { cartCount } = useContext(Context);

  const HandleScroll = () => {
    const offsets = window.scrollY;
    if (offsets > 200) {
      setscrolled(true);
    } else {
      setscrolled(false);
    }
    console.log(offsets);
  };

  useEffect(() => {
    window.addEventListener("scroll", HandleScroll);
  }, []);

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg nav_sec1 ${
          scrolled ? "sticky_nav1" : ""
        }`}
      >
        <div className="container gx-0">
          <NavLink to="/" className="navbar_logo">
            <img src={logo} alt="" className="logo_main" />
          </NavLink>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/13944/13944814.png"
              width="35"
              height="35"
              alt=""
              title=""
              className="img-small"
            />
          </button>
          <div
            className="collapse navbar-collapse py-md-0 py-3"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto mb-lg-0 nav_ul pb-3 pb-md-0">
              <li className="nav_li">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="nav_li">
                <NavLink to="/about">About</NavLink>
              </li>
              <li className="nav_li">
                <NavLink to="/products">Products</NavLink>
              </li>
              <li className="nav_li">
                <NavLink to="/contact">Contact Us</NavLink>
              </li>
            </ul>
            <form className="cart1 d-flex align-items-center mx-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1040/1040225.png"
                width="26"
                height="26"
                alt=""
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={() => setsearch(true)}
                className="img-small mx-3"
              ></img>
              {/* <i
              className="fa-solid fa-magnifying-glass fs-5 px-2 search_i"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={() => setsearch(true)}
            ></i> */}
              <NavLink to="">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4903/4903878.png"
                  width="26"
                  height="26"
                  alt=""
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                  onClick={() => setShowCart(true)}
                  className="img-small"
                ></img>
                {!!cartCount && (
                  <span className="cart-total--item">{cartCount}</span>
                )}
              </NavLink>
            </form>
          </div>
        </div>
      </nav>
      {showCart && <Cart setShowCart={setShowCart} />}
      {search && <Search setsearch={setsearch} />}
    </>
  );
};

export default Header;
