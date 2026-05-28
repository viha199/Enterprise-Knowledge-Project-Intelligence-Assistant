import { google } from '@ai-sdk/google';
import { stepCountIs, streamText } from 'ai';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import {
    enterpriseKnowledgeTool,
    projectMentorTool,
    roadmapGeneratorTool
} from './tools';

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Check if API key exists
const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
const hasApiKey = !!apiKey;

// Store chat history
const chatHistory: Array<{ role: string, parts: string }> = [];

// API endpoint to check if API key exists
app.get('/api-key-exists', (req, res) => {
    res.json({ exists: hasApiKey });
});

// Streaming endpoint for chat responses
app.post('/api/chat', async (req, res) => {
    try {
        const { message } = req.body;

        if (!message) {
            return res.status(400).json({ error: 'Message is required' });
        }

        // Check if API key is configured
        if (!hasApiKey) {
            return res.status(400).json({
                error: 'API key not configured. Please add your GOOGLE_GENERATIVE_AI_API_KEY to the .env file and restart the server.'
            });
        }

        // Set streaming headers
        res.writeHead(200, {
            'Content-Type': 'text/plain',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Cache-Control'
        });

        // Add user message to history
        chatHistory.push({ role: 'user', parts: message });

        // Generate response using Gemini + Tools
        const result = await streamText({
            model: google('gemini-2.5-flash-lite'),

            system: `
You are an Enterprise Knowledge & Project Intelligence Assistant.

Your responsibilities:
- Answer enterprise workflow and SOP questions
- Recommend AI/ML/software projects
- Suggest datasets and technology stacks
- Generate project implementation roadmaps
- Help users with learning and skill development

Always use tools whenever required.
`,

            prompt: message,

            stopWhen: stepCountIs(5),

            tools: {
                enterpriseKnowledgeTool,
                projectMentorTool,
                roadmapGeneratorTool
            },

            onStepFinish: (step) => {
                console.log(step);
            }
        });

        // Stream response
        for await (const part of result.fullStream) {
            console.log(part);
            res.write(`data: ${JSON.stringify(part)}\n\n`);
        }

        const fullResponse = await result.text;

        // Save assistant response
        chatHistory.push({
            role: 'assistant',
            parts: fullResponse
        });

        res.end();

    } catch (error) {
        console.error('Error generating response:', error);

        const message =
            error instanceof Error ? error.message : String(error);

        res.status(500).json({
            error: 'Failed to generate response. Error: ' + message
        });
    }
});

// Serve HTML
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});