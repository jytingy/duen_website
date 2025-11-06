import Footer from "../components/Footer";
import Header from "../components/Header";
import img1 from "../assets/code.png";
import img2 from "../assets/prototyping.png";
import img3 from "../assets/quality.png";
import img4 from "../assets/quality.png";

const timeline = [
  { date: "Week 1", 
    image: img1, 
    title: "Code Logic", 
    description: "Ryan is working on creating the toggle functionality for the rigged push button on TinkerCAD. The Raspberry Pi wasn’t here so he started with the Arduino." 
},
  { date: "Week 2", image: img2, title: "Prototyping", description: "Nik and Ben drafting a rough prototype drawing of a rack and pinion mechanism to drive the cart out of the tabling assistant (AKA Project Adam)" },
  { date: "Week 2", image: img3, title: "National Recognition", description: "Atharva is putting together the chassis to check the concentricity of the fixtures that keep our structure together." },
  {
    date: "Summer 2024",
    title: "Final Presentation",
    description:
      "We presented our final design to faculty and industry partners — marking a major milestone for the team!",
    image: img3,
  },
];

export default function Photos() {
  return (
    <>
    {/* Header Section */}
        <div className="fixed top-0 left-0 w-full z-50">
            <Header/>
        </div>
    <section className="relative w-full bg-[#201224] pt-20 pb-10 px-6 overflow-hidden">
      {/* Vertical Line */}
      <div className="absolute left-1/2 top-0 h-full w-[2px] bg-[#E9D7AF] hidden md:block -translate-x-1/2 z-0" />

      {/* Title */}
      <h1 className="relative z-20 text-center text-white font-poppins text-4xl sm:text-5xl font-semibold mb-16 bg-[#201224] inline-block px-4">
        Project Timeline
      </h1>

      {/* Timeline items */}
      <div className="space-y-20 relative z-10 pb-0">
        {timeline.map((item, index) => (
          <div
            key={index}
            className={`relative flex flex-col md:flex-row items-center md:justify-between ${
              index % 2 === 0 ? "" : "md:flex-row-reverse"
            }`}
          >
            {/* Image (always touching the center line) */}
            <div
              className={`w-full md:w-1/2 flex justify-center md:justify-${
                index % 2 === 0 ? "end" : "start"
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="rounded-2xl shadow-lg object-cover w-[380px] h-[300px] md:h-[350px] z-10"
              />
            </div>

            {/* Text block (always opposite side on desktop, centered on mobile) */}
            <div
            className={`w-full md:w-1/2 mt-6 md:mt-0 text-center md:text-${
                index % 2 === 0 ? "left" : "right"
            }`}
            >
            <div
                className={`flex flex-col items-center md:items-${
                index % 2 === 0 ? "start md:pl-8" : "end md:pr-8"
                }`}
            >
                <h3 className="text-2xl font-semibold text-[#E9D7AF] mb-2">
                {item.title}
                </h3>
                <p className="text-gray-200 mb-3 max-w-md">
                {item.description}
                </p>
                <span className="bg-[#E9D7AF] text-[#201224] text-sm font-bold px-3 py-1 rounded-full">
                {item.date}
                </span>
            </div>
            </div>


            {/* Dot marker */}
            <div className="absolute left-1/2 top-1/2 w-4 h-4 bg-[#E9D7AF] rounded-full transform -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block" />
          </div>
        ))}
      </div>
    </section>
    <Footer/>
    </>
  );
}