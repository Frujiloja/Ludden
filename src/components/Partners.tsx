import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const partners = [
  { name: "carta ai", logo: "https://res.cloudinary.com/dwxa2fewv/image/upload/v1739396255/1_p1ryto.png" },
  { name: "sextasis", logo: "https://res.cloudinary.com/dwxa2fewv/image/upload/v1739396256/2_gmijux.png" },
  { name: "pelach", logo: "https://res.cloudinary.com/dwxa2fewv/image/upload/v1739396255/3_ztl4ub.png" },
  { name: "dan gordon", logo: "https://res.cloudinary.com/dwxa2fewv/image/upload/v1739396255/4_hlkfav.png" },
  { name: "Miriam Nova", logo: "https://res.cloudinary.com/dwxa2fewv/image/upload/v1739396255/5_a6cda6.png" },
  { name: "Inox Style", logo: "https://res.cloudinary.com/dwxa2fewv/image/upload/v1739396255/6_sp155o.png" },
];

const Partners = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-16">
          Empresas que confían en nosotros
        </h2>
        <div className="hidden md:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 md:gap-16 items-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-20 sm:h-24 md:h-28 object-contain hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
        <div className="md:hidden">
          <Slider {...settings}>
            {partners.map((partner, index) => (
              <div key={index} className="flex justify-center ml-[4vw]">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-24"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Partners;