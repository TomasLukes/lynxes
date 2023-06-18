type ProductIncludesProps = {
  quantity: number,
  name: string,
}

export default function ProductIncludesItem({ quantity, name }: ProductIncludesProps) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-primary-700 text-body">
        {quantity}x
      </span>
      <p className="text-body opacity-50">
        {name}
      </p>
    </div>
  )
}