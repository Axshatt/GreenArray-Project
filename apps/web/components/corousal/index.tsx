import { Carousel_002 } from "../ui/skiper-ui/skiper48";

// Using the carousel component with custom images
export const CustomCarousel = () => {
  const images = [
    {
      src: "https://vinayakpandeycode.github.io/GreenArray-Project/birdofparadise.jpeg",
      alt: "Description 1",
    },
    {
      src: "https://vinayakpandeycode.github.io/GreenArray-Project/fiddleleaf.jpeg",
      alt: "Description 2",
    },
    {
      src: "https://vinayakpandeycode.github.io/GreenArray-Project/fiddleleaf.jpeg",
      alt: "Description 2",
    },
    {
      src: "https://vinayakpandeycode.github.io/GreenArray-Project/fiddleleaf.jpeg",
      alt: "Description 2",
    },
    {
      src: "https://vinayakpandeycode.github.io/GreenArray-Project/fiddleleaf.jpeg",
      alt: "Description 2",
    },
    {
      src: "https://vinayakpandeycode.github.io/GreenArray-Project/fiddleleaf.jpeg",
      alt: "Description 2",
    },
    // ... more images
  ];

  return (
    <Carousel_002
      images={images}
      showPagination={true}
      showNavigation={false}
      loop={true}
      autoplay={true}
      spaceBetween={40}
    />
  );
};
