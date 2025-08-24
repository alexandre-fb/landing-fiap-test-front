## 🚀 Landing Page - Teste Técnico Front End

Este projeto foi desenvolvido como parte de um **teste técnico** para a vaga de **Desenvolvedor Front End**.  
O objetivo principal foi criar uma **Landing Page** utilizando boas práticas de desenvolvimento moderno, organização de código e animações para enriquecer a experiência do usuário.

🔗 **Versão em Produção**: [landing-fiap-test-front.vercel.app](https://landing-fiap-test-front.vercel.app)

⚙️ **Para rodar localmente**, siga as instruções da seção **Como Rodar Localmente**.


---

## 🛠️ Tecnologias Utilizadas

- **[Next.js](https://nextjs.org/)** `15.5.0` 
- **[React](https://react.dev/)** `19.1.0` + **React DOM** `19.1.0`.  
- **[TypeScript](https://www.typescriptlang.org/)** `^5` 
- **[Sass](https://sass-lang.com/)** `^1.90.0` → Estilização com variáveis globais e melhor organização de estilos.  
- **[GSAP](https://greensock.com/gsap/)** `^3.13.0` + **@gsap/react** `^2.1.2` → Biblioteca de animações para criar efeitos dinâmicos.  
- **[Vercel](https://vercel.com/)** → Plataforma de hospedagem e deploy contínuo para aplicações Next.js.


---

## 🏁 Como Rodar Localmente

> ⚡ **Node.js**: Versão mínima recomendada `20.x` 

Clone o repositório e instale as dependências:

```bash
npm install
# ou
yarn install

```

Depois, inicie o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para visualizar o projeto.

---

## 📋 Preparação para o Desenvolvimento

Antes de iniciar a implementação, organizei o ambiente e dividi a tarefa em etapas menores, baseadas na documentação do teste:

- [ X ] **Configuração do projeto**  
  - [ X ] Criar o projeto com `create-next-app` usando **Next.js** e **TypeScript**.  
  - [ X ] Adicionar suporte a **SCSS/Sass**.  
  - [ X ] Configurar variáveis globais de estilo.  

- [ X ] **Instalação de dependências**  
  - [ X ] Instalar [GSAP](https://greensock.com/gsap/) + `@gsap/react` para animações.  

- [ ] **Desenvolvimento das seções**  
  _Obs.: Para cada seção, testar responsividade e compatibilidade entre os principais navegadores._  
  - [ X ] Navbar com indicação de progresso de navegação da página  
  - [ X ] Header  
  - [ X ] Intro  
  - [ ] Cursos  
  - [ ] FAQ  
  - [ ] Bônus: transição com efeito de água
 

📌 Esse roadmap serviu como guia de desenvolvimento e também como checklist para acompanhar o progresso.  


---


## ⚡ Principais Desafios Encontrados

### Adaptação do Vue.js para o React

Um dos principais desafios foi a mudança de contexto entre frameworks.  
Nos últimos anos, minha experiência foi focada em **Vue.js**, então, ao desenvolver este projeto em **React**, precisei me adaptar e relembrar conceitos específicos da biblioteca.

Apesar do desafio inicial, essa adaptação foi uma oportunidade valiosa para reforçar meus conhecimentos em React.


### Ajuste do cálculo do REM

Ao analisar outras páginas da FIAP, percebi que elas utilizam o rem calculado com base na largura da tela. Para manter essa consistência, organizei o cálculo da seguinte forma:

```scss
html {
  font-size: calc(0.520833vw);
  text-size-adjust: none;

  @media (max-width: 1024px) {
    font-size: calc(0.976562vw);
  }

  @media (max-width: 599px) {
    font-size: calc(2.41546vw);
  }
}
```


Para facilitar o entendimento e a conversão dos valores do Figma (em px) para a aplicação, isso significa:

- Na tela 1920px, 1rem ≈ 10px
- Na tela 1024px, 1rem ≈ 10px
- Na tela 414px, 1rem ≈ 10px

Dessa forma, consigo trabalhar de forma consistente com os tamanhos definidos nos layouts de desktop e mobile, garantindo que a responsividade e a escala de elementos estejam corretas.

### Diferença de `font-weight` entre Figma e renderização real

Durante os testes de tipografia, percebi que os valores de `font-weight` definidos no Figma não correspondiam exatamente ao resultado no navegador.  
Por exemplo:  
- O `500` do Figma ficava mais pesado do que o esperado.  
- Para corrigir, precisei ajustar para um valor menor para chegar a um resultado visual equivalente.  

Esse ajuste fino foi importante para manter a fidelidade visual com o layout fornecido e garantir consistência entre design e implementação.  

### Limitação de acesso ao **Dev Mode** do Figma

Outro desafio foi a falta de acesso ao **Dev Mode** do Figma, o que impossibilitou inspecionar diretamente espaçamentos, medidas precisas e detalhes técnicos.  
Por conta disso:  
- Alguns valores de espaçamento e proporção tive que ajustar manualmente.  
- Em certos casos, fiz cálculos baseados em referências visuais ou em outras telas semelhantes.  

---

## ✅ Conclusão

Este teste técnico foi uma experiência bastante **desafiadora e enriquecedora**.  
Gostei muito de desenvolver a Landing Page, aplicar animações e explorar soluções para os diferentes pontos apresentados.  

Gostaria de ter tido mais tempo para realizar uma revisão mais aprofundada do código, mas devido à rotina de trabalho e compromissos pessoais e familiares, não consegui dedicar tanto tempo a essa etapa final.  

De toda forma, fico totalmente **à disposição para qualquer esclarecimento** sobre as decisões técnicas tomadas ou para discutir melhorias que poderiam ser implementadas no projeto.  
