import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import { ThemeProvider } from './ThemeProvider';
import { motion } from 'motion/react';

const Layout = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
        <Header />
        <motion.main 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-grow pt-20"
        >
          <Outlet />
        </motion.main>
        <Footer />
        <WhatsAppButton />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
