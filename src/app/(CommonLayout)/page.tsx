import FeaturedTutors from "@/src/components/modules/FeaturedTutors/featuredTutors";
import HeroCarousel from "@/src/components/modules/Home/hero";

export default function Home() {
  return (
    <div>
      <HeroCarousel />
      <FeaturedTutors />
    </div>
  );
}
