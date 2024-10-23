import BG from "../assets/Background.jpeg";
import NavbarHome from "../Components/NavbarHome";
import { Link } from 'react-router-dom';
import Knight from "../assets/Knight.png";

const Register = () => {
    return (
        <div
            className="relative min-h-screen bg-[#f6d4be] bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${BG})` }}
        >
            <NavbarHome />

            <div className="bg-[#f6d4be] p-8 rounded-lg shadow-md text-center max-w-md w-full mx-auto mt-[9%] mb-[5%]">
                <h1 className="text-4xl mb-6 font-bold text-[#37271d]">Registruj Se</h1>

                <div className="flex justify-center mb-6">
                    <img
                        src={Knight}
                        alt="Knight Character"
                        className="w-[30%] lg:w-[20%]"
                    />
                </div>

                <form className="space-y-4">

                    <input
                        id="username"
                        type="text"
                        placeholder="Ime"
                        className="px-[23%] py-2 pl-[15px] border-4 border-[#37271d] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bb642e] text-[#37271d] font-mono"
                    />

                    <input
                        id="email"
                        type="email"
                        placeholder="Email"
                        className="px-[23%] py-2 pl-[15px] border-4 border-[#37271d] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bb642e] text-[#37271d] font-mono"
                    />

                    <input
                        id="password"
                        type="password"
                        placeholder="Sifra"
                        className="px-[23%] py-2 pl-[15px] border-4 border-[#37271d] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bb642e] text-[#37271d] font-mono"
                    />

                    <button className="bg-[#37271d] text-base lg:text-[25px] text-white px-[25%] lg:px-[69px] py-[3%] rounded-md hover:bg-[#da9d76]">
                        Registruj se
                    </button>
                </form>

                <p className="mt-4 text-[#37271d] font-mono">
                    Već imate nalog?{' '}
                    <Link to="/login">
                        <div className="text-blue-500 hover:underline">Prijavi se</div>
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;