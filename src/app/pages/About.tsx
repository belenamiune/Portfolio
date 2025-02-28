import { FaCode, FaDownload } from "react-icons/fa";
import avatar from "../../../public/avatar.jpg";
import Image from "next/image";

export default function About() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "Maria_Belen_Amiune_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-primary text-white px-6 md:px-12">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center md:text-left">
        
        {/* Imagen en móviles primero */}
        <div className="flex justify-center md:order-2">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-wedgewood-500 shadow-lg">
            <Image src={avatar} alt="Hero Image" width={400} height={400} className="w-full h-full object-cover"/>
          </div>
        </div>

        {/* Texto */}
        <div className="md:order-1">
          <h2 className="text-wedgewood-400 text-base sm:text-lg font-semibold flex items-center justify-center md:justify-start gap-2">
            ✨ Transforming ideas into digital experiences ✨
          </h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 text-wedgewood-900">
            Hello, I{"'"}m <span className="text-wedgewood-400">Belen Amiune</span>
          </h1>
          <p className="text-wedgewood-600 mt-4 text-sm sm:text-base">
            Soy un desarrollador Front-End apasionado por la creación de experiencias digitales atractivas. Siempre me esfuerzo por ofrecer las mejores soluciones en cada proyecto.
          </p>
          
          {/* Botones */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button 
              onClick={handleDownloadCV} 
              className="bg-wedgewood-500 hover:bg-wedgewood-700 text-white font-bold py-2 px-6 rounded flex items-center gap-2 transition-all"
            >
              <FaDownload /> Download CV
            </button>
            <a 
              href="#portfolio" 
              className="border border-wedgewood-500 text-wedgewood-400 hover:bg-wedgewood-500 hover:text-white font-bold py-2 px-6 rounded flex items-center gap-2 transition-all"
            >
              <FaCode /> View Projects
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
