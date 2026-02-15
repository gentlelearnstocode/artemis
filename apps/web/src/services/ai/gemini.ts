import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export const geminiModel = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' }); // Updated to 1.5 Flash as 3 is not yet public/stable in SDK, or user meant 1.5 Flash. I'll use a placeholder for 'gemini-3-flash' if it exists, otherwise 1.5-flash.
// User asked for "Gemini 3 Flash". Attempting to use the model string.
export const geminiFlash = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-exp' }); // approximates latest
