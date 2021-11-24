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
        2000
      );
      return () => clearInterval(interval);
    },
    [ currentSlide ]
  )

  const SingleSlide = ({ slide }) => <div className="relative min-h-full inset-0 flex items-center">
    <div className="absolute inset-0 opacity-80">
      {/* eslint-disable-next-line @next/next/no-img-element */ }
      <img src={ slide.image } alt={ slide.subtitle } loading="lazy" className="w-full h-full object-center object-cover"/>
    </div>
    <div className="w-full text-left text-white leading-none font-BebasNeue relative max-w-5xl mx-auto">
      <p className="tracking-[6px]">{ slide.subtitle }</p>
      <p className="text-[160px] uppercase tracking-[5px] mt-4">{ slide.title }</p>
    </div>
  </div>;

  return (
    <section className="h-screen relative bg-black overflow-x-hidden">
      <div className="absolute inset-0 grid place-items-center">
        <h1 className="font-BebasNeue text-[70vh] text-white/20 font-bold leading-[1] whitespace-nowrap tracking-[0px]">
          SIMPLICITY IS KEY
        </h1>
      </div>
      <SingleSlide slide={ currentSlide }/>
      <ApplicationLogo/>
    </section>
  )
}

export default Header;