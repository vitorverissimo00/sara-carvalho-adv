const Privacy = () => {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif font-bold text-dark mb-12">Política de Privacidade</h1>
        <div className="prose prose-slate max-w-none text-dark/70 leading-relaxed space-y-8">
          <section>
            <h2 className="text-2xl font-serif font-bold text-dark mb-4">1. Introdução</h2>
            <p>
              Esta Política de Privacidade descreve como Sara Carvalho Advogada coleta, usa e protege suas informações pessoais de acordo com a Lei Geral de Proteção de Dados (LGPD).
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-serif font-bold text-dark mb-4">2. Dados Coletados</h2>
            <p>
              Coletamos apenas os dados necessários para o atendimento jurídico inicial:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nome completo</li>
              <li>WhatsApp / Telefone</li>
              <li>E-mail</li>
              <li>Informações básicas sobre o caso previdenciário</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-serif font-bold text-dark mb-4">3. Finalidade do Tratamento</h2>
            <p>
              Seus dados são utilizados exclusivamente para:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Realizar o primeiro contato e análise de viabilidade jurídica.</li>
              <li>Enviar informações relevantes sobre o andamento de sua consulta.</li>
              <li>Cumprir obrigações legais e regulatórias da advocacia.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-serif font-bold text-dark mb-4">4. Seus Direitos</h2>
            <p>
              Você tem o direito de acessar, corrigir, anonimizar ou excluir seus dados a qualquer momento. Para isso, entre em contato através do e-mail: contato@saracarvalho.adv.br.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
