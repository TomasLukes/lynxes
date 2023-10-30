import {
  collection,
  Firestore,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import { ProductType } from "@/types/global";

export const getProductByCategory = async (db: Firestore, category: string) => {
  const q = query(
    collection(db, "products"),
    where("category", "==", category)
  );

  const querySnapshot = await getDocs(q);
  const products: ProductType[] = [];

  querySnapshot.forEach((doc) => {
    products.push(doc.data() as ProductType);
  });

  return products;
};
