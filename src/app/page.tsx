import Layout from "@/components/layout/Layout";

import About from "@/sections/About";
import Contact from "@/sections/Contact";
import HowItWork1 from "@/sections/HowItWork1";
import Logo from "@/sections/Logo";
import Pricing from "@/sections/Pricing";
import ProcessCorporate from "@/sections/ProcessCorporate";
import ProcessElearning from "@/sections/ProcessElearning";
import Service from "@/sections/Service";
import TaxBusiness from "@/sections/TaxBusiness";
import Team from "@/sections/Team";
import Welcome from "@/sections/Welcome";
import WhyChooseUs from "@/sections/WhyChooseUs";
import Works from "@/sections/Works";

export default function Page() {
  return (
    <Layout headerStyle={1} footerStyle={1}>
      <Welcome />
      <Logo />
      <About />
      <WhyChooseUs />
      <TaxBusiness />
      <Team />
      <ProcessElearning />
      <ProcessCorporate />
      {/* <HowItWork1 /> */}
      {/* <Works /> */}
      <Pricing />
      <Service />
      <Contact />
    </Layout>
  );
}
