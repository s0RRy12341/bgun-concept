import HeroSection from "@/components/home/HeroSection";
import BrandValues from "@/components/home/BrandValues";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import BlogPreview from "@/components/home/BlogPreview";
import Newsletter from "@/components/home/Newsletter";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandValues />
      <FeaturedProducts />
      <BlogPreview />
      <Newsletter />
    </>
  );
}
