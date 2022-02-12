import "./SectionOurBlogs.css";
import blog1 from "../assets/img/blog-1.jpeg";
import blog2 from "../assets/img/blog-2.jpeg";
import blog3 from "../assets/img/blog-3.jpeg";

const SectionOurBlogs = () => {
  return (
    <>
      <section id="section-our-blogs" className="section-our-blogs">
        <h2>
          <span>our</span> blogs
        </h2>

        <div className="div-container-grid-blogs">
          <article>
            <figure>
              <img src={blog1} alt="" />
            </figure>

            <div>
              <h3>Tasty And Refreshing Coffee</h3>
              <h4>By Admin / 21st May, 2022</h4>
              <p>
                Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Non,
                Dicta.
              </p>
              <a href="ad">Read More</a>
            </div>
          </article>

          <article>
            <figure>
              <img src={blog2} alt="" />
            </figure>

            <div>
              <h3>Tasty And Refreshing Coffee</h3>
              <h4>By Admin / 21st May, 2022</h4>
              <p>
                Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Non,
                Dicta.
              </p>
              <a href="ad">Read More</a>
            </div>
          </article>

          <article>
            <figure>
              <img src={blog3} alt="" />
            </figure>

            <div>
              <h3>Tasty And Refreshing Coffee</h3>
              <h4>By Admin / 21st May, 2022</h4>
              <p>
                Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Non,
                Dicta.
              </p>
              <a href="ad">Read More</a>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default SectionOurBlogs;
