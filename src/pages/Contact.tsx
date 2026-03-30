import { Mail, Phone, MapPin, MessageCircle, Clock } from 'lucide-react';
import { motion } from 'motion/react';

const Contact = () => {
  return (
    <div className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Entre em Contato</h1>
          <p className="text-foreground/60">Estamos prontos para analisar o seu caso com a atenção que ele merece.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 space-y-8"
          >
            <div className="bg-surface p-8 rounded-3xl border border-border-theme shadow-sm">
              <h3 className="text-xl font-serif font-bold text-foreground mb-8">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gold/10 p-3 rounded-xl">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground/40 uppercase tracking-widest mb-1">Telefone / WhatsApp</p>
                    <p className="text-foreground font-bold">(00) 00000-0000</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-gold/10 p-3 rounded-xl">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground/40 uppercase tracking-widest mb-1">E-mail</p>
                    <p className="text-foreground font-bold">contato@saracarvalho.adv.br</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-gold/10 p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground/40 uppercase tracking-widest mb-1">Endereço</p>
                    <p className="text-foreground font-bold">Rua Exemplo, 123 - Centro<br />Sua Cidade - UF</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-gold/10 p-3 rounded-xl">
                    <Clock className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground/40 uppercase tracking-widest mb-1">Horário de Atendimento</p>
                    <p className="text-foreground font-bold">Segunda a Sexta: 09h às 18h</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <a
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chamar no WhatsApp
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-surface p-8 md:p-12 rounded-3xl border border-border-theme shadow-sm">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-8">Envie uma Mensagem</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground/60 ml-1">Nome Completo</label>
                    <input
                      type="text"
                      className="w-full bg-background px-6 py-4 rounded-2xl border border-border-theme focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all text-foreground"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground/60 ml-1">WhatsApp</label>
                    <input
                      type="tel"
                      className="w-full bg-background px-6 py-4 rounded-2xl border border-border-theme focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all text-foreground"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground/60 ml-1">Assunto</label>
                  <select className="w-full bg-background px-6 py-4 rounded-2xl border border-border-theme focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all appearance-none text-foreground">
                    <option>Aposentadoria por Idade</option>
                    <option>Planejamento Previdenciário</option>
                    <option>BPC / LOAS</option>
                    <option>Benefício por Incapacidade</option>
                    <option>Pensão por Morte</option>
                    <option>Revisão de Benefício</option>
                    <option>Outros Assuntos</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground/60 ml-1">Mensagem</label>
                  <textarea
                    rows={5}
                    className="w-full bg-background px-6 py-4 rounded-2xl border border-border-theme focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all resize-none text-foreground"
                    placeholder="Conte-nos brevemente sobre o seu caso..."
                  ></textarea>
                </div>
                <div className="flex items-start gap-3 ml-1">
                  <input type="checkbox" className="mt-1 rounded border-border-theme text-gold focus:ring-gold" id="privacy" />
                  <label htmlFor="privacy" className="text-xs text-foreground/50 leading-relaxed">
                    Concordo com o processamento dos meus dados para fins de contato jurídico, conforme a <a href="/privacidade" className="text-gold hover:underline">Política de Privacidade</a>.
                  </label>
                </div>
                <button className="w-full bg-gold text-white py-5 rounded-2xl font-bold text-lg hover:bg-gold-dark transition-all shadow-xl shadow-gold/10">
                  Enviar Solicitação de Análise
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
