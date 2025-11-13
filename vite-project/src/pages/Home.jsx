import Header from "../components/Header";
import Footer from "../components/Footer";
import groupPhoto from "../assets/cohortpic.png";
import boredSmiski from "../assets/smiskis/bored.png";
import holdingSmiski from "../assets/smiskis/holding.png";
import phoneSmiski from "../assets/smiskis/phone.png";
import placeholder from '../assets/color_pick.png';

function Home() {
  return (
    <>
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>

      {/* Main Page */}
      <div className="flex flex-col min-h-screen overflow-x-hidden">
        {/* First Scroll */}
        <section
          className="flex flex-col md:flex-row w-full min-h-screen m-0 p-0"
          style={{ backgroundColor: "#221125" }}
        >
            
          {/* Left side */}
          <div className="flex-1 flex flex-col items-center justify-center py-20 text-center">
            <h1 className="text-4xl font-normal text-[#9a793f] m-0">
              Davis Undergraduate Engineering Network
            </h1>
            <h2 className="text-3xl font-bold text-[#9a793f] mt-6 m-0">
              DUEN Fall '25 Cohort Project Overview
            </h2>
            <div className="relative mt-8">
                <img
                src={boredSmiski}
                alt="Smiski bored"
                className="
                    relative 
                    top-10 left-6         /* small screens */
                    sm:top-16 sm:left-2   /* tablets */
                    md:top-20 md:left-2   /* medium laptops */
                    lg:top-24 lg:left-2   /* large desktops */
                    w-30 sm:w-34 md:w-42 lg:w-60
                    object-contain
                "
                />
            </div>
          </div>

          {/* Right side image */}
          <div className="md:w-1/2 lg:w-1/2 h-[600px] relative">
          <img
            src={groupPhoto}
            alt="Group photo"
            className="absolute w-full h-full object-cover rounded-2xl
                      md:top-20 md:left-2
                      lg:top-16 lg:left-2"
          />
          </div>

        </section>

        {/* Second Scroll */}
        <section
          className="flex flex-col items-center justify-center gap-10 py-10 px-4 sm:px-8"
          style={{ backgroundColor: "#F5F1F8" }} // optional light background
        >
          {/* Header */}
          <h1 className="text-[#201224] font-poppins text-2xl sm:text-4xl font-semibold text-center">
            About Our Project
          </h1>

          {/* Sets column layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full">

            {/* Overview on left */}
            <div className="flex flex-col items-center text-center md:text-left">
              <div className="flex flex-col items-center mb-3">
                <h2 className="text-[#201224] font-poppins text-xl sm:text-2xl font-semibold">
                  Project Overview
                </h2>
                <div className="w-16 h-1 bg-[#7D5BA6] rounded-full mt-1"></div>
              </div>
              <p className="text-[#201224] font-poppins text-base sm:text-lg leading-relaxed max-w-md">
                The “Tabling Assistant” is an interactive system designed to make DUEN’s
                tabling experience more engaging for students. It features a computer
                vision based flappy bird mini-game that responds to user movements with a motor 
                and prize wheel that dispenses a tray with a flyer upon completion. The device aims to
                attract attention, foster engagement, and promote DUEN in a fun,
                hands-on way.
              </p>
            </div>

            {/* Goals and objectives on right */}
            <div className="flex flex-col items-center text-center md:text-left md:pl-10">
              <div className="flex flex-col items-center mb-3">
                <h2 className="text-[#201224] font-poppins text-xl sm:text-2xl font-semibold">
                  Goals and Objectives
                </h2>
                <div className="w-16 h-1 bg-[#7D5BA6] rounded-full mt-1"></div>
              </div>
              <ul className="text-[#201224] text-left font-poppins text-base sm:text-lg leading-relaxed list-disc list-outside pl-6 max-w-md">
                <li>Design an engaging, interactive system for DUEN tabling events.</li>
                <li>Integrate hardware and software for a memorable user experience.</li>
                <li>Ensure the portability and durability of the mechanism to ensure ease of use.</li>
                <li>Showcase multidisciplinary engineering collaboration and creativity.</li>
              </ul>
            </div>

          </div>


          {/* Images section (optional, kept at bottom) */}
          <div className="flex flex-col items-center gap-0 mt-10">
            <img
              src={placeholder}
              alt="Project prototype placeholder"
              className="max-w-xs sm:max-w-sm md:max-w-md lg:w-[50rem] min-w-[300px] object-contain"
            />
            <img
              src={holdingSmiski}
              alt="Smiski holding"
              className="w-24 sm:w-32 md:w-40 lg:w-40 object-contain"
            />
          </div>
        </section>


        {/* Third scroll */}
        <div className="flex flex-col items-center gap-6 p-4 sm:p-[50px_20px] self-stretch" style={{ backgroundColor: "#E9D7AF" }}>
            <h1 className="text-[#201224] font-poppins text-2xl sm:text-4xl font-semibold leading-normal">
              Project Demo Video
            </h1>
            <p className="text-[#201224] text-center font-poppins text-base sm:text-lg font-normal leading-normal max-w-4xl">
                Some video showing project
            </p>
            <img src={phoneSmiski} className="sm:w-30 md:w-30 lg:w-30 object-contain mt-10"></img>
        </div>
        {/* End of third scroll */}

        {/* Footer (no overlap) */}
        
          <Footer />
        
      </div>
    </>
  );
}

export default Home;
