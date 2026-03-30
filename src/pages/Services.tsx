import { motion } from 'motion/react';
import { Clock, FileText, Users, ShieldCheck, Heart, Scale, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: 'Aposentadoria por Idade',
      icon: Clock,
      desc: 'Para quem atingiu a idade mínima e o tempo de contribuição necessário.',
      details: 'Analisamos todo o seu CNIS, períodos de trabalho rural, especial ou militar para garantir que você se aposente com o melhor valor possível.'
    },
    {
      title: 'Planejamento Previdenciário',
      icon: FileText,
      desc: 'O investimento mais inteligente para o seu futuro.',
      details: 'Um estudo completo que projeta suas futuras contribuições e define exatamente quando e como se aposentar para maximizar seu benefício.'
    },
    {
      title: 'BPC / LOAS',
      icon: Heart,
      desc: 'Proteção social para quem mais precisa.',
      details: 'Auxílio para idosos acima de 65 anos ou pessoas com deficiência que não possuem meios de prover o próprio sustento.'
    },
    {
      title: 'Benefícios por Incapacidade',
      icon: ShieldCheck,
      desc: 'Segurança em momentos de dificuldade de saúde.',
      details: 'Auxílio-doença, aposentadoria por invalidez e auxílio-acidente. Atuamos desde o pedido administrativo até a perícia judicial.'
    },
    {
      title: 'Pensão por Morte',
      icon: Users,
      desc: 'Amparo aos dependentes em momentos difíceis.',
      details: 'Garantimos que os dependentes recebam o benefício de forma justa e ágil, analisando a qualidade de segurado e dependência econômica.'
    },
    {
      title: 'Revisão de Benefícios',
      icon: Scale,
      desc: 'Verificação de erros no cálculo do seu benefício.',
      details: 'Se você já é aposentado, podemos analisar se o INSS deixou de considerar algum período ou regra que aumentaria seu salário mensal.'
    }
  ];

  return (
    <div className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Áreas de Atuação</h1>
          <p className="text-foreground/60 text-lg">
            Especialização técnica e atendimento humanizado em todas as frentes do Direito Previdenciário.
          </p>
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
                staggerChildren: 0.1
              }
            }
          }}
          className="grid md:grid-cols-2 gap-8"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="bg-surface p-10 rounded-3xl border border-border-theme shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="flex items-start gap-6">
                <div className="bg-foreground/5 p-4 rounded-2xl group-hover:bg-gold/10 transition-colors">
                  <service.icon className="w-8 h-8 text-foreground group-hover:text-gold transition-colors" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-4">{service.title}</h3>
                  <p className="text-gold font-bold text-sm mb-4">{service.desc}</p>
                  <p className="text-foreground/60 leading-relaxed mb-8">{service.details}</p>
                  <Link
                    to="/contato"
                    className="inline-flex items-center gap-2 text-foreground font-bold hover:text-gold transition-colors"
                  >
                    Consultar meu caso <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-24 bg-surface p-12 rounded-[3rem] border border-border-theme text-center">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Não encontrou o que procurava?</h2>
          <p className="text-foreground/60 mb-10 max-w-2xl mx-auto">
            O Direito Previdenciário é vasto. Se você tem qualquer dúvida sobre sua situação junto ao INSS, entre em contato para uma conversa inicial.
          </p>
          <Link
            to="/contato"
            className="bg-gold text-white px-10 py-4 rounded-2xl font-bold hover:bg-gold-dark transition-all"
          >
            Falar com a Advogada
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
