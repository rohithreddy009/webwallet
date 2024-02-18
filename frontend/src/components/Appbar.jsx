import { useNavigate } from "react-router-dom";

export const Appbar = () => {
    const navigate = useNavigate();
    // Retrieve the user's name from localStorage
    const userName = localStorage.getItem("name") || "User"; // Default to "User" if not found

    const handleLogout = () => {
        localStorage.removeItem("token"); // Clear the token
        localStorage.removeItem("name"); // Also clear the user's name
        navigate("/signin"); // Redirect to the signin page
    };

    return (
        <div className="shadow h-14 flex justify-between items-center px-4">
            <div>
                Web2 Wallet
            </div>
            <div className="flex items-center">
                <div>
                    Hello, {userName} 
                </div>
                <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center items-center mx-2 text-xl">
                    {userName.charAt(0)} 
                </div>
                <button 
                    onClick={handleLogout} 
                    className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600 transition duration-150 ease-in-out"
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

