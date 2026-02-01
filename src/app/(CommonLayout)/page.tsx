import Categories from "@/src/components/modules/Categories/Categories";
import FeaturedTutors from "@/src/components/modules/FeaturedTutors/featuredTutors";
import HeroCarousel from "@/src/components/modules/Home/hero";
import HowItWorks from "@/src/components/modules/HowItWorks/howItWorks";

export default function Home() {
  return (
    <div>
      <HeroCarousel />
      <Categories />
      <FeaturedTutors />
      <HowItWorks />
    </div>
  );
}
