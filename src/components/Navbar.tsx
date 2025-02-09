import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white backdrop-blur-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-primary">
              <img src="/logoLudden.png" alt="Logo Asterix" className="h-12" />
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#servicios"
              className="text-[#6137e7] hover:text-[#a137e7] font-bold text-xl"
            >
              Servicios
            </a>
            <a
              href="#testimonios"
              className="text-[#6137e7] hover:text-[#a137e7] font-bold text-xl"
            >
              Testimonios
            </a>
            <Button
              variant="default"
              size="lg"
              className="bg-[#6137e7] hover:bg-[#a137e7] text-white font-bold px-4 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-xl"
            >
              Contactar
            </Button>
            <div className="flex items-center space-x-2">
              <Globe className="h-4 w-4" />
              <select className="bg-transparent border-none text-sm">
                <option value="es">ES</option>
                <option value="en">EN</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;