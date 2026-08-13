export const ingredients = [
  {
    id: 1,
    name: 'Coconut',
    description: 'Plant-derived cleansers that lift grease',
    svg: 'coconut',
  },
  {
    id: 2,
    name: 'Orange peel',
    description: 'Natural degreaser and fresh citrus lift',
    svg: 'orange',
  },
  {
    id: 3,
    name: 'Soap nut',
    description: 'A traditional plant foaming agent',
    svg: 'soapnut',
  },
  {
    id: 4,
    name: 'Neem',
    description: 'Time-tested antibacterial from the tree',
    svg: 'neem',
  },
  {
    id: 5,
    name: 'Lemongrass',
    description: 'Clean fragrance with nothing synthetic',
    svg: 'lemongrass',
  },
]

export const pillars = [
  {
    id: 1,
    icon: 'less-scrubbing',
    title: 'Less scrubbing',
    text: 'A foaming formulation. The foam clings to grease and lifts it, so you wipe instead of scrub.',
    href: '#shop',
    delay: '',
  },
  {
    id: 2,
    icon: 'clean-ingredients',
    title: 'Clean ingredients',
    text: 'No sulphates, no chlorine, no synthetic fragrance. Nothing on the label you would not want near your food.',
    href: '#ingredients',
    delay: 'rv-d2',
  },
  {
    id: 3,
    icon: 'safe',
    title: 'Safe around everyone',
    text: 'Gentle on hands, safe around kids and pets, and it leaves no toxic residue on the surfaces you touch every day.',
    href: '#proof',
    delay: 'rv-d3',
  },
]

export const stats = [
  { value: '99.9%', label: 'Germ kill', text: 'Tested against germs and bacteria' },
  { value: '0%', label: 'Sulphates', text: 'No SLS, chlorine or parabens' },
  { value: '100%', label: 'Plant based', text: 'Cleansers derived from plants' },
  { value: '4.8', label: 'Rated', text: 'Across 8,000+ verified reviews' },
]

export const whyBundles = [
  { icon: 'save', title: 'Save up to 45%', text: 'Versus buying the same products separately' },
  { icon: 'flat', title: 'One flat price', text: 'No calculators, no comparing carts' },
  { icon: 'curated', title: 'Curated by experts', text: 'Products picked to work well together' },
  { icon: 'shipping', title: 'Free shipping always', text: 'Included on every bundle, all India' },
]

export const categories = [
  { href: '#combos', className: 'p-kitchen', label: 'Purelane foaming kitchen cleaner', title: 'Kitchen bundle', text: 'Grease, dishes & more', delay: '' },
  { href: '#combos', className: 'p-toilet', label: 'Purelane non-toxic toilet cleaner', title: 'Bathroom bundle', text: 'Deep clean & disinfect', delay: 'rv-d1' },
  { href: '#combos', className: 'p-laundry', label: 'Purelane non-toxic laundry detergent', title: 'Laundry bundle', text: 'Softer, fresher wash', delay: 'rv-d2' },
  { href: '#combos', className: 'p-tap', label: 'Purelane tap cleaner and limescale remover', title: 'Hard water bundle', text: 'Melt away limescale', delay: 'rv-d3' },
]

export const trustItems = [
  { icon: 'leaf', lines: ['Plant derived', 'formulas'] },
  { icon: 'recycle', lines: ['Recyclable', 'packaging'] },
  { icon: 'heart', lines: ['Safe for', 'kids & pets'] },
  { icon: 'globe', lines: ['Made in', 'India'] },
]
