interface BadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'new' | 'sale' | 'info' | 'success';
  className?: string;
}

export default function Badge({ children, variant = 'gold', className = '' }: BadgeProps) {
  const variants = {
    gold: 'bg-[#b59d5a] text-black',
    new: 'bg-blue-500 text-white',
    sale: 'bg-red-500 text-white',
    info: 'bg-zinc-200 text-zinc-700',
    success: 'bg-green-100 text-green-700',
  };

  return (
    <span
      className={`inline-block px-2 py-0.5 text-xs font-bold uppercase tracking-wide rounded ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
