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

        <div className="pl-[150px] pt-[45px] pb-[45px] flex items-start">
          <IphoneFrame />

          {/* Title */}
          <img
            className="inline-block ml-[125px]"
            src={TitleImage}
            alt="Title"
            width={665}
          />

          {/* Buttons */}
          <div className="absolute top-[525px] left-[905px] transform -translate-x-1/2 flex space-x-4">
            <button className="bg-[#5e17eb] text-[21px] text-white px-[130px] py-[11px] rounded-md hover:bg-gray-800">Play</button>
            <button className="bg-[#5e17eb] text-[21px] text-white px-[130px] py-[11px] rounded-md hover:bg-gray-800">Learn</button>
          </div>
        </div>
      </div>

      {/* Leaderboard Component */}
      <div id="leaderboard" className="relative mt-[85px] pb-[55px]">
        <Leaderboard />
      </div>

      {/* About Us Component */}
      <div id="aboutus" className="relative mt-[85px] pb-[55px]">
        <AboutUs/>
      </div>
    </div>
  );
}