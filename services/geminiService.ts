
import { GoogleGenAI, Type } from "@google/genai";

/**
 * Performs a mock SEO audit using Gemini.
 * Follows @google/genai best practices for initialization and response handling.
 */
export const generateSEOAudit = async (url: string, businessGoal: string) => {
  // Ensure the API Key is present in the environment
  if (!process.env.API_KEY) {
    throw new Error("API Key is missing from environment variables");
  }

  // Initialize the GenAI client right before the call to ensure the latest configuration
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `Act as a world-class SEO Director. Perform a mock SEO audit and strategic roadmap for the website: ${url}. 
  The business goal is: ${businessGoal}.
  Provide actionable, high-level strategic insights.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            score: { type: Type.NUMBER, description: "A simulated SEO score out of 100" },
            recommendations: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Top 5 critical SEO recommendations"
            },
            competitiveAnalysis: { type: Type.STRING, description: "A brief competitive landscape overview" },
            roadmap: { type: Type.STRING, description: "A 3-month high-level SEO roadmap" }
          },
          required: ["score", "recommendations", "competitiveAnalysis", "roadmap"]
        }
      }
    });

    // Directly access the .text property from GenerateContentResponse
    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text);
  } catch (error) {
    console.error("Gemini Audit Error:", error);
    throw error;
  }
};
