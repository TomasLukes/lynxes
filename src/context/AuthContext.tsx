import { app } from '@/lib/firebase/config'
import { useEffect, useState, useContext, createContext } from "react"
import { onAuthStateChanged, getAuth, signOut, User } from "firebase/auth"

type AuthContextType = {
    user: User | null,
    logOut: () => void
}

const auth = getAuth(app)
export const AuthContext = createContext<AuthContextType | null>(null)
export const useAuthContext = () => useContext(AuthContext)

export const AuthContextProvider = ({
    children,
    }) => {
        const [user, setUser] = useState(null)
        const [loading, setLoading] = useState(true)

    const logOut = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error("Error signing out: ", error);
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user, logOut }}>
            {loading ? <div>Loading...</div> : children}
        </AuthContext.Provider>
    );
}