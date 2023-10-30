import { doc, Firestore, getDoc } from "firebase/firestore";

import { ProductType } from "@/types/global";

export const getProduct = async (
  db: Firestore,
  productId: string
): Promise<ProductType | null> => {
  const docRef = doc(db, "products", productId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data() as ProductType;
  } else {
    console.log("No such document found");
    return null;
  }
};
