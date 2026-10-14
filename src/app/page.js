import Banner from "@/components/Banner";
import AvailableCars from "@/components/AvailableCars";
import Statistics from "@/components/Statistics";
import WhyChooseUs from "@/components/WhyChoose";
import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <AvailableCars></AvailableCars>
      <HowItWorks></HowItWorks>
      <WhyChooseUs></WhyChooseUs>
      <Statistics></Statistics>
    </div>
  );
}
