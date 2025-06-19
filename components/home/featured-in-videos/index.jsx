'use client';

import Image from "next/image";
import myImage from '../../../public/png/round-card.png'

const videos = [
  {
    title: "With NIACINAMIDE",
    image: "/videos/video1.png",
    price: "QAR 2000",
  },
  {
    title: "GLIDE PEPTIDE SERUM LIPSTICK",
    image: "/videos/video2.png",
    price: "QAR 2000",
  },
  {
    title: "BALM-LIKE CARE",
    image: "/videos/video3.png",
    price: "QAR 2000",
  },
  {
    title: "",
    image: "/videos/video4.png",
    price: "QAR 2000",
  },
  {
    title: "MOCHA MELT",
    image: "/videos/video5.png",
    price: "QAR 2000",
  },
];

export default function FeaturedInVideos() {
  return (
    <div className="px-4 py-10">
      <p className="mb-2 text-sm font-medium text-center text-red-500">
        See what creators are sharing
      </p>
      <h2 className="mb-8 text-2xl font-bold text-center">FEATURED IN VIDEOS</h2>

      <div className="flex gap-6 overflow-x-auto">
        {videos.map((video, index) => (
          <div
            key={index}
            className="min-w-[240px] flex-shrink-0 bg-white rounded-2xl shadow-md"
          >
            <div className="relative w-full h-[340px] overflow-hidden rounded-t-2xl">
              <Image
                src={video.image}
                alt={video.title}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/80">
                  {/* <FaPlay className="text-sm text-black" /> */}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between p-4">
              <div>
                <p className="mb-1 text-xs text-gray-500">Beauty Tools</p>
                <p className="text-sm font-semibold">{video.price}</p>
              </div>
              <span className="text-lg">→</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
