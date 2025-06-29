import React from "react";
import subscribeimage from "../../assets/Images/subscribeimage.png";
import InputField from "../../Common Components/Input";
import DynamicButton from "../../Common Components/Button";

const Subscribe = () => {
  return (
    <div
      className="relative w-full h-[360px] bg-cover bg-center flex justify-center items-center"
      style={{
        backgroundImage: `url(${subscribeimage})`,
      }}
    >
      <div className="bg-white/10 backdrop-blur-md rounded-lg flex flex-col items-center gap-[20px] w-full max-w-[700px] mx-4">
        <div
          className="font-[800] text-[24px] text-[#ffffff] text-center"
          style={{ letterSpacing: 3 }}
        >
          GET COUPONS & STYLE GUIDES
        </div>
        <div className="text-[20px] text-[#ffffff] text-center">
          Subscribe to our Newsletter
        </div>
        <div className="flex gap-[10px] flex-wrap justify-center">
          <InputField placeholder="E-mail" width="w-[360px]" type="email" />
          <DynamicButton padding="px-[26px] py-[10px]">SUBSCRIBE</DynamicButton>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
