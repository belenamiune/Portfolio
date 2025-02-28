"use client";
import { useState } from "react";
import SplashScreen from "@/app/components/SplashScreen";
import Hero from "@/app/pages/Hero";
import Portfolio from "@/app/pages/Portfolio";
import About from "@/app/pages/About";
import Contact from "@/app/pages/Contact";
import Navbar from "@/app/components/Navbar";

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