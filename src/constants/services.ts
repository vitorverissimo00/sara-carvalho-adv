import { Clock, FileText, Users, ShieldCheck, Heart, Scale } from 'lucide-react';

export const SERVICES_DATA = [
  {
    slug: 'aposentadoria-por-idade',
    title: 'Aposentadoria por Idade',
    icon: Clock,
    desc: 'Para quem atingiu a idade mínima e o tempo de contribuição necessário.',
    details: 'Analisamos todo o seu CNIS, períodos de trabalho rural, especial ou militar para garantir que você se aposente com o melhor valor possível.',
    fullContent: `
      A aposentadoria por idade é um dos benefícios mais comuns do INSS, mas requer uma análise cuidadosa para garantir o melhor valor mensal.

      ### Requisitos Atuais
      Após a Reforma da Previdência de 2019, as regras mudaram. Atualmente, os requisitos gerais são:
      - **Mulheres:** 62 anos de idade + 15 anos de contribuição.
      - **Homens:** 65 anos de idade + 15 anos de contribuição (para quem já contribuía antes da reforma) ou 20 anos (para novos segurados).

      ### Como podemos ajudar?
      Nossa atuação foca em maximizar o valor do seu benefício através de:
      1. **Análise do CNIS:** Verificamos se todos os seus vínculos e contribuições estão registrados corretamente.
      2. **Cálculo de Tempo:** Incluímos períodos que muitas vezes são esquecidos, como trabalho rural, serviço militar ou tempo em atividade especial.
      3. **Simulação de Regras:** Comparamos as regras de transição para ver qual é a mais vantajosa para o seu caso específico.
      4. **Acompanhamento Completo:** Desde o pedido administrativo até eventuais recursos ou ações judiciais.

      Não deixe para a última hora. Um planejamento bem feito pode significar uma diferença considerável no valor que você receberá pelo resto da vida.
    `
  },
  {
    slug: 'planejamento-previdenciario',
    title: 'Planejamento Previdenciário',
    icon: FileText,
    desc: 'O investimento mais inteligente para o seu futuro.',
    details: 'Um estudo completo que projeta suas futuras contribuições e define exatamente quando e como se aposentar para maximizar seu benefício.',
    fullContent: `
      O planejamento previdenciário é um serviço preventivo que visa organizar a vida contributiva do segurado para que ele obtenha o melhor benefício possível.

      ### Por que fazer um planejamento?
      Muitas pessoas se aposentam e só depois descobrem que, se tivessem esperado alguns meses ou contribuído de forma diferente, o valor do benefício seria muito maior. O planejamento evita esse arrependimento.

      ### O que está incluso no estudo:
      - **Análise de Tempo de Contribuição:** Levantamento detalhado de todo o histórico laboral.
      - **Cálculo do Valor do Benefício:** Projeções baseadas nas diferentes regras de transição.
      - **Indicação da Melhor Data:** Descobrimos o momento exato em que o custo-benefício é maior para você.
      - **Regularização de Pendências:** Identificamos indicadores no CNIS que precisam de correção antes do pedido de aposentadoria.

      O planejamento é indicado para quem ainda falta alguns anos para se aposentar, mas quer ter a segurança de que está no caminho certo.
    `
  },
  {
    slug: 'bpc-loas',
    title: 'BPC / LOAS',
    icon: Heart,
    desc: 'Proteção social para quem mais precisa.',
    details: 'Auxílio para idosos acima de 65 anos ou pessoas com deficiência que não possuem meios de prover o próprio sustento.',
    fullContent: `
      O Benefício de Prestação Continuada (BPC), previsto na Lei Orgânica da Assistência Social (LOAS), garante um salário mínimo mensal a pessoas que não possuem meios de prover a própria manutenção.

      ### Quem tem direito?
      1. **Idosos:** Com 65 anos ou mais.
      2. **Pessoas com Deficiência:** De qualquer idade, que apresentem impedimentos de longo prazo de natureza física, mental, intelectual ou sensorial.

      ### Requisitos Fundamentais:
      - **Renda Familiar:** A renda por pessoa da família deve ser, em regra, inferior a 1/4 do salário mínimo.
      - **CadÚnico:** É obrigatório estar inscrito e com os dados atualizados no Cadastro Único.
      - **Não é Aposentadoria:** O BPC não exige contribuição ao INSS, mas também não dá direito ao 13º salário e não gera pensão por morte.

      ### Nossa Atuação:
      Auxiliamos em todo o processo, desde a organização da documentação socioeconômica até o acompanhamento de perícias médicas e sociais, combatendo negativas indevidas do INSS.
    `
  },
  {
    slug: 'beneficios-por-incapacidade',
    title: 'Benefícios por Incapacidade',
    icon: ShieldCheck,
    desc: 'Segurança em momentos de dificuldade de saúde.',
    details: 'Auxílio-doença, aposentadoria por invalidez e auxílio-acidente. Atuamos desde o pedido administrativo até a perícia judicial.',
    fullContent: `
      Quando a saúde impede o trabalho, a previdência social deve garantir o sustento do trabalhador. Existem diferentes tipos de benefícios para cada situação.

      ### Principais Benefícios:
      - **Auxílio-Doença (Auxílio por Incapacidade Temporária):** Para quem está temporariamente impossibilitado de trabalhar por mais de 15 dias.
      - **Aposentadoria por Invalidez (Aposentadoria por Incapacidade Permanente):** Para quem está total e permanentemente incapaz para o trabalho e não pode ser reabilitado.
      - **Auxílio-Acidente:** Uma indenização mensal para quem ficou com sequelas que reduzem a capacidade de trabalho após um acidente.

      ### O desafio da Perícia Médica
      Muitos benefícios são negados injustamente na perícia médica do INSS. Nossa equipe ajuda a organizar os laudos, exames e atestados para que a realidade da sua saúde seja corretamente avaliada pelo perito.

      Se o seu benefício foi cortado ou negado, existem caminhos legais para reverter essa situação e garantir seus direitos.
    `
  },
  {
    slug: 'pensao-por-morte',
    title: 'Pensão por Morte',
    icon: Users,
    desc: 'Amparo aos dependentes em momentos difíceis.',
    details: 'Garantimos que os dependentes recebam o benefício de forma justa e ágil, analisando a qualidade de segurado e dependência econômica.',
    fullContent: `
      A pensão por morte é o benefício pago aos dependentes do segurado que faleceu, visando substituir a renda que ele provia à família.

      ### Quem são os dependentes?
      - **Classe 1:** Cônjuge, companheiro(a) e filhos menores de 21 anos ou inválidos (dependência presumida).
      - **Classe 2:** Pais (precisam comprovar dependência econômica).
      - **Classe 3:** Irmãos menores de 21 anos ou inválidos (precisam comprovar dependência econômica).

      ### Regras de Duração e Valor
      Após a reforma de 2019, o cálculo do valor mudou significativamente, assim como o tempo de duração da pensão para viúvos(as), que agora depende da idade do sobrevivente e do tempo de união.

      ### Como ajudamos:
      - Comprovação de união estável (mesmo sem papel passado).
      - Defesa da qualidade de segurado do falecido.
      - Agilização do processo para que a família não fique desamparada financeiramente.
    `
  },
  {
    slug: 'revisao-de-beneficios',
    title: 'Revisão de Benefícios',
    icon: Scale,
    desc: 'Verificação de erros no cálculo do seu benefício.',
    details: 'Se você já é aposentado, podemos analisar se o INSS deixou de considerar algum período ou regra que aumentaria seu salário mensal.',
    fullContent: `
      Muitos aposentados recebem menos do que deveriam porque o INSS cometeu algum erro no momento de calcular o benefício.

      ### Tipos de Revisão:
      - **Revisão da Vida Toda:** Inclusão de salários anteriores a 1994 no cálculo (dependendo do entendimento judicial atual).
      - **Revisão por Erro de Fato:** Quando o INSS esquece de contar um período especial, rural ou uma sentença trabalhista.
      - **Revisão de Teses Jurídicas:** Aplicação de novos entendimentos dos tribunais superiores que favorecem o segurado.

      ### Prazo Decadencial
      Atenção: Na maioria dos casos, você tem apenas **10 anos** após o primeiro recebimento para pedir uma revisão. Após esse prazo, o direito "caduca".

      Realizamos um cálculo prévio para verificar se a revisão realmente aumentará o seu benefício, evitando aventuras jurídicas desnecessárias.
    `
  }
];
