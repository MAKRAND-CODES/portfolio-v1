import { useEffect } from "react";
import gsap from "gsap";

const useGsap = () => {
  useEffect(() => {
    gsap.from(".hero-title", {
      y: 120,
      opacity: 0,
      duration: 1.4,
      ease: "power4.out",
    });
  }, []);
};

export default useGsap;