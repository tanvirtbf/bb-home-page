import BestOfferInBrands from "@/components/best-offer-in-brands";
import Hero from "@/components/hero";


export default async function Home() {
  await fetch("https://procodrr.vercel.app/?sleep=1000")
  
  return (
    <div className="max-w-[1670px] mx-auto overflow-hidden min-h-screen h-auto px-10 py-6">
      <div className="w-full h-[600px] rounded-2xl">
        <Hero />
      </div>
      <div className="my-10">
        <BestOfferInBrands />
      </div>
    </div>
  );
}
