// Importing necessary modules and styles
import { useNavigate } from "react-router-dom";  // Importing the useNavigate hook for navigation
import { auth, provider } from "../../config/firebase-config.js";  // Importing Firebase authentication and provider
import { signInWithPopup } from "firebase/auth";  // Importing signInWithPopup function from Firebase authentication
import "./styles.css";  // Importing styles for the Auth component

// Defining the Auth component
export const Auth = () => {
    // Using the useNavigate hook for programmatic navigation
    const navigate = useNavigate();

    // Function to sign in with Google
    const signInWithGoogle = async () => {
        try {
            // Signing in with Google using Firebase signInWithPopup
            const result = await signInWithPopup(auth, provider);

            // Extracting user information from the authentication result
            const authInfo = {
                userID: result.user.uid,
                name: result.user.displayName,
                profilePhoto: result.user.photoURL,
                isAuth: true,
            };

            // Storing authentication information in local storage
            localStorage.setItem("auth", JSON.stringify(authInfo));

            // Navigating to the "/expense-tracker" route
            navigate("/expense-tracker");
        } catch (error) {
            console.error("Error signing in with Google:", error);
            // Handle error (e.g., display an error message to the user)
        }
    };

    // Rendering the Auth component
    return (
        <div className="login-page">
            {/* Displaying a message */}
            <p>Sign in With Google to Continue </p>
            
            {/* Button to initiate Google sign-in */}
            <button className="login-with-google-btn" onClick={signInWithGoogle}>
                Sign In
            </button>
        </div>
    );
};

// Exporting the Auth component
