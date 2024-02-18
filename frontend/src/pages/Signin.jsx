import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { BottomWarning } from "../components/BottomWarning";

export const Signin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignin = async () => {
        try {
            const response = await axios.post("https://wallet-archived-backend.vercel.app/api/v1/user/signin", {
                username,
                password
            });
            localStorage.setItem("token", response.data.token); // Store the token
            localStorage.setItem("name", username);
            navigate("/dashboard"); // Navigate to the dashboard upon successful signin
        } catch (error) {
            alert("Failed to sign in. Please check your credentials."); // Basic error handling
        }
    };

    return (
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                    <Heading label={"Sign in"} />
                    <InputBox
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Your email"
                        label={"Email"}
                    />
                    <InputBox
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Your password"
                        label={"Password"}
                        type="password" // Hide password input
                    />
                    <div className="pt-4">
                        <Button onClick={handleSignin} label={"Sign in"} />
                    </div>
                    <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
                </div>
            </div>
        </div>
    );
};
