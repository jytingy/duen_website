function Intern({ image, name, major }) {
  return (
    <div className="relative flex w-[292px] flex-col items-center gap-2 group">
      {/* Image frame */}
      <div className="relative w-[292px] h-[292px] overflow-hidden rounded-lg">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-lg font-poppins font-semibold text-[#E9D7AF]">
            {name}
          </h3>
          <p className="text-sm font-poppins text-white">{major}</p>
        </div>
      </div>
    </div>
  );
}

export default Intern;