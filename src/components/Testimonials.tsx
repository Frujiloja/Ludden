import { User } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Rodriguez",
    position: "CEO, TechStart",
    content: "El mejor equipo de desarrollo con el que he trabajado. Profesionales y eficientes.",
    image: "https://media.istockphoto.com/id/1300512215/photo/headshot-portrait-of-smiling-ethnic-businessman-in-office.jpg?s=612x612&w=0&k=20&c=QjebAlXBgee05B3rcLDAtOaMtmdLjtZ5Yg9IJoiy-VY=", // Reemplaza con la URL de la imagen real
  },
  {
    name: "Ana Martinez",
    position: "Fundadora, DigitalCraft",
    content: "Transformaron nuestra visión en una realidad digital excepcional.",
    image: "https://static-cse.canva.com/blob/1862243/1600w-B-cRyoh7b98.jpg", // Reemplaza con la URL de la imagen real
  },
  {
    name: "Luis Morales",
    position: "Director, InnovaTech",
    content: "Resultados sobresalientes y un proceso de trabajo muy profesional.",
    image: "https://www.elitesingles.com.au/wp-content/uploads/sites/77/2020/06/profileprotectionsnap-350x264.jpg", // Reemplaza con la URL de la imagen real
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
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
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