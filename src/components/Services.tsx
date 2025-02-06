import { Code, Palette, Globe } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Desarrollo Web",
    description: "Creamos sitios web modernos y funcionales que destacan tu marca en el mundo digital",
  },
  {
    icon: Palette,
    title: "Diseño UI/UX",
    description: "Diseñamos interfaces intuitivas y atractivas que mejoran la experiencia del usuario",
  },
  {
    icon: Globe,
    title: "SEO & Marketing",
    description: "Optimizamos tu presencia online para alcanzar a tu audiencia objetivo",
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Nuestros Servicios</h2>
          <p className="text-xl text-gray-600">
            Soluciones digitales completas para tu negocio
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-lg bg-white border hover:shadow-lg transition-shadow"
            >
              <service.icon className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;