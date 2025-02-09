const partners = [
  { name: "carta ai", logo: "https://res.cloudinary.com/dwxa2fewv/image/upload/v1738887678/2_f98puv.png" },
  { name: "sextasis", logo: "https://res.cloudinary.com/dwxa2fewv/image/upload/v1738887448/sextasis_o6wzzd.png" },
  { name: "pelach", logo: "https://res.cloudinary.com/dwxa2fewv/image/upload/v1738887448/pelach_propiedades_abmjje.png" },
  { name: "dan gordon", logo: "https://res.cloudinary.com/dwxa2fewv/image/upload/v1738887448/dg_cqirvu.png" },
  { name: "Miriam Nova", logo: "https://res.cloudinary.com/dwxa2fewv/image/upload/v1739132540/Logo_png_wqzvbw.png" },
  { name: "Inox Style", logo: "https://res.cloudinary.com/dwxa2fewv/image/upload/v1739132884/Sin_t%C3%ADtulo-2_opn3sb.png" },
];

const Partners = () => {
  return (
    <section className="py-20 bg-muted ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Empresas que confían en nosotros
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-16 items-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-28 object-contain hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;