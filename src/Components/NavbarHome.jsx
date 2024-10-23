import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import GoBack from '../assets/GoBack.png'; // Ensure this is the correct image path

const NavbarHome = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#37271d] to-[#bb642e] text-white p-4 flex justify-between items-center">
      <Link to="/">
        <div className="flex items-center ml-[10px] transform transition-transform hover:scale-105">
          <img src={Logo} alt="Logo" className="w-[30px] h-[30px]" />
          <p className="ml-2 font-bold text-xl">MIND MEDIA</p>
        </div>
      </Link>

      <ul className="flex space-x-[30px] mr-[25px]">
        <Link to="/">
          <div className="flex items-center">
            <p className="hover:underline">Pocetna</p>
            <img src={GoBack} alt="Go Back" className="w-[30px] h-[30px] ml-4 transform scale-x-[-1]" />
          </div>
        </Link>
        <Link to="/login">
          <p className="hover:underline">Prijavi se</p>
        </Link>
        <Link to="/register">
          <p className="hover:underline">Registruj se</p>
        </Link>
      </ul>
    </div>
  );
};

export default NavbarHome;