// import React, { useState } from "react";
// import myprofilepic from "../../assets/Images/MYPROFILEPIC.png";
// import Newuser from "../NewUser/Newuser";
// import MyOrders from "../MyOrders";

// const MyProfile = () => {
//   const [activeSection, setActiveSection] = useState(null);

//   const menuItems = [
//     {
//       id: "1",
//       title: "My Profile",
//       subtitle: "Notifications, password",
//       onClick: () => setActiveSection("profile")
//     },
//     {
//       id: "2",
//       title: "My orders",
//       subtitle: "Already have 12 orders",
//       onClick: () => setActiveSection("orders")
//     },
//     {
//       id: "3",
//       title: "Shipping addresses",
//       subtitle: "3 addresses",
//       onClick: () => setActiveSection("addresses")
//     },
//   ];

//   return (
//     <div className="px-[70px]">
//       <div className="text-[#777777] text-[12px] py-[30px]">
//         Home / My Profile
//       </div>
//       <div className="flex min-h-screen gap-[50px]">
//         {/* Left Sidebar */}
//         <div className="w-[300px]">
//           <div className="flex items-center gap-[20px] px-[20px]">
//             <img
//               src={myprofilepic}
//               width={72}
//               height={72}
//               alt="Profile"
//               className="rounded-full mr-3 object-cover"
//             />
//             <div>
//               <div className="text-[16px] text-[#333333]">Girish</div>
//               <div className="text-[14px] text-[#9B9B9B]">girish@gmail.com</div>
//             </div>
//           </div>

//           <div className="menu-items mt-[30px]">
//             {menuItems.map((item, index) => (
//               <div
//                 key={index}
//                 className={`px-[20px] py-[20px] bg-[#ffffff] flex justify-between items-center cursor-pointer hover:bg-[#f5f5f5] transition-colors ${
//                   (activeSection === "profile" && item.id === "1") ||
//                   (activeSection === "orders" && item.id === "2") ||
//                   (activeSection === "addresses" && item.id === "3")
//                     ? ""
//                     : ""
//                 }`}
//                 onClick={item.onClick}
//               >
//                 <div className="flex flex-col gap-[5px]">
//                   <div className="font-[600] text-[16px] text-[#222222]">
//                     {item.title}
//                   </div>
//                   <div className="text-[#9B9B9B] font-[500] text-[11px]">
//                     {item.subtitle}
//                   </div>
//                 </div>
//                 <span className="font-[700]">›</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right Content Area */}
//         <div className="flex-1">
//           {activeSection === "profile" && (
//             <div className="transition-all duration-300 transform translate-x-0">
//               <Newuser />
//             </div>
//           )}

//           {activeSection === "orders" && (
//             <div className="bg-white p-[30px] border border-[#e0e0e0] transition-all duration-300 transform translate-x-0">
             
//               <MyOrders/>
//             </div>
//           )}

//           {activeSection === "addresses" && (
//             <div className="bg-white p-[30px] border border-[#e0e0e0] transition-all duration-300 transform translate-x-0">
//               <h2 className="text-[24px] font-[600] text-[#333333] mb-[30px]">Shipping Addresses</h2>
//               <p className="text-[#666666]">You have 3 saved addresses. Address management will be displayed here.</p>
//             </div>
//           )}

//           {!activeSection && (
//             <div className="bg-white p-[30px] border border-[#e0e0e0]">
//               <h2 className="text-[24px] font-[600] text-[#333333] mb-[30px]">Welcome to Your Profile</h2>
//               <p className="text-[#666666]">Select an option from the left menu to get started.</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyProfile;

import React, { useState, useEffect } from "react";
import myprofilepic from "../../assets/Images/MYPROFILEPIC.png";
import Newuser from "../NewUser/Newuser";
import MyOrders from "../MyOrders";

const MyProfile = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState(null);

  // Check screen size using window.screen
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.screen.width <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const menuItems = [
    {
      id: "1",
      title: "My Profile",
      subtitle: "Notifications, password",
      onClick: () => {
        setActiveSection("profile");
        if (isMobile) setExpandedMenu(expandedMenu === "profile" ? null : "profile");
      }
    },
    {
      id: "2",
      title: "My orders",
      subtitle: "Already have 12 orders",
      onClick: () => {
        setActiveSection("orders");
        if (isMobile) setExpandedMenu(expandedMenu === "orders" ? null : "orders");
      }
    },
    {
      id: "3",
      title: "Shipping addresses",
      subtitle: "3 addresses",
      onClick: () => {
        setActiveSection("addresses");
        if (isMobile) setExpandedMenu(expandedMenu === "addresses" ? null : "addresses");
      }
    },
  ];

  // Mobile Layout
  if (isMobile) {
    return (
      <div className="px-[0px] md:px-[20px]">
        <div className="text-[#777777] text-[12px] py-[30px]">
          Home / My Profile
        </div>
        
        {/* Profile Header - Mobile */}
        <div className="flex items-center gap-[20px] px-[20px] bg-white py-[20px] mb-[20px] rounded-lg">
          <img
            src={myprofilepic}
            width={60}
            height={60}
            alt="Profile"
            className="rounded-full object-cover"
          />
          <div>
            <div className="text-[16px] text-[#333333]">Girish</div>
            <div className="text-[14px] text-[#9B9B9B]">girish@gmail.com</div>
          </div>
        </div>

        {/* Collapsible Menu Items - Mobile */}
        <div className="space-y-[10px]">
          {menuItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden">
              <div
                className="px-[20px] py-[20px] flex justify-between items-center cursor-pointer hover:bg-[#f5f5f5] transition-colors"
                onClick={item.onClick}
              >
                <div className="flex flex-col gap-[5px]">
                  <div className="font-[600] text-[16px] text-[#222222]">
                    {item.title}
                  </div>
                  <div className="text-[#9B9B9B] font-[500] text-[11px]">
                    {item.subtitle}
                  </div>
                </div>
                <span className="font-[700] transform transition-transform duration-200" style={{
                  transform: expandedMenu === (item.id === "1" ? "profile" : item.id === "2" ? "orders" : "addresses") ? 'rotate(90deg)' : 'rotate(0deg)'
                }}>›</span>
              </div>
              
              {/* Expanded Content */}
              {expandedMenu === "profile" && item.id === "1" && (
                <div className="border-t border-[#e0e0e0] transition-all duration-300 transform translate-x-0">
                  <Newuser />
                </div>
              )}
              
              {expandedMenu === "orders" && item.id === "2" && (
                <div className="bg-white border-t border-[#e0e0e0] transition-all duration-300 transform translate-x-0">
                  <MyOrders/>
                </div>
              )}
              
              {expandedMenu === "addresses" && item.id === "3" && (
                <div className="bg-white p-[30px] border-t border-[#e0e0e0] transition-all duration-300 transform translate-x-0">
                  <h2 className="text-[24px] font-[600] text-[#333333] mb-[30px]">Shipping Addresses</h2>
                  <p className="text-[#666666]">You have 3 saved addresses. Address management will be displayed here.</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="px-[70px]">
      <div className="text-[#777777] text-[12px] py-[30px]">
        Home / My Profile
      </div>
      <div className="flex min-h-screen gap-[50px]">
        <div className="w-[300px]">
          <div className="flex items-center gap-[20px] px-[20px]">
            <img
              src={myprofilepic}
              width={72}
              height={72}
              alt="Profile"
              className="rounded-full mr-3 object-cover"
            />
            <div>
              <div className="text-[16px] text-[#333333]">Girish</div>
              <div className="text-[14px] text-[#9B9B9B]">girish@gmail.com</div>
            </div>
          </div>

          <div className="menu-items mt-[30px]">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className={`px-[20px] py-[20px] bg-[#ffffff] flex justify-between items-center cursor-pointer hover:bg-[#f5f5f5] transition-colors ${
                  (activeSection === "profile" && item.id === "1") ||
                  (activeSection === "orders" && item.id === "2") ||
                  (activeSection === "addresses" && item.id === "3")
                    ? ""
                    : ""
                }`}
                onClick={item.onClick}
              >
                <div className="flex flex-col gap-[5px]">
                  <div className="font-[600] text-[16px] text-[#222222]">
                    {item.title}
                  </div>
                  <div className="text-[#9B9B9B] font-[500] text-[11px]">
                    {item.subtitle}
                  </div>
                </div>
                <span className="font-[700]">›</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1">
          {activeSection === "profile" && (
            <div className="transition-all duration-300 transform translate-x-0">
              <Newuser />
            </div>
          )}

          {activeSection === "orders" && (
            <div className="bg-white p-[30px] border border-[#e0e0e0] transition-all duration-300 transform translate-x-0">
             
              <MyOrders/>
            </div>
          )}

          {activeSection === "addresses" && (
            <div className="bg-white p-[30px] border border-[#e0e0e0] transition-all duration-300 transform translate-x-0">
              <h2 className="text-[24px] font-[600] text-[#333333] mb-[30px]">Shipping Addresses</h2>
              <p className="text-[#666666]">You have 3 saved addresses. Address management will be displayed here.</p>
            </div>
          )}

          {!activeSection && (
            <div className="bg-white p-[30px] border border-[#e0e0e0]">
              <h2 className="text-[24px] font-[600] text-[#333333] mb-[30px]">Welcome to Your Profile</h2>
              <p className="text-[#666666]">Select an option from the left menu to get started.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;