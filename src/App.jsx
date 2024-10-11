import Navbar from "./Components/Navbar";
import IphoneFrame from "./Components/IphoneFrame";
import TitleImage from './assets/Title.png';
import Leaderboard from "./Components/Leaderboard";
import AboutUs from "./Components/About Us.jsx";

export default function App() {
  return (
    <div className="relative min-h-screen bg-gray-200">
      <div>
        <Navbar />

        <div className="pl-[11%] pt-[4%] pb-[3%] flex flex-col lg:flex-row items-start lg:items-center">
          <div className="flex justify-center w-full lg:w-auto">
            <IphoneFrame />
          </div>

          {/* Title */}
          <img
            className="inline-block lg:ml-[8%] lg:mt-[-150px] w-[90%] lg:w-[60%] xl:w-[60%]"
            src={TitleImage}
            alt="Title"
          />

          {/* Buttons */}
          <div className="relative mt-6 lg:absolute lg:top-[30%] lg:left-[67%] flex space-x-4 transform lg:-translate-x-1/2">
            <button className="bg-[#5e17eb] text-base lg:text-[21px] text-white px-[15%] lg:px-[130px] py-[3%] rounded-md hover:bg-gray-800">
              Play
            </button>
            <button className="bg-[#5e17eb] text-base lg:text-[21px] text-white px-[15%] lg:px-[130px] py-[3%] rounded-md hover:bg-gray-800">
              Learn
            </button>
          </div>
        </div>
      </div>

      {/* Leaderboard Component */}
      <div id="leaderboard" className="relative mt-[85px] pb-[55px] px-[5%]">
        <Leaderboard />
      </div>

      {/* About Us Component */}
      <div id="aboutus" className="relative mt-[85px] pb-[55px] px-[5%]">
        <AboutUs/>
      </div>
    </div>
  );
}