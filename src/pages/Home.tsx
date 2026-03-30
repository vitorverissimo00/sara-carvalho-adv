import { motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Users,
  Clock,
  FileText,
} from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-background py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="inline-block py-1 px-3 rounded-full bg-gold/10 text-gold text-xs font-bold uppercase tracking-widest mb-6"
              >
                Especialista em Direito Previdenciário
              </motion.span>
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight mb-6"
              >
                Protegendo o seu futuro e garantindo o seu descanso.
              </motion.h1>
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="text-lg text-foreground/70 mb-8 leading-relaxed max-w-xl"
              >
                Consultoria jurídica especializada para você conquistar sua
                aposentadoria com segurança, clareza e o valor que você
                realmente merece.
              </motion.p>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a
                  href="https://wa.me/55032984320601"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-gold-dark transition-all flex items-center justify-center gap-2 shadow-lg shadow-gold/20"
                >
                  Falar com Especialista
                  <ArrowRight className="w-5 h-5" />
                </a>
                <Link
                  to="/servicos"
                  className="bg-surface text-foreground border-2 border-border-theme px-8 py-4 rounded-xl font-bold text-lg hover:bg-gold/5 transition-all text-center"
                >
                  Ver Serviços
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-border-theme">
                <img
                  src="/sara-carvalho.jpg"
                  alt="Sara Carvalho - Advogada Previdenciarista"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-surface p-6 rounded-2xl shadow-xl border border-border-theme flex items-center gap-4">
                <div className="bg-gold/10 p-3 rounded-xl">
                  <ShieldCheck className="w-8 h-8 text-gold" />
                </div>
                <div>
                  <p className="text-xs text-foreground/50 font-bold uppercase tracking-widest">
                    Atendimento
                  </p>
                  <p className="text-lg font-serif font-bold text-foreground">
                    100% Seguro
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-surface py-10 border-y border-border-theme">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60 grayscale">
            <div className="flex items-center gap-2 text-foreground font-serif font-bold text-xl italic">
              OAB/UF 00.000
            </div>
            <div className="text-foreground font-bold tracking-widest uppercase text-sm">
              Atendimento em todo o Brasil
            </div>
            <div className="text-foreground font-bold tracking-widest uppercase text-sm">
              Especialista INSS
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Como posso te ajudar?
            </h2>
            <p className="text-foreground/60">
              Oferecemos suporte completo em todas as etapas da sua jornada
              previdenciária.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Aposentadoria por Idade",
                icon: Clock,
                desc: "Análise completa para garantir o melhor benefício na idade certa.",
              },
              {
                title: "Planejamento Previdenciário",
                icon: FileText,
                desc: "Prepare-se hoje para receber o valor máximo amanhã.",
              },
              {
                title: "BPC / LOAS",
                icon: Users,
                desc: "Auxílio para idosos e pessoas com deficiência de baixa renda.",
              },
              {
                title: "Benefícios por Incapacidade",
                icon: ShieldCheck,
                desc: "Suporte em caso de doença ou acidente que impeça o trabalho.",
              },
              {
                title: "Pensão por Morte",
                icon: Users,
                desc: "Garantindo o amparo financeiro para os dependentes.",
              },
              {
                title: "Revisão de Benefícios",
                icon: CheckCircle2,
                desc: "Seu benefício está baixo? Podemos analisar possíveis erros.",
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-surface p-8 rounded-3xl border border-border-theme shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="bg-gold/5 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors">
                  <service.icon className="w-7 h-7 text-foreground group-hover:text-gold transition-colors" />
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-foreground/60 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
                <Link
                  to="/servicos"
                  className="text-gold font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Saiba mais <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Como funciona o atendimento?
            </h2>
            <p className="text-foreground/60">
              Um processo transparente e seguro para você acompanhar cada passo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connecting Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gold/10 -translate-y-1/2 z-0 origin-left"
            ></motion.div>

            {[
              {
                step: "01",
                title: "Consulta Inicial",
                desc: "Conversamos para entender os detalhes do seu caso e tirar suas primeiras dúvidas.",
              },
              {
                step: "02",
                title: "Análise Técnica",
                desc: "Analisamos toda a sua documentação e histórico para traçar a melhor estratégia.",
              },
              {
                step: "03",
                title: "Protocolo e Acompanhamento",
                desc: "Damos entrada no seu pedido e acompanhamos cada etapa até a decisão final.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="relative z-10 bg-background p-8 rounded-3xl border border-border-theme shadow-sm text-center"
              >
                <div className="w-16 h-16 bg-gold text-white font-serif font-bold text-2xl rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-gold/20">
                  {item.step}
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-gold font-bold uppercase tracking-widest text-xs mb-4 block">
                Sobre a Advogada
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8">
                Dra. Sara Carvalho
              </h2>
              <p className="text-foreground/70 leading-relaxed mb-6">
                Especialista em Direito Previdenciário com foco em garantir que
                cada trabalhador receba exatamente o que lhe é de direito. Minha
                atuação é pautada na transparência, ética e no atendimento
                humanizado.
              </p>
              <p className="text-foreground/70 leading-relaxed mb-10">
                Acredito que a segurança jurídica é a base para um futuro
                tranquilo. Por isso, dedico minha carreira a simplificar a
                burocracia do INSS para meus clientes.
              </p>
              <Link
                to="/sobre"
                className="inline-flex items-center gap-2 text-foreground font-bold border-b-2 border-gold pb-1 hover:text-gold transition-all"
              >
                Conheça minha trajetória <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl rotate-3 border-4 border-border-theme">
                <img
                  src="/sara-carvalho-02.jpg"
                  alt="Escritório Sara Carvalho"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-background relative overflow-hidden border-t border-border-theme">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-8">
            Não deixe o seu futuro nas mãos da sorte.
          </h2>
          <p className="text-foreground/70 text-lg mb-12">
            Cada dia de espera pode significar dinheiro perdido. Comece hoje
            mesmo a sua análise previdenciária com quem entende do assunto.
          </p>
          <a
            href="https://wa.me/55032984320601"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-gold text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-gold-dark transition-all shadow-2xl shadow-gold/20"
          >
            Falar com Dra. Sara no WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
