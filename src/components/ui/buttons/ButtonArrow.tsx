import { ReactElement } from 'react';
import Image from 'next/image';

import { LabelProp } from '@/types/global';

const ButtonArow = ({ label }: LabelProp): ReactElement => (
  <button
    type='button'
    className='subtitle mx-auto flex items-center gap-1 px-4 py-2 text-dark-900 opacity-50
    hover:text-primary-700 hover:opacity-100'
  >
    {label}
    <Image
      src='/assets/icons/shared/buttons/icon-arrow-right.svg'
      alt='Arrow Icon'
      width={8}
      height={16}
      className='inline'
    />
  </button>
);

export default ButtonArow;
