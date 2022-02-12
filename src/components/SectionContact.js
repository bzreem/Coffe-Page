import "./SectionContact.css";
const SectionContact = () => {
  return (
    <>
      <section id="section-contact" className="section-contact">
        <h2>
          contact <span>us</span>
        </h2>

        <article>
          <figure>
            <iframe
              title="sd"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.6727375218716!2d-70.54756948418746!3d-33.43177550394136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662ce60036c9f7b%3A0x310c5e359bfa9086!2sParque%20Padre%20Hurtado!5e0!3m2!1sen!2scl!4v1644553969076!5m2!1sen!2scl"
            ></iframe>
          </figure>

          <div className="div-container-form">
            <h3>get in touch</h3>
            <form>
              <div>
                <span className="fas fa-user"></span>
                <input type="text" placeholder="name" />
              </div>
              <div>
                <span className="fas fa-envelope"></span>
                <input type="email" placeholder="email" />
              </div>
              <div>
                <span className="fas fa-phone"></span>
                <input type="number" placeholder="number" />
              </div>
            </form>
            <a href="sd">Contact Now</a>
          </div>
        </article>
      </section>
    </>
  );
};

export default SectionContact;
