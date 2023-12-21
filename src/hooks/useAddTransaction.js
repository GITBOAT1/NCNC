// Importing necessary modules from Firebase and other custom hooks
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { userGetUserInfo } from "./useGetUserinfo";

// Custom hook for adding a transaction to the Firestore database
export const useAddTransaction = () => {
    // Creating a reference to the "transactions" collection in Firestore
    const transactionCollectionRef = collection(db, "transactions");

    // Getting user information using the useGetUserInfo custom hook
    const { userID } = userGetUserInfo();

    // Function to add a transaction to the Firestore database
    const addTransaction = async ({
        description,
        transactionAmount,
        transactionType,
    }) => {
        try {
            // Adding a document to the "transactions" collection with user and transaction details
            await addDoc(transactionCollectionRef, {
                userID,
                description,
                transactionAmount,
                transactionType,
                createdAt: serverTimestamp(),
            });
        } catch (error) {
            console.error("Error adding transaction to Firestore:", error);
            // Handle error (e.g., display an error message to the user)
        }
    };

    // Returning the addTransaction function for external use
    return { addTransaction };
};
