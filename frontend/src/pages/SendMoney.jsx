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
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-black via-gray-800 to-black px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="border text-card-foreground p-4 space-y-8">
                    <div className="flex flex-col space-y-1.5 p-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">Send Money</h2>
                    </div>
                    <div className="px-4 py-6">
                        <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-violet-500 flex items-center justify-center">
                                <span className="text-xl sm:text-2xl text-white">{name[0].toUpperCase()}</span>
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">{name}</h3>
                        </div>
                        <div className="space-y-4 mt-4">
                            <div className="space-y-2">
                                <label htmlFor="amount" className="text-sm font-medium leading-none">
                                    Amount (in Rs)
                                </label>
                                <input
                                    onChange={(e) => setAmount(e.target.value)}
                                    type="number"
                                    className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 sm:text-sm"
                                    id="amount"
                                    placeholder="Enter amount"
                                />
                            </div>
                            <button
                                onClick={async () => {/* Button click handler */}}
                                disabled={isLoading}
                                className={`mt-4 justify-center rounded-md text-sm font-medium transition-colors h-10 px-4 py-2 w-full ${isLoading ? "bg-gray-400" : "bg-gradient-to-r from-black via-gray-800 to-black"} text-white`}
                            >
                                {isLoading ? "Processing..." : "Initiate Transfer"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

