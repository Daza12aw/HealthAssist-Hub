# 🏥 HealthAssist-Hub – NGO Web App

A **concept-level healthcare support web application** that connects patients with volunteers through a simple, AI-assisted platform.

---

## 🎯 Project Overview

**HealthAssist-Hub** is a web-based NGO platform designed to bridge the gap between patients seeking healthcare assistance and volunteers ready to help. The platform features:

- **Patient Registration**: Patients can submit their healthcare needs with urgency levels
- **Volunteer Registration**: Qualified volunteers can register their skills and availability
- **AI Healthcare Chatbot**: An intelligent FAQ assistant providing instant healthcare guidance
- **Community Connection**: Matching system connecting patients with appropriate volunteers

---

## 🏗️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Architecture**: Single-Page Application (SPA)
- **Storage**: Browser LocalStorage (demo) / Backend API ready
- **UI Framework**: Custom responsive design with gradient-based modern styling
- **Deployment**: Static hosting compatible (GitHub Pages, Vercel, Netlify)

---

## 🤖 AI & Automation Feature: Healthcare Chatbot

### Concept
The **AI Healthcare Assistant** uses natural language processing with a knowledge base to:
- Answers common healthcare FAQs  
- Provides basic symptom and prevention guidance  
- Offers mental health and wellness tips  
- Detects emergency-related keywords and advises professional care  

### How It Works
- Keyword-based input analysis  
- Predefined healthcare knowledge base  
- Smart response selection  
- Architecture ready for future NLP/ML integration (Dialogflow, OpenAI, etc.)

### Knowledge Base Categories
- **Symptoms**: Common cold, flu, fever, headaches, etc.
- **Prevention**: Disease prevention, hygiene, vaccinations
- **Mental Health**: Stress management, anxiety relief, mental wellness
- **Emergency**: When to seek medical attention, urgent care guidance

---

## 👥 Core Features

### Patient Registration
- Submit health concerns  
- Set urgency level (Low / Medium / High)  

### Volunteer Registration
- Register skills and availability  
- Choose specialization areas  

### AI Chatbot
- 24/7 instant healthcare guidance  
- Quick-access FAQ topics  

---

## 📁 Project Structure

```
Mini-Healthcare-Support/
├── index.html           # Main registration portal
├── chatbot.html         # AI chatbot interface
├── style.css            # Unified styling
├── script.js            # Form handling and navigation
├── chatbot.js           # AI chatbot logic
└── README.md            # This file
```

---

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server required (static files only)

### Installation

1. Clone or download the project:
```bash
git clone <repository-url>
cd Mini-Healthcare-Support
```

2. Open in browser:
```bash
# Option 1: Direct file opening
open index.html

# Option 2: Using Python SimpleHTTPServer (prevents CORS issues)
python -m http.server 8000

# Option 3: Using Node.js http-server
npx http-server
```

3. Visit `http://localhost:8000` (or `file:///path/to/index.html`)

---

## 🎯 NGO Use Cases

### 1. Remote Rural Healthcare
- Volunteers provide basic health education to remote patients
- Chatbot answers common questions without internet bandwidth
- Reduces unnecessary hospital visits

### 2. Mental Health Support Network
- Volunteer counselors matched with patients
- 24/7 chatbot for crisis guidance
- Reduces mental health emergency room visits

### 3. Elderly Care Program
- Young volunteers assist elderly with healthcare navigation
- Medication reminders and appointment scheduling
- Social connection and monitoring

### 4. Chronic Disease Management
- Volunteers help patients manage long-term conditions
- AI chatbot provides daily tips and reminders
- Reduces hospital readmissions

The platform empowers NGOs to scale support without heavy infrastructure.

---

## 🚀 Future Scope

- Backend API integration  
- Real NLP-based chatbot  
- Volunteer–patient matching logic  
- Multi-language support  
- Mobile app version  

---
