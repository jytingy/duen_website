import { useState } from "react";

function Intern({ image, name, major }) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleText = () => {
    if (window.innerWidth < 768) setIsVisible(!isVisible); // only on mobile
  };

  return (
    <div className="relative flex w-[292px] flex-col items-center gap-2 group">
      {/* Image frame */}
      <div
      className="relative group cursor-pointer"
      onClick={toggleText}
      >
        <div className="relative w-[292px] h-[292px] overflow-hidden rounded-lg">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          {/* Hover overlay */}
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center bg-black/60 transition-opacity duration-300 ${
              isVisible ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            }`}
          >
            <h3 className="text-lg font-poppins font-semibold text-[#E9D7AF]">
              {name}
            </h3>
            <p className="text-sm font-poppins text-white">{major}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intern;