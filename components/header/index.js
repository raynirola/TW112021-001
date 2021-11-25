import { ApplicationLogo } from "../shared/applicationLogo";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "Made Visible",
    subtitle: "Design is Intelligence",
    image: "https://assets.website-files.com/5f5f94343affd51e900cd45c/5f5f94343affd552150cd475_heroimage1.jpg",
  },
  {
    id: 2,
    title: "But Significant",
    subtitle: "Make it Simple",
    image: "https://assets.website-files.com/5f5f94343affd51e900cd45c/5f5f94343affd552cb0cd476_heroimage2.jpg",
  },
  {
    id: 3,
    title: "Is Good Design",
    subtitle: "Accessible Design",
    image: "https://assets.website-files.com/5f5f94343affd51e900cd45c/5f5f94343affd5ea700cd48c_heroimage3%20(1).jpg"
  },
]
const Header = () => {

  const [ currentSlide, setCurrentSlide ] = useState(slides[0]);

  useEffect(
    () => {
      const interval = setInterval(
        () => {
          const nextSlide = slides[(currentSlide.id + 1) % slides.length];
          setCurrentSlide(nextSlide);
        },
        3000
      );
      return () => clearInterval(interval);
    },
    [ currentSlide ]
  )

  const SingleSlide = ({ slide }) => {
    return (
      <div className="relative h-screen overflow-hidden inset-0 flex items-center bg-black/20"
           data-aos="fade-left"
           data-aos-mirror="true"
           data-aos-duration="500"
           data-aos-easing="ease-in-out"
      >
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */ }
          <img
            src={ slide.image }
            alt={ slide.subtitle }
            loading="lazy"
            className="w-full h-full object-cover opacity-70 object-center animate-zoomOut"
          />
        </div>
        <div data-aos-delay="700" data-aos="fade-in"
             className="w-full max-w-md text-left text-white leading-none font-BebasNeue relative sm:max-w-5xl mx-auto">
          <p className="tracking-[6px]">{ slide.subtitle }</p>
          <p className="text-[80px] md:text-[160px] uppercase tracking-[5px] mt-4">{ slide.title }</p>
        </div>
      </div>
    )
  }

  return (
    <section className="h-screen relative bg-black overflow-x-hidden">
      <div className="absolute inset-0 grid place-items-center">
        <h1
          className="animate-slide font-BebasNeue text-[70vh] text-white/30 font-bold leading-[1] whitespace-nowrap tracking-[8px]">
          SIMPLICITY IS KEY
        </h1>
      </div>
      <SingleSlide slide={ currentSlide }/>
      <ApplicationLogo/>
      <button className="sm:hidden w-[100px] absolute top-0 right-0 h-[100px] ml-auto hover:bg-white/10 flex-shrink-0">
        <div className="mx-auto w-max">
          <div className="h-px w-[32px] bg-white"/>
          <div className="mt-3 h-px w-[22px] bg-white"/>
        </div>
      </button>
    </section>
  )
}

export default Header;