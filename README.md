# **Folha de Rosto**
**Nome do Projeto:** Loja Militar  
**Desenvolvedor ou Empresa Responsável:** Tiago Palmeira  
**Local:** Araçás, Bahia  
**Ano:** 2024  

---

---

# **Sumário**
1. [Introdução](#1-introdução)
2. [Arquitetura do Site](#2-arquitetura-do-site)
3. [Design e Usabilidade](#3-design-e-usabilidade)
4. [Requisitos Funcionais](#4-requisitos-funcionais)
5. [Requisitos Não Funcionais](#5-requisitos-não-funcionais)
6. [Tecnologias Utilizadas](#6-tecnologias-utilizadas)
7. [Gerenciamento de Conteúdo](#7-gerenciamento-de-conteúdo)
8. [Testes](#8-testes)
9. [Manutenção e Suporte](#9-manutenção-e-suporte)
10. [Cronograma de Entrega](#10-cronograma-de-entrega)
11. [Custos e Orçamento](#11-custos-e-orçamento)

---

## **1. Introdução**
### 1.1. Nome do Site
**Loja Militar**

### 1.2. Objetivo do Site
O objetivo do site "Loja Militar" é oferecer uma plataforma online dedicada à venda de equipamentos e produtos relacionados ao universo militar e de sobrevivência. O site visa facilitar o acesso a itens essenciais para aventureiros, praticantes de atividades ao ar livre, e profissionais da área de segurança.

### 1.3. Público-Alvo
O público-alvo do "Loja Militar" inclui:
- Aventureiros e praticantes de atividades ao ar livre, como camping e trekking.
- Profissionais de segurança e forças armadas.
- Ciclistas e entusiastas de esportes radicais.
- Pessoas que buscam se preparar para situações de emergência ou sobrevivência.

### 1.4. Escopo do Projeto
O escopo do projeto inclui as seguintes funcionalidades principais:
- **Catálogo de Produtos:** Listagem de produtos com imagens, descrições, preços e opções de compra.
- **Slideshow de Imagens:** Apresentação visual dos produtos com recursos interativos.
- **Sistema de Carrinho:** Permitir aos usuários adicionar produtos ao carrinho e proceder com a compra.
- **Promoções e Ofertas:** Seção dedicada a produtos em promoção e descontos especiais.
- **Informações sobre Produtos:** Descrições detalhadas e listas de itens incluídos em kits de sobrevivência.

---

## **2. Arquitetura do Site**
### 2.1. Estrutura de Navegação
A estrutura de navegação do site "Loja Militar" é organizada para facilitar a experiência do usuário:
- Home
- Sobre
- Produtos
  - Equipamentos de Sobrevivência
  - Roupas Táticas
  - Acessórios
- Promoções
- Blog
- Contato

### 2.2. Descrição das Páginas Principais
- **Home:** A página inicial apresenta uma visão geral da loja, destacando as principais categorias de produtos, promoções em destaque e um slideshow de produtos. A página também pode incluir informações sobre a missão da loja e links para conteúdos importantes.
- **Sobre:** Esta página fornece informações sobre a história da "Loja Militar", sua missão e valores. Inclui detalhes sobre a equipe e o compromisso com a qualidade dos produtos oferecidos.
- **Produtos:** A página de produtos apresenta todas as categorias disponíveis, permitindo que os usuários filtrem e pesquisem por itens específicos. Cada produto possui uma página dedicada com imagens, descrições, preços e opções de compra.
- **Contato:** A página de contato oferece informações sobre como os clientes podem entrar em contato com a loja, incluindo um formulário de contato, e-mail e telefone. Também pode incluir uma seção de perguntas frequentes (FAQ).
- **Blog/Notícias:** Esta seção é destinada a publicações sobre dicas de sobrevivência, novidades no mercado de equipamentos militares, promoções especiais e eventos relacionados à loja. O blog serve como uma ferramenta de engajamento e informação para os clientes.

---

## **3. Design e Usabilidade**
### 3.1. Design Gráfico
**Paleta de Cores:**  
A paleta de cores da "Loja Militar" é composta por tons que transmitem segurança e aventura:
- Cinza: `#363636`
- Preto: `#000000`
- Branco: `#FFFFFF`

**Tipografia:**  
Basic, fonte destinada à simplicidade, fácil leitura e compreensão.

**Logotipo e Ícones:**  
O logotipo da "Loja Militar" foi desenvolvido para refletir a essência da marca, com elementos que remetem a equipamentos militares. Ícones personalizados são utilizados para facilitar a navegação e a identificação de categorias de produtos.

### 3.2. Wireframes e Figma
Os wireframes foram criados para representar visualmente a estrutura das principais páginas do site. Eles incluem a disposição de elementos como cabeçalho, menu de navegação, seções de produtos e rodapé.

Para acessar o design do projeto no Figma, clique no link abaixo:  
[Link do Projeto no Figma](https://www.figma.com/design/ZPlpHJwJCGKbVdP9OcwpG3/Untitled?node-id=0-1&t=cQyC4zRUSiwWaHyj-1)

### 3.3. Responsividade
O design da "Loja Militar" é responsivo, garantindo que o site funcione em diferentes dispositivos, com adaptação através de media queries no CSS.

### 3.4. Acessibilidade
Práticas de acessibilidade foram implementadas para garantir usabilidade para pessoas com deficiências, incluindo:
- Navegação por teclado para facilitar o acesso a todos os elementos.
- Contraste adequado entre texto e fundo para melhorar a legibilidade.
- Elementos interativos (botões, links) com foco visível ao serem selecionados.

---

## **4. Requisitos Funcionais**
### 4.1. Funcionalidades Principais
- **Cadastro de Usuários:** Os usuários podem criar uma conta no site, fornecendo informações como nome, e-mail e senha. Possibilidade de recuperação de senha em caso de esquecimento.
- **Catálogo de Produtos:** Exibição de produtos com detalhes como nome, descrição, preço, e imagens. Filtros e opções de busca para facilitar a localização de produtos.
- **Carrinho de Compras:** Adição e remoção de produtos no carrinho. Cálculo automático do total da compra, incluindo impostos e frete.
- **Finalização de Compra:** Processo de checkout que coleta informações de pagamento e envio. Confirmação de pedido e geração de recibo.
- **Área do Usuário:** Os usuários podem visualizar e editar suas informações de perfil. Histórico de compras e rastreamento de pedidos.
- **Promoções e Descontos:** Aplicação de códigos de desconto durante a finalização da compra. Exibição de promoções em destaque na página inicial.
- **Blog/Notícias:** Seção dedicada a artigos e notícias relacionadas a produtos e aventuras.

### 4.2. Regras de Negócio
- **Validação de Dados:** Todos os campos obrigatórios no cadastro de usuários devem ser preenchidos. O formato do e-mail deve ser validado para garantir a conformidade.
- **Cálculo de Frete:** O frete será calculado com base no endereço de entrega e no peso total dos produtos no carrinho.
- **Promoções:** Os códigos de desconto devem ser válidos e não podem ser usados em combinação com outras promoções, a menos que especificado. As promoções têm um prazo de validade e devem ser desativadas automaticamente após a expiração.
- **Limitação de Quantidade:** Os usuários não podem adicionar mais de 5 unidades de um mesmo produto ao carrinho, exceto em casos de produtos em promoção.
- **Confirmação de Pagamento:** O pedido só será considerado completo após a confirmação do pagamento.

---

## **5. Requisitos Não Funcionais**
### 5.1. Desempenho
- **Tempo de Resposta:** Máximo de 2 segundos para operações como navegação, busca de produtos e adição ao carrinho.
- **Carregamento de Páginas:** Menos de 3 segundos em conexões de internet comuns (banda larga). Imagens e recursos devem ser otimizados para garantir um carregamento rápido.

### 5.2. Segurança
- **Criptografia:** Proteção de dados sensíveis com SSL/TLS.
- **Autenticação:** Implementação de autenticação de dois fatores (2FA) para aumentar a segurança nas contas de usuários.
- **Proteção contra Ataques:** Medidas contra injeção SQL e Cross-Site Scripting (XSS).

### 5.3. Escalabilidade
- **Infraestrutura:** Arquitetura para adição de recursos conforme a demanda.
- **Cachê:** Técnicas de cache para melhorar a performance.
- **Microserviços:** Consideração para dividir a aplicação em microserviços, facilitando a manutenção e escalabilidade.

### 5.4. Compatibilidade
- **Navegadores Suportados:** Google Chrome, Mozilla Firefox, Safari, Microsoft Edge.
- **Dispositivos Suportados:** Compatível com desktops, tablets e smartphones.
- **Sistema Operacional:** Compatibilidade com os principais sistemas operacionais: Windows, macOS, Linux, iOS e Android.

---

## **6. Tecnologias Utilizadas**
### 6.1. Frontend
- **Linguagens:** HTML, CSS, JavaScript.
- **Frameworks:** React, Bootstrap.

### 6.2. Backend
- **Linguagens/Frameworks:** Node.js, Express.js.
- **Banco de Dados:** MySQL.

### 6.3. Hospedagem
- **Frontend:** Vercel.
- **Backend:** Heroku ou DigitalOcean.

### 6.4. Integrações
- **APIs:** Stripe, Firebase, Google Maps API.

---

## **7. Gerenciamento de Conteúdo**
### 7.1. CMS Utilizado
Opção por um CMS headless como Strapi ou Contentful para flexível gerenciamento de conteúdo.

### 7.2. Fluxo de Trabalho
- **Processo de Criação:** Criação e formatação de novos conteúdos no CMS.
- **Edição:** Atualizações de produtos e informações.
- **Publicação:** Conteúdos aprovados são publicados automaticamente.

### 7.3. Permissões de Usuários
- **Admin:** Acesso total ao CMS.
- **Editor:** Edição e publicação de conteúdos.
- **Colaborador:** Criação de rascunhos, aprovação necessária para publicação.

---

## **8. Testes**
### 8.1. Casos de Teste
- **Funcionalidades:** Testes realizados em todas as funcionalidades do site, como navegação, formulários e interações do usuário.
- **Compatibilidade:** Verificação da compatibilidade do site em diferentes navegadores e dispositivos, assegurando que a experiência do usuário seja consistente.

### 8.2. Ferramentas de Teste
- **Selenium:** Para automação de testes funcionais no frontend.
- **Lighthouse:** Para avaliar o desempenho, acessibilidade e SEO do site.

### 8.3. Resultados dos Testes
Os testes realizados mostraram que todas as funcionalidades estão operando conforme esperado. Algumas correções foram necessárias, como ajustes de layout para dispositivos móveis e otimização de imagens para melhorar o tempo de carregamento.

---

## **9. Manutenção e Suporte**
### 9.1. Manutenção Periódica
- **Atualizações de Software:** Realizar atualizações regulares das dependências do frontend e do backend para garantir segurança e desempenho.
- **Backup de Dados:** Implementar um sistema de backup diário dos dados para evitar perdas.
- **Monitoramento de Desempenho:** Analisar mensalmente o desempenho do site utilizando ferramentas como Google Analytics e Lighthouse, para identificar áreas de melhoria.

### 9.2. Suporte Técnico
- **Equipe de Suporte:** Interna, composta por desenvolvedores e especialistas em TI.
- **Canal de Suporte:** E-mail e chat online no site (ex.: suporte@lojamiltar.com).

---

## **10. Cronograma de Entrega**
### 10.1. Marcos do Projeto
- **Fase de Design:** 01/09/2024 - 02/09/2024
- **Fase de Desenvolvimento:** 04/09/2024 - 09/09/2024
- **Fase de Testes:** 10/09/2024 - 12/10/2024
- **Entrega Final:** 13/10/2024

---

## **11. Custos e Orçamento**
### 11.1. Estimativa de Custos mensais
- **Domínio:** R$34,90
- **Outros serviços (ex.: CDN, backup):** R$179,90

### 11.2. Desenvolvimento
- **Equipe de desenvolvimento:** R$5.000,00 mensais.

### 11.3. Manutenção e Suporte
- **Custos Contínuos:** Sem custos adicionais além do pagamento da equipe de desenvolvimento.

---

**Nota:** Esta é uma **versão base** da documentação, e o projeto ainda passará por revisões e melhorias até a sua conclusão final.
