const Banner = () => {
  return (
    <div className="flex justify-center items-center h-[34rem] mt-16 md:mt-0">
      <div className="rounded-lg w-full max-w-[106rem]">
        {/* Contenido del cuadrado */}
        <picture>
          <source srcSet="/BannerH.png" media="(max-width: 768px)" />
          <img src="/Banner.png" alt="Banner" className="w-full h-auto" />
        </picture>
      </div>
    </div>
  );
};

export default Banner;