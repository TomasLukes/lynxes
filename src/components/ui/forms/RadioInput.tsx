import Image from "next/image"

type RadioInputProps = {
  label: string,
  id: string,
  name: string,
  checked: boolean,
  onChange: () => void,
}

export default function RadioInput({ label, id, name, checked, onChange } : RadioInputProps) {

  return (
    <div className="flex gap-4 items-center h-16 px-4 py-3 border border-light-400 rounded-lg">
      <input 
        type="radio" 
        id={id} 
        name={name} 
        required
        className="text-body text-neutral-700 placeholder-opacity-50"
        value={id}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id} className="flex items-center gap-2 subtitle">
        <Image src={`./assets/icons/pages/Checkout/payment-options/icon-payment-${id}.svg`}
        width={36} height={36} alt={`Icon of ${label} payment method`}/>
        {label}
      </label> 
  </div>
  )
}