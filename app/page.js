import BestOfferInBrands from "@/components/home/best-offer-in-brands";
import Hero from "@/components/home/hero";
import OfferToSayYes from "@/components/home/offer-to-say-yes";
import OffersInCategory from "@/components/home/offers-in-category";
import SingleBanner from "@/components/home/single-banner";
import TopCategories from "@/components/home/top-categories";
import VisitOutlet from "@/components/home/visit-outlet";

export default async function Home() {
  await fetch("https://procodrr.vercel.app/?sleep=1000");

  return (
    <div className="max-w-[1670px] mx-auto overflow-hidden min-h-screen h-auto px-10 py-6">
      <div className="w-full h-[600px] rounded-2xl">
        <Hero />
      </div>
      <div className="my-10">
        <BestOfferInBrands />
      </div>
      <div className="sm:px-28 px-3 sm:py-10 py-3 sm:bg-[#EDD0BC] bg-white">
        <TopCategories />
      </div>
      <div className="px-3 py-6 sm:px-36 sm:py-16">
        <OffersInCategory />
      </div>
      <div className="py-4 sm:py-10">
        <VisitOutlet />
      </div>
      <div className="w-full h-auto rounded-2xl">
        <OfferToSayYes />
      </div>
      <div className="w-full h-auto my-10">
        <SingleBanner />
      </div>
    </div>
  );
}
