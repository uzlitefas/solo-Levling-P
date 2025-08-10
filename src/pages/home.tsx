import About from "@/components/about/about";
import { Carousel3D } from "@/components/carusel/carusel-3d";
import Courses from "@/components/courses/courses";
import Hero from "@/components/hero/hero";
import Footer from "@/components/shared/footer";
import Testimonials from "@/components/testimonials/testimonials";
import { carouselItems } from "@/constants";

const Home = () => {
  return (
    <div>
      <Hero />
      <Courses />
      <About />
      <Carousel3D
        items={carouselItems}
        autoPlay={true}
        autoPlayInterval={5000}
        showIndicators={true}
        className="mb-16"
      />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
