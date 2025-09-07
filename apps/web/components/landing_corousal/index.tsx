import {Carousel_006}from "../ui/skiper-ui/skiper54"
export const CustomCarouselLanding = () => {
  const images = [
   
    {
      src: "https://vinayakpandeycode.github.io/GreenArray-Project/fiddleleaf.jpeg",
      alt: "Description 2",
      title: "Image Title 2",
    },
    {
      src: "https://vinayakpandeycode.github.io/GreenArray-Project/fiddleleaf.jpeg",
      alt: "Description 2",
      title: "Image Title 2",
    },
    {
      src: "https://vinayakpandeycode.github.io/GreenArray-Project/fiddleleaf.jpeg",
      alt: "Description 2",
      title: "Image Title 2",
    },
    {
      src: "https://vinayakpandeycode.github.io/GreenArray-Project/fiddleleaf.jpeg",
      alt: "Description 2",
      title: "Image Title 2",
    },
    {
      src: "https://vinayakpandeycode.github.io/GreenArray-Project/fiddleleaf.jpeg",
      alt: "Description 2",
      title: "Image Title 2",
    },
    {
      src: "https://vinayakpandeycode.github.io/GreenArray-Project/fiddleleaf.jpeg",
      alt: "Description 2",
      title: "Image Title 2",
    },
    // ... more images
  ];

  return (
    <Carousel_006
      images={images}
      showPagination={false}
      showNavigation={false}
      loop={true}
      autoplay={true}
    />
  );
};
