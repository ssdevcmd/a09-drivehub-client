import Banner from "@/components/Banner";
import AvailableCars from "@/components/AvailableCars";
import Statistics from "@/components/Statistics";
import WhyChooseUs from "@/components/WhyChoose";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <AvailableCars></AvailableCars>
      <WhyChooseUs></WhyChooseUs>
      <Statistics></Statistics>
    </div>
  );
}
