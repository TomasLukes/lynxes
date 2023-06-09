type FormInputProps = {
  label: string,
  id: string,
  value: string,
  type: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export default function FormInput({ label, id, value, type, onChange } : FormInputProps) {

  return (
    <label htmlFor={id} className="flex flex-col gap-2 subtitle normal-case pb-4">
      {label}
      <input 
        id={id}
        type={type}
        placeholder={`Your ${label}`}
        required
        className="px-4 py-3 text-body text-neutral-700 placeholder-opacity-50 border border-light-400 rounded-lg"
        value={value}
        onChange={onChange}
      />
    </label>
  )
}