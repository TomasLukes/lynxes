export default function ProductIncludesItem({ quantity, name }) {
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