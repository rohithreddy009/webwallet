import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { BottomWarning } from "../components/BottomWarning";
import { BACKEND_URI } from "../config";

export const Signin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSignin = async () => {
        setIsLoading(true);
        setError("");
        try {
            const response = await axios.post(`${BACKEND_URI}/api/v1/user/signin`, {
                username,
                password
            });
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("name", username);
            navigate("/dashboard");
        } catch (error) {
            if (error.response && error.response.status === 401) {
                setError("Invalid credentials. Please try again.");
            } else {
                setError("You've entered invalid email or password, Try again !");
            }
            setIsLoading(false);
        }
    };

    const handleDemoLogin = async () => {
        setIsLoading(true);
        setError("");
        try {
            const response = await axios.post(`${BACKEND_URI}/api/v1/user/signin`, {
                username: "demo_user@demomail.com",
                password: "fake-password"
            });
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("name", "demo_user");
            navigate("/dashboard");
        } catch (error) {
            if (error.response && error.response.status === 401) {
                setError("Invalid credentials. Please try again.");
            } else {
                setError("You've entered invalid email or password, Try again !");
            }
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return <div className="flex items-center justify-center h-screen text-white">Loading...</div>;
    }

    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black">
            <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 h-auto bg-white rounded-lg shadow-xl p-8">
                <div className="flex flex-col items-center">
                    <Heading label={"Sign in"} className="mb-4 text-2xl font-bold" />
                    <SubHeading label={"Enter your credentials to login"} className="mb-6 text-gray-600" />
                    {error && <div className="text-red-500 mb-4">{error}</div>}
                    <div className="w-full space-y-4">
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
                        <Button onClick={handleSignin} label={"Sign in"} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg" />
                        <Button onClick={handleDemoLogin} label={"Login with Demo ID"} className="w-full bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-lg" />
                    </div>
                    <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} className="mt-6" />
                </div>
            </div>
        </div>
    );
};
