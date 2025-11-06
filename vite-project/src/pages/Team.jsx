//placeholder image
import img from './blankPFP.jpg';

import img1 from '../assets/devin.jpg';
import img2 from '../assets/sachin.jpg';
import img3 from '../assets/justin.png';
import img4 from '../assets/ellaina.jpg';
import img5 from '../assets/jessica.jpg';
import img6 from '../assets/nancy.jpg';
import img8 from '../assets/atharva.jpg';
import img10 from '../assets/ryann.jpg';
import img11 from '../assets/ben.jpg';
import img13 from '../assets/claris.jpg';
import img15 from '../assets/maya.jpg';
import img16 from '../assets/ethan.jpg';
import img18 from '../assets/kenneth.jpg';
import img21 from '../assets/jeff.webp';
import img25 from '../assets/etienne.webp';
import img26 from '../assets/cindy.webp';
import img27 from '../assets/hanna.webp';
import img28 from '../assets/hadi.webp';
import img29 from '../assets/nickx.webp';

import peekingSmiski from '../assets/smiskis/peeking.png';

import Intern from "../components/Intern";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Team() {
    return (
        <>
    {/* Header Section */}
    <div className="fixed top-0 left-0 w-full z-50">
        <Header/>
    </div>
    

    {/* Title Section */}
<div
  className="title-section relative flex flex-col justify-center items-center gap-2.5 min-h-[400px] self-stretch"
  style={{ backgroundColor: "#201224" }}
>
  <div className="flex flex-col justify-center items-center gap-2.5 p-2.5 w-[726px] flex-1">
    <h1 className="text-[#E9D7AF] font-poppins text-3xl sm:text-6xl font-semibold leading-normal">
      Nonchalant Hustlers
    </h1>
    <h2 className="text-white font-poppins text-xl sm:text-3xl font-normal leading-normal">
      Construction Team
    </h2>
  </div>
  <img 
    src={peekingSmiski} 
    alt="smiski" 
    className="absolute bottom-0 z-20 h-[80px] w-auto object-contain" 
  />
</div>




    {/* Intern grid */}
    <div className="flex flex-col items-start gap-6 p-4 sm:p-[50px_20px] self-stretch">

    {/* Computer Vision */}
    <div className="flex flex-col items-center gap-4 sm:gap-[10px] self-stretch">
      <div className="flex flex-col py-4 sm:py-5 justify-center items-center gap-2 sm:gap-2 w-full max-w-[1000px] mx-auto">
        <h1 className="text-[#201224] font-poppins text-2xl sm:text-5xl font-bold leading-normal">
          Computer Vision
        </h1>
        <p className="text-[#201224] text-center font-poppins text-base sm:text-lg font-normal leading-normal">
          The Computer Vision team was responsible for designing a game that would be played by the person who approached the tabling machine. 
          The game takes a twist on the game, Flappy Bird. Instead of flapping by tapping the screen, the player flaps by moving their arms.
          The AI camera is focused on 33 specific points of the body (landmarks), of which was mainly focused on the elbow, shoulder, and wrists, and eyes. 
          Using these landmarks, we were able to determine the position of the arms in order to control the game. The game was displayed on a screen on the tabling machine.
          After passing through 5 pipes successfully, the player wins the game and the prize wheel spins.
        </p>
      </div>

      <div className="flex flex-wrap justify-center sm:flex-row items-start gap-4 sm:gap-[10px] self-stretch">
        <Intern image={img1} name="Devin Sidhu" major="Statistics" />
        <Intern image={img2} name="Sachin Venkat" major="Computer Science" />
        <Intern image={img3} name="Justin Yee" major="Data Science" />
      </div>
    </div>

    {/* Website Development */}
    <div className="flex flex-col items-center gap-4 sm:gap-[10px] self-stretch">
      <div className="flex flex-col py-4 sm:py-5 justify-center items-center gap-2 sm:gap-2 w-full max-w-[1000px] mx-auto">
        <h1 className="text-[#201224] font-poppins text-2xl sm:text-5xl font-semibold leading-normal">
          Website Development
        </h1>
        <p className="text-[#201224] text-center font-poppins text-base sm:text-lg font-normal leading-normal">
          The Website Development team was responsible for designing and developing the DUEN Fall 2025 project website.
          The website showcases the team's project, members, and progress throughout the construction process.
          It was designed in Figma to ensure a cohesive and visually appealing layout that fits the DUEN aesthetic.
          It was built using React and Vite to ensure a responsive and user-friendly experience.
          The team collaborated closely with other sub-teams to gather content and present it effectively on the website.
        </p>
      </div>

      <div className="flex flex-wrap justify-center sm:flex-row items-start gap-4 sm:gap-[10px] self-stretch">
        <Intern image={img4} name="Ellaina Kimura" major="Biomedical Engineering" />
        <Intern image={img5} name="Jessica Ting" major="Computer Science" />
        <Intern image={img6} name="Nancy Wang" major="Computer Science" />
      </div>
    </div>

    {/* Mechanical */}
    <div className="flex flex-col items-center gap-4 sm:gap-[10px] self-stretch">
      <div className="flex flex-col py-4 sm:py-5 justify-center items-center gap-2 sm:gap-2 w-full max-w-[1000px] mx-auto">
        <h1 className="text-[#201224] font-poppins text-2xl sm:text-5xl font-semibold leading-normal">
          Mechanical
        </h1>
        <p className="text-[#201224] text-center font-poppins text-base sm:text-lg font-normal leading-normal">
          DESCRIPTION
        </p>
      </div>

      <div className="flex flex-wrap justify-center sm:flex-row items-start gap-4 sm:gap-[10px] self-stretch">
        <Intern image={img} name="Nik Buerger" major="Mechanical Engineering" />
        <Intern image={img8} name="Atharva Kharwadkar" major="Mechanical Engineering" />
        <Intern image={img} name="Maddy Kim" major="Biological Systems Engineering" />
        <Intern image={img10} name="Ryan Nakayama" major="Mechanical Engineering" />
      </div>
    </div>

    {/* Electrical */}
    <div className="flex flex-col items-center gap-4 sm:gap-[10px] self-stretch">
      <div className="flex flex-col py-4 sm:py-5 justify-center items-center gap-2 sm:gap-2 w-full max-w-[1000px] mx-auto">
        <h1 className="text-[#201224] font-poppins text-2xl sm:text-5xl font-semibold leading-normal">
          Electrical
        </h1>
        <p className="text-[#201224] text-center font-poppins text-base sm:text-lg font-normal leading-normal">
          DESCRIPTION
        </p>
      </div>

      <div className="flex flex-wrap justify-center sm:flex-row items-start gap-4 sm:gap-[10px] self-stretch">
        <Intern image={img11} name="Ben Brundage" major="Computer Engineering" />
        <Intern image={img} name="Adam Kim" major="Computer Engineering" />
        <Intern image={img13} name="Claris Tain" major="Electrical Engineering" />
        <Intern image={img} name="Ryan Ton" major="Computer Engineering" />
      </div>
    </div>

    {/* Documentation */}
    <div className="flex flex-col items-center gap-4 sm:gap-[10px] self-stretch">
      <div className="flex flex-col py-4 sm:py-5 justify-center items-center gap-2 sm:gap-2 w-full max-w-[1000px] mx-auto">
        <h1 className="text-[#201224] font-poppins text-2xl sm:text-5xl font-semibold leading-normal">
          Documentation
        </h1>
        <p className="text-[#201224] text-center font-poppins text-base sm:text-lg font-normal leading-normal">
          Each member of the team is responsible for shadowing one of the technical teams to observe their process, progress, and challenges. 
          We combined descriptions, sketches, and pictures to track overall progress of our project to complete construction worksheets, a user guide, and our final presentation. 
          We also were responsible for miscellaneous tasks such as graphic design, budgeting, and brainstorming fundraisers.
        </p>
      </div>

      <div className="flex flex-wrap justify-center sm:flex-row items-start gap-4 sm:gap-[10px] self-stretch">
        <Intern image={img15} name="Maya Athayasay" major="Chemical Engineering" />
        <Intern image={img16} name="Ethan Cooc" major="Environmental Science" />
        <Intern image={img} name="Donald Le" major="Chemical Engineering" />
        <Intern image={img18} name="Kenneth Nguyen" major="Environmental Engineering" />
        <Intern image={img} name="Sophia Palae" major="Data Science" />
      </div>
    </div>

    {/* Construction Helpers */}
    <div className="flex flex-col items-center gap-4 sm:gap-[10px] self-stretch">
      <div className="flex flex-col py-4 sm:py-5 justify-center items-center gap-2 sm:gap-2 w-full max-w-[1000px] mx-auto">
        <h1 className="text-[#201224] font-poppins text-2xl sm:text-5xl font-semibold leading-normal">
          Construction Helpers
        </h1>
        <p className="text-[#201224] text-center font-poppins text-base sm:text-lg font-normal leading-normal">
          DESCRIPTION
        </p>
      </div>

      <div className="flex flex-wrap justify-center sm:flex-row items-start gap-4 sm:gap-[10px] self-stretch">
        <Intern image={img} name="Ben Busche" major="Mechanical Engineering" />
        <Intern image={img21} name="Jefferson Fan" major="Mechanical Engineering" />
        <Intern image={img} name="Lianne R. de Leon" major="Mechanical Engineering" />
        <Intern image={img} name="Jeshurun Liou" major="Mechanical Engineering" />
        <Intern image={img} name="Ian Marwong" major="Computer Engineering" />
        <Intern image={img} name="Lorenzo Nakata" major="Electrical Engineering" />
        <Intern image={img} name="Seshnag Regoti" major="Food Science And Technology" />
      </div>
    </div>

    {/* E-Board */}
    <div className="flex flex-col items-center gap-4 sm:gap-[10px] self-stretch">
      <div className="flex flex-col py-4 sm:py-5 justify-center items-center gap-2 sm:gap-2 w-full max-w-[1000px] mx-auto">
        <h1 className="text-[#201224] font-poppins text-2xl sm:text-5xl font-semibold leading-normal">
          Executive Board
        </h1>
        <p className="text-[#201224] text-center font-poppins text-base sm:text-lg font-normal leading-normal">
          Oversaw the 2025 Fall Cohort throughout the entire internship process.
        </p>
      </div>

      <div className="flex flex-wrap justify-center sm:flex-row items-start gap-4 sm:gap-[10px] self-stretch">
        <Intern image={img25} name="Etienne Rousseau" major="President" />
        <Intern image={img26} name="Cindy Shing" major="Vice President" />
        <Intern image={img27} name="Hanna Dao" major="Secretary" />
        <Intern image={img28} name="Hadi Beveridge Eguino" major="Program Manager" />
        <Intern image={img29} name="Nicholas Xu" major="Program Manager" />
      </div>
    </div>

    

  </div>
  <Footer></Footer>
</>

        
    );
}

export default Team;