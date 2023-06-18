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
    includes: Array<object>,
  }