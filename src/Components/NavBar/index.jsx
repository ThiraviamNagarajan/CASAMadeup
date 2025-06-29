import { useEffect, useState, useRef } from "react";
import madeup from "../../assets/Images/Group 436.png";
import search from "../../assets/Images/baseline-search-24px.png";
import cart from "../../assets/Images/OL-shopping_cart-24px.png";
import profile from "../../assets/Images/person_outline-24px (1).png";
import hamburger from "../../assets/Images/Vector (2).png";
import xmark from "../../assets/Images/Group 272.png";
import forme from "../../assets/Images/Mask Group.png";
import jeans from "../../assets/Images/Mask Group (1).png";
import Tshirt from "../../assets/Images/Mask Group (2).png";
import Shirt from "../../assets/Images/Mask Group (3).png";
import Trousers from "../../assets/Images/Mask Group (4).png";
import { Navigate, useNavigate } from "react-router-dom";

const navOptions = [
  "For Me",
  "Jeans",
  "Shirts",
  "T-Shirts",
  "Trousers",
  "Joggers",
  "Shorts",
];

const sideBarOption = {
  "My Profile": ["My Wishlist", "My Orders", "My Addresses"],
  "The Brand": [
    "The made up Story",
    "Franchise and Supplieds",
    "Store Locator",
  ],
};

const NavBar = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [showSidebar, setShowSidebar] = useState(false);
  const prevIsMobile = useRef(window.innerWidth <= 768);

  const carousalData=[
              { label: "For Me", img: forme, bgcolor: "#e6e7e7" },
              { label: "Jeans", img: jeans, bgcolor: "#E8F7FD" },
              { label: "T-Shirts", img: Tshirt, bgcolor: "#ffe3e3" },
              { label: "Shirts", img: Shirt, bgcolor: "#eae8fd" },
              { label: "Trousers", img: Trousers, bgcolor: "#fafae0" },
            ]

  useEffect(() => {
    const handleResize = () => {
      const currentScreenWidth = window.innerWidth;
      const currentIsMobile = currentScreenWidth <= 768;

      if (currentIsMobile !== prevIsMobile.current) {
        window.location.reload();
      }

      setScreenWidth(currentScreenWidth);
      prevIsMobile.current = currentIsMobile;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = screenWidth <= 768;
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <nav className="w-full h-[70px] bg-[#ffffff] shadow fixed top-0 left-0 z-50 mx-auto px-4 sm:px-6 md:px-10">
        <div className="max-w-screen-xl h-full mx-auto px-[20px] md:px-[60px] flex items-center justify-between">
          {/* Logo */}
          <div className="w-[100px] h-[70px] flex items-center shrink-0">
            <img
              src={madeup}
              alt="Logo"
              className="w-full h-full object-contain"
              onClick={()=>navigate("/")}
            />
          </div>

          {/* Center Nav Links */}
          {!isMobile && (
            <div className="flex items-center gap-[40px] text-[14px] font-[400]">
              {navOptions.map((option, idx) => (
                <span
                  key={idx}
                  className="cursor-pointer hover:text-gray-500 transition whitespace-nowrap"
                >
                  {option}
                </span>
              ))}
            </div>
          )}

          {/* Icons */}
          <div className="flex items-center gap-[20px] shrink-0">
            <img src={search} alt="Search" className="w-[24px] h-[24px]" />
            <img src={cart} alt="Cart" className="w-[24px] h-[24px]" />
            {isMobile ? (
              <div className="w-[32px] h-[32px] flex items-center justify-center">
                <img
                  src={showSidebar ? xmark : hamburger}
                  alt="Menu"
                  className="w-[24px] h-[24px] cursor-pointer"
                  onClick={toggleSidebar}
                />
              </div>
            ) : (
              <img src={profile} alt="Profile" className="w-[24px] h-[24px]"  onClick={() => navigate('/profile')} />
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Carousel */}
      {isMobile && (
        <div className="fixed top-[70px] w-full bg-[#ffffff] z-[100] flex justify-center shadow-md px-4 py-2 overflow-x-auto">
          <div className="flex items-center justify-between w-[90%] mt-2">
            {carousalData.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center shrink-0 mt-[4%]"
              >
                <div
                  className="h-[60px] w-[60px] rounded-full overflow-hidden flex items-center justify-center " style={{backgroundColor:item.bgcolor}}
                >
                  <img
                    src={item.img}
                    alt={item.label}
                    className="w-[38px] h-[38px] object-contain"
                  />
                </div>
                <span className="text-[12px] mt-1 text-center">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mobile Sidebar Full Width with Overlay */}
      {isMobile && showSidebar && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-30"
            onClick={toggleSidebar}
          />

          {/* Sidebar Panel */}
          <div className="fixed top-[70px] right-[0] w-[75%] md:w-full bg-[#ffffff] z-140 shadow-md h-full overflow-y-auto">
            <div className="flex flex-col gap-[20px] text-[14px] font-[400] pl-[30%]">
              {/* My Profile Section */}
              <div className="mt-[20px]" onClick={()=>navigate("/profile")}>
                <h3 className="text-[#E10000] font-semibold mb-2">
                  MY PROFILE
                </h3>
                <div className="flex flex-col gap-[10px]">
                  {sideBarOption["My Profile"].map((item, idx) => (
                    <div key={idx} className="pl-2">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* The Brand Section */}
              <div>
                <h3 className="text-[#E10000] font-semibold mb-2">THE BRAND</h3>
                <div className="flex flex-col gap-[10px]">
                  {sideBarOption["The Brand"].map((item, idx) => (
                    <div key={idx} className="mb-1 pl-2">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default NavBar;
