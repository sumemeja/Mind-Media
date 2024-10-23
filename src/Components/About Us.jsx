import LamijaCharacter from '../assets/Lamija.png';
import SumejaCharacter from '../assets/Sumeja.png';
import AfanCharacter from '../assets/Afan.png';
import TeaCharacter from '../assets/Tea.png';
import HamzaCharacter from '../assets/Hamza.png';
import AmarCharacter from '../assets/Amar.png';
import MelisaCharacter from '../assets/Melisa.png';
import IgorCharacter from '../assets/Igor.png';

const AboutUs = () => {
  return (
    <div className="bg-[#f6d4be] p-8 rounded-lg shadow-lg max-w-5xl mx-auto">
      <h2 id="aboutus" className="text-4xl font-bold text-center mb-4 text-[#37271d]">O nama</h2>

      <p className="text-lg text-[#37271d] mb-6 font-mono text-justify">
      Naš cilj je omogućiti vam da učite kroz zabavu. Pružamo vam korisne vještine kroz aktivnosti koje izgledaju kao igra, čineći učenje zanimljivim i ugodnim. Na ovaj način razvijate kreativnost i kritičko razmišljanje, dok naš nagradni sistem motiviše vaš napredak.
      </p>

      <div className="text-center mb-6">
        <p className="text-xl text-[#37271d] font-semibold">Nas Tim</p>
      </div>

      {/* Character Images Section */}
      <div className="grid grid-cols-3 gap-6 justify-center font-mono">

        <div className="flex flex-col justify-center items-center bg-white rounded-lg shadow-md p-4">
          <img
            src={LamijaCharacter}
            alt="Lamija Character"
            className="w-24 h-24 object-cover rounded-lg"
          />
          <p className="mt-2 text-[#37271d] font-semibold">Lamija Veladžić</p>
        </div>

        <div className="flex flex-col justify-center items-center bg-white rounded-lg shadow-md p-4">
          <img
            src={SumejaCharacter}
            alt="Sumeja Character"
            className="w-24 h-24 object-cover rounded-lg"
          />
          <p className="mt-2 text-[#37271d] font-semibold">Sumeja Mehić</p>
        </div>

        <div className="flex flex-col justify-center items-center bg-white rounded-lg shadow-md p-4">
          <img
            src={AfanCharacter}
            alt="Afan Character"
            className="w-24 h-24 object-cover rounded-lg"
          />
          <p className="mt-2 text-[#37271d] font-semibold">Afan Haznadarević</p>
        </div>

        <div className="flex flex-col justify-center items-center bg-white rounded-lg shadow-md p-4">
          <img
            src={TeaCharacter}
            alt="Tea Character"
            className="w-24 h-24 object-cover rounded-lg"
          />
          <p className="mt-2 text-[#37271d] font-semibold">Tea Dedić</p>
        </div>

        <div className="flex flex-col justify-center items-center bg-white rounded-lg shadow-md p-4">
          <img
            src={HamzaCharacter}
            alt="Hamza Character"
            className="w-24 h-24 object-cover rounded-lg"
          />
          <p className="mt-2 text-[#37271d] font-semibold">Hamza Adilović</p>
        </div>

        <div className="flex flex-col justify-center items-center bg-white rounded-lg shadow-md p-4">
          <div className="flex space-x-1">
            <img
              src={AmarCharacter}
              alt="Amar Character"
              className="w-20 h-20 object-cover rounded-lg"
            />
            <img
              src={MelisaCharacter}
              alt="Melisa Character"
              className="w-20 h-20 object-cover rounded-lg"
            />
            <img
              src={IgorCharacter}
              alt="Igor Character"
              className="w-20 h-20 object-cover rounded-lg"
            />
          </div>
          <p className="mt-2 text-[#37271d] font-semibold">Naši Mentori</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;