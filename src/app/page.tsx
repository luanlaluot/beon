import Layout from "@/components/layout/Layout";

import About from "@/sections/About";
import Contact from "@/sections/Contact";
import HowItWork1 from "@/sections/HowItWork1";
import HowItWork2 from "@/sections/HowItWork2";
import Logo from "@/sections/Logo";
import Service from "@/sections/Service";
import TaxBusiness from "@/sections/TaxBusiness";
import User1 from "@/sections/User1";
import User2 from "@/sections/User2";
import Welcome from "@/sections/Welcome";
import Works from "@/sections/Works";

export default function Page() {
  return (
    <Layout headerStyle={1} footerStyle={1}>
      <Welcome />
      <Logo />
      <About />
      <TaxBusiness />
      <User1 />
      <User2 />
      <Works />
      <HowItWork1 />
      <HowItWork2 />
      <Service />
      <Contact />
      {/* <About2 />
      <CaseStudy />
      <Pricing />
      <Testimonial />
      <Blog />
      <Subscribe /> */}
    </Layout>
  );
}
