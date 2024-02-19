import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";

export const Dashboard = () => {
    const [balance, setBalance] = useState("Loading...");

    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    console.log('No token found, please log in');
                    return;
                }
                const response = await axios.get('https://wallet-archived-backend.vercel.app/api/v1/account/balance', { 
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setBalance(response.data.balance.toLocaleString()); 
            } catch (error) {
                console.error("Error fetching balance:", error);
                setBalance("Error"); 
            }
        };

        fetchBalance();
    }, []);

    return (
        <div className="bg-gradient-to-r from-black via-gray-800 to-black min-h-screen">
            <Appbar />
            <div className="m-8">
                <Balance value={balance} />
                <Users />
            </div>
        </div>
    );
};
