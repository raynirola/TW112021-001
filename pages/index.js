import Head from 'next/head'
import { Fragment, useEffect, useState } from "react";
import { ApplicationLogo } from "../components/shared/applicationLogo";
import { Dialog, Transition } from "@headlessui/react";
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

const Home = () => {

  const [ currentSlide, setCurrentSlide ] = useState(slides[0]);
  const [showDialog, setShowDialog] = useState(false);

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

  return (
    <Fragment>
      <Head>
        <title>Webflow Clone</title>
        <meta name="description" content="1:1 Clone of a Webflow site."/>
      </Head>

      <main>
        <section className="h-screen relative bg-black overflow-x-hidden">
          <div className="absolute inset-0 grid place-items-center">
            <h1
              className="animate-slide font-BebasNeue text-[70vh] text-white/30 font-bold leading-[1] whitespace-nowrap tracking-[8px]">
              SIMPLICITY IS KEY
            </h1>
          </div>
          <div className="relative h-screen overflow-hidden inset-0 flex items-center bg-black/20"
               data-aos="fade-left"
               data-aos-mirror="true"
               data-aos-duration="500"
               data-aos-easing="ease-in-out"
          >
            <div className="absolute inset-0">
              {/* eslint-disable-next-line @next/next/no-img-element */ }
              <img
                src={ currentSlide.image }
                alt={ currentSlide.subtitle }
                loading="lazy"
                className="w-full h-full object-cover opacity-70 object-center animate-zoomOut"
              />
            </div>
            <div data-aos-delay="700" data-aos="fade-in"
                 className="w-full ml-[42px] text-left text-white leading-none font-BebasNeue relative sm:max-w-5xl mx-auto">
              <p className="tracking-[6px]">{ currentSlide.subtitle }</p>
              <p className="text-[70px] md:text-[160px] uppercase tracking-[5px] mt-4">{ currentSlide.title }</p>
            </div>
          </div>
          <ApplicationLogo/>
          <button onClick={ () => setShowDialog(true) }
                  className="sm:hidden w-[100px] absolute top-0 right-0 h-[100px] ml-auto hover:bg-white/10 flex-shrink-0">
            <div className="mx-auto w-max">
              <div className="h-px w-[32px] bg-white"/>
              <div className="mt-3 h-px w-[22px] bg-white"/>
            </div>
          </button>

          <Transition
            show={ showDialog } appear as={ Fragment }>

            <Dialog open={ showDialog } onClose={ () => setShowDialog(false) } as="div"
                    className="fixed inset-0 z-10 overflow-y-auto">
              <div className="min-h-screen px-4 text-center">
                <Transition.Child
                  as={ Fragment }
                  enter="ease-in duration-300 origin-bottom-left rotate-45 transform -translate-y-full"
                  enterFrom="opacity-0 scale-0"
                  enterTo="opacity-100 scale-[2]"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Dialog.Overlay className="fixed inset-0 bg-[#f4bd03]"/>
                </Transition.Child>

                <Transition.Child
                  as={ Fragment }
                  enter="ease-out duration-300 delay-500"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                >
                  <div className="absolute inset-0  bg-black">
                    <button onClick={ () => setShowDialog(false) }
                            className=" w-[100px] absolute top-0 right-0 h-[100px] ml-auto hover:bg-white/10 flex-shrink-0">
                      <div className="mx-auto w-max">
                        <div className="h-px w-[32px] bg-white"/>
                        <div className="mt-3 h-px w-[32px] bg-white"/>
                      </div>
                    </button>
                  </div>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition>
        </section>
        <section
          className="hidden fixed inset-y-0 right-0 h-screen text-white w-[100px] sm:flex flex-col justify-between border-l border-white/20">
          <button onClick={ () => setShowDialog(true)} className="w-full h-[100px] ml-auto hover:bg-white/10 flex-shrink-0">
            <div className="mx-auto w-max">
              <div className="h-px w-[32px] bg-white"/>
              <div className="mt-3 h-px w-[22px] bg-white"/>
            </div>
          </button>
          <div className="flex-1 flex flex-col items-center h-full justify-center">
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */ }
            <a href="/" className="inline-flex items-center justify-center w-full h-[100px]  ml-auto hover:bg-white/10">
              <div className="mx-auto w-max">
                <img className="h-[18px] w-[18px]"
                     src="https://assets.website-files.com/5f5f94343affd51e900cd45c/5f5f94343affd579b80cd4ac_instagram-sketched%20yellow-01.svg"
                     alt=""/>
              </div>
            </a>
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */ }
            <a href="/" className="inline-flex items-center justify-center w-full h-[100px]  ml-auto hover:bg-white/10">
              <div className="mx-auto w-max">
                <img className="h-[18px] w-[18px]"
                     src="https://assets.website-files.com/5f5f94343affd51e900cd45c/5f5f94343affd53eb80cd4ab_facebook%20yellow-01.svg"
                     alt=""/>
              </div>
            </a>
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */ }
            <a href="/" className="inline-flex items-center justify-center w-full h-[100px]  ml-auto hover:bg-white/10">
              <div className="mx-auto w-max">
                <img className="h-[18px] w-[18px]"
                     src="https://assets.website-files.com/5f5f94343affd51e900cd45c/5f5f94343affd592f90cd4ad_twitter%20white-%20yellow.svg"
                     alt=""/>
              </div>
            </a>
          </div>
          <button className="w-full min-h-[200px] ml-auto hover:bg-white/10 border-t border-white/20 flex-shrink">
            <div className="mx-auto w-max -rotate-90 uppercase">
              Scroll
            </div>
          </button>
        </section>
      </main>
    </Fragment>
  )
}


export default Home