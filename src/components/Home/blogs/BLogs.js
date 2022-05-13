import "./blogs.scss";
import BLogItem from "./BlogItem";
import blog1 from "../../../Images/blog1.webp";
import blog2 from "../../../Images/blog2.webp";
import blog3 from "../../../Images/blog3.webp";
const Blogs = () => {
  return (
    <section className="blogs">
      <div className="container-fluid">
        <div className="head">
          <span></span>
          <p>Good treble performance</p>
          <h1>Rhythmic Music Blog</h1>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
          <BLogItem image={blog1} />
          <BLogItem image={blog2} />
          <BLogItem image={blog3} />
        </div>
      </div>
    </section>
  );
};
export default Blogs;
