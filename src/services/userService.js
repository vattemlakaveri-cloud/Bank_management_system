import api from "./api";

// Register User
export const registerUser = (user) => {
    return api.post("/users/register", user);
};

// Login User
export const loginUser = (user) => {
    return api.post("/users/login", user);
};

// Get User Profile
export const getUserProfile = () => {
    return api.get("/users/profile");
};

// Update User Profile
export const updateUserProfile = (user) => {
    return api.put("/users/profile", user);
};