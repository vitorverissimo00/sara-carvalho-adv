interface InstagramPost {
  id: string;
  url: string;
  category: string;
  title: string;
}

export const posts: InstagramPost[] = [
  {
    id: "1",
    url: "https://www.instagram.com/p/DTi670JD5MI/?img_index=1", // Placeholder
    category: "Salário",
    title: "O novo salário mínimo",
  },
  {
    id: "2",
    url: "https://www.instagram.com/p/DWFJAj5D_8q/?img_index=1", // Placeholder
    category: "Aposentadoria",
    title:
      "Posso adiantar minhas contribuições do INSS para me aposentar mais cedo?",
  },
  {
    id: "3",
    url: "https://www.instagram.com/p/DV9ap_ED0oK/?img_index=1", // Placeholder
    category: "Dicas Rápidas",
    title: "Perícia médica: o que você precisa saber",
  },
  {
    id: "4",
    url: "https://www.instagram.com/p/DT_PsiSD52i/?img_index=1", // Placeholder
    category: "Aposentadoria",
    title: "Novas regras da pensão por morte",
  },
  {
    id: "5",
    url: "https://www.instagram.com/p/DTi670JD5MI/?img_index=1", // Placeholder
    category: "Salário",
    title: "Revisão da Vida Toda: status atual",
  },
  {
    id: "6",
    url: "https://www.instagram.com/p/DKK79tBv3jp/?img_index=1", // Placeholder
    category: "Aposentadoria",
    title: "3 erros comuns ao pedir benefício",
  },
];
