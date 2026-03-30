import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { motion } from 'motion/react';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gold/10 text-gold hover:bg-gold/20 transition-colors"
      aria-label="Alternar tema"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
      </motion.div>
    </button>
  );
};

export default ThemeToggle;
