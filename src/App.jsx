import { HeroComponent } from "./components/hero";
import { PortfolioComponent } from "./components/portfolio";
import { FooterComponent } from "./components/footer";
import { CTAComponent } from "./components/cta";
// import { PricingComponent } from "./components/pricing";
// import { TestimonialsComponent } from "./components/testimonials";
import { TeamsComponent } from "./components/teams";
import { ContactComponent } from "./components/contact";
import { ServicesComponent } from "./components/services";
import { FAQSComponent } from "./components/faqs";
// import { BlogsComponent } from "./components/blogs";

const LandingPage = () => {
  return (
    <>
      <HeroComponent />
      <ServicesComponent />
      <PortfolioComponent />
      {/* <TestimonialsComponent /> */}
      {/* <PricingComponent /> */}
      <CTAComponent />
      <TeamsComponent />
      <FAQSComponent />
      {/* <BlogsComponent /> */}
      <ContactComponent />
      <FooterComponent />
    </>
  );
};

export default LandingPage;
