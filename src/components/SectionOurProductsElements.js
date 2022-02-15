const SectionOurProductsElements = ({ objProductos, stopDefault }) => {
  return (
    <article>
      <figure>
        <img src={objProductos.img} alt="" />
      </figure>
      <h5>{objProductos.name}</h5>
      <div className="div-container-price">
        <h4>{objProductos.price}</h4>
        <span>20.99</span>
      </div>
      <a
        onClick={(e) =>
          stopDefault(e, {
            id: objProductos.id,
            img: objProductos.img,
            name: objProductos.name,
            price: objProductos.price,
          })
        }
        href="sad"
      >
        Add To Cart
      </a>
    </article>
  );
};

export default SectionOurProductsElements;
