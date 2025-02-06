import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('/lovable-uploads/4f37b24f-cf7b-4c7e-84c0-028eacd7abb6.png')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="container mx-auto px-4 text-center text-white">
          <div className="max-w-3xl mx-auto space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Transformamos ideas en{" "}
              <span className="text-primary">experiencias digitales</span>
            </h1>
            <p className="text-xl">
              Desarrollamos sitios web y aplicaciones que impulsan el crecimiento de tu negocio con las últimas tecnologías
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
                <MessageSquare className="h-5 w-5" />
                Agenda tu demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;