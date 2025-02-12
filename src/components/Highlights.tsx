const highlights = [
  {
    title: "Innovación ",
    highlight: "en Tecnología de Punta",
    subtitle: "Implementamos las últimas tecnologías para mantenerte a la vanguardia.",
    image: "https://res.cloudinary.com/dwxa2fewv/image/upload/v1738888374/b84c9663-fb1c-47fd-9647-ad2e59523b73.png",
  },
  {
    title: "Calidad y Excelencia ",
    highlight: "en Cada Detalle",
    subtitle: "Nos enfocamos en cada detalle para asegurar la máxima calidad en nuestros proyectos.",
    image: "https://res.cloudinary.com/dwxa2fewv/image/upload/v1738888435/10e81d0d-940e-4234-b4ce-3774fc671dc3.png",
  },
  {
    title: "Confianza y Satisfacción ",
    highlight: "de Nuestros Clientes",
    subtitle: "Nuestros clientes confían en nosotros y están satisfechos con los resultados.",
    image: "https://res.cloudinary.com/dwxa2fewv/image/upload/v1738888488/d1e6e0c9-5268-4f87-9952-4984e8dedfdd.png",
  },
];

const Highlights = () => {
  return (
    <section className="py-12 bg-white" id="highlights">
      <div className="mx-auto px-6 md:px-16 lg:px-32 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-12">
          Llevamos tu negocio al siguiente nivel con soluciones de desarrollo web y diseño a medida.
          <span className="text-[#6137e7]"> Ludden, donde las ideas toman forma. 🚀</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="text-center">
              <img
                src={highlight.image}
                alt={highlight.title + highlight.highlight}
                className="mx-auto mb-4 h-48 sm:h-56 md:h-60 w-full object-cover rounded-lg shadow-xl"
              />
              <h3 className="text-xl sm:text-2xl font-semibold">
                <span className="text-[#6137e7]">{highlight.title}</span>
                {highlight.highlight}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">{highlight.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
