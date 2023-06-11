import { doc, setDoc, } from 'firebase/firestore'

export default async function addCartItem(db, userID, data) {
    let result = null;
    let error = null;

    try {
        result = await setDoc(doc(db, 'user', userID), data, {
            merge: true,
        });
    } catch (e) {
        error = e;
    }

    return { result, error }
}