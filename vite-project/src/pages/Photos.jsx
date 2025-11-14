import Footer from "../components/Footer";
import Header from "../components/Header";
import img1 from "../assets/code.png";
import img2 from "../assets/prototyping.png";
import img3 from "../assets/quality.png";
import img4 from "../assets/testing.png";
import img5 from "../assets/success.png";
import img6 from "../assets/gametesting.png";
import img7 from "../assets/CV.png";
import img8 from "../assets/finishingtouches.jpg";
import img9 from "../assets/firstpresentation.jpg";
import img10 from "../assets/painting.png";
import laptopSmiski from "../assets/smiskis/laptop.png";
import BackToTopButton from "../components/BackToTopButton";
const timeline = [
  { date: "Week 1", 
    image: img1, 
    title: "Code Logic", 
    description: "While we wait for the Raspberry Pi to deliver, the Electrical Team starts coding the motors, wheel, and emergency button. They start creating the toggle functionality for the rigged push button on TinkerCAD. " 
},
  { date: "Week 2", image: img2, title: "Brainstorming", description: "Mechanical Team brainstorming and comparing different methods to dispense the flyer after each win. Finalized a design with a rack and pinion mechanism that will drive a small tray with the flyer out of the Tabling Assistant." },
  { date: "Week 2", image: img3, title: "Assembly", description: "External pieces finish 3D printing. Mechanical Team begins putting together the chassis to check the concentricity of the fixtures that keep our structure together." },
  {
    date: "Week 2",
    title: "Testing Game",
    description:
      "Computer Vision Team starts programming the Raspberry Pi 5 camera to use pose estimation to detect the position of wrist, shoulder, and elbow landmarks to control the game.",
    image: img6,
  },
  {
    date: "Week 3",
    title: "Testing Code",
    description:
      "Electrical Team is finalizing the tray motor code and implementing the code for the gate and wheel motors.",
    image: img4,
  },
  {
    date: "Week 3",
    title: "Successful Test",
    description:
      "The Flappy Bird game worked with visual input from the AI camera and displayed on the screen.",
    image: img5,
  },
  {
    date: "Week 3",
    title: "Combining Systems",
    description:
      "Computer Vision Team successfully integrated the game with the mechanical and electrical systems.",
    image: img7,
  },
  {
    date: "Week 3",
    title: "Finishing Touches",
    description:
      "Putting everything together in preparation for the first presentation.",
    image: img8,
  },
  {
    date: "Week 3",
    title: "First Presentation",
    description:
      "Completed the first presentation of our working prototype to DUEN officers and received valuable feedback for further improvements.",
    image: img9,
  },
  {
    date: "Week 4",
    title: "Enhancing Visual Appeal",
    description:
      "Painting the Tabling Machine's exterior to make it more attractive and engaging for users at tabling events. The changes also aimed to make the device fit the DUEN aesthetic.",
    image: img10,
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
      <img src={laptopSmiski} alt="laptop" className="absolute right-6 h-[100px] md:h-[100px] lg:h-[200px]"/>
        {/* Vertical Line */}
      <div className="absolute left-1/2 top-0 h-full w-[2px] bg-[#E9D7AF] hidden md:block -translate-x-1/2 z-0" />

      {/* Title */}
      <h1 className="relative z-20 text-center text-[#E9D7AF] font-poppins text-4xl sm:text-5xl font-semibold mb-16 bg-[#201224] inline-block px-4">
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
            {/* Image */}
            <div
              className={`w-full md:w-1/2 flex justify-center md:justify-${
                index % 2 === 0 ? "end" : "start"
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="rounded-2xl shadow-lg object-cover w-[480px] h-[400px] md:h-[450px] z-10"
              />
            </div>

            {/* Text block (always opposite side on desktop, centered on mobile) */}
            <div
              className={`w-full md:w-1/2 mt-6 md:mt-0 text-center md:text-center${
                  index % 2 === 0 ? "left" : "right"
              }`}
              >
              <div
                  className={`flex flex-col items-center md:items-${
                  index % 2 === 0 ? "start md:pl-8" : "end md:pr-8"
                  }`}
              >
                  <h3 className="text-4xl font-semibold text-[#E9D7AF] mb-2">
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

            {/* Horizontal line connecting to dot */}
            <div
              className={`absolute top-1/2 w-[20%] h-[2px] bg-[#E9D7AF] hidden md:block -translate-y-1/2 z-0
              ${index % 2 === 0 ? "right-1/2" : "left-1/2"}`}
            />
                


          </div>
        ))}
      </div>
    </section>
    <Footer/>
    <BackToTopButton/>
    </>
  );
}