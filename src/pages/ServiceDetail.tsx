import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, MessageCircle, CheckCircle2 } from 'lucide-react';
import { SERVICES_DATA } from '../constants/services';
import Markdown from 'react-markdown';

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/servicos" replace />;
  }

  const Icon = service.icon;

  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/servicos"
          className="inline-flex items-center gap-2 text-dark/60 hover:text-gold transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Voltar para Serviços
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 md:p-16 rounded-[3rem] border border-dark/5 shadow-sm mb-16"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
            <div className="bg-gold/10 p-6 rounded-3xl">
              <Icon className="w-12 h-12 text-gold" />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-serif font-bold text-dark mb-4">
                {service.title}
              </h1>
              <p className="text-gold font-bold text-lg uppercase tracking-widest">
                {service.desc}
              </p>
            </div>
          </div>

          <div className="prose prose-slate max-w-none text-dark/70 leading-relaxed mb-12">
            <Markdown>{service.fullContent}</Markdown>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-dark/5 p-8 rounded-3xl">
              <h3 className="text-xl font-serif font-bold text-dark mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-gold" />
                Por que nos escolher?
              </h3>
              <ul className="space-y-3 text-sm text-dark/60">
                <li>• Atendimento humanizado e individualizado.</li>
                <li>• Análise técnica rigorosa de cada caso.</li>
                <li>• Transparência total sobre as chances reais.</li>
                <li>• Experiência exclusiva em Direito Previdenciário.</li>
              </ul>
            </div>
            <div className="bg-gold/5 p-8 rounded-3xl flex flex-col justify-center items-center text-center">
              <h3 className="text-xl font-serif font-bold text-dark mb-4">
                Ficou com alguma dúvida?
              </h3>
              <p className="text-dark/60 text-sm mb-6">
                Cada caso tem suas particularidades. Fale conosco para uma análise inicial do seu caso.
              </p>
              <a
                href="https://wa.me/55032984320601"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex bg-[#25D366] text-white px-8 py-4 rounded-2xl font-bold hover:opacity-90 transition-opacity gap-2 items-center"
              >
                <MessageCircle className="w-5 h-5" />
                Conversar no WhatsApp
              </a>
            </div>
          </div>
        </motion.div>

        <div className="text-center">
          <h2 className="text-2xl font-serif font-bold text-dark mb-8">Outras Áreas de Atuação</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {SERVICES_DATA.filter((s) => s.slug !== slug).slice(0, 3).map((s) => (
              <Link
                key={s.slug}
                to={`/servicos/${s.slug}`}
                className="bg-white p-6 rounded-2xl border border-dark/5 hover:border-gold/30 hover:shadow-md transition-all text-left group"
              >
                <s.icon className="w-6 h-6 text-gold mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-serif font-bold text-dark text-sm">{s.title}</h4>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
