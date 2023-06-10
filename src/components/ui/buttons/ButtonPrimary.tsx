export default function ButtonPrimary({ label, style }) {
  return (
    <button type="submit" className={`px-6 py-3 bg-primary-700 text-light-100 subtitle font-base ${style}
    hover:bg-primary-500`}>
      {label}
    </button>
  )
}