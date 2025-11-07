import Header from "../components/Header";
import Footer from "../components/Footer";
import groupPhoto from "../assets/duen_coverphoto.jpg";
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
      <div className="flex flex-col min-h-screen">
        {/* First Scroll */}
        <section
          className="flex flex-col md:flex-row w-full pt-[50px]" // matches header height
          style={{ backgroundColor: "#221125" }}
        >
            
          {/* Left side */}
          <div className="flex-1 flex flex-col items-center justify-center py-20 text-center">
            <h1 className="text-4xl font-normal text-[#9a793f] m-0">
              Davis Undergraduate Engineering Network
            </h1>
            <h2 className="text-3xl font-bold text-[#9a793f] mt-6 m-0 animate-fadeIn">
              DUEN Fall '25 Cohort Project Overview
            </h2>
            <div className="relative mt-8">
                <img
                src={boredSmiski}
                alt="Smiski bored"
                className="
                    relative 
                    top-10 left-6          /* small screens */
                    sm:top-16 sm:left-12   /* tablets */
                    md:top-20 md:left-20   /* medium laptops */
                    lg:top-24 lg:left-2   /* large desktops */
                    w-30 sm:w-34 md:w-42 lg:w-60
                    object-contain
                "
                />
            </div>
          </div>

          {/* Right side image */}
          <div className="w-full md:w-1/2 h-[600px]">
            <img
              src={groupPhoto}
              alt="Group photo"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Second Scroll */}
        <section
          className="flex flex-col items-center justify-center gap-6 py-10 px-4 sm:px-8"
          style={{ backgroundColor: "   " }}
        >
          <h1 className="text-[#201224] font-poppins text-2xl sm:text-4xl font-semibold leading-normal m-0">
            About Our Project
          </h1>
          <p className="text-[#201224] text-center font-poppins text-base sm:text-lg font-normal leading-normal max-w-4xl m-0">
            Our project is a tabling system designed to enhance the interactivity
            of the DUEN club tabling experience for the general tabling audience.
            The system incorporates a flappy bird game that physically engages
            users, making the tabling process more enjoyable and memorable.
          </p>

            <div className="flex flex-col items-center gap-0">
            <img
                src={placeholder}
                alt="Smiski placeholder"
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
            <img src={phoneSmiski} className="w-32 md:w-48 lg:w-60 object-contain mt-10"></img>
        </div>
        {/* End of third scroll */}

        {/* Footer (no overlap) */}
        <div className="fixed bottom-0 left-0 w-full">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
