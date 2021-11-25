import '../styles/globals.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const MyApp = ({ Component, pageProps }) => {
  useEffect(
    () => {
      AOS.init({
        mirror: true,
      });
    },
    []
  )
  return <Component { ...pageProps } />
}

export default MyApp
