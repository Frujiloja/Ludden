import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#221F26] to-[#403E43] z-0">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/4f37b24f-cf7b-4c7e-84c0-028eacd7abb6.png')] bg-cover bg-center opacity-20 mix-blend-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-6xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Transformamos ideas en{" "}
              <span className="text-[#1EAEDB]">experiencias digitales</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              Desarrollamos sitios web y aplicaciones que impulsan el crecimiento de tu negocio con las últimas tecnologías
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button 
                size="lg" 
                className="bg-[#1EAEDB] hover:bg-[#0FA0CE] text-white px-8 py-6 text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <MessageSquare className="h-5 w-5 mr-2" />
                Agenda tu demo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 w-1/2 h-1/2 bg-[#1EAEDB]/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/2 w-1/2 h-1/2 bg-[#33C3F0]/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
      </div>
    </div>
  );
};

export default Hero;