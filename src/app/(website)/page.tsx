import About from "@/components/ui/website/About/About";
import Banner from "@/components/ui/website/Banner/Banner";
import Contact from "@/components/ui/website/Contact/Contact";
import Skills from "@/components/ui/website/Skills/Skills";

const page = () => {
  return (
    <div className="pt-20">
      <Banner />
      <About />
      <Skills />
      <Contact />
    </div>
  );
};

export default page;
