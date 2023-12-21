// Custom hook for retrieving user information from localStorage
export const userGetUserInfo = () => {
    // Parsing user information from localStorage
    const { name, profilePhoto, userID, isAuth } = JSON.parse(
        localStorage.getItem("auth")
    );

    // Returning an object containing user information
    return { name, profilePhoto, userID, isAuth };
};
