import HeroSection from "@/components/home/HeroSection";
import BrandValues from "@/components/home/BrandValues";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Testimonials from "@/components/home/Testimonials";
import BlogPreview from "@/components/home/BlogPreview";
import Newsletter from "@/components/home/Newsletter";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandValues />
      <FeaturedProducts />
      <Testimonials />
      <BlogPreview />
      <Newsletter />
    </>
  );
}
