import BG from "../assets/Background.jpeg";
import { Link } from "react-router-dom";
import NavbarHome from "../Components/NavbarHome.jsx";
import RightArrow from "../assets/Arrow.png";
import LeftArrow from "../assets/Arrow.png";
import ChemistCharacter from "../assets/Chemist.png";
import Mindbux from "../assets/Mindbux.png";
import Go from "../assets/GoBack.png";

export default function Game() {
    return (
        <div
            className="relative min-h-screen bg-gray-200 bg-contain bg-center"
            style={{ backgroundImage: `url(${BG})` }}
        >
            <NavbarHome />

            <div className="flex flex-col lg:flex-row items-center justify-center pt-[7%]">
                <div className="relative mt-[3%] px-[5%] max-w-6xl mx-auto rounded-lg shadow-lg text-[#37271d] bg-[#f6d4be]">

                    {/* Title */}
                    <h1 className="text-4xl lg:text-5xl mb-6 text-[#121b28] pt-[5%] text-center">
                        Instrukcije za igru
                    </h1>

                    {/* Intro Paragraph */}
                    <p className="text-lg lg:text-xl mb-4 font-semibold font-mono pt-2" style={{ textAlign: "justify" }}>
                        Dobrodošao, Mali Detektivu!<br /><br />

                        Spremi se za uzbudljivu igricu! Tvoj cilj je da je odigraš u što kraćem vremenu i osvojiš nagradu. Najbrža tri detektiva dobijaju vrijedne {" "}
                        <Link
                            to="/mindbux"
                            target="_blank"
                            className="text-blue-600 hover:underline"
                        >
                            nagrade
                        </Link>!<br /><br />

                        Kako igrati:<br />
                        - Odaberi svog karaktera, a zatim pritisni START.<br />
                        - Kreći se strelicama na tastaturi:{" "}
                        <img src={LeftArrow} alt="Left Arrow" className="inline w-7 h-7 mx-1 transform scale-x-[-1]" />{" "}
                        <img src={RightArrow} alt="Right Arrow" className="inline w-7 h-7 mx-1" />.<br />
                        - Da otvoriš pitanja, priđi level masteru poput ovom:{" "}
                        <img src={ChemistCharacter} alt="Chemist Character" className="inline w-20 h-20 mx-1 mb-2" />.<br />
                        - Izaberi tačan odgovor kako bi napredovao kroz levele i dobijao mindbux novčiće:{" "}
                        <img src={Mindbux} alt="Mindbux Coin" className="inline w-8 h-8 mx-1" />.<br />
                        - Pritisni:{" "}
                        <img src={Go} alt="Go Button" className="inline w-10 h-10 mx-1 mt-1" />{" "}
                        da bi prešao na novi level.<br /><br />

                        Sretno i zabavi se!
                    </p>
                </div>
            </div>

            {/* Embedding the link */}
            <div className="flex justify-center items-center pt-[5%] pb-[5%]">
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