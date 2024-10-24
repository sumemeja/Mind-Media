import BG from "../assets/Background.jpeg";
import NavbarHome from "../Components/NavbarHome.jsx";

export default function Game() {
    return (
        <div
            className="relative min-h-screen bg-gray-200 bg-contain bg-center"
            style={{ backgroundImage: `url(${BG})` }}
        >
            <NavbarHome />

            {/* Embedding the link */}
            <div className="flex justify-center items-center pt-[9%] pb-[5%]"> 
                <iframe
                    src="https://scratch.mit.edu/projects/1086328481/embed" 
                    allowTransparency="true"
                    width="700"
                    height="550"
                    frameBorder="0"
                    scrolling="no"
                    allowFullScreen
                    className="shadow-lg rounded-md"
                />
            </div>
        </div>
    );
}