import BG from "./assets/Background.jpeg"; 
import Navbar from "./Components/Navbar";
import IphoneFrame from "./Components/IphoneFrame";
import CharacterImage from './assets/Character.png';
import Leaderboard from "./Components/Leaderboard";
import AboutUs from "./Components/About Us.jsx";

export default function App() {
  return (
    <div
      className="relative min-h-screen bg-gray-200 bg-contain bg-center"
      style={{ backgroundImage: `url(${BG})` }}
    >
      <div>
        <Navbar />

        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between pl-[11%] pt-[4%] pb-[3%]">

          {/* iPhone Frame Section */}
          <div className="flex justify-center w-full lg:w-auto">
            <IphoneFrame />
          </div>

          {/* Character and Buttons Section */}
          <div className="relative bg-[#f6d4be] rounded-lg w-full lg:w-[50%] flex flex-col items-center mt-[8%] mr-[11%] p-[7%]">

            {/* Text Above Character Image */}
            <p className="text-[#37271d] text-[230%] absolute top-[15%] left-[15%]">
              Let's
            </p>

            {/* Character Image */}
            <img
              className="absolute left-5 bottom-5 w-[30%] lg:w-[20%]"
              src={CharacterImage}
              alt="Game Character"
            />

            {/* Buttons */}
            <div className="relative mt-[3%] ml-[45%] flex flex-col items-center space-y-4">
              <button className="bg-[#37271d] text-base lg:text-[21px] text-white px-[25%] lg:px-[130px] py-[3%] rounded-md hover:bg-[#da9d76]">
                Play
              </button>
              <span className="text-[#37271d] text-lg">and</span>
              <button className="bg-[#37271d] text-base lg:text-[21px] text-white px-[25%] lg:px-[130px] py-[3%] rounded-md hover:bg-[#da9d76]">
                Learn
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Leaderboard Component */}
      <div id="leaderboard" className="relative mt-[85px] pb-[55px] px-[5%]">
        <Leaderboard />
      </div>

      {/* About Us Component */}
      <div id="aboutus" className="relative mt-[85px] pb-[55px] px-[5%]">
        <AboutUs />
      </div>
    </div>
  );
}