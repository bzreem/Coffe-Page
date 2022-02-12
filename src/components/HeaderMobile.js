import logo from "../assets/img/logo.png";
import search from "../assets/logos/search.svg";
import trolley from "../assets/logos/trolley.png";
import menu from "../assets/logos/menu.svg";
import "./Header.css";
import { useEffect } from "react";
import InputSearch from "./InputSearch";
import Trolley from "./TrolleyContainer";
const HeaderMobile = () => {
  useEffect(() => {
    const $containerInputSearch = document.querySelector(
      ".div-container-input-search"
    );

    const $containerTrolley = document.querySelector(".trolly-active");

    const $containerMenuHamburguer = document.querySelector(
      ".container-menu-hamburguer"
    );

    function clickElement(e) {
      if (e.target.matches(".img-search")) {
        e.preventDefault();
        $containerMenuHamburguer.classList.remove("active-function-menu");
        $containerTrolley.classList.remove("active-function-menu");
        $containerInputSearch.classList.toggle("active-function-menu");
      } else if (e.target.matches(".img-trolley")) {
        e.preventDefault();
        $containerMenuHamburguer.classList.remove("active-function-menu");
        $containerInputSearch.classList.remove("active-function-menu");
        $containerTrolley.classList.toggle("active-function-menu");
      } else if (e.target.matches(".img-menu")) {
        e.preventDefault();
        $containerInputSearch.classList.remove("active-function-menu");
        $containerTrolley.classList.remove("active-function-menu");
        $containerMenuHamburguer.classList.toggle("active-function-menu");
      }
    }

    document.addEventListener("click", clickElement);

    function scrollEvent() {
      $containerMenuHamburguer.classList.remove("active-function-menu");
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
    <>
      <header className="primary-header">
        <nav>
          <div className="div-img-container">
            <figure>
              <img src={logo} alt="logo" />
            </figure>
          </div>

          <div className="div-container-shortcuts">
            <a className="fas fa-search img-search" href="#f"></a>

            <a className="fas fa-shopping-cart img-trolley" href="#f"></a>

            <a className="fas fa-bars img-menu" href="#f"></a>
          </div>
        </nav>

        <div className="div-container-icons-function">
          {<InputSearch />}

          {<Trolley />}

          <div className="div-container-menu">
            <div className="div-container-products-trolley container-menu-hamburguer">
              <article className="article-container-menu-a">
                <a href="#section-home">Home</a>
                <a href="#section-about">About</a>
                <a href="#section-our-menu">Menu</a>
                <a href="#section-our-products">Products</a>
                <a href="#section-customers">Review</a>
                <a href="#section-contact">Contact</a>
                <a href="#section-our-blogs">Blogs</a>
              </article>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderMobile;
