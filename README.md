# Enterprise Knowledge & Project Intelligence Assistant

An AI-powered enterprise assistant built using Google Gemini API that helps users with:

* AI/ML project recommendations
* Technology stack suggestions
* Dataset recommendations
* Learning roadmaps
* Enterprise SOP guidance
* Real-time conversational assistance

Built with **Node.js**, **Express**, **TypeScript**, and **Google Gemini 2.5 Flash**.

---

# Features

## AI Project Recommendations

Get intelligent project ideas for domains like:

* Artificial Intelligence
* Machine Learning
* NLP
* Cybersecurity
* Data Science
* CRM
* Finance
* Healthcare

---

## Technology Stack Guidance

The assistant suggests:

* Frontend technologies
* Backend frameworks
* ML libraries
* Databases
* Deployment platforms

based on your selected project.

---

## Dataset Recommendations

Get relevant datasets for your projects including:

* Kaggle datasets
* Public AI datasets
* Financial datasets
* NLP corpora
* Healthcare datasets

---

## Learning Roadmaps

Generate step-by-step implementation plans including:

* Beginner to advanced roadmap
* Project phases
* Required skills
* Deployment guidance

---

## Real-Time AI Chat

* Streaming AI responses
* Context-aware conversations
* Multi-turn chat memory
* Fast Gemini-powered responses

---

# Tech Stack

| Technology        | Purpose                  |
| ----------------- | ------------------------ |
| Node.js           | Backend runtime          |
| Express.js        | API server               |
| TypeScript        | Type safety              |
| Google Gemini API | AI responses             |
| AI SDK            | AI streaming integration |
| HTML/CSS/JS       | Frontend UI              |

---

# Project Structure

```bash
ai-agent/
│
├── src/
│   ├── app.ts
│   └── tools.ts
│
├── public/
│   └── index.html
│
├── package.json
├── tsconfig.json
├── .env
├── env.example
└── README.md
```

---

# Screenshots

## Home Interface

Add screenshot here:

```bash
public/screenshots/home.png
```

## Chat Interface

Add screenshot here:

```bash
public/screenshots/chat.png
```

---

# Demo

Add your deployed application link here:

```bash
https://your-demo-link.com
```

---

# Installation & Setup

## 1. Clone the Repository

```bash
git clone <your-repository-url>
cd ai-agent
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Create Environment File

Create a `.env` file in the root directory:

```env
GOOGLE_GENERATIVE_AI_API_KEY=your_api_key_here
PORT=3000
```

---

## 4. Get Gemini API Key

1. Visit:
   https://aistudio.google.com/app/apikey

2. Login with Google account

3. Click:
   "Create API Key"

4. Copy the generated key

---

## 5. Run the Application

```bash
npm run dev
```

---

# Access the Application

Open:

```bash
http://localhost:3000
```

OR

```bash
https://<STUDIO_HOST_ID>-3000.<STUDIO_DOMAIN>
```

---

# Example Queries

You can ask:

* "Suggest AI projects for healthcare"
* "Give roadmap for fraud detection system"
* "Recommend datasets for NLP"
* "Explain ML technology stack"
* "Generate CRM project ideas"

---

# API Reference

## Chat Endpoint

```http
POST /api/chat
```

### Request Body

```json
{
  "message": "Suggest AI projects for finance"
}
```

---

# Future Improvements

* Authentication system
* Database integration
* Vector search
* RAG pipeline
* PDF upload support
* Voice assistant
* Multi-agent workflows

---

# Troubleshooting

## Port Already in Use

```bash
fuser -k 3000/tcp
```

---

## Invalid API Key

* Verify your Gemini API key
* Restart server after updating `.env`

---

## Quota Exceeded Error

Free-tier Gemini APIs have request limits.

You can:

* Wait for quota reset
* Use another API key
* Upgrade billing plan

---

# License

MIT License

---

# Author

Developed as an AI-powered Enterprise Assistant using Google Gemini.
