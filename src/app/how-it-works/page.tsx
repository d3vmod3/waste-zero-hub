import WasteExhchangeBoard from "@/components/how-it-works/wasteExchangeBoard";
import FindWasteCollector from "@/components/how-it-works/findWasteCollector";
import LearnAndCreate from "@/components/how-it-works/learnAndCreate";
import ShareTheImpact from "@/components/how-it-works/shareTheImpact";

const Page = () => {
  return (
    <div>
      <WasteExhchangeBoard />
      <FindWasteCollector />
      <LearnAndCreate />
      <ShareTheImpact />
    </div>
  );
};

export default Page;
