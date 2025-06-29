import React from "react";
import logo from "../../assets/Images/Group 436.png";
import facebook from "../../assets/Images/Vector (1).png";
import instagram from "../../assets/Images/Group 18.png";
import youtube from "../../assets/Images/Group 19.png";
import mail from "../../assets/Images/Icon feather-mail.png"
import phone from "../../assets/Images/Icon feather-phone-call.png"

const Footer = () => {
  const footer = [
    "About  Us",
    "Delivery Information",
    "Returns & Exchange",
    "Technical & Privacy",
    "Order Status",
  ];
  return (
    <footer className="bg-[#333333] md:px-[120px] py-[60px] px-[60px]">
      <div className="flex md:justify-between md:flex-row items-center flex-col md:gap-0 gap-[40px]">
        <div className="flex flex-col gap-[20px]">
          {footer.map((val, index) => (
            <div className="text-[#BBBBBB] text-[14px]">{val}</div>
          ))}
        </div>

        <div className="flex flex-col gap-[20px] w-[250px] items-center">
          <img src={logo} width={100} height={70} />
          <div className="text-[#DDDDDD] text-[14px]">
            Stay in touch with us
          </div>
          <div className="flex gap-[10px]">
            <img src={facebook} />
            <img src={instagram} />
            <img src={youtube} />
          </div>
        </div>
        <div className="flex flex-col gap-[30px]">
            <div className="flex flex-col gap-[10px]">
                <div className="text-[#DDDDDD] font-[500]">Our Corporate Office</div>
                <div className="text-[#BBBBBB]">No:7,A2B road, Adayar Rajpuram,</div>
                <div className="text-[#BBBBBB]">T-Nagar, Chennai - 642002.</div>
            </div>
            <div className="flex flex-col gap-[5px] justify-center">
                <div className="flex gap-[10px] items-center">
                    <img src={mail}  width={15} height={15}/>
                    <div className="text-[#BBBBBB]">sales@madeup.com</div>
                </div>
                 <div className="flex gap-[10px] items-center">
                    <img src={phone} width={15} height={15}/>
                    <div className="text-[#BBBBBB]">044 9999 9999</div>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
