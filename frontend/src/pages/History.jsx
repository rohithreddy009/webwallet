import { useEffect, useState } from 'react';
import { Transaction } from '../assets/Transaction';
import { BACKEND_URI } from '../config';

export const History = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchTransactions = async () => {
            const token = localStorage.getItem("token");
            try {
                const response = await fetch(`${BACKEND_URI}/api/v1/user/history`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch transaction history');
                }

                const transactionsData = await response.json();
                setTransactions(transactionsData);
            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchTransactions();
    }, []);

    return (
        <div className="bg-gradient-to-r from-black via-gray-800 to-black text-white min-h-screen flex items-center justify-center">
            <div className="w-full max-w-4xl">
                <div className="flex items-center justify-center mb-6">
                    <Transaction className="mr-2 h-6 w-6" /> {/* Adjust size as needed */}
                    <h2 className="text-3xl font-extrabold">Transaction History</h2>
                </div>
                {transactions.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full text-center">
                            <thead>
                                <tr className="text-white">
                                    <th className="px-4 py-2">Amount</th>
                                    <th className="px-4 py-2">Type</th>
                                    <th className="px-4 py-2">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {transactions.map((transaction, index) => (
                                    <tr key={transaction._id} className={`${index % 2 === 0 ? 'bg-gray-700' : 'bg-gray-800'}`}>
                                        <td className="border px-4 py-2">{transaction.amount}</td>
                                        <td className="border px-4 py-2">{transaction.type}</td>
                                        <td className="border px-4 py-2">{new Date(transaction.timestamp).toLocaleDateString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <p className="text-center">No transactions found.</p>
                )}
            </div>
        </div>
    );
};
