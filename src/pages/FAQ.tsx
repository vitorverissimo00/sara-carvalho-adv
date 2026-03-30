import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-border-theme">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left group"
      >
        <span className="text-lg font-serif font-bold text-foreground group-hover:text-gold transition-colors">{question}</span>
        {isOpen ? <ChevronUp className="text-gold" /> : <ChevronDown className="text-foreground/30" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-foreground/60 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "Quanto tempo demora para sair a aposentadoria?",
      answer: "O tempo varia conforme o tipo de benefício e a complexidade do caso. No INSS, a análise pode levar de 45 a 90 dias, mas em alguns casos pode demorar mais. Se houver necessidade de ação judicial, o prazo pode ser maior, mas garantimos o acompanhamento em todas as fases."
    },
    {
      question: "Preciso ir pessoalmente ao escritório para ser atendido?",
      answer: "Não necessariamente. Realizamos atendimentos 100% online para todo o Brasil através de videochamadas e WhatsApp. A documentação pode ser enviada digitalmente com total segurança. Se preferir, também atendemos presencialmente em nossa sede."
    },
    {
      question: "O que é o Planejamento Previdenciário?",
      answer: "É um estudo detalhado do seu histórico de contribuições para identificar a melhor regra de aposentadoria para o seu caso, o valor que você receberá e quando poderá se aposentar. O objetivo é evitar que você perca dinheiro escolhendo a regra errada."
    },
    {
      question: "Tive meu benefício negado pelo INSS. O que fazer?",
      answer: "A negativa do INSS não é a palavra final. É possível entrar com um recurso administrativo ou uma ação judicial para reverter a decisão. Analisamos o motivo da negativa para traçar a melhor estratégia de reversão."
    },
    {
      question: "Quem tem direito ao BPC/LOAS?",
      answer: "Idosos acima de 65 anos ou pessoas com deficiência de qualquer idade, desde que comprovem baixa renda familiar (geralmente até 1/4 do salário mínimo por pessoa) e não possuam meios de prover o próprio sustento."
    }
  ];

  return (
    <div className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Dúvidas Frequentes</h1>
          <p className="text-foreground/60">Encontre respostas para as perguntas mais comuns sobre direitos previdenciários.</p>
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
          className="bg-surface p-8 md:p-12 rounded-3xl border border-border-theme shadow-sm"
        >
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <FAQItem question={faq.question} answer={faq.answer} />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 bg-surface p-10 rounded-3xl text-center border border-border-theme">
          <h3 className="text-2xl font-serif font-bold mb-4">Ainda tem dúvidas?</h3>
          <p className="text-foreground/70 mb-8">Cada caso é único. Fale diretamente conosco para uma análise personalizada.</p>
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold text-white px-8 py-4 rounded-xl font-bold hover:bg-gold-dark transition-all"
          >
            Chamar no WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
