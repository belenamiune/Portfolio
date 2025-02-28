import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import animationData from "../../../public/animations/animation.json";
import Lottie from "lottie-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-wedgewood-100 text-wedgewood-950 px-6 md:px-12 lg:px-32" id="home">
      
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        
        {/* Contenido de texto */}
        <div className="text-center lg:text-left">
          <motion.span
            className="text-sm text-wedgewood-100 font-semibold bg-wedgewood-900 px-4 py-1 rounded-full inline-block"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            🚀 Ready to Innovate
          </motion.span>

          <motion.h1
            className="text-4xl md:text-5xl font-bold mt-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            Frontend <span className="text-wedgewood-600">Developer</span>
          </motion.h1>

          <motion.h2
            className="text-lg mt-2 text-wedgewood-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Typewriter words={["Full-Stack Developer", "UI/UX Lover"]} loop={0} cursor />
          </motion.h2>

          <p className="text-wedgewood-400 mt-4 max-w-md mx-auto lg:mx-0">
            Creando experiencias digitales innovadoras y funcionales para usuarios.
          </p>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center lg:justify-start">
            <motion.a
              href="#portfolio"
              className="px-6 py-3 bg-white border border-gray-600 text-wedgewood-900 rounded-lg shadow-md hover:bg-wedgewood-200 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              Projects
            </motion.a>
            <motion.a
              href="#contact"
              className="px-6 py-3 bg-wedgewood-900 border border-wedgewood-500 text-white rounded-lg shadow-md hover:bg-wedgewood-600 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              Contact
            </motion.a>
          </div>

          {/* Redes sociales */}
          <div className="flex justify-center lg:justify-start gap-6 mt-6">
            <a
              href="https://github.com/belenamiune"
              target="_blank"
              className="text-wedgewood-600 hover:text-wedgewood-300 transition-all flex items-center gap-2"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/amiunebelen"
              target="_blank"
              className="text-wedgewood-600 hover:text-wedgewood-300 transition-all flex items-center gap-2"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>

        {/* Animación Lottie */}
        <div className="flex justify-center">
          <Lottie animationData={animationData} loop={true} className="w-full max-w-xs sm:max-w-md md:max-w-lg" />
        </div>

      </div>
    </section>
  );
}
