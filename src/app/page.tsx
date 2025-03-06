

import { useState } from "react";
import dynamic from "next/dynamic";

const SplashScreen = dynamic(() => import("@/app/components/SplashScreen"), { ssr: false });
const Navbar = dynamic(() => import("@/app/components/Navbar"));
const Hero = dynamic(() => import("@/app/pages/Hero"));
const Portfolio = dynamic(() => import("@/app/pages/Portfolio"));
const About = dynamic(() => import("@/app/pages/About"));
const Contact = dynamic(() => import("@/app/pages/Contact"));

export default function Home() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  return (
    <>
      {isSplashVisible ? (
        <SplashScreen onFinish={() => setIsSplashVisible(false)} />
      ) : (
        <>
          <Navbar />
          <Hero />
          <About />
          <Portfolio />
          <Contact />
        </>
      )}
    </>
  );
}
