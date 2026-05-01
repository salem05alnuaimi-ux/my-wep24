import HeroBackground from "@/components/home/HeroBackground";
import FloatingShapes from "@/components/effects/FloatingShapes";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <HeroBackground />
      <FloatingShapes />
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <FeaturedProducts />
      </main>
      <Footer />
    </>
  );
}
