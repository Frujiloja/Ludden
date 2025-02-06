import { User } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Rodriguez",
    position: "CEO, TechStart",
    content: "El mejor equipo de desarrollo con el que he trabajado. Profesionales y eficientes.",
  },
  {
    name: "Ana Martinez",
    position: "Fundadora, DigitalCraft",
    content: "Transformaron nuestra visión en una realidad digital excepcional.",
  },
  {
    name: "Luis Morales",
    position: "Director, InnovaTech",
    content: "Resultados sobresalientes y un proceso de trabajo muy profesional.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Lo que dicen nuestros clientes
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-lg bg-white border hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="bg-primary rounded-full p-2 mr-4">
                  <User className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;