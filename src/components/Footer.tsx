const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <img src="/logoLuddenB.png" alt="" />
            <p className="text-gray-400">
              Transformando ideas en experiencias digitales excepcionales
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-white">
                  Desarrollo Web
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-white">
                  Diseño UI/UX
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-white">
                  SEO & Marketing
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#highlights"
                  className="text-gray-400 hover:text-white"
                >
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/+541157719725" // Reemplaza con tu número de WhatsApp
                  target="_blank"
                  className="text-gray-400 hover:text-white"
                  rel="noopener noreferrer"
                >
                  Contactanos
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">info@gmail.com</li>
              <li className="text-gray-400">+1 (555) 123-4567</li>
              <li className="text-gray-400">
                123 Tech Street, Digital City, DC 12345
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Ludden. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
