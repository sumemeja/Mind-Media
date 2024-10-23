import BG from "../assets/Background.jpeg";
import AboutUs from "../Components/About Us.jsx";
import NavbarHome from "../Components/NavbarHome.jsx";

export default function Game() {
    return (
        <div
            className="relative min-h-screen bg-gray-200 bg-contain bg-center"
            style={{ backgroundImage: `url(${BG})` }}
        >
            <div>
                <NavbarHome />
            </div>

            {/* Embedding the link */}
            <div className="flex justify-center items-center my-8 pt-[9%] mb-[5%]">
                <iframe
                    src="https://scratch.mit.edu/projects/1085992743/embed"
                    allowTransparency="true"
                    width="1024"
                    height="768"
                    frameBorder="0"
                    scrolling="no"
                    allowFullScreen
                    className="shadow-lg rounded-md"
                />
            </div>

            {/* About Us Component */}
            <div className="relative mt-[85px] pb-[55px] px-[5%]" id="aboutus">
                <AboutUs />
            </div>
        </div>
    );
}