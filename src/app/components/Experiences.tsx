const experiences = [
  {
    year: "2022 - Current",
    company: "GlobalLogic",
    position: "Frontend Developer (Lytx Project)",
    description: "Develop web applications from scratch and provide technical support, fixing bugs and optimizing functionalities. Contribute to system migration to the cloud, ensuring scalability and efficiency.",
  },
  {
    year: "2021 - 2022",
    company: "Ascentio Technologies",
    position: "UX/UI Designer & Frontend Developer",
    description: "Designed and built from scratch an application that visualizes satellite data from various missions. Combined user-centered design with frontend development to create an intuitive and informative experience.",
  },
  {
    year: "2019 - 2022",
    company: "Freelancer",
    position: "Web Developer & Social Media Manager",
    description: "Designed and developed websites for businesses such as ice cream shops, restaurants, and clothing brands, focusing on both aesthetics and functionality. Also managed social media for an ice cream shop and a restaurant, enhancing their digital presence.",
  }
];

export default function Experiences() {
  return (
    <section className="py-10">
      <h2 className="text-3xl font-bold text-center mb-10 text-wedgewood-600">Professional Experience</h2>
      <div className="max-w-4xl mx-auto relative">
        
        {/* Línea vertical para pantallas grandes */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-wedgewood-800"></div>

        {/* Contenedor de los elementos de la línea de tiempo */}
        <div className="relative space-y-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative flex flex-col md:flex-row items-center md:items-start w-full"
            >
              {/* Años - En móviles se mantiene a la izquierda */}
              <div
                className={`w-full md:w-1/2 px-4 text-center md:text-right ${
                  index % 2 === 0 ? "md:order-1" : "md:order-2"
                }`}
              >
                <p className="text-lg font-semibold text-wedgewood-600">{exp.year}</p>
              </div>

              {/* Punto en la línea (responsivo) */}
              <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-800 rounded-full border-4 border-white z-10"></div>

              {/* Descripción de la experiencia */}
              <div
                className={`w-full md:w-1/2 px-4 text-center md:text-left ${
                  index % 2 === 0 ? "md:order-2" : "md:order-1"
                }`}
              >
                <div className="bg-wedgewood-800 p-4 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                  <p className="text-white  italic font-medium mt-1">{exp.position}</p>
                  <p className="text-sm mt-2">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}