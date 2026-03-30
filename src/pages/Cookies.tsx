const Cookies = () => {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif font-bold text-dark mb-12">Política de Cookies</h1>
        <div className="prose prose-slate max-w-none text-dark/70 leading-relaxed space-y-8">
          <section>
            <h2 className="text-2xl font-serif font-bold text-dark mb-4">O que são Cookies?</h2>
            <p>
              Cookies são pequenos arquivos de texto enviados pelo site ao seu navegador para registrar informações sobre sua visita e preferências.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-serif font-bold text-dark mb-4">Como usamos os Cookies?</h2>
            <p>
              Utilizamos cookies para:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Garantir o funcionamento básico do site (Cookies Necessários).</li>
              <li>Analisar o tráfego de forma anônima para melhorar a experiência do usuário (Cookies Analíticos).</li>
              <li>Lembrar suas preferências de navegação.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-serif font-bold text-dark mb-4">Como gerenciar?</h2>
            <p>
              Você pode configurar seu navegador para recusar todos ou alguns cookies, ou para alertá-lo quando sites definirem ou acessarem cookies.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
