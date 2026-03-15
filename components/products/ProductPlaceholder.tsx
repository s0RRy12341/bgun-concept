import Image from 'next/image';

interface ProductPlaceholderProps {
  name: string;
  src?: string;
  small?: boolean;
  className?: string;
}

export default function ProductPlaceholder({ name, src, small = false, className = '' }: ProductPlaceholderProps) {
  if (src) {
    return (
      <div className={`w-full h-full relative ${className}`}>
        <Image
          src={src}
          alt={name}
          fill
          className="object-cover"
          sizes={small ? '80px' : '(max-width: 768px) 100vw, 50vw'}
        />
      </div>
    );
  }

  return (
    <div className={`w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-900 flex flex-col items-center justify-center ${className}`}>
      <svg
        className={`${small ? 'w-6 h-6' : 'w-10 h-10'} text-zinc-600 mb-2`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1}
      >
        <circle cx="12" cy="12" r="8" />
        <line x1="12" y1="4" x2="12" y2="8" />
        <line x1="12" y1="16" x2="12" y2="20" />
        <line x1="4" y1="12" x2="8" y2="12" />
        <line x1="16" y1="12" x2="20" y2="12" />
        <circle cx="12" cy="12" r="2" />
      </svg>
      {!small && (
        <span className="text-zinc-500 text-xs font-medium text-center px-3 leading-tight">
          {name}
        </span>
      )}
    </div>
  );
}
