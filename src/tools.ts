import { tool } from 'ai';
import { z } from 'zod';

//
// Enterprise Knowledge Base
//

const enterpriseKnowledge = {
    onboarding:
        'Employees should complete onboarding training, security setup, HR verification, and project induction before accessing enterprise systems.',

    deployment:
        'Deployment workflow includes development, testing, code review, staging validation, approval process, and production deployment.',

    ai_policy:
        'All AI systems should follow responsible AI practices, security compliance, and enterprise data privacy guidelines.',

    training:
        'Employees are encouraged to complete quarterly upskilling programs related to AI, cloud, cybersecurity, and modern development practices.'
};

//
// Project Database
//

const projectDatabase = [
    {
        domain: 'Fraud Detection',
        project:
            'AI-Based Financial Fraud Detection System',

        description:
            'Detect suspicious financial transactions using anomaly detection and machine learning.',

        dataset:
            'IEEE-CIS Fraud Detection Dataset',

        technologies: [
            'Python',
            'Machine Learning',
            'XGBoost',
            'FastAPI',
            'React'
        ]
    },

    {
        domain: 'Healthcare',
        project:
            'Medical Report Summarization Assistant',

        description:
            'Generate concise summaries from medical reports using NLP.',

        dataset:
            'MIMIC-III Clinical Dataset',

        technologies: [
            'Python',
            'Transformers',
            'NLP',
            'React'
        ]
    },

    {
        domain: 'Cybersecurity',
        project:
            'SOC Threat Intelligence Assistant',

        description:
            'Analyze logs and identify suspicious cybersecurity activities.',

        dataset:
            'CICIDS Cybersecurity Dataset',

        technologies: [
            'Python',
            'SIEM',
            'LLMs',
            'FastAPI'
        ]
    }
];

//
// Enterprise Knowledge Tool
//

export const enterpriseKnowledgeTool = tool({
    description:
        'Retrieve enterprise SOPs, workflows, AI policies, onboarding processes, and training information.',

    inputSchema: z.object({
        query: z.string()
    }),

    execute: async ({ query }) => {
        const lowerQuery = query.toLowerCase();

        if (lowerQuery.includes('onboarding')) {
            return {
                topic: 'Onboarding Process',
                answer: enterpriseKnowledge.onboarding
            };
        }

        if (lowerQuery.includes('deployment')) {
            return {
                topic: 'Deployment Workflow',
                answer: enterpriseKnowledge.deployment
            };
        }

        if (
            lowerQuery.includes('ai') ||
            lowerQuery.includes('policy')
        ) {
            return {
                topic: 'AI Policy',
                answer: enterpriseKnowledge.ai_policy
            };
        }

        if (
            lowerQuery.includes('training') ||
            lowerQuery.includes('upskill')
        ) {
            return {
                topic: 'Training Programs',
                answer: enterpriseKnowledge.training
            };
        }

        return {
            topic: 'General Enterprise Knowledge',
            answer:
                'No exact enterprise knowledge found. Please refine your query.'
        };
    }
});

//
// Project Mentor Tool
//

export const projectMentorTool = tool({
    description:
        'Recommend AI, ML, NLP, cybersecurity, or software projects with datasets and technology stack.',

    inputSchema: z.object({
        domain: z.string()
    }),

    execute: async ({ domain }) => {
        const recommendations = projectDatabase.filter((project) =>
            project.domain
                .toLowerCase()
                .includes(domain.toLowerCase())
        );

        if (recommendations.length === 0) {
            return {
                message:
                    'No matching projects found for this domain.'
            };
        }

        return {
            recommendations
        };
    }
});

//
// Roadmap Generator Tool
//

export const roadmapGeneratorTool = tool({
    description:
        'Generate implementation roadmap and milestones for AI/software projects.',

    inputSchema: z.object({
        project: z.string()
    }),

    execute: async ({ project }) => {
        return {
            project,
            roadmap: [
                'Phase 1 - Requirement Analysis',
                'Phase 2 - Dataset Collection & Preparation',
                'Phase 3 - Model Development',
                'Phase 4 - Backend API Development',
                'Phase 5 - Frontend Integration',
                'Phase 6 - Testing & Validation',
                'Phase 7 - Deployment & Documentation'
            ]
        };
    }
});

//
// Export All Tools
//

export const tools = {
    enterpriseKnowledgeTool,
    projectMentorTool,
    roadmapGeneratorTool
};