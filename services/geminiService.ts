import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { ChatMessage } from "../types";

// Initialize the API client
// Note: process.env.API_KEY is assumed to be available in the environment
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// System instruction to give the bot a persona
const SYSTEM_INSTRUCTION = `
Você é o assistente virtual da "Infinity Tech". 
A Infinity Tech é uma empresa de tecnologia especializada em:
1. Desenvolvimento Web (Sites, Apps, Sistemas).
2. Montagem e Manutenção de Computadores (Hardware).
3. Soluções de Backup e Nuvem.
4. Suporte Técnico Geral.

Seu tom deve ser profissional, tecnológico e prestativo.
Responda a dúvidas sobre tecnologia e sobre os serviços da empresa.
Se o usuário quiser um orçamento, peça para ele preencher o formulário na seção de contato do site.
Mantenha as respostas concisas e em Português do Brasil.
`;

let chatSession: Chat | null = null;

export const getChatResponse = async (userMessage: string): Promise<string> => {
  try {
    if (!chatSession) {
      chatSession = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
      });
    }

    const response: GenerateContentResponse = await chatSession.sendMessage({ 
      message: userMessage 
    });
    
    return response.text || "Desculpe, não consegui processar sua resposta no momento.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Estou enfrentando problemas técnicos momentâneos. Por favor, tente novamente mais tarde.";
  }
};
