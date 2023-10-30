import { ReactElement } from "react";

type ProductIncludesProps = {
  quantity: number;
  name: string;
};

const ProductIncludesItem = ({
  quantity,
  name,
}: ProductIncludesProps): ReactElement => (
  <div className="flex items-center gap-4">
    <span className="text-body text-primary-700">{quantity}x</span>
    <p className="text-body opacity-50">{name}</p>
  </div>
);

export default ProductIncludesItem;
