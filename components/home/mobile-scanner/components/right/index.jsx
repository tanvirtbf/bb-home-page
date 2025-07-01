import Image from "next/image";
import React from "react";
import QrIcon from '../../../../../public/png/qrCode.png'

const Right = () => {
  return (
    <div className="flex flex-col items-end order-2 w-full h-auto gap-3 mb-6 xl:items-center sm:w-28 sm:h-28 lg:order-3 sm:mb-0">
      <div className="text-sm font-normal text-center text-white sm:text-base w-30 sm:w-[120%]">Scan the magic code to download</div>
      <Image src={QrIcon} alt="QR Code" width={0} height={0} className="sm:w-full rounded-xl w-28" />
    </div>
  );
};

export default Right;
