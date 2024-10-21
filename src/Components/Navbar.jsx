import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#37271d] to-[#bb642e] text-white p-4 flex justify-between items-center">

      <Link to="/">
        <div className="font-bold text-xl ml-[25px]">logo</div>
      </Link>

      <ul className="flex space-x-[35px] mr-[25px]">
        <li><a href="#game" className="hover:underline">Igra</a></li>
        <li><a href="#leaderboard" className="hover:underline">Leaderboard</a></li>
        <li><a href="#mindbux" className="hover:underline">Mindbux</a></li>
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