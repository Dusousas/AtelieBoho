import About from "@/components/About";
import Brands from "@/components/Brands";
import Galery from "@/components/Galery";
import Main from "@/components/Main";
import NavBar from "@/components/NavBar";
import Professionals from "@/components/Professionals";
import Service from "@/components/Service";
import Signature from "@/components/Signature";
import Bride from "@/components/Bride";
import Depoimentos from "@/components/Depoimentos";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";



export default function Home() {
  return (
    <div>
      <NavBar />
      <Main />
      <About />
      <Galery />
      <Service />
      <Signature />
      <Brands />
      <Professionals />
      <Bride />
      <Depoimentos />
      <Contact />
      <Footer />

    </div>
  );
}
