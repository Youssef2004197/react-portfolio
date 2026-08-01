import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ImageModal from "./components/ImageModal";

export default function App() {
  const [modalSrc, setModalSrc] = useState(null);

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Certificates onOpen={setModalSrc} />
      <Experience onOpen={setModalSrc} />
      <Contact />
      <Footer />
      <ImageModal src={modalSrc} onClose={() => setModalSrc(null)} />
    </>
  );
}
