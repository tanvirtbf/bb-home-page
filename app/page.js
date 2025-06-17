import BestOfferInBrands from "@/components/home/best-offer-in-brands";
import Hero from "@/components/home/hero";
import OffersInCategory from "@/components/home/offers-in-category";
import TopCategories from "@/components/home/top-categories";

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
      <div className="sm:px-36 px-3 sm:py-16 py-6">
        <OffersInCategory />
      </div>
    </div>
  );
}
