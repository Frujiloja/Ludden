import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen mt-28" id="home">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#221F26] to-[#403E43] z-0 w-[102rem] mx-auto rounded-3xl shadow-xl overflow-hidden">
        {" "}
        {/* Añadido w-3/4 y mx-auto */}
        <img src="/Hero.jpg" alt="" className="w-full h-full object-cover"/>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between min-h-screen">
        {" "}
        {/* Cambiado justify-start a justify-between */}
        <div className="container mx-auto px-4 text-left flex flex-col md:flex-row items-center">
          {" "}
          {/* Añadido flex-col md:flex-row */}
          <div className="max-w-4xl space-y-8 md:w-1/2">
            {" "}
            {/* Añadido md:w-1/2 */}
            <h1 className="text-6xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Transformamos ideas en{" "}
              <span className="text-[#6137e7]">experiencias digitales</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
              Desarrollamos sitios web y diseños que impulsan el crecimiento de
              tu negocio con las últimas tecnologías
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-start pt-8">
              {" "}
              {/* Cambiado justify-center a justify-start */}
              <Button
                size="lg"
                className="bg-[#6137e7] hover:bg-[#a137e7] text-white px-8 py-6 text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl font-bold" // Agregado font-bold
              >
                <MessageSquare className="h-5 w-5 mr-2" />
                Contactanos
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
            {" "}
            {/* Añadido md:w-1/2 y clases de justificación */}
            <img
              src="/mockup2.png"
              alt="Mockup de celular"
              className="w-full md:w-3/4 max-w-md md:max-w-lg"
            />{" "}
            {/* Agrandado la imagen del mockup */}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 w-1/2 h-1/2 bg-[#6137e7]/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/2 w-1/2 h-1/2 bg-[#6137e7]/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
      </div>
    </div>
  );
};

export default Hero;
