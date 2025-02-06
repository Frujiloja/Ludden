import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-primary">
              WebDev<span className="text-secondary">Pro</span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#servicios" className="text-gray-600 hover:text-primary">
              Servicios
            </a>
            <a href="#portfolio" className="text-gray-600 hover:text-primary">
              Portfolio
            </a>
            <a href="#testimonios" className="text-gray-600 hover:text-primary">
              Testimonios
            </a>
            <div className="flex items-center space-x-2">
              <Globe className="h-4 w-4" />
              <select className="bg-transparent border-none text-sm">
                <option value="es">ES</option>
                <option value="en">EN</option>
              </select>
            </div>
            <Button variant="default" size="sm">
              Contactar
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;