import Navigation from "@/components/Navbar";
import { CustomTextRoll } from "@/components/text-rollnavigation";
import { LineFollow } from "@/components/LinePath";
import TypographyH1 from "@/components/topography/Header";
import { CustomCarousel } from "@/components/corousal";
import { CustomCarouselLanding } from "@/components/landing_corousal";

export default function Page() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-14 py-6 md:py-10 font-inter gap-4">
        <CustomTextRoll />
        <Navigation />
      </div>

      {/* Landing Carousel */}
      <div className="w-full mt-[10vh]">
        <CustomCarouselLanding />
      </div>

      {/* Carousel + Typography Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20 text-left mt-20 md:mt-40 px-6 md:px-[8vh]">
        {/* Carousel */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-full max-w-2xl">
            <CustomCarousel />
          </div>
        </div>

        {/* Typography */}
        <div className="w-full lg:w-1/2">
          <TypographyH1 />
        </div>
      </div>
    </div>
  );
}
