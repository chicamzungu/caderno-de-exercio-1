
import { GoogleGenAI } from "@google/genai";
import { SCHOOL_INFO, PROGRAMS_DATA } from "../constants";

// Fix: Always use process.env.API_KEY directly when initializing the GoogleGenAI client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
Você é o Assistente Virtual da Escola Privada ${SCHOOL_INFO.name} em Morrumbala, Moçambique. 
Sua missão é ajudar pais, alunos e interessados com informações sobre a escola.

Informações Relevantes:
- Nome: ${SCHOOL_INFO.name}
- Endereço: ${SCHOOL_INFO.address}
- Contactos: ${SCHOOL_INFO.phone}, ${SCHOOL_INFO.email}
- Missão: ${SCHOOL_INFO.mission}
- Programas oferecidos: ${PROGRAMS_DATA.map(p => p.title).join(", ")}
- Temos uma Biblioteca Virtual com livros de Matemática, Ciências, Português e História.

Regras:
1. Seja sempre educado, profissional e acolhedor.
2. Responda em Português de Moçambique/Portugal.
3. Se não souber a resposta, sugira que entrem em contacto direto pelos meios oficiais fornecidos.
4. Mantenha as respostas concisas e úteis.
`;

export async function getSchoolAssistantResponse(userInput: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userInput,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Desculpe, ocorreu um erro ao processar sua pergunta. Por favor, tente novamente ou contacte a secretaria diretamente.";
  }
}
