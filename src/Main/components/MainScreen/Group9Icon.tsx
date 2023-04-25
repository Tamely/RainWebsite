import { memo, SVGProps } from 'react';

const Group9Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 331 111' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 31C0 19.9543 8.95431 11 20 11H300C311.046 11 320 19.9543 320 31V91C320 102.046 311.046 111 300 111H20C8.95431 111 0 102.046 0 91V31Z'
      fill='#FFE602'
      stroke='black'
      strokeWidth={4}
    />
    <rect x={11} width={320} height={100} rx={20} fill='#906CD6' stroke='black' strokeWidth={4} />
  </svg>
);
const Memo = memo(Group9Icon);
export { Memo as Group9Icon };
