import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Globe, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav id="navbar" className="fixed top-0 left-0 right-0 bg-white backdrop-blur-md z-50 flex justify-center ">
      <div className=" w-[88vw] mx-10 md:px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="#home" className="text-2xl font-bold text-primary">
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
            {/* <div className="flex items-center space-x-2">
              <Globe className="h-4 w-4" />
              <select className="bg-transparent border-none text-sm">
                <option value="es">ES</option>
                <option value="en">EN</option>
              </select>
            </div> */}
          </div>

          <div className="md:hidden flex items-center pr-4 pt-4">
            <button onClick={toggleMenu} className="text-[#6137e7]">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden flex flex-col items-center space-y-4 mt-4 mb-4">
            <a
              href="#servicios"
              className="text-[#6137e7] hover:text-[#a137e7] font-bold text-xl"
              onClick={toggleMenu}
            >
              Servicios
            </a>
            <a
              href="#testimonios"
              className="text-[#6137e7] hover:text-[#a137e7] font-bold text-xl"
              onClick={toggleMenu}
            >
              Testimonios
            </a>
            <a
                href="https://wa.me/+541157719725"
                target="_blank"
                rel="noopener noreferrer"
              >
            <Button
              variant="default"
              size="lg"
              className="bg-[#6137e7] hover:bg-[#a137e7] text-white font-bold px-4 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-xl"
              onClick={toggleMenu}
            >
              Contactar
            </Button>
              </a>
            {/* <div className="flex items-center space-x-2">
              <Globe className="h-4 w-4" />
              <select className="bg-transparent border-none text-sm">
                <option value="es">ES</option>
                <option value="en">EN</option>
              </select>
            </div> */}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;