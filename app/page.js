import Hero from "@/components/hero";


export default async function Home() {
  await fetch("https://procodrr.vercel.app/?sleep=1000")
  
  return (
    <div className="w-screen overflow-hidden min-h-screen h-auto px-10 py-6">
      <div className="w-full h-[600px]">
        <Hero />
      </div>
    </div>
  );
}
