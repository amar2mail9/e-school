import React from "react";

function Testimonial() {
  return (
    <div className="md:px-[353px] px-[10px] pb-16 mt-16 md:flex-row flex-col flex items-center justify-center md:gap-16 gap-4">
      {/* image */}
      <div className="w-[120px] h-[120px] ">
        <img src="t.png" alt="" className="w-full h-full rounded-full" />
      </div>
      <p className="md:w-[480px] w-[90%] h-[90px] text-center">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable.
      </p>
    </div>
  );
}

export default Testimonial;
