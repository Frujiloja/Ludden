import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Highlights from "@/components/Highlights";
import Banner from "@/components/Banner";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Highlights />
      <Banner />
      <Partners />
      <Services />
      <Testimonials />
      <FAQ />
      <Footer />
      <a href="#home" className="fixed bottom-28 right-8 z-30">
        <img src="arrow.png" alt="arrow icon" className="h-12 w-12 z-30" />
      </a>
      <a
        href="https://wa.me/+541157719725" // Reemplaza con tu número de WhatsApp
        className="fixed bottom-8 right-5 bg-green-500 text-white p-3 rounded-full shadow-lg z-30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/whatsapp ludden.png" alt="WhatsApp Ludden Tech" className="h-12 w-12" />
      </a>
    </div>
  );
};

export default Index;