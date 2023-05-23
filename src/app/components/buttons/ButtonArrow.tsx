export default function ButtonArrow({ label }) {
  return (
    <button className="px-4 py-2 text-dark-900 opacity-50 font-bold
    hover:text-primary-700 hover:opacity-100">
      {label} <i>{`>`}</i>
    </button>
  )
}