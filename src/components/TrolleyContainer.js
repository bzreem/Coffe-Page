import { useEffect, useState } from "react";
import cardItem1 from "../assets/img/cart-item-1.png";
import cardItem2 from "../assets/img/cart-item-2.png";
import cardItem3 from "../assets/img/cart-item-3.png";
import cardItem4 from "../assets/img/cart-item-4.png";
const initialTrolleyConst = [
  { id: 1, img: cardItem1, name: "Cart Item 01", price: "$15.99/-" },
  { id: 2, img: cardItem2, name: "Cart Item 02", price: "$15.99/-" },
  { id: 3, img: cardItem3, name: "Cart Item 03", price: "$15.99/-" },
  { id: 4, img: cardItem4, name: "Cart Item 04", price: "$15.99/-" },
];
const Trolley = ({ trolley, setTrolley }) => {
  const [initialTrolley, setInitialTrolley] = useState(initialTrolleyConst);

  useEffect(() => {
    if (!trolley) return;
    setInitialTrolley([...initialTrolleyConst, ...trolley]);
  }, [trolley]);

  const deleteProduct = (id) => {
    const newTrolley = trolley.filter((el) => el.id !== id);
    setTrolley(newTrolley);
  };

  return (
    <>
      <div className="div-container-products-trolley trolly-active">
        {initialTrolley.map((el, index) => {
          return (
            <article key={index}>
              <figure>
                <img src={el.img} alt="" />
              </figure>
              <div>
                <h3>{el.name}</h3>
                <span>{el.price}</span>
              </div>
              <span
                onClick={() => deleteProduct(el.id)}
                className="span-delete-product"
              >
                x
              </span>
            </article>
          );
        })}

        <a href="sd">Checkout Now</a>
      </div>
    </>
  );
};

export default Trolley;
