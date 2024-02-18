import { useSearchParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";

export const SendMoney = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const [amount, setAmount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-black via-gray-800 to-black">
            <div className="h-4/5 w-2/5 max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="border text-card-foreground p-4 space-y-8">
                    <div className="flex flex-col space-y-1.5 p-6">
                        <h2 className="text-3xl font-bold text-center">Send Money</h2>
                    </div>
                    <div className="p-6">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-full bg-violet-500 flex items-center justify-center">
                                <span className="text-2xl text-white">{name[0].toUpperCase()}</span>
                            </div>
                            <h3 className="text-2xl font-semibold">{name}</h3>
                        </div>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label
                                    className="text-sm font-medium leading-none"
                                    htmlFor="amount"
                                >
                                    Amount (in Rs)
                                </label>
                                <input
                                    onChange={(e) => {
                                        setAmount(e.target.value);
                                    }}
                                    type="number"
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                    id="amount"
                                    placeholder="Enter amount"
                                />
                            </div>
                        <button
                            onClick={async () => {
                                setIsLoading(true); // Start loading
                                try {
                                    const response = await axios.post(
                                        "https://wallet-archived-backend.vercel.app/api/v1/account/transfer",
                                        { to: id, amount },
                                        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
                                    );
                                    if (response.status === 200) {
                                        alert("Transfer successful!");
                                        navigate("/dashboard"); // Only navigate on success
                                    } else {
                                        alert("Transfer failed. Please try again.");
                                    }
                                } catch (error) {
                                    console.error("Transfer error:", error);
                                    alert("Transfer failed due to network instability or you've entered an amount greater than your account balance.");
                                } finally {
                                    setIsLoading(false); // Stop loading regardless of the outcome
                                }
                            }}
                            disabled={isLoading}
                            className={`justify-center rounded-md text-sm font-medium transition-colors h-10 px-4 py-2 w-full ${isLoading ? "bg-gray-400" : "bg-gradient-to-r from-black via-gray-800 to-black"} text-white`}
                        >
                            {isLoading ? (
                                <div className="flex items-center justify-center space-x-2">
                                    <div className="animate-ping w-2 h-2 bg-white rounded-full"></div>
                                    <div className="animate-ping w-2 h-2 bg-white rounded-full"></div>
                                    <div className="animate-ping w-2 h-2 bg-white rounded-full"></div>
                                </div>
                            ) : "Initiate Transfer"}
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
