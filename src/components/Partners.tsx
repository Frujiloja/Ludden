const partners = [
  { name: "Microsoft", logo: "/lovable-uploads/22feaa0c-3b9c-4253-a779-9c7d91360ce4.png" },
  { name: "Meta", logo: "/lovable-uploads/22feaa0c-3b9c-4253-a779-9c7d91360ce4.png" },
  { name: "Atlassian", logo: "/lovable-uploads/22feaa0c-3b9c-4253-a779-9c7d91360ce4.png" },
  { name: "Slack", logo: "/lovable-uploads/22feaa0c-3b9c-4253-a779-9c7d91360ce4.png" },
];

const Partners = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Empresas que confían en nosotros
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 object-contain opacity-50 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;