// Configurações do site usando variáveis de ambiente
export const siteConfig = {
  // URLs e informações básicas
  siteUrl: import.meta.env.VITE_SITE_URL || 'http://localhost:3000',
  siteName: import.meta.env.VITE_SITE_NAME || 'Sara Carvalho Advogada',
  siteDescription: import.meta.env.VITE_SITE_DESCRIPTION || 'Especialista em Direito Previdenciário',
  
  // Contato
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || '55032984320601',
  email: import.meta.env.VITE_EMAIL || 'contato@saracarvalho.adv.br',
  instagramUrl: import.meta.env.VITE_INSTAGRAM_URL || 'https://www.instagram.com/advsaracarvalho/',
  
  // Endereço
  address: {
    street: import.meta.env.VITE_ADDRESS_STREET || 'Rua Exemplo, 123 - Centro',
    city: import.meta.env.VITE_ADDRESS_CITY || 'Sua Cidade - UF',
  },
  
  // Informações profissionais
  oabNumber: import.meta.env.VITE_OAB_NUMBER || 'OAB/UF 00.000',
  
  // URLs para redes sociais
  whatsappUrl: `https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER || '55032984320601'}`,
  
  // Meta tags para SEO
  getMetaTags: () => {
    const baseUrl = import.meta.env.VITE_SITE_URL || 'http://localhost:3000';
    return {
      title: import.meta.env.VITE_SITE_NAME || 'Sara Carvalho | Advogada Previdenciarista',
      description: import.meta.env.VITE_SITE_DESCRIPTION || 'Especialista em Direito Previdenciário',
      ogImage: `${baseUrl}/sara-carvalho.jpg`,
      url: baseUrl,
    };
  },
};