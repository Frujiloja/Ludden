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
              Desarrollamos sitios web y aplicaciones que impulsan el crecimiento de tu negocio
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2">
                <MessageSquare className="h-5 w-5" />
                Agendar consulta
              </Button>
              <Button size="lg" variant="outline">
                Ver portfolio
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src="/lovable-uploads/a5324c12-1fa7-46e3-afa9-ea774d4c3ee0.png"
              alt="Desarrollo web profesional"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;