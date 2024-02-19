import { useNavigate } from "react-router-dom";

export const Landing = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
            <h1 className="text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">Welcome to Web2 Wallet</h1>
            <h3 className="text-3xl font-normal mb-4 text-white">A secure Digital Wallet to transfer and receive money to/from users</h3>
            <button
                onClick={() => navigate("/signup")}
                className="text-lg bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full transition duration-150 ease-in-out"
            >
                Get Started Today
            </button>
            <footer className="w-full absolute bottom-0 text-center py-4">
                <p className="text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} All rights reserved | Rohith Reddy
                </p>
            </footer>
        </div>
    );
};
