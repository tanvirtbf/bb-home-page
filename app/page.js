import BestOfferInBrands from "@/components/home/best-offer-in-brands";
import BestProductOfWeek from "@/components/home/best-product-of-week";
import ComboOffer from "@/components/home/combo-offer";
import CustomerReview from "@/components/home/customer-review";
import FeaturedInVideos from "@/components/home/featured-in-videos";
import Hero from "@/components/home/hero";
import OfferToSayYes from "@/components/home/offer-to-say-yes";
import OffersInCategory from "@/components/home/offers-in-category";
import SingleBanner from "@/components/home/single-banner";
import TopCategories from "@/components/home/top-categories";
import VisitOutlet from "@/components/home/visit-outlet";
import ProductSlider from "@/components/home/video-card-slider";
import MobileScanner from "@/components/home/mobile-scanner";

export default async function Home() {
  // await fetch("https://procodrr.vercel.app/?sleep=1000");

  return (
    <div className="max-w-[1670px] mx-auto overflow-hidden min-h-screen h-auto px-4 sm:px-10 py-3 sm:py-5">
      <div className="w-full h-auto pb-3 sm:pb-5">
        <Hero />
      </div>
      <div className="w-full h-auto py-3 -mx-20 sm:py-10 sm:mx-0">
        <TopCategories />
      </div>
      <div className="bg-white ">
        <BestOfferInBrands />
      </div>
      <div className="py-10 bg-white sm:py-20">
        <OffersInCategory />
      </div>
      <div className="w-full py-3 bg-white sm:py-6">
        <OfferToSayYes />
      </div>
      <div className="w-full h-auto my-3 bg-white sm:my-10">
        <SingleBanner />
      </div>
      <div className="w-full h-auto py-5 sm:py-16">
        <CustomerReview />
      </div>
      <div className="w-full h-auto py-10 bg-[#FF1A58] sm:py-20 sm:mt-40 mt-16 rounded-xl sm:px-56 px-10">
        <MobileScanner />
      </div>
      <div className="py-4 bg-white sm:py-10">
        <VisitOutlet />
      </div>
      <div className="bg-[#FFF8F3] rounded-[20px] px-20 py-10">
        <BestProductOfWeek />
      </div>
      <div className="my-10">
        <ComboOffer />
      </div>
      <div>
        <ProductSlider />
      </div>
    </div>
  );
}
