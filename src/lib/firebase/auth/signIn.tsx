import { app } from "../config";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { getAuthErrorMessage } from "./getAuthErrorMessage";

const auth = getAuth(app);

export async function signIn(email: string, password: string) {
    let result = null,
        signInError = null;
    try {
        result = await signInWithEmailAndPassword(auth, email, password)
    } catch (error: any) {
        signInError = getAuthErrorMessage(error.code);
    }

    return { result, signInError };
}