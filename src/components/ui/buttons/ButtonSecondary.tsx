import { LabelProp } from '@/types/global';

export default ({ label }: LabelProp) => (
  <button
    type='button'
    className='border border-dark-900 bg-transparent px-6 py-3 font-bold text-dark-900
    hover:bg-dark-900 hover:text-light-100'
  >
    {label}
  </button>
);
