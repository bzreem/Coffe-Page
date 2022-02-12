import "./SectionOurProducts.css";
import product1 from "../assets/img/product-1.png";
import product2 from "../assets/img/product-2.png";
import product3 from "../assets/img/product-3.png";
const SectionOurProducts = () => {
  return (
    <>
      <section id="section-our-products" className="section-our-products">
        <h2>
          <span>our</span> products
        </h2>
        <div className="div-container-grid-products">
          <article>
            <div className="div-container-icons-products">
              <a href="sd" className="fas fa-shopping-cart"></a>
              <a href="as" className="fas fa-heart"></a>
              <a href="sd" className="fas fa-eye"></a>
            </div>
            <figure>
              <img src={product1} alt="" />
            </figure>
            <h5>Freshh Coffee</h5>
            <div className="div-container-star-products">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <div className="div-container-price">
              <h4>$15.99</h4>
              <span>20.99</span>
            </div>
          </article>

          <article>
            <div className="div-container-icons-products">
              <a href="sd" className="fas fa-shopping-cart"></a>
              <a href="as" className="fas fa-heart"></a>
              <a href="sd" className="fas fa-eye"></a>
            </div>
            <figure>
              <img src={product1} alt="" />
            </figure>
            <h5>Freshh Coffee</h5>
            <div className="div-container-star-products">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <div className="div-container-price">
              <h4>$15.99</h4>
              <span>20.99</span>
            </div>
          </article>

          <article>
            <div className="div-container-icons-products">
              <a href="sd" className="fas fa-shopping-cart"></a>
              <a href="as" className="fas fa-heart"></a>
              <a href="sd" className="fas fa-eye"></a>
            </div>
            <figure>
              <img src={product1} alt="" />
            </figure>
            <h5>Freshh Coffee</h5>
            <div className="div-container-star-products">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <div className="div-container-price">
              <h4>$15.99</h4>
              <span>20.99</span>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default SectionOurProducts;
