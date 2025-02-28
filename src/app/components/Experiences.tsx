const experiences = [
  {
    year: "2022 - Actualidad",
    company: "GlobalLogic",
    position: "Frontend Developer",
    description: "Descripción breve de tus responsabilidades y logros.",
  },
  {
    year: "2021 - 2022",
    company: "Ascentio Technologies",
    position: "Frontend Developer & UX-UI Designer",
    description: "Otra descripción breve.",
  },
  {
    year: "2019 - 2022",
    company: "Freelance",
    position: "Frontend Developer && UX-UI Designer",
    description: "Otra descripción breve.",
  }
];

export default function Experiences() {
  return (
    <section className="py-10 bg-[rgb(240,236,227)] text-gray-800">
      <h2 className="text-3xl font-bold text-center mb-10">Experiencia Profesional</h2>
      <div className="max-w-4xl mx-auto relative">
        {/* Línea vertical */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-500"></div>

        {/* Contenedor de los elementos de la línea de tiempo */}
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex flex-col md:flex-row items-center md:items-start w-full">
              {/* Lado izquierdo (Años) - En móviles se centra arriba */}
              <div className={`w-full md:w-1/2 px-4 text-center md:text-right ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                <p className="text-lg font-semibold">{exp.year}</p>
              </div>

              {/* Punto en la línea */}
              <div className="w-6 h-6 bg-gray-800 rounded-full absolute left-1/2 md:left-1/2 transform -translate-x-1/2"></div>

              {/* Lado derecho (Experiencia) - En móviles se pone debajo */}
              <div className={`w-full md:w-1/2 px-4 text-center md:text-left ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold">{exp.company}</h3>
                  <p className="text-gray-600">{exp.position}</p>
                  <p className="text-sm">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
