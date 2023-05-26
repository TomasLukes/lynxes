export default function ButtonPrimary({ label }) {
  return (
    <button className="px-6 py-3 bg-primary-700 text-light-100 subtitle font-base
    hover:bg-primary-500">
      {label}
    </button>
  )
}