require('dotenv').config();
const readline = require('readline');
const { OpenAIClient, AzureKeyCredential } = require('@azure/openai');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const client = new OpenAIClient(process.env.END_POINT, new AzureKeyCredential(process.env.API_KEY));
  
async function getMessageFromAPI(message) {
  try {
        const result = await client.getCompletions(process.env.DEPLOYMENT_NAME, message, {
            maxTokens: 50,
            temperature: 0,
        });
        return result.choices[0].text;
    } catch (error) {
        console.error(error.message);
        return 'Desculpe, houve ao conectar com a API. Por favor, tente novamente.';
    }
}

function askQuestion() {
    rl.question('Faça uma pergunta ao bot ou digite "sair" para finalizar a conversa: ', async (pergunta) => {
      if (pergunta.toLowerCase() === 'sair') {
        console.log('Até mais!')
        rl.close();
        return;
      }
      const resposta = await getMessageFromAPI([pergunta]);
      console.log('Bot:'+ resposta);
      askQuestion(); // Faça outra pergunta
    });
}

console.log('Bem vindo ao chatBot');
askQuestion();