import { ProductType } from '@/types/global';

export const addCartItemToLS = (addedItem: ProductType) => {
  const addedItemData = {
    productID: addedItem.productID,
    slug: addedItem.slug,
    shortName: addedItem.shortName,
    price: addedItem.price,
    itemQuantity: addedItem.itemQuantity,
  };

  let cart: ProductType[];
  const cartItems = localStorage.getItem('cart');
  if (cartItems) {
    cart = JSON.parse(cartItems);
  } else {
    cart = [];
  }

  const existingItem = cart.find(
    (item: ProductType) => item.productID === addedItemData.productID
  );

  if (existingItem) {
    existingItem.itemQuantity += 1;
  } else {
    addedItemData.itemQuantity = 1;
    cart.push(addedItemData as ProductType);
  }

  localStorage.setItem('cart', JSON.stringify(cart));
};
