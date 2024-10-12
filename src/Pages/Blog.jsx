import BG from "../assets/Background.jpeg";
import Navbar from "../Components/Navbar";
import AboutUs from "../Components/About Us.jsx";

export default function Blog() {
  return (
    <div
      className="relative min-h-screen bg-gray-200 bg-contain bg-center"
      style={{ backgroundImage: `url(${BG})` }}
    >
      <div>
        <Navbar />
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between pl-[11%] pt-[5%] pb-[3%]">
        {/* About Us Component */}
        <div id="aboutus" className="relative mt-[85px] pb-[55px] px-[5%]">
          <AboutUs />
        </div>
      </div>
    </div>
  );
}