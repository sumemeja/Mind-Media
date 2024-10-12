import BG from "../assets/Background.jpeg";
import Navbar from "../Components/Navbar";
import IphoneFrame from "../Components/IphoneFrame";
import MaleCharacter from '../assets/male-sprite.png';
import FemaleCharacter from '../assets/female-sprite.png';
import Leaderboard from "../Components/Leaderboard";
import AboutUs from "../Components/About Us.jsx";
import MaleCharJump from "../assets/Male-Jump.gif";
import Wizard from "../assets/wizard.png";
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div
            className="relative min-h-screen bg-gray-200 bg-contain bg-center"
            style={{ backgroundImage: `url(${BG})` }}
        >
            <div>
                <Navbar />

                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between pl-[11%] pt-[8%] pb-[3%]">

                    {/* iPhone Frame Section */}
                    <div className="flex justify-center w-full lg:w-auto">
                        <IphoneFrame />
                    </div>

                    {/* Characters and Buttons Section */}
                    <div className="relative bg-[#f6d4be] rounded-lg w-full lg:w-[50%] flex flex-col items-center mt-[8%] mr-[13%] p-[7%]">

                        {/* Text Above Character Image */}
                        <p className="text-[#37271d] text-[230%] absolute top-[10%] left-[10%]">
                            Let's
                        </p>

                        {/* Male Character Image */}
                        <img
                            className="absolute left-5 bottom-5 w-[30%] lg:w-[20%]"
                            src={MaleCharacter}
                            alt="Male Game Character"
                        />

                        {/* Female Character Image */}
                        <img
                            className="absolute left-[75%] bottom-5 w-[30%] lg:w-[22%] transform scale-x-[-1]"
                            src={FemaleCharacter}
                            alt="Female Game Character"
                        />

                        {/* Buttons */}
                        <div className="relative mt-[3%] ml-[1%] flex flex-col items-center space-y-4">
                            <button className="bg-[#37271d] text-base lg:text-[25px] text-white px-[25%] lg:px-[75px] py-[3%] rounded-md hover:bg-[#da9d76]">
                                Play
                            </button>
                            <span className="text-[#37271d] lg:text-[25px]">and</span>
                            <Link to="/blog">
                                <button className="bg-[#37271d] text-base lg:text-[25px] text-white px-[25%] lg:px-[70px] py-[3%] rounded-md hover:bg-[#da9d76]">
                                    Learn
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Leaderboard Component */}
            <div className="relative mt-[85px] pb-[55px] px-[5%]">

                {/* Wizard Character */}
                <img
                    id="leaderboard"
                    className="absolute left-[70%] bottom-[100%] w-[30%] lg:w-[10%]"
                    src={Wizard}
                    alt="Wizard Game Character"
                />

                <Leaderboard />
            </div>

            {/* About Us Component */}
            <div id="aboutus" className="relative mt-[85px] pb-[55px] px-[5%]">
                <AboutUs />
            </div>
        </div>
    );
}