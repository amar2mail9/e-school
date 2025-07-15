import React from "react";

function OnlineCourses() {
  const courseData = [
    {
      title: "Modern Psychology",
      designation: "Designation",
      date: "Start 20 April, 2021",
      seats: "60 seats",
      img: "./a.png",
    },
    {
      title: "Modern Psychology",
      designation: "Designation",
      date: "Start 20 April, 2021",
      seats: "60 seats",
      img: "./b.png",
    },
    {
      title: "Modern Psychology",
      designation: "Designation",
      date: "Start 20 April, 2021",
      seats: "60 seats",
      img: "./c.png",
    },
  ];

  return (
    <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-[200px]">
      <h2 className="text-[32px] sm:text-[36px] text-center text-[#413960] font-bold">
        Online Courses
      </h2>

      <div className="flex justify-center">
        <div className="pt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {courseData.map(({ title, designation, img, date, seats }, idx) => (
            <div
              key={idx}
              className=" cursor-pointer rounded-[10px] shadow-md hover:shadow-2xl transition-all duration-300 p-[20px] flex flex-col justify-between h-[483px] w-[370px]"
            >
              {/* Image */}
              <div className="w-[331px] h-[234px] mb-4">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover rounded-[10px]"
                />
              </div>

              {/* Title and Designation */}
              <div className="mb-4">
                <h3 className="text-[24px] text-[#413960] font-medium">
                  {title}
                </h3>
                <p className="text-[16px] text-[#585859]">{designation}</p>
              </div>

              {/* Button */}
              <div className="mb-4">
                <button className="bg-[#21B573] text-white px-6 py-2 rounded-full text-sm hover:bg-[#1a9c63] transition">
                  Buy Course
                </button>
              </div>

              {/* Date and Seats */}
              <div className="flex items-center justify-between text-[14px] text-[#585859] mt-auto pt-2 ">
                <div className="flex items-center gap-2">
                  <img
                    src="./calendar-outline 1.png"
                    alt="Calendar Icon"
                    className="w-5 h-5"
                  />
                  <p>{date}</p>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="./people-outline 3.png"
                    alt="People Icon"
                    className="w-5 h-5"
                  />
                  <p>{seats}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OnlineCourses;
