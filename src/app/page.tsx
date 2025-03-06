"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
const SplashScreen = dynamic(() => import("@/app/components/SplashScreen"), { ssr: false });
const Hero = dynamic(() => import("@/app/pages/Hero"), { ssr: false });
const Portfolio = dynamic(() => import("@/app/pages/Portfolio"), { ssr: false });
const About = dynamic(() => import("@/app/pages/About"), { ssr: false });
const Contact = dynamic(() => import("@/app/pages/Contact"), { ssr: false });
const Navbar = dynamic(() => import("@/app/components/Navbar"), { ssr: false });

export default function Home() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  return (
      isSplashVisible ? (
        <SplashScreen onFinish={() => setIsSplashVisible(false)} />
      ) : (
      <>
      
      <Navbar /> 
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </>
      )
  );
}