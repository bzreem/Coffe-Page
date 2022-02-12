import "./SectionCustomers.css";
import quote from "../assets/img/quote-img.png";
import picture1 from "../assets/img/pic-1.png";
import picture2 from "../assets/img/pic-2.png";
import picture3 from "../assets/img/pic-3.png";
const SectionCustomers = () => {
  return (
    <>
      <section id="section-customers" className="section-customers">
        <h2>
          <span>customer's</span> review
        </h2>
        <div className="div-container-grid-customers">
          <article>
            <figure>
              <img src={quote} alt="" />
            </figure>

            <div className="div-container-text-customers">
              <p>
                Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Animi
                Nulla Sit Libero Nemo Fuga Sequi Nobis? Necessitatibus Aut
                Laborum, Nisi Quas Eaque Laudantium Consequuntur Iste Ex Aliquam
                Minus Vel? Nemo.
              </p>
            </div>

            <figure>
              <img src={picture1} alt="picture1" />
            </figure>
            <h4>Steve Odium</h4>
            <div className="div-container-star-products">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </article>

          <article>
            <figure>
              <img src={quote} alt="" />
            </figure>

            <div className="div-container-text-customers">
              <p>
                Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Animi
                Nulla Sit Libero Nemo Fuga Sequi Nobis? Necessitatibus Aut
                Laborum, Nisi Quas Eaque Laudantium Consequuntur Iste Ex Aliquam
                Minus Vel? Nemo.
              </p>
            </div>

            <figure>
              <img src={picture2} alt="picture2" />
            </figure>
            <h4>Steve Odium</h4>
            <div className="div-container-star-products">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </article>

          <article>
            <figure>
              <img src={quote} alt="" />
            </figure>

            <div className="div-container-text-customers">
              <p>
                Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Animi
                Nulla Sit Libero Nemo Fuga Sequi Nobis? Necessitatibus Aut
                Laborum, Nisi Quas Eaque Laudantium Consequuntur Iste Ex Aliquam
                Minus Vel? Nemo.
              </p>
            </div>

            <figure>
              <img src={picture3} alt="picture3" />
            </figure>
            <h4>Steve Odium</h4>
            <div className="div-container-star-products">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default SectionCustomers;
