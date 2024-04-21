# Chatbot com OpenAI

Este chatbot é um chatbot básico que usa a API do OpenAI para responder às perguntas do usuário. Para se comunicar com a API do OpenAI, ele utiliza a biblioteca `@azure/openai`.

## Desenvolvimento do Código

Para desenvolver o código, inicialmente instalamos as dependências `dotenv` e `@azure/openai` no diretório do projeto. Em seguida, definimos informações sensíveis, como credenciais de API, no arquivo `.env`. Foi utilizado a dependência `dotenv` para proteger essas informações sensíveis e o objeto `process` para acessá-las durante a execução do código.

Para a interação com o usuário, utilizamos o módulo `readline` do Node.js para criar uma interface dentro do terminal. Implementamos duas funções principais:

1. **getMessageFromAPI(prompt):**
   - Esta função envia um prompt para a API do OpenAI usando `getCompletions` e retorna a resposta da API ou uma mensagem de erro caso ocorra algum problema na conexão.

2. **askQuestion():**
   - Esta função cria um loop interativo que solicita ao usuário que faça perguntas ao chatbot. Após receber a pergunta do usuário, chama a função `getMessageFromAPI()` para obter a resposta da API e exibe a resposta no console. O loop continua até que o usuário digite "sair".

## Instruções de Instalação e Configuração

1. **Instalação de Dependências:**
   - Antes de iniciar, instale as seguintes dependências no diretório do projeto:

     ```bash
     npm install dotenv --save        # Para utilizar o dotenv
     npm install @azure/openai --save   # Para utilizar o azure openAI
     ```

2. **Configuração do Arquivo .env:**
   - Proteja informações sensíveis no código, como credenciais de API, adicionando-as ao arquivo `.env` no seguinte formato:

     ```
     END_POINT=sua-url-do-endpoint
     API_KEY=sua-chave-de-api
     DEPLOYMENT_NAME=nome-do-seu-projeto-no-openai
     ```

   Substitua `sua-url-do-endpoint`, `sua-chave-de-api` e `nome-do-seu-projeto-no-openai` pelos valores fornecidos pela plataforma OpenAI.

3. **Ignorar Arquivos Sensíveis no Git:**
   - Adicione o arquivo `.env` ao `.gitignore` para garantir que não seja enviado ao repositório Git.

## Referências
- [Documentação oficial do SDK Azure para JavaScript - OpenAI](https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/openai/openai/README.md)
- [Documentação da API do Azure para JavaScript - @azure/openai](https://learn.microsoft.com/pt-br/javascript/api/%40azure/openai/?view=azure-node-preview)
- [Pacote dotenv no npm](https://www.npmjs.com/package/dotenv) - Para proteger informações sensíveis no código.
- [Módulo readline do Node.js](https://nodejs.org/api/readline.html) - Para criar uma interface de linha de comando interativa no terminal.
