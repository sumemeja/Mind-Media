const Navbar = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#37271d] to-[#bb642e] text-white p-4 flex justify-between items-center">
      <div className="font-bold text-xl ml-[25px]">logo</div>

      <ul className="flex space-x-[35px] mr-[25px]">
        <li><a href="#game" className="hover:underline">Game</a></li>
        <li><a href="#leaderboard" className="hover:underline">Leaderboard</a></li>
        <li><a href="#mindbux" className="hover:underline">Mindbux</a></li>
        <li><a href="https://www.klix.ba/" target="_blank" className="hover:underline">Blog</a></li>
        <li><a href="#aboutus" className="hover:underline">About Us</a></li>
        <li><a href="#login" className="hover:underline">Log In</a></li>
        <li><a href="#signup" className="hover:underline">Sign Up</a></li>
      </ul>
    </div>
  );
};

export default Navbar;