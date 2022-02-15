import { useEffect } from "react";
import logo from "../assets/img/logo.png";
import "./Header.css";
import InputSearch from "./InputSearch";
import Trolley from "./TrolleyContainer";
const HeaderDesktop = ({ trolley, setTrolley }) => {
  useEffect(() => {
    const $containerInputSearch = document.querySelector(
      ".div-container-input-search"
    );

    const $containerTrolley = document.querySelector(".trolly-active");
    function clickElement(e) {
      if (e.target.matches(".img-search")) {
        e.preventDefault();
        $containerTrolley.classList.remove("active-function-menu");
        $containerInputSearch.classList.toggle("active-function-menu");
      } else if (e.target.matches(".img-trolley")) {
        e.preventDefault();
        $containerInputSearch.classList.remove("active-function-menu");
        $containerTrolley.classList.toggle("active-function-menu");
      }
    }

    document.addEventListener("click", clickElement);

    function scrollEvent() {
      $containerTrolley.classList.remove("active-function-menu");
      $containerInputSearch.classList.remove("active-function-menu");
    }

    window.addEventListener("scroll", scrollEvent);

    return () => {
      document.removeEventListener("click", clickElement);
      window.removeEventListener("scroll", scrollEvent);
    };
  }, []);
  return (
    <header className="primary-header">
      <nav>
        <div className="div-img-container">
          <figure>
            <img src={logo} alt="logo" />
          </figure>
        </div>

        <div className="div-menu-section">
          <a href="#section-home">HOME</a>
          <a href="#section-about">ABOUT</a>
          <a href="#section-our-menu">MENU</a>
          <a href="#section-our-products">PRODUCTS</a>
          <a href="#section-customers">REVIEW</a>
          <a href="#section-contact">CONTACT</a>
          <a href="#section-our-blogs">BLOGS</a>
        </div>

        <div className="div-container-shortcuts">
          <div>
            <a className="fas fa-search img-search" href="#f"></a>

            <a className="fas fa-shopping-cart img-trolley" href="#f"></a>
          </div>
        </div>
      </nav>

      <div className="div-container-icons-function">
        {<InputSearch />}

        {<Trolley trolley={trolley} setTrolley={setTrolley} />}
      </div>
    </header>
  );
};

export default HeaderDesktop;
