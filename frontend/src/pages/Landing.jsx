import { useNavigate } from "react-router-dom";

export const Landing = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
            <h1 className="text-6xl font-bold mb-8">Welcome to Web2 Wallet</h1>
            <button
                onClick={() => navigate("/signup")}
                className="text-lg bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full transition duration-150 ease-in-out"
            >
                Sign Up
            </button>
        </div>
    );
};
