import MaleCharacter from '../assets/male-sprite.png';
import FemaleCharacter from '../assets/female-sprite.png';

const AboutUs = () => {
  return (
    <div className="bg-[#f6d4be] p-8 rounded-lg shadow-lg max-w-5xl mx-auto">
      <h2 id="aboutus" className="text-4xl font-bold text-center mb-4 text-[#37271d]">About Us</h2>

      <p className="text-lg text-[#37271d] text-center mb-6 font-mono">
        We are dedicated to creating engaging and fun learning experiences for children.
        Our mission is to combine education with entertainment to provide valuable skills in a
        way that feels like play.
      </p>

      <div className="text-center mb-6">
        <p className="text-xl text-[#37271d] font-semibold">Our Team</p>
      </div>

      {/* Character Images Section */}
      <div className="grid grid-cols-3 gap-6 justify-center">

        <div className="flex flex-col justify-center items-center bg-white rounded-lg shadow-md p-4">
          <img
            src={FemaleCharacter}
            alt="Female Character"
            className="w-24 h-24 object-cover rounded-lg"
          />
          <p className="mt-2 text-[#37271d] font-semibold">Lamija Veladzic</p>
        </div>

        <div className="flex flex-col justify-center items-center bg-white rounded-lg shadow-md p-4">
          <img
            src={FemaleCharacter}
            alt="Female Character"
            className="w-24 h-24 object-cover rounded-lg"
          />
          <p className="mt-2 text-[#37271d] font-semibold">Sumeja Mehic</p>
        </div>

        <div className="flex flex-col justify-center items-center bg-white rounded-lg shadow-md p-4">
          <img
            src={FemaleCharacter}
            alt="Female Character"
            className="w-24 h-24 object-cover rounded-lg"
          />
          <p className="mt-2 text-[#37271d] font-semibold">Tea Dedic</p>
        </div>

        <div className="flex flex-col justify-center items-center bg-white rounded-lg shadow-md p-4">
          <img
            src={MaleCharacter}
            alt="Male Character"
            className="w-24 h-24 object-cover rounded-lg"
          />
          <p className="mt-2 text-[#37271d] font-semibold">Afan Haznadarevic</p>
        </div>

        <div className="flex flex-col justify-center items-center bg-white rounded-lg shadow-md p-4">
          <img
            src={MaleCharacter}
            alt="Male Character"
            className="w-24 h-24 object-cover rounded-lg"
          />
          <p className="mt-2 text-[#37271d] font-semibold">Hamza Adilovic</p>
        </div>

        <div className="flex flex-col justify-center items-center bg-white rounded-lg shadow-md p-4">
          <div className="flex space-x-4">
            <img
              src={MaleCharacter}
              alt="Male Character"
              className="w-16 h-16 object-cover rounded-lg"
            />
            <img
              src={FemaleCharacter}
              alt="Female Character"
              className="w-16 h-16 object-cover rounded-lg"
            />
            <img
              src={MaleCharacter}
              alt="Male Character"
              className="w-16 h-16 object-cover rounded-lg"
            />
          </div>
          <p className="mt-2 text-[#37271d] font-semibold">Our Mentors</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;