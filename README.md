# AI Career Intelligence & Job Automation Platform

An AI-powered career intelligence platform that analyzes resumes and job descriptions to provide semantic job matching, skill-gap analysis, and personalized career recommendations.

## Live Demo

https://aicareerint-2rxw7tnr.manus.space/

## Overview

AI Career Intelligence is a full-stack application designed to help job seekers understand how well their resume aligns with a target role and identify the skills needed to improve their profile.

The platform combines Python backend services, PostgreSQL, Redis, LLM-powered workflows, semantic matching, and a React frontend to provide an end-to-end AI career analysis experience.

## Key Features

* Resume parsing and structured profile extraction
* Job description analysis
* Semantic resume-to-job matching
* Skill-gap identification
* Personalized career recommendations
* AI-assisted resume insights
* LLM-powered analysis using OpenAI APIs
* AI workflows orchestrated with LangChain
* RESTful backend APIs
* PostgreSQL-based application data management
* Redis-based caching for repeated operations
* Automated backend testing
* Cloud deployment on AWS

## Architecture

```text
React Frontend
       |
       v
FastAPI Backend
       |
   +---+-------------------+
   |                       |
   v                       v
PostgreSQL               Redis
   |                       |
   +-----------+-----------+
               |
               v
       AI / LLM Workflows
               |
       +-------+-------+
       |               |
       v               v
   LangChain       OpenAI API
```

## Technology Stack

### Backend

* Python
* FastAPI
* REST APIs

### AI / Generative AI

* LangChain
* OpenAI API
* LLMs
* Semantic Matching
* NLP
* Embeddings

### Database & Caching

* PostgreSQL
* Redis

### Frontend

* React
* JavaScript
* HTML5
* CSS3

### Cloud & DevOps

* AWS
* Docker
* Git
* CI/CD

## Engineering Highlights

* Designed backend APIs and PostgreSQL data models for resume, job, skill, and recommendation workflows.
* Implemented semantic matching between resumes and job descriptions.
* Built LLM-powered workflows for structured career analysis and recommendations.
* Added Redis caching to reduce repeated LLM and external API operations.
* Implemented validation and structured-output handling for AI-generated responses.
* Added automated tests for critical backend workflows.
* Deployed the application as a cloud-based full-stack system.

## Project Structure

```text
ai-career-intelligence-platform/
│
├── backend/
│   ├── api/
│   ├── services/
│   ├── models/
│   ├── schemas/
│   └── utils/
│
├── frontend/
│   ├── components/
│   ├── pages/
│   └── services/
│
├── tests/
│
├── docker/
│
├── requirements.txt
├── README.md
└── .gitignore
```

## Running Locally

### Clone the repository

```bash
git clone https://github.com/priyavellanki216/ai-career-intelligence-platform.git
cd ai-career-intelligence-platform
```

### Install backend dependencies

```bash
pip install -r requirements.txt
```

### Configure environment variables

Create a `.env` file:

```env
OPENAI_API_KEY=your_openai_api_key
DATABASE_URL=your_postgresql_connection_string
REDIS_URL=your_redis_connection_string
```

Never commit API keys or credentials to GitHub.

### Start the backend

```bash
uvicorn main:app --reload
```

### Start the frontend

```bash
npm install
npm run dev
```

## Example Workflow

```text
Upload Resume
      |
      v
Resume Parsing
      |
      v
Structured Candidate Profile
      |
      +------------------+
      |                  |
      v                  v
Job Description     Skill Analysis
      |                  |
      +--------+---------+
               |
               v
        Semantic Matching
               |
               v
       LLM Career Analysis
               |
               v
 Personalized Recommendations
```

## Future Improvements

* Multi-agent career coaching workflows
* Job application tracking
* Automated job discovery
* Resume version optimization
* Interview preparation workflows
* Improved evaluation datasets
* User authentication and role-based access
* Background processing for large document workloads

## Author

Vellanki Lakshmi Priya

Software Development Engineer | Python | FastAPI | LLMs | RAG | PostgreSQL | Redis | AWS

GitHub: https://github.com/priyavellanki216
