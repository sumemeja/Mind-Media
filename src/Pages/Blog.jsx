import BG from "../assets/Background.jpeg";
import Navbar from "../Components/Navbar";
import AboutUs from "../Components/About Us.jsx";
import Quest from "../assets/Q&A_sesh.jpg";

export default function Blog() {
  return (
    <div
      className="relative min-h-screen bg-[#f6d4be] bg-contain bg-center"
      style={{ backgroundImage: `url(${BG})` }}
    >
      <div>
        <Navbar />
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center pt-[5%] pb-[3%]">
        <div
          id="aboutus"
          className="relative mt-[5%] pb-11 px-[5%] max-w-6xl mx-auto rounded-lg shadow-lg text-[#37271d] bg-[#f6d4be]"
        >
          {/* Title */}
          <h1 className="text-4xl lg:text-5xl mb-6 text-[#121b28] pt-[5%]">
            Razumijevanje Dezinformacija
          </h1>

          {/* Intro Paragraph */}
          <p className="text-lg lg:text-xl mb-4 font-semibold font-mono" style={{ textAlign: "justify" }}>
            U današnjem brzom digitalnom svijetu, širenje informacija je brže i šire nego ikada. Dok ova povezanost donosi brojne prednosti, nosi i značajan nedostatak: proliferaciju dezinformacija. Šta zapravo predstavljaju dezinformacije i zašto je važno prepoznati i boriti se protiv njih?
          </p>

          {/* Quest Image */}
          <div className="flex justify-center mb-8">
            <img src={Quest} alt="Q&A Session" className="w-full max-w-md lg:max-w-lg rounded-md shadow-md" />
          </div>

          {/* Subheading */}
          <h2 className="text-2xl lg:text-3xl font-semibold mt-8 mb-4 text-[#121b28]">
            Sta su Dezinformacije?
          </h2>

          {/* Body Paragraph */}
          <p className="text-base lg:text-lg mb-4 font-semibold font-mono" style={{ textAlign: "justify" }}>
            Dezinformacije se odnose na lažne ili obmanjujuće informacije koje su namjerno kreirane i širenje s ciljem obmanjivanja drugih. Za razliku od dezinformacija, koje se mogu dijeliti bez zle namjere, dezinformacije su osmišljene kako bi manipulirale javnim mnijenjem, izazvale nesuglasice ili postigle određene ciljeve. Mogu se javiti u raznim oblicima, uključujući lažne vijesti, manipulirane slike i obmanjujuće objave na društvenim mrežama.
          </p>

          {/* Subheading */}
          <h2 className="text-2xl lg:text-3xl font-semibold mt-8 mb-4 text-[#121b28]">
            Utjecaj Dezinformacija
          </h2>

          {/* Body Paragraph */}
          <p className="text-base lg:text-lg mb-4 font-semibold font-mono" style={{ textAlign: "justify" }}>
            Posljedice dezinformacija su duboke i dalekosežne. One mogu potkopati povjerenje u institucije, polarizirati zajednice i čak utjecati na izbore. Na primjer, tokom važnih političkih događaja, kampanje dezinformacija mogu uticati na birače i iskriviti demokratske procese. Osim politike, dezinformacije mogu utjecati na javno zdravstvo, kao što se vidjelo tokom pandemije COVID-19, kada su lažne tvrdnje o virusu i vakcinama široko rasprostranjene, otežavajući napore u kontroli izbijanja.
          </p>

          {/* Subheading */}
          <h2 className="text-2xl lg:text-3xl font-semibold mt-8 mb-4 text-[#121b28]">
            Kako se Dezinformacije Sire?
          </h2>

          {/* Bullet Points */}
          <ul className="list-disc ml-6 mb-4 font-semibold font-mono" style={{ textAlign: "justify" }}>
            <li>
              <strong>Društvene Mreže:</strong> Platforme poput Facebooka, Twittera i Instagrama često su plodno tlo za dezinformacije. Algoritmi prioritiziraju angažman, što može nenamjerno promovirati senzacionalni ili obmanjujući sadržaj.
            </li>
            <li>
              <strong>Eho Komore:</strong> Ljudi obično konzumiraju informacije koje se podudaraju s njihovim postojećim uvjerenjima. To stvara eho komore u kojima dezinformacije mogu napredovati, jer se suprotstavljene tačke gledišta odbacuju, a lažne narative potvrđuju.
            </li>
            <li>
              <strong>Influenseri i Botovi:</strong> Influenseri na društvenim mrežama i automatizirani nalozi mogu pojačati dezinformacije, čineći ih uvjerljivijima i raširenijima.
            </li>
          </ul>

          <h2 className="text-2xl lg:text-3xl font-semibold mt-8 mb-4 text-[#121b28]">
            Borba Protiv Dezinformacija
          </h2>

          <ul className="list-disc ml-6 mb-4 font-semibold font-mono" style={{ textAlign: "justify" }}>
            <li>
              <strong>Kritičko Razmišljanje:</strong> Razvijanje vještina kritičkog razmišljanja je ključno. Prije dijeljenja informacija, postavite pitanja: Ko je izvor? Koji su dokazi? Da li je pristrano?
            </li>
            <li>
              <strong>Provjera Činjenica:</strong> Koristite ugledne web stranice za provjeru činjenica kako biste verificirali tvrdnje. Web stranice poput Snopes, FactCheck.org i PolitiFact mogu pomoći u razlikovanju istine od laži.
            </li>
            <li>
              <strong>Medijska Pismenost:</strong> Edukacija o medijskoj pismenosti može osnažiti pojedince da prepoznaju kredibilne informacije od dezinformacija. Škole, zajednice i organizacije mogu igrati ulogu u promicanju ovih vještina.
            </li>
            <li>
              <strong>Prijavljivanje i Blokiranje:</strong> Na društvenim mrežama, prijavljivanje dezinformacija i blokiranje izvora koji šire lažne informacije može pomoći u smanjenju njihovog dosega.
            </li>
          </ul>

          <p className="text-base lg:text-lg mt-8 font-semibold font-mono" style={{ textAlign: "justify" }}>
            Dezinformacije su značajan izazov u digitalnoj eri, ali svijest i obrazovanje su naši najbolji alati u borbi protiv njih. Ostanimo informirani, preispitajmo ono što konzumiramo i promičimo kritičko razmišljanje kako bismo doprinijeli istinitijem i pouzdanijem informacijskom okruženju. Radimo zajedno na snalaženju u složenostima našeg informacijama bogatog svijeta, osiguravajući da istina prevlada nad obmanom.
          </p>

          <p className="text-sm lg:text-base mt-4 font-semibold font-mono" style={{ textAlign: "justify" }}>
            Web stranice za fact checking (provjeru informacija):
            <a href="https://raskrinkavanje.ba/" target="blank" className="text-blue-500 hover:underline">
              raskrinkavanje.ba
            </a>
          </p>
        </div>
      </div>

      {/* About Us Component */}
      <div className="relative mt-[85px] pb-[55px] px-[5%]">
        <AboutUs />
      </div>
    </div>
  );
}