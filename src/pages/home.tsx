import About from "@/components/about/about";
import Courses from "@/components/courses/courses";
import Hero from "@/components/hero/hero";
import Footer from "@/components/shared/footer";
import Testimonials from "@/components/testimonials/testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <Courses />
      <About />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
