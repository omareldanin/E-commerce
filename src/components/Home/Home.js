import "./home.scss";
import Header from "./header/Header";
import About from "./about/About";
import Featurs from "./features/Features";
import Testimonials from "./testimonials/Testimonials";
import Blogs from "./blogs/BLogs";
import Video from "./video/Video";
const Home = () => {
  const title = document.getElementsByTagName("title");
  title[0].innerText = "Boom Theme";
  return (
    <>
      <Header />
      <About />
      <Featurs />
      <Testimonials />
      <Video />
      <Blogs />
    </>
  );
};
export default Home;
