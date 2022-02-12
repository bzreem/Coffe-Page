import cardItem1 from "../assets/img/cart-item-1.png";
import cardItem2 from "../assets/img/cart-item-2.png";
import cardItem3 from "../assets/img/cart-item-3.png";
import cardItem4 from "../assets/img/cart-item-4.png";
const Trolley = () => {
  return (
    <>
      <div className="div-container-products-trolley trolly-active">
        <article>
          <figure>
            <img src={cardItem1} alt="" />
          </figure>
          <div>
            <h3>Cart Item 01</h3>
            <span>$15.99/-</span>
          </div>
          <span className="span-delete-product">x</span>
        </article>

        <article>
          <figure>
            <img src={cardItem2} alt="" />
          </figure>
          <div>
            <h3>Cart Item 02</h3>
            <span>$15.99/-</span>
          </div>
          <span className="span-delete-product">x</span>
        </article>

        <article>
          <figure>
            <img src={cardItem3} alt="" />
          </figure>
          <div>
            <h3>Cart Item 03</h3>
            <span>$15.99/-</span>
          </div>
          <span className="span-delete-product">x</span>
        </article>

        <article>
          <figure>
            <img src={cardItem4} alt="" />
          </figure>
          <div>
            <h3>Cart Item 04</h3>
            <span>$15.99/-</span>
          </div>
          <span className="span-delete-product">x</span>
        </article>
        <a href="sd">Checkout Now</a>
      </div>
    </>
  );
};

export default Trolley;
