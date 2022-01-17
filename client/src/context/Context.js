import { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";

const INITIAL_STATE = {     //creating our initial state and after logging process if everything is successful we are gonna update this initial state

    user: JSON.parse(localStorage.getItem("user")) || null, //we are gonna use this user inside any component
    //if there's a user inside local storage it gonna take that user othrwise null
    isFetching: false,
    error: false,
};

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {    //to reach user inside any component uske liye provider ka use kiya 
    //and this children will gonna be all of our conponents
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);    // this reducer is gonna update our initial state

    useEffect(() => {  
        localStorage.setItem("user", JSON.stringify(state.user));
    }, [state.user]);  // whenever this state.user changes fire this useEffect

    return (
        <Context.Provider
            value={{  // jo values hme pass karni hai
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch,
            }}
        >
            {children}
        </Context.Provider>
    );
};