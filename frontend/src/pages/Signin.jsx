import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { BottomWarning } from "../components/BottomWarning";

export const Signin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false); // Track loading status
    const [error, setError] = useState(""); // State to handle error message
    const navigate = useNavigate();

    const handleSignin = async () => {
        setIsLoading(true); // Start loading
        setError(""); // Reset error message
        try {
            const response = await axios.post("https://wallet-archived-backend.vercel.app/api/v1/user/signin", {
                username,
                password
            });
            localStorage.setItem("token", response.data.token); // Store the token
            navigate("/dashboard"); // Navigate to the dashboard upon successful signin
        } catch (error) {
            // Basic error handling
            if (error.response && error.response.status === 401) {
                setError("Invalid credentials. Please try again."); // Set specific error message for invalid credentials
            } else {
                setError("Failed to sign in. Please try again later."); // Generic error message for other errors
            }
            setIsLoading(false); // Stop loading due to error
        }
    };

    if (isLoading) {
        return <div className="flex items-center justify-center h-screen">Loading...</div>;
    }

    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-black via-gray-800 to-black">
            <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 h-4/5 bg-white rounded-lg shadow-xl flex flex-col justify-center items-center overflow-auto">
                <div className="px-6 py-4 w-full flex flex-col items-center">
                    <Heading label={"Sign in"} className="mb-10" />
                    <SubHeading label={"Enter your credentials to login"} />
                    {error && <div className="text-red-500">{error}</div>} {/* Display error message if any */}
                    <div className="w-4/5 space-y-4">
                        <InputBox
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Your email"
                            label={"Email"}
                            className="w-full"
                        />
                        <InputBox
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Your password"
                            label={"Password"}
                            type="password"
                            className="w-full"
                        />
                        <Button onClick={handleSignin} label={"Sign in"} className="w-full" />
                    </div>
                    <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
                </div>
            </div>
        </div>
    );
};
