import { openai } from '@ai-sdk/openai';
import { generateText, streamText } from 'ai';
import { NextResponse } from 'next/server';

export const maxDuration = 30;

export async function POST(req: Request) {
     const { text } = await req.json();

     console.log(text)

     const result = await generateText({
          model: openai('gpt-3.5-turbo'),
          system: "Você é um assistente de viagem que ajuda viajantes a planejar suas viagens.",
          prompt: text,
     });

     return NextResponse.json({
          message: result
     });
}