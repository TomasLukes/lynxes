import { app } from '@/lib/firebase/config'
import { useEffect, useState, useContext, createContext } from "react"
import { onAuthStateChanged, getAuth, signOut, User } from "firebase/auth"

export type AuthContextType = {
    user: User | null,
    logOut: () => void
}

const auth = getAuth(app)

export const AuthContext = createContext<AuthContextType | null>(null)
export const useAuthContext = ():AuthContextType | null => useContext(AuthContext)

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
        const [user, setUser] = useState<User | null>(null)

    const logOut = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error("Error signing out: ", error);
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          setUser(user)
        })

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user, logOut }}>
            {children}
        </AuthContext.Provider>
    );
}