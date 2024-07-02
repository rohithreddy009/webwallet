// services/transactionService.js

const { Transaction } = require('../db')

// Function to create a new transaction
const createTransaction = async (userId, amount, type) => {
    try {
        const transaction = new Transaction({
            userId,
            amount,
            type,
        })
        await transaction.save()
        return transaction
    } catch (error) {
        // Handle any errors that occur during transaction creation
        console.error('Error creating transaction:', error)
        throw error // Rethrow the error so it can be caught by the caller
    }
}

module.exports = {
    createTransaction,
}
