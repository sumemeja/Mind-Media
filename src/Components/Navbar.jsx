import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import Coin from "../assets/Mindbux.png";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#37271d] to-[#bb642e] text-white p-4 flex justify-between items-center">

      <Link to="/">
        <div className="flex items-center ml-[10px] transform transition-transform hover:scale-105">
          <img src={Logo} alt="Logo" className="w-[30px] h-[30px]" />
          <p className="ml-2 font-bold text-xl">MIND MEDIA</p>
        </div>
      </Link>

      <ul className="flex space-x-[35px] mr-[25px]">
        <li><a href="#leaderboard" className="hover:underline">Leaderboard</a></li>
        <Link to="/mindbux">
          <div className="flex items-center hover:underline">
            <p>Mindbux</p>
            <img src={Coin} alt="Coin" className="w-[20px] h-[20px] ml-2" />
          </div>
        </Link>
        <Link to="/blog">
          <p className="hover:underline">Blog</p>
        </Link>
        <li><a href="#aboutus" className="hover:underline">O nama</a></li>
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

export default Navbar;