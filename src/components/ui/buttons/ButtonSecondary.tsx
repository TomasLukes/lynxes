import { LabelProp } from "@/types/global"

export default function ButtonSecondary({ label } : LabelProp) {
  
  return (
    <button type="button" className="px-6 py-3 bg-transparent text-dark-900 font-bold border border-dark-900
    hover:bg-dark-900 hover:text-light-100">
      {label}
    </button>
  )
}