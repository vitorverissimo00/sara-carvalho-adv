# Sara Carvalho - Advocacia Previdenciarista

<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

Site profissional para advogada especialista em Direito Previdenciário.

## 🚀 Deploy e Configuração

### Configuração de Ambiente

1. **Copie o arquivo de exemplo:**
   ```bash
   cp .env.local.example .env
   ```

2. **Configure suas variáveis no arquivo `.env`:**
   - `VITE_SITE_URL`: URL do seu site em produção
   - `VITE_WHATSAPP_NUMBER`: Número do WhatsApp (formato: 55032984320601)
   - `VITE_EMAIL`: Email de contato
   - `VITE_INSTAGRAM_URL`: URL do Instagram
   - `VITE_ADDRESS_*`: Informações de endereço
   - `VITE_OAB_NUMBER`: Número da OAB

### Scripts Disponíveis

- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm run build:production` - Build otimizado com limpeza
- `npm run deploy` - Build + Deploy automático para Netlify
- `npm run preview` - Preview local da build

### Deploy para Netlify

1. **Automático (recomendado):**
   ```bash
   npm run deploy
   ```

2. **Manual:**
   ```bash
   npm run build:production
   netlify deploy --prod --dir=dist
   ```

### URL de Produção
🌐 **Atual:** https://saracarvalho-advocacia.netlify.app/

## 🎨 Funcionalidades

- ✅ Design responsivo e moderno
- ✅ Tema claro como padrão
- ✅ Meta tags para redes sociais (Open Graph)
- ✅ Formulário de contato com validação
- ✅ Integração com WhatsApp
- ✅ Links para redes sociais
- ✅ SEO otimizado

## 🔧 Tecnologias

- React 19
- TypeScript
- Tailwind CSS
- Vite
- Motion (Framer Motion)
- React Router

## 📱 Preview em Redes Sociais

O site está configurado para exibir previews corretas quando compartilhado em:
- Instagram
- WhatsApp
- Facebook
- LinkedIn
- Twitter/X

## 🏃 Executar Localmente

**Pré-requisitos:** Node.js

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Configurar variáveis de ambiente:**
   ```bash
   cp .env.local.example .env
   # Edite o arquivo .env com suas configurações
   ```

3. **Executar em desenvolvimento:**
   ```bash
   npm run dev
   ```