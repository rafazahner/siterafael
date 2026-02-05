
import { GoogleGenAI, Type } from "@google/genai";
import { COMPANY_INFO } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function generateBusinessDescription() {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Baseado no nome da empresa "${COMPANY_INFO.name}" e no foco principal em "Criação de Automação para Empresas", gere uma missão profissional impactante e três serviços específicos de automação (ex: automação de CRM, bots de atendimento, integração de sistemas). Todo o conteúdo deve estar em Português do Brasil. Retorne apenas o JSON.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            mission: { type: Type.STRING },
            services: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  description: { type: Type.STRING }
                },
                required: ["title", "description"]
              }
            }
          },
          required: ["mission", "services"]
        }
      }
    });
    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini Error:", error);
    return null;
  }
}

export async function askBusinessAssistant(question: string) {
  const context = `
    Nome da Empresa: ${COMPANY_INFO.name}
    Especialidade: Criação de Automação Inteligente para Empresas
    CNPJ: ${COMPANY_INFO.cnpj}
    Email: ${COMPANY_INFO.email}
    Telefone: ${COMPANY_INFO.phone}
    Você é um assistente especialista em automação. Responda em Português do Brasil de forma prestativa, técnica mas acessível. 
    Seu objetivo é explicar como a automação pode economizar tempo e dinheiro para o cliente.
  `;
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: context + "\n\nPergunta do Usuário: " + question,
    });
    return response.text;
  } catch (error) {
    return "Desculpe, estou com dificuldades técnicas agora. Por favor, tente os canais de contato diretos.";
  }
}
