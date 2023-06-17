type ButtonPrimaryProps = {
  type: "button" | "submit"
  label: string,
  style: string,
  onClick?: () => void,
}

export default function ButtonPrimary({ type, label, style, onClick } : ButtonPrimaryProps) {
  
  return (
    <button 
      type={type} 
      className={`px-6 py-3 bg-primary-700 text-light-100 subtitle font-base ${style}
    hover:bg-primary-500`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}