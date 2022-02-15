import "./SectionOurProducts.css";
import product1 from "../assets/img/product-1.png";
import product2 from "../assets/img/product-2.png";
import product3 from "../assets/img/product-3.png";
import Modal from "./Modal";
import useModal from "../hooks/useModal";
const SectionOurProducts = () => {
  const [isOpen, openModal, closeModal] = useModal();
  const [isOpen2, openModal2, closeModal2, openModalStopEventDefault2] =
    useModal();
  function stopDefault(e) {
    e.preventDefault();
    openModal();
  }
  return (
    <>
      {
        <Modal isOpen={isOpen} closeModal={closeModal}>
          <h3 className="modal-products">Product added successfully :)</h3>
        </Modal>
      }
      {
        <Modal isOpen={isOpen2} closeModal={closeModal2}>
          <article className="article-container-modal-information-products">
            <div>
              <h5>Fresh Coffe</h5>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Provident modi, quaerat cum repellendus voluptatum porro,
                aliquam incidunt ipsam, eaque labore doloremque accusantium
              </p>

              <ul>
                <li>Lorrem1</li>
                <li>Lorrem2</li>
                <li>Lorrem3</li>
              </ul>
            </div>
          </article>
        </Modal>
      }

      <section id="section-our-products" className="section-our-products">
        <h2>
          <span>our</span> products
        </h2>
        <div className="div-container-grid-products">
          <article>
            <div className="div-container-icons-products">
              <a
                onClick={stopDefault}
                href="sd"
                className="fas fa-shopping-cart"
              ></a>
              <a href="as" className="fas fa-heart"></a>
              <a
                onClick={openModalStopEventDefault2}
                href="sd"
                className="fas fa-eye"
              ></a>
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
              <a
                onClick={stopDefault}
                href="sd"
                className="fas fa-shopping-cart"
              ></a>
              <a href="as" className="fas fa-heart"></a>
              <a
                onClick={openModalStopEventDefault2}
                href="sd"
                className="fas fa-eye"
              ></a>
            </div>
            <figure>
              <img src={product2} alt="" />
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
              <a
                onClick={stopDefault}
                href="sd"
                className="fas fa-shopping-cart"
              ></a>
              <a href="as" className="fas fa-heart"></a>
              <a
                onClick={openModalStopEventDefault2}
                href="sd"
                className="fas fa-eye"
              ></a>
            </div>
            <figure>
              <img src={product3} alt="" />
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
