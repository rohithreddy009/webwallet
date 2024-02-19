// export const History = () => {
//     return <div>
//         hi there from history
//     </div>
// }

import React, { useEffect, useState } from 'react';

export const History = () => {
    // State to store transactions
    const [transactions, setTransactions] = useState([]);

    // useEffect(() => {
    //     // Fetch transactions on component mount
    //     const fetchTransactions = async () => {
    //         const userId = localStorage.getItem("userId"); // Assuming you store userId in localStorage
    //         const token = localStorage.getItem("token"); // Assuming the token is stored in localStorage after login

    //         try {
    //             const response = await fetch(`http://localhost:3000/api/v1/user/history?userId=${userId}`, {
    //                 method: 'GET',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                     // Include the token in the Authorization header
    //                     'Authorization': `Bearer ${token}`,
    //                 },
    //             });

    //             if (!response.ok) {
    //                 throw new Error('Failed to fetch transactions');
    //             }

    //             const data = await response.json();
    //             setTransactions(data); // Set the fetched transactions to state
    //         } catch (error) {
    //             console.error("Error fetching transaction history:", error);
    //         }
    //     };

    //     fetchTransactions();
    // }, []); 
    // useEffect(() => {
    //     const fetchTransactions = async () => {
    //         const token = localStorage.getItem("token");
    //         try {
    //             const response = await fetch('http://localhost:3000/api/v1/user/history', {
    //                 method: 'GET',
    //                 headers: {
    //                     'Authorization': `Bearer ${token}`,
    //                 },
    //             });
    
    //             if (!response.ok) {
    //                 throw new Error('Failed to fetch transaction history');
    //             }
    
    //             const transactions = await response.json();
    //             console.log(transactions); // Or set the state to render transactions
    //         } catch (error) {
    //             console.error("Error:", error);
    //         }
    //     };
    
    //     fetchTransactions();
    // }, []);
    
    useEffect(() => {
        const fetchTransactions = async () => {
            const token = localStorage.getItem("token");
            try {
                const response = await fetch('https://wallet-archived-backend.vercel.app/api/v1/user/history', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });
    
                if (!response.ok) {
                    throw new Error('Failed to fetch transaction history');
                }
    
                // Assuming the response directly contains an array of transactions
                const transactionsData = await response.json();
                setTransactions(transactionsData); // Update the state with the fetched transactions
            } catch (error) {
                console.error("Error:", error);
            }
        };
    
        fetchTransactions();
    }, []);
    
    

    return (
        <div>
            <h2>Transaction History</h2>
            {transactions.length > 0 ? (
                <ul>
                    {transactions.map((transaction) => (
                        <li key={transaction._id}>
                            Amount: {transaction.amount}, Type: {transaction.type}, Date: {new Date(transaction.timestamp).toLocaleDateString()}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No transactions found.</p>
            )}
        </div>
    );
};
