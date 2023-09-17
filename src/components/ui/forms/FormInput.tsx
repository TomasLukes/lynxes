type FormInputProps = {
  label: string;
  id: string;
  value: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default ({
  label,
  id,
  value,
  type,
  onChange,
}: FormInputProps) => <label
      htmlFor={id}
      className='subtitle flex flex-col gap-2 pb-4 normal-case'
    >
      {label}
      <input
        id={id}
        type={type}
        placeholder={`Your ${label}`}
        required
        className='text-body rounded-lg border border-light-400 px-4 py-3 text-neutral-700 placeholder-opacity-50'
        value={value}
        onChange={onChange}
      />
    </label>;
