import imgAboutUs from "../assets/img/about-img.jpeg";
import "./SectionAbout.css";
const SectionAbout = () => {
  return (
    <section id="section-about" className="section-about">
      <h2>
        about <span>us</span>
      </h2>

      <article>
        <figure>
          <img src={imgAboutUs} alt="" />
        </figure>

        <div>
          <h3>What Makes Our Coffee Special?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            possimus illum, repellendus maiores adipisci, voluptate nisi dicta
            facilis repudiandae ex
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            dolore recusandae nesciunt hic deleniti esse,
          </p>
          <a href="sd">Learn More</a>
        </div>
      </article>
    </section>
  );
};

export default SectionAbout;
