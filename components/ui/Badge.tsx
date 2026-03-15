interface BadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'new' | 'sale' | 'info' | 'success';
  className?: string;
}

export default function Badge({ children, variant = 'gold', className = '' }: BadgeProps) {
  const variants = {
    gold: 'bg-[#c8a84a] text-black',
    new: 'bg-blue-600 text-white',
    sale: 'bg-red-600 text-white',
    info: 'bg-zinc-700 text-zinc-300',
    success: 'bg-green-700 text-green-100',
  };

  return (
    <span
      className={`inline-block px-2 py-0.5 text-xs font-bold uppercase tracking-wide rounded ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
