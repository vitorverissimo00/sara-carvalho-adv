import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Scale, Mail, MapPin, Phone, Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-background text-foreground pt-16 pb-8 border-t border-border-theme"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <Scale className="w-8 h-8 text-gold" />
              <div className="flex flex-col">
                <span className="text-xl font-serif font-bold leading-none">Sara Carvalho</span>
                <span className="text-[10px] uppercase tracking-widest text-gold font-semibold">Advogada Previdenciarista</span>
              </div>
            </Link>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Especialista em Direito Previdenciário, dedicada a garantir que você receba o que é seu por direito com segurança e transparência.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-foreground/5 rounded-full hover:bg-gold hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-foreground/5 rounded-full hover:bg-gold hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-foreground/5 rounded-full hover:bg-gold hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-4 text-sm text-foreground/60">
              <li><Link to="/" className="hover:text-gold transition-colors">Início</Link></li>
              <li><Link to="/sobre" className="hover:text-gold transition-colors">Sobre a Advogada</Link></li>
              <li><Link to="/servicos" className="hover:text-gold transition-colors">Áreas de Atuação</Link></li>
              <li><Link to="/faq" className="hover:text-gold transition-colors">Dúvidas Frequentes</Link></li>
              <li><Link to="/contato" className="hover:text-gold transition-colors">Contato</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-6">Serviços</h3>
            <ul className="space-y-4 text-sm text-foreground/60">
              <li>Aposentadoria por Idade</li>
              <li>Planejamento Previdenciário</li>
              <li>BPC / LOAS</li>
              <li>Pensão por Morte</li>
              <li>Revisão de Benefícios</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-6">Contato</h3>
            <ul className="space-y-4 text-sm text-foreground/60">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold shrink-0" />
                <span>Rua Exemplo, 123 - Centro<br />Sua Cidade - UF</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <span>(00) 00000-0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <span>contato@saracarvalho.adv.br</span>
              </li>
              <li className="pt-2">
                <span className="text-xs font-semibold text-gold uppercase tracking-widest">OAB/UF 00.000</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border-theme flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-foreground/40">
          <p>© {currentYear} Sara Carvalho Advogada. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <Link to="/privacidade" className="hover:text-gold transition-colors">Privacidade</Link>
            <Link to="/cookies" className="hover:text-gold transition-colors">Cookies</Link>
            <Link to="/termos" className="hover:text-gold transition-colors">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
