import { motion } from 'motion/react';
import { Scale, Award, BookOpen, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-bold uppercase tracking-widest text-xs mb-4 block">Sobre a Advogada</span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8">Sara Carvalho</h1>
            <div className="space-y-6 text-foreground/70 leading-relaxed">
              <p>
                Com anos de experiência dedicados exclusivamente ao Direito Previdenciário, minha missão é humanizar o atendimento jurídico e garantir que os direitos dos trabalhadores sejam respeitados.
              </p>
              <p>
                Acredito que por trás de cada processo existe uma história de vida, uma família e um futuro que depende de uma atuação técnica rigorosa e ética. Por isso, trato cada caso com a diligência e o respeito que ele merece.
              </p>
              <p>
                Minha atuação é pautada na transparência total. Antes de iniciarmos qualquer procedimento, realizo uma análise minuciosa das chances reais, para que você tenha clareza sobre o seu caminho.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border border-border-theme">
              <img
                src="https://picsum.photos/seed/sara/800/1000"
                alt="Sara Carvalho"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-gold p-10 rounded-3xl hidden md:block shadow-xl">
              <Scale className="w-12 h-12 text-white" />
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            { title: 'Ética Profissional', icon: Award, desc: 'Atuação pautada rigorosamente nos princípios da OAB e na transparência com o cliente.' },
            { title: 'Foco no Cliente', icon: Heart, desc: 'Atendimento humanizado, entendendo as necessidades e limitações de cada pessoa.' },
            { title: 'Atualização Constante', icon: BookOpen, desc: 'Estudo contínuos das mudanças nas leis previdenciárias para oferecer a melhor estratégia.' },
          ].map((item, idx) => (
            <motion.div 
              key={idx} 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="bg-surface p-8 rounded-3xl border border-border-theme shadow-sm"
            >
              <item.icon className="w-10 h-10 text-gold mb-6" />
              <h3 className="text-xl font-serif font-bold text-foreground mb-4">{item.title}</h3>
              <p className="text-foreground/60 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
