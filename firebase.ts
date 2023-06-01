import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAggtZqQL7SGaskBawg-NM_YByuJP1MKPM",
    authDomain: "lynxes-cz.firebaseapp.com",
    projectId: "lynxes-cz",
    storageBucket: "lynxes-cz.appspot.com",
    messagingSenderId: "701027538390",
    appId: "1:701027538390:web:33a37152a9745800f80077"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export async function getProduct(db, productId) {
    const docRef = doc(db, 'products', productId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log('Document data', docSnap.data());
        return docSnap.data();
    } else (
        console.log('No such document found')
    )
}