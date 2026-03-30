import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Instagram, MessageCircle, ArrowRight, Info } from "lucide-react";
import { posts } from "../constants/igPosts";

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

const categories = ["Todos", "Aposentadoria", "Salário", "Dicas Rápidas"];

const InstagramFeed = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [filteredPosts, setFilteredPosts] = useState(posts);

  useEffect(() => {
    if (activeCategory === "Todos") {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(
        posts.filter((post) => post.category === activeCategory),
      );
    }
  }, [activeCategory]);

  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    // Process embeds after filtering or initial load
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, [filteredPosts]);

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-gold/10 text-gold text-xs font-bold uppercase tracking-widest mb-6">
              <Instagram className="w-4 h-4" />
              Conteúdo Educativo
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Direito Previdenciário em Vídeos e Dicas Rápidas
            </h1>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Acompanhe as principais atualizações do INSS, explicações sobre
              benefícios e orientações práticas direto do nosso Instagram.
            </p>
          </motion.div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all border ${
                activeCategory === category
                  ? "bg-gold border-gold text-white shadow-lg shadow-gold/20"
                  : "bg-surface border-border-theme text-foreground/70 hover:border-gold hover:text-gold"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <motion.div
              key={post.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-surface rounded-3xl border border-border-theme overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col"
            >
              <div className="p-4 border-b border-border-theme flex items-center justify-between bg-background/50">
                <span className="text-xs font-bold text-gold uppercase tracking-widest">
                  {post.category}
                </span>
                <Instagram className="w-4 h-4 text-foreground/30" />
              </div>

              <div className="flex-grow p-4 flex items-center justify-center min-h-[450px] bg-white">
                {/* Instagram Embed */}
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={post.url}
                  data-instgrm-version="14"
                  style={{ width: "100%", margin: 0 }}
                ></blockquote>
              </div>

              {/* <div className="p-6 bg-surface border-t border-border-theme">
                <h3 className="text-lg font-serif font-bold text-foreground mb-4">
                  {post.title}
                </h3>
              </div> */}
            </motion.div>
          ))}
        </div>

        {/* Compliance Note */}
        <div className="mt-20 bg-surface/50 p-8 rounded-3xl border border-border-theme flex flex-col md:flex-row items-center gap-6">
          <div className="bg-gold/10 p-4 rounded-2xl">
            <Info className="w-8 h-8 text-gold" />
          </div>
          <div className="flex-grow text-center md:text-left">
            <h4 className="text-lg font-serif font-bold text-foreground mb-2">
              Nota Informativa
            </h4>
            <p className="text-sm text-foreground/60 leading-relaxed">
              Estes vídeos contêm informações gerais e educativas sobre o
              Direito Previdenciário. A legislação muda frequentemente e cada
              caso possui particularidades únicas. A consulta com um advogado
              especialista é a única forma de garantir a análise correta do seu
              direito.
            </p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gold/5 p-10 rounded-[3rem] border border-gold/10 inline-block max-w-2xl">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
              Identificou sua situação em algum vídeo?
            </h3>
            <p className="text-foreground/70 mb-8">
              Não deixe para depois. Uma análise técnica pode garantir que você
              não perca tempo nem dinheiro no seu pedido de benefício.
            </p>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gold text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-gold-dark transition-all shadow-2xl shadow-gold/20"
            >
              <MessageCircle className="w-6 h-6" />
              Conversar com a Dra. Sara
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramFeed;
