import Image from "next/image";
import React from "react";
import UserImage from "../../../../../public/png/profile.jpg";
import Verified from "../../../svg/Verified";

const Profile = () => {
  return (
    <div className="flex items-center gap-3 sm:gap-4">
      <div className="rounded-full verflow-hidden ">
        <Image
          src={UserImage}
          alt="User Image"
          width={0}
          height={0}
          className="rounded-full h-9 sm:h-11 sm:w-11 w-9"
        />
      </div>
      <div className="flex flex-col">
        <div className="sm:text-base text-xs font-medium text-[#222222]">Tanvir Ahmed</div>
        <div className="flex gap-1">
          <Verified />
          <div className="font-normal text-[#00CA8D] text-xs">Verified</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
