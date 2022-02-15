import "./SectionOurMenu.css";
import menu1 from "../assets/img/menu-1.png";
import menu2 from "../assets/img/menu-2.png";
import menu3 from "../assets/img/menu-3.png";
import menu4 from "../assets/img/menu-4.png";
import menu5 from "../assets/img/menu-5.png";
import menu6 from "../assets/img/menu-6.png";
import Modal from "./Modal";
import useModal from "../hooks/useModal";
import SectionOurProductsElements from "./SectionOurProductsElements";
const SectionOurMenu = ({ trolley, setTrolley }) => {
  const [isOpen, openModal, closeModal] = useModal();
  function stopDefault(e, element) {
    e.preventDefault();
    openModal();
    let newElement = element;
    setTrolley([...trolley, newElement]);
  }

  const objProductos = [
    {
      id: 5,
      img: menu1,
      name: "Tasty And Healty",
      price: "$15.99",
    },

    {
      id: 6,
      img: menu2,
      name: "Tasty And Healty",
      price: "$15.99",
    },

    {
      id: 7,
      img: menu3,
      name: "Tasty And Healty",
      price: "$15.99",
    },

    {
      id: 8,
      img: menu4,
      name: "Tasty And Healty",
      price: "$15.99",
    },

    {
      id: 9,
      img: menu5,
      name: "Tasty And Healty",
      price: "$15.99",
    },

    {
      id: 10,
      img: menu6,
      name: "Tasty And Healty",
      price: "$15.99",
    },
  ];
  return (
    <>
      <section id="section-our-menu" className="section-our-menu">
        {
          <Modal isOpen={isOpen} closeModal={closeModal}>
            <h3 className="modal-products">Product added successfully :)</h3>
          </Modal>
        }
        <h2>
          <span>our</span> menu
        </h2>

        <div className="div-container-grid-menu">
          {objProductos.map((el, index) => (
            <SectionOurProductsElements
              objProductos={el}
              stopDefault={stopDefault}
              key={index}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default SectionOurMenu;
