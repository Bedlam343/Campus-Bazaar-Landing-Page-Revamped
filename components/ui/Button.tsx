import { motion } from 'motion/react';

const Button = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}: any) => {
  const baseStyle =
    'px-6 py-3 rounded-full font-bold transition-all flex items-center gap-2';
  const variants = {
    primary:
      'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/25',
    secondary:
      'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700',
    accent:
      'bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-lg shadow-amber-400/25',
    ghost: 'bg-transparent text-slate-300 hover:text-white',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyle} ${variants[variant as keyof typeof variants]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
