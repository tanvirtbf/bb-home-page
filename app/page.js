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
import ProductSlider from "@/components/ProductSlider";

export default async function Home() {
  // await fetch("https://procodrr.vercel.app/?sleep=1000");

  return (
    <div className="max-w-[1670px] mx-auto overflow-hidden min-h-screen h-auto px-10 py-6">
      <div className="w-full h-auto rounded-2xl">
        <Hero />
      </div>
      <div className="w-full h-auto my-20">
        <TopCategories />
      </div>
      <div className="my-10 bg-white">
        <BestOfferInBrands />
      </div>
      <div className="my-10 bg-white ">
        <OffersInCategory />
      </div>
      <div className="w-full h-auto bg-white rounded-2xl">
        <OfferToSayYes />
      </div>
      <div className="w-full h-auto my-10 bg-white">
        <SingleBanner />
      </div>
      <div className="w-full h-auto py-16">
        <CustomerReview />
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
