type FontType = 'primary' | 'secondary' | 'tertiary' | 'quaternary';

type SizeType = 'xl' | 'lg' | 'md' | 'sm';

type FontSizeType = `${FontType}-${SizeType}`;

const myFontSize: FontSizeType = 'quaternary-xl';



export {};
