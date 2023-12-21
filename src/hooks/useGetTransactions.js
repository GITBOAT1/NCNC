// Importing necessary modules from Firebase, React, and other custom hooks
import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../config/firebase-config";
import { userGetUserInfo } from "./useGetUserinfo";

// Custom hook for fetching user-specific transactions from Firestore
export const useGetTransactions = () => {
    // State variable to store fetched transactions
    const [transactions, setTransactions] = useState([]);

    // Reference to the "transactions" collection in Firestore
    const transactionCollectionRef = collection(db, "transactions");

    // Getting user information using the useGetUserInfo custom hook
    const { userID } = userGetUserInfo();

    // Function to fetch user-specific transactions from Firestore
    const getTransactions = async () => {
        let unsubscribe;

        try {
            // Creating a query to filter transactions by userID and order by createdAt
            const queryTransactions = query(
                transactionCollectionRef,
                where("userID", "==", userID),
                orderBy("createdAt")
            );

            // Subscribing to real-time updates using onSnapshot
            unsubscribe = onSnapshot(queryTransactions, (snapshot) => {
                let docs = [];

                // Iterating through the snapshot to extract data and document IDs
                snapshot.forEach((doc) => {
                    const data = doc.data();
                    const id = doc.id;

                    // Pushing an object with data and ID to the docs array
                    docs.push({ ...data, id });
                });

                // Updating the state with the fetched transactions
                setTransactions(docs);
            });
        } catch (err) {
            console.error("Error fetching transactions:", err);
            // Handle error (e.g., display an error message to the user)
        }

        // Returning an unsubscribe function to detach the snapshot listener
        return () => unsubscribe();
    };

    // useEffect hook to trigger the getTransactions function on component mount
    useEffect(() => {
        getTransactions();
    }, []);

    // Returning the fetched transactions for external use
    return { transactions };
};
