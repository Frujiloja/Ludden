import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Transformamos ideas en{" "}
              <span className="text-primary">experiencias digitales</span>
            </h1>
            <p className="text-xl text-gray-600">
              Desarrollamos sitios web y aplicaciones que impulsan el crecimiento de tu negocio con las últimas tecnologías
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
                <MessageSquare className="h-5 w-5" />
                Agenda tu demo
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/lovable-uploads/4f37b24f-cf7b-4c7e-84c0-028eacd7abb6.png"
                alt="Desarrollo web profesional"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg blur-3xl -z-10" />
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-b from-blue-50/50 to-transparent transform rotate-12" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-t from-blue-50/50 to-transparent transform -rotate-12" />
      </div>
    </div>
  );
};

export default Hero;