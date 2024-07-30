import React, { createContext, useContext, useReducer } from 'react';

// Initial state of the user context
const initialState = {
    user: false,
    isLoggedIn: false,
    role: false,
};

// Action types for user context
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';

// Reducer function for user context
const userReducer = (state, action) => {

    switch (action.type) {
        case LOG_IN:
            return {
                ...state,
                user: action.payload,
                role: action.payload.role,
                isLoggedIn: true,
            };
        case LOG_OUT:
            return {
                ...state,
                user: { token: false },
                isLoggedIn: false,
            };
        default:
            return state;
    }
};

// Create the context
const UserContext = createContext();

// User context provider component
export const UserProvider = ({ children }) => {
    const [userState, userDispatch] = useReducer(userReducer, initialState);

    return (
        <UserContext.Provider value={{ userState, userDispatch }}>
            {children}
        </UserContext.Provider>
    );
};

// Custom hook to access the user context
export const useUserContext = () => {
    return useContext(UserContext);
};
