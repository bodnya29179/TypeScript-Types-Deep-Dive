interface Theme {
  [key: `bg-${string}-${number}`]: `#${string}`;
  [key: `text-${string}-${number}`]: `#${string}`;
}

const theme: Theme = {
  'bg-navy-10': '#9ac0fd',
  'bg-navy-30': '#6092fa',
  'bg-navy-50': '#3b82ff',
  'bg-navy-70': '#0e65ff',
  'bg-navy-90': '#0046ca',
  'bg-red-10': '#ff7f7f',
  'bg-red-30': '#ff4b4b',
  'bg-red-50': '#ff0000',
  'text-navy-10': '#9ac0fd',
  'text-navy-30': '#6092fa',
};



export {};
