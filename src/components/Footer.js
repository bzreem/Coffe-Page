import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer className="primary-footer">
        <div className="div-container-social-networks">
          <a
            target="_blank"
            rel="noopener"
            className="fab fa-github"
            href="https://github.com/bzreem"
          ></a>
          <a
            target="_blank"
            rel="noopener"
            className="fab fa-linkedin"
            href="https://www.linkedin.com/in/juan-pablo-lagos-28233821a"
          ></a>
          <a
            target="_blank"
            rel="noopener"
            className="fab fa-twitter"
            href="https://twitter.com/juanpa925"
          ></a>
        </div>

        <div className="div-container-menu-footer">
          <article>
            <a href="#section-home">Home</a>
            <a href="#section-about">About</a>
            <a href="#section-our-menu">Menu</a>
            <a href="#section-our-products">Products</a>
            <a href="#section-customers">Review</a>
            <a href="#section-contact">Contact</a>
            <a href="#section-our-blogs">Blogs</a>
          </article>
        </div>
      </footer>
    </>
  );
};

export default Footer;
