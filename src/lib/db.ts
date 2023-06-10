import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, where, doc, getDoc, getDocs } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

export const app = initializeApp(firebaseConfig);
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

export async function getProductsByCategory(db, category) {
    const q = query(collection(db, 'products'), where('category', '==', category));

    const querySnapshot = await getDocs(q)
    const products = []

    querySnapshot.forEach((doc) => {
        products.push(doc.data())
    });

    return products;
}

export async function getCartItems(db, userID) {
    const docRef = doc(db, 'cart', userID);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log('Document data', docSnap.data());
        return docSnap.data();
    } else (
        console.log('No such document found')
    )
}