import image1 from "../../assets/Images/53c88f754956328fe056cb09869ba46940b32e54.jpg";
import image2 from "../../assets/Images/6c7c29e77070630908039429318506a39732e089.jpg";

const Collection = () => {
  const collection = [
    { id: 1, image: image1, price: "1,499.00", title: "Printed Polo T-Shirt" },
    { id: 2, image: image2, price: "1,499.00", title: "Printed Polo T-Shirt" },
    { id: 3, image: image1, price: "1,499.00", title: "Printed Polo T-Shirt" },
    { id: 4, image: image2, price: "1,499.00", title: "Printed Polo T-Shirt" },
    { id: 5, image: image1, price: "1,499.00", title: "Printed Polo T-Shirt" },
  ];

  return (
    <div className="px-[60px] mt-[20px]">
      <div className="w-full">
        <div className="flex items-center w-full">
          <div className="border-t border-[#DDDDDD] w-full"></div>
          <span
            className="mx-4 text-gray-700 whitespace-nowrap"
            style={{ letterSpacing: 3 }}
          >
            LATEST COLLECTION
          </span>
          <div className="border-t border-[#DDDDDD] w-full"></div>
        </div>
      </div>

      <div className="overflow-x-auto mt-[40px]">
        <div className="inline-flex gap-[40px]">
          {collection.map((val, index) => (
            <div
              key={index}
              className="flex flex-col gap-[10px] items-center min-w-[222px]"
            >
              <img
                src={val.image}
                height={318}
                width={222}
                className="object-cover"
                alt={val.title}
              />
              <div>{val.title}</div>
              <div className="text-[#E10000]">{val.price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
