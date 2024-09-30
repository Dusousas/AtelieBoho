import About from "@/components/About";
import Brands from "@/components/Brands";
import Galery from "@/components/Galery";
import Main from "@/components/Main";
import NavBar from "@/components/NavBar";
import Professionals from "@/components/Professionals";
import Service from "@/components/Service";
import Signature from "@/components/Signature";

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

    </div>
  );
}
