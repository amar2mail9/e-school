import React from "react";

function Category() {
  const categories = [
    {
      title: "1500+ Topic",
      img: "/1.png",
      text: "Learn Anythings",
    },
    {
      title: "1800+ Students",
      img: "/2.png",
      text: "Learn Anythings",
    },
    {
      title: "9k+ Test Token",
      img: "/3.png",
      text: "Learn Anythings",
    },
    {
      title: "2000+ Student",
      img: "/4.png",
      text: "Learn Anythings",
    },
  ];

  return (
    <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-[135px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {categories.map(({ title, img, text }, idx) => (
          <div
            key={idx}
            className="bg-[#f0fff0] hover:bg-white rounded-[10px] shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center cursor-pointer"
          >
            <div className="w-full flex justify-center mb-4">
              <img src={img} alt={title} className="w-20 h-20 object-contain" />
            </div>
            <h4 className="text-lg font-semibold text-[#413960] mb-2">
              {title}
            </h4>
            <p className="text-sm text-[#585859]">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
