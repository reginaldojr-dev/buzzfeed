# BuzzFeed Quiz Clone

Este é um projeto de quiz inspirado no estilo BuzzFeed, realizado para o bootcamp Decola Tech 2025 da DIO + Avanade, desenvolvido em **Angular**. O objetivo é criar um jogo interativo onde os usuários respondem a perguntas e recebem um resultado baseado em suas respostas.

## 🎯 Funcionalidades
- Exibição de perguntas dinâmicas a partir de um arquivo JSON.
- Sistema de pontuação baseado nas respostas do usuário.
- Interface responsiva e estilizada.
- Exibição do resultado final após a última pergunta.

## 🛠 Tecnologias Utilizadas
- **Angular** (versão 19.2.5)
- **TypeScript**
- **HTML5 e CSS3**
- **JSON** (para armazenar perguntas e respostas)

## 📁 Estrutura do Projeto
```
projeto-buzzfeed/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── quizz/
│   │   │   │   ├── quizz.component.ts
│   │   │   │   ├── quizz.component.html
│   │   │   │   ├── quizz.component.css
│   ├── assets/
│   │   ├── img/
│   │   │   ├── logo-buzz.png
│   │   ├── data/
│   │   │   ├── quizz_questions.json
└── README.md
```

## 🚀 Como Executar o Projeto
1. **Clone o repositório:**
   ```sh
   git clone git@github.com:reginaldojr-dev/buzzfeed.git
   ```
2. **Acesse a pasta do projeto:**
   ```sh
   cd projeto-buzzfeed
   ```
3. **Instale as dependências:**
   ```sh
   npm install
   ```
4. **Inicie o servidor Angular:**
   ```sh
   ng serve
   ```
5. **Acesse no navegador:**
   ```
   http://localhost:4200
   ```

## 🔄 Como Personalizar o Quiz
### 1️⃣ Editando as perguntas
O arquivo **`quizz_questions.json`** dentro da pasta `assets/data/` contém as perguntas e respostas. Para modificar, basta alterar os valores existentes:
```json
{
  "title": "Você seria um herói ou vilão?",
  "questions": [
    {
      "question": "Qual superpoder você gostaria de ter?",
      "options": [
        { "name": "Voar", "alias": "A" },
        { "name": "Explodir coisas", "alias": "B" }
      ]
    }
  ]
}
```

## 🎨 Personalização do Estilo
O estilo do quiz pode ser alterado no arquivo `quizz.component.css`. Aqui estão algumas dicas:
- **Mudar a cor de fundo:**
  ```css
  body {
    background-color: #1a0d41; /* Alterar para outra cor */
  }
  ```
- **Ajustar o tamanho da logo:**
  ```css
  .quizz_logo img {
    width: 250px;
  }
  ```

## 📌 Melhorias Futuras
- 🔹 Adicionar animações nas transições de perguntas.
- 🔹 Implementar um sistema de pontuação mais avançado.
- 🔹 Criar uma API para armazenar resultados dos usuários.

---

### 📢 Autor
Projeto desenvolvido por **Reginaldo Goulart**. Se tiver dúvidas ou sugestões, entre em contato! 😊

