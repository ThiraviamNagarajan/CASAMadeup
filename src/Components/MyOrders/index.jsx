// import React from "react";
// import myorderPic from "../../assets/Images/MyOrderpic.png";

// const MyOrders = () => {
//   const myOrderData = [
//     {
//       id: "1",
//       image: myorderPic,
//       orderid: "Order #12345678",
//       PaymentMode: "Credit Card Payment",
//       productName: "Madeup White Cotton Blend Checkered Slim Fit Shirt",
//       deliveryDate: "Express Delivery by Sat, Aug 30",
//       PaymentStatus: "Pending",
//       price: "Rs 1,899",
//     },
//     {
//       id: "2",
//       image: myorderPic,
//       orderid: "Order #12345679",
//       PaymentMode: "Credit Card Payment",
//       productName: "Madeup White Cotton Blend Checkered Slim Fit Shirt",
//       deliveryDate: "Express Delivery by Sat, Aug 30",
//       PaymentStatus: "Pending",
//       price: "Rs 1,899",
//     },
//     {
//       id: "3",
//       image: myorderPic,
//       orderid: "Order #12345680",
//       PaymentMode: "Credit Card Payment",
//       productName: "Madeup White Cotton Blend Checkered Slim Fit Shirt",
//       deliveryDate: "Express Delivery by Sat, Aug 30",
//       PaymentStatus: "Delivered",
//       price: "Rs 1,899",
//     },
//     {
//       id: "4",
//       image: myorderPic,
//       orderid: "Order #12345681",
//       PaymentMode: "Credit Card Payment",
//       productName: "Madeup White Cotton Blend Checkered Slim Fit Shirt",
//       deliveryDate: "Express Delivery by Sat, Aug 30",
//       PaymentStatus: "Delivered",
//       price: "Rs 1,899",
//     },
//   ];

//   const formatProductName = (name) => {
//     const breakAfter = "Blend";
//     if (name.includes(breakAfter)) {
//       const [before, after] = name.split(breakAfter);
//       return (
//         <>
//           {before + breakAfter}
//           <br />
//           {after.trim()}
//         </>
//       );
//     }
//     return name;
//   };

//   return (
//     <div className="p-[30px] border-[1px] border-[#333333] flex flex-col gap-[20px]">
//       {myOrderData.map((order) => (
//         <div
//           key={order.id}
//           className="border-b border-b-[#DDDDDD]
//  flex gap-[20px] p-[10px]"
//         >
//           <div className="bg-[#DDDDDD] p-[10px]">
//             <img src={order.image} width={60} height={60} alt="productpic" />
//           </div>
//           <div className="flex flex-col gap-[5px] flex-1">
//             <div className="text-[12px] text-[#777777]">{order.orderid}</div>
//             <div className="font-[600] text-[16px] text-[#333333]">
//               {formatProductName(order.productName)}
//             </div>
//             <div className="text-[12px] text-[#777777]">
//               {order.deliveryDate}
//             </div>
//           </div>
//           <div className="flex flex-col items-end justify-between">
//             <div className="text-[12px] text-[#777777]">
//               {order.PaymentMode}
//             </div>
//             <div className="text-[20px] text-[#333333] font-[500]">
//               {order.price}
//             </div>
//             <span className="inline-block transform rotate-90 font-[800]">
//               {">"}
//             </span>
//             <div
//               className={`inline-flex items-center justify-center px-[20px] py-[8px] text-sm font-medium rounded-t-[6px] ${
//                 order.PaymentStatus === "Pending"
//                   ? "bg-[#333333] text-[#fff]"
//                   : "bg-[#F3F3F3] text-[#777777]"
//               }`}
//             >
//               {order.PaymentStatus}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MyOrders;

import React from "react";
import myorderPic from "../../assets/Images/MyOrderpic.png";

const MyOrders = () => {
  const myOrderData = [
    {
      id: "1",
      image: myorderPic,
      orderid: "Order #12345678",
      PaymentMode: "Credit Card Payment",
      productName: "Madeup White Cotton Blend Checkered Slim Fit Shirt",
      deliveryDate: "Express Delivery by Sat, Aug 30",
      PaymentStatus: "Pending",
      price: "Rs 1,899",
    },
    {
      id: "2",
      image: myorderPic,
      orderid: "Order #12345679",
      PaymentMode: "Credit Card Payment",
      productName: "Madeup White Cotton Blend Checkered Slim Fit Shirt",
      deliveryDate: "Express Delivery by Sat, Aug 30",
      PaymentStatus: "Pending",
      price: "Rs 1,899",
    },
    {
      id: "3",
      image: myorderPic,
      orderid: "Order #12345680",
      PaymentMode: "Credit Card Payment",
      productName: "Madeup White Cotton Blend Checkered Slim Fit Shirt",
      deliveryDate: "Express Delivery by Sat, Aug 30",
      PaymentStatus: "Delivered",
      price: "Rs 1,899",
    },
    {
      id: "4",
      image: myorderPic,
      orderid: "Order #12345681",
      PaymentMode: "Credit Card Payment",
      productName: "Madeup White Cotton Blend Checkered Slim Fit Shirt",
      deliveryDate: "Express Delivery by Sat, Aug 30",
      PaymentStatus: "Delivered",
      price: "Rs 1,899",
    },
  ];

  const formatProductName = (name) => {
    const breakAfter = "Blend";
    if (name.includes(breakAfter)) {
      const [before, after] = name.split(breakAfter);
      return (
        <>
          {before + breakAfter}
          <br />
          {after.trim()}
        </>
      );
    }
    return name;
  };

  return (
    <div className="px-[0px] md:p-[20px] sm:p-[15px]  flex flex-col gap-[20px] md:gap-[15px] sm:gap-[10px]">
      {myOrderData.map((order) => (
        <div
          key={order.id}
          className="flex gap-[20px] md:gap-[15px] sm:gap-[10px] p-[10px] md:p-[8px] sm:p-[6px]"
        >
          <div className="bg-[#DDDDDD] p-[10px] h-[70px] flex items-center justify-center ">
            <img src={order.image} width={60} height={60} className="md:w-[50px] md:h-[50px] sm:w-[40px] sm:h-[40px]" alt="productpic" />
          </div>
          <div className="flex flex-col gap-[5px] md:gap-[4px] sm:gap-[3px] flex-1">
            <div className="text-[12px] md:text-[11px] sm:text-[10px] text-[#777777]">{order.orderid}</div>
            <div className="font-[600] text-[16px] md:text-[14px] sm:text-[12px] text-[#333333]">
              {formatProductName(order.productName)}
            </div>
            <div className="text-[12px] md:text-[11px] sm:text-[10px] text-[#777777]">
              {order.deliveryDate}
            </div>
          </div>
          <div className="flex flex-col items-end justify-between">
            <div className="text-[12px] md:text-[11px] sm:text-[10px] text-[#777777]">
              {order.PaymentMode}
            </div>
            <div className="text-[20px] md:text-[18px] sm:text-[16px] text-[#333333] font-[500]">
              {order.price}
            </div>
            <span className="inline-block transform rotate-90 font-[800] text-[16px] md:text-[14px] sm:text-[12px]">
              {">"}
            </span>
            <div
              className={`inline-flex items-center justify-center px-[20px] md:px-[15px] sm:px-[12px] py-[8px] md:py-[6px] sm:py-[5px] text-sm md:text-xs sm:text-xs font-medium rounded-t-[6px] ${
                order.PaymentStatus === "Pending"
                  ? "bg-[#333333] text-[#fff]"
                  : "bg-[#F3F3F3] text-[#777777]"
              }`}
            >
              {order.PaymentStatus}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
