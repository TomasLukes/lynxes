import Image from 'next/image';

type RadioInputProps = {
  label: string;
  id: string;
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default ({
  label,
  id,
  name,
  checked,
  onChange,
}: RadioInputProps) => <div className='flex h-16 items-center gap-4 rounded-lg border border-light-400 px-4 py-3'>
      <input
        type='radio'
        id={id}
        name={name}
        required
        className='text-body text-neutral-700 placeholder-opacity-50'
        value={id}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id} className='subtitle flex items-center gap-2'>
        <Image
          src={`./assets/icons/pages/Checkout/payment-options/icon-payment-${id}.svg`}
          width={36}
          height={36}
          alt={`Icon of ${label} payment method`}
        />
        {label}
      </label>
    </div>;
