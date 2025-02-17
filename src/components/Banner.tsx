const Banner = () => {
  return (
    <div className="flex justify-center items-center h-[40rem]">
      <div className="rounded-lg w-[90vw]">
        {/* Contenido del cuadrado */}
        <picture>
          <source srcSet="/DiseñoPaginasWebLuddenH.png" media="(max-width: 768px)" />
          <img src="/DiseñoPaginasWebLudden.png" alt="Banner" className="w-full h-auto" />
        </picture>
      </div>
    </div>
  );
};

export default Banner;