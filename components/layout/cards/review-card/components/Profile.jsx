import Image from "next/image";
import React from "react";
import UserImage from "../../../../../public/png/profile.jpg";
import Verified from "../../../svg/Verified";

const Profile = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 overflow-hidden rounded-full">
        <Image
          src={UserImage}
          alt="User Image"
          width={0}
          height={0}
          className="w-10 h-10 rounded-full"
        />
      </div>
      <div className="flex flex-col">
        <div className="text-base font-medium text-[#222222]">John Doe</div>
        <div className="flex gap-1">
          <Verified />
          <div className="font-normal text-[#00CA8D] text-xs">Verified</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
