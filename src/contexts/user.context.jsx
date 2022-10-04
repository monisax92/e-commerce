import { createContext, useState, useEffect} from "react";
import { onAuthStateChangedListener, createUserDocFromAuth} from "../utils/firebase/firebase.utils";

//storage
export const UserContext = createContext(
    {
        currentUser: null,
        setCurrentUser: () => null
    }
);

//provider (deciding which components re-render on currentUser's change)
export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};

    // signOutUser();

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user)=>{
            if(user){
                createUserDocFromAuth(user);
            }
            setCurrentUser(user); 
        });
        return unsubscribe;
    }, []);

    return(
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}