import { app } from "../config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import { getAuthErrorMessage } from "./getAuthErrorMessage";

const auth = getAuth(app);

export async function signUp(email, password) {
    let result = null,
        signUpError = null;
    try {
        result = await createUserWithEmailAndPassword(auth, email, password)
    } catch (error) {
        signUpError = getAuthErrorMessage(error.code);
    }

    return { result, signUpError };
}