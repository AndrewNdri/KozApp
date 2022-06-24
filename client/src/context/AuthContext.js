import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
    user: null,
    isFetching: false,
    error: false
}

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return(
        <AuthContext.Provider value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch,
        }}>
            {children}
        </AuthContext.Provider>
    );
};

// {
//     _id: "62a012cd0487ba62d528b3c6",
//     username: "Matthiew",
//     email: "mattiew@1234.com",
//     password: "$2a$10$.QFLfoE0XVCYQuQXnAIEJeAoUQcWnTLh8UbWZGYs/cpNeefZydAc6",
//     profilePicture: "",
//     coverPicture: "",
//     followers: [],
//     followings: [],
//     isAdmin: false,
// }