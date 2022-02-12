import "./SectionOurMenu.css";
import menu1 from "../assets/img/menu-1.png";
import menu2 from "../assets/img/menu-2.png";
import menu3 from "../assets/img/menu-3.png";
import menu4 from "../assets/img/menu-4.png";
import menu5 from "../assets/img/menu-5.png";
import menu6 from "../assets/img/menu-6.png";
const SectionOurMenu = () => {
  return (
    <>
      <section id="section-our-menu" className="section-our-menu">
        <h2>
          <span>our</span> menu
        </h2>

        <div className="div-container-grid-menu">
          <article>
            <figure>
              <img src={menu1} alt="" />
            </figure>
            <h5>Tasty And Healty</h5>
            <div className="div-container-price">
              <h4>$15.99</h4>
              <span>20.99</span>
            </div>
            <a href="sad">Add To Cart</a>
          </article>

          <article>
            <figure>
              <img src={menu2} alt="" />
            </figure>
            <h5>Tasty And Healty</h5>
            <div className="div-container-price">
              <h4>$15.99</h4>
              <span>20.99</span>
            </div>
            <a href="sad">Add To Cart</a>
          </article>

          <article>
            <figure>
              <img src={menu3} alt="" />
            </figure>
            <h5>Tasty And Healty</h5>
            <div className="div-container-price">
              <h4>$15.99</h4>
              <span>20.99</span>
            </div>
            <a href="sad">Add To Cart</a>
          </article>

          <article>
            <figure>
              <img src={menu4} alt="" />
            </figure>
            <h5>Tasty And Healty</h5>
            <div className="div-container-price">
              <h4>$15.99</h4>
              <span>20.99</span>
            </div>
            <a href="sad">Add To Cart</a>
          </article>

          <article>
            <figure>
              <img src={menu5} alt="" />
            </figure>
            <h5>Tasty And Healty</h5>
            <div className="div-container-price">
              <h4>$15.99</h4>
              <span>20.99</span>
            </div>
            <a href="sad">Add To Cart</a>
          </article>

          <article>
            <figure>
              <img src={menu6} alt="" />
            </figure>
            <h5>Tasty And Healty</h5>
            <div className="div-container-price">
              <h4>$15.99</h4>
              <span>20.99</span>
            </div>
            <a href="sad">Add To Cart</a>
          </article>
        </div>
      </section>
    </>
  );
};

export default SectionOurMenu;
