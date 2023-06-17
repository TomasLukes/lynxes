import { app } from "../config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"

const auth = getAuth(app);

export async function signUp(email, password) {
    let result = null,
        signUpError = null;
    try {
        result = await createUserWithEmailAndPassword(auth, email, password)
    } catch (e) {
        signUpError = e;
    }

    return { result, signUpError };
}