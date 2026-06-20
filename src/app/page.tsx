import Layout from "@/components/layout/Layout";

import About from "@/sections/About";
import Contact from "@/sections/Contact";
import HowItWork1 from "@/sections/HowItWork1";
import Logo from "@/sections/Logo";
import Pricing from "@/sections/Pricing";
import Service from "@/sections/Service";
import TaxBusiness from "@/sections/TaxBusiness";
import User1 from "@/sections/User1";
import User2 from "@/sections/User2";
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
      <HowItWork1 />
      <Works />
      <User1 />
      <User2 />
      <Pricing />

      <Service />
      <Contact />
    </Layout>
  );
}
