import { GoogleGenerativeAI } from '@google/generative-ai';
import { AI_CONFIG } from './constants';

const genAI = new GoogleGenerativeAI(AI_CONFIG.API_KEY);

export async function searchMedicine(query: string): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });
    
    const prompt = `Provide detailed information about the medicine "${query}" in the following format:

Name: [Medicine Name]
Type: [Medicine Type]
Category: [Medicine Category]
Form: [Form of Medicine]
Strength: [Medicine Strength]
Manufacturer: [Common Manufacturer]

Uses:
- [Use 1]
- [Use 2]

Dosage:
Adults: [Adult Dosage]
Children: [Children Dosage]
Elderly: [Elderly Dosage]

Warnings:
- [Warning 1]
- [Warning 2]`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    if (!text) {
      throw new Error('No information found for this medicine');
    }
    
    return text;
  } catch (error) {
    console.error('Medicine search error:', error);
    throw new Error('Failed to search for medicine information');
  }
}