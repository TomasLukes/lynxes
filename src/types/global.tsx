export type LabelProp = {
    label: string,
}

export type ProductProp = {
    product: ProductType,
}

export type ProductType = {
    productID: number,
    slug: string,
    name: string,
    shortName: string,
    itemQuantity: number,
    price: number,
    new: boolean,
    description: string,
    features: string,
    includes: Array<{
        quantity: number,
        item: string,
    }>,
}

export type FormDataType = {
    user: string,
    creationDate: any,
    name: string,
    email: string,
    phoneNumber: string,
    address: string,
    city: string,
    zipCode: string,
    country: string,
    paymentMethod: string,
    orderedItems: ProductType[],
}