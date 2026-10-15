import Banner from "@/components/Banner";
import AvailableCars from "@/components/AvailableCars";
import Statistics from "@/components/Statistics";
import WhyChooseUs from "@/components/WhyChoose";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <main>
      <Banner></Banner>
      <AvailableCars></AvailableCars>
      <HowItWorks></HowItWorks>
      <WhyChooseUs></WhyChooseUs>
      <Statistics></Statistics>
      <Testimonials></Testimonials>
      <FAQSection></FAQSection>
      
    </main>
  );
}
