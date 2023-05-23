export default function ButtonSecondary({ label }) {
  return (
    <button className="px-6 py-3 bg-light-100 text-dark-900 font-bold border border-dark-900
    hover:bg-dark-900 hover:text-light-100">
      {label}
    </button>
  )
}