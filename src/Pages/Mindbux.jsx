import BG from "../assets/Background.jpeg";
import Chest from "../assets/Chest.png";
import NavbarHome from "../Components/NavbarHome";

export default function Mindbux() {
    return (
        <div
            className="relative min-h-screen bg-[#f6d4be] bg-contain bg-center"
            style={{ backgroundImage: `url(${BG})` }}
        >
            <div>
                <NavbarHome />
            </div>

            {/* Main Content Section */}
            <div className="flex flex-col lg:flex-row items-center justify-center pt-[5%] pb-[5%]">
                <div
                    className="relative mt-[5%] pb-11 px-[5%] max-w-6xl mx-auto rounded-lg shadow-lg text-[#37271d] bg-[#f6d4be]"
                >
                    {/* Title */}
                    <h1 className="text-4xl lg:text-5xl mb-6 text-[#121b28] pt-[5%] text-center">
                        Mindbux Nagradni Sistem
                    </h1>

                    {/* Intro Paragraph */}
                    <p className="text-lg lg:text-xl mb-4 font-semibold font-mono" style={{ textAlign: "justify" }}>
                        U Mindbuxu vjerujemo u nagrađivanje onih koji se ističu! Naš jedinstveni nagradni sistem je dizajniran da prepozna najbolje učesnike koji se redovno pojavljuju na našoj tabeli najboljih. Bez obzira na to da li ciljate na prvo mjesto ili se trudite da osigurate poziciju u top tri, pripremili smo uzbudljive nagrade za vas!
                    </p>

                    {/* Chest Image */}
                    <div className="flex justify-center mb-6">
                        <img src={Chest} alt="Chest" className="w-[250px] h-[250px] object-contain" />
                    </div>

                    {/* Next Paragraph */}
                    <p className="text-lg lg:text-xl mb-4 font-semibold font-mono" style={{ textAlign: "justify" }}>
                        Top tri igrača su oni koji su skupili najviše Mindbux-a – to su naši posebni novčići u igri.
                        Evo zanimljivog dijela: što brže tačno završiš neki izazov, to dobijaš više Mindbux-a! Znači, brzina je važna, jer onaj ko najbrže riješi izazov tačno, dobit će veći broj Mindbux-a.
                        Ali evo u čemu je tajna: da bi bio u top 3, moraš stalno skupljati Mindbux-e tokom cijelog mjeseca. Ako prestaneš igrati ili se usporiš, možeš pasti s tabele. Dakle, igraj brzo, pametno i pokušaj osvojiti što više Mindbux-a kako bi bio među najbolja tri i osvojio misteriozni poklon!
                    </p>

                </div>
            </div>
        </div>
    );
}