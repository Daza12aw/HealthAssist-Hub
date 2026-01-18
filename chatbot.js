/* Healthcare FAQ Knowledge Base */
const faqKnowledgeBase = {
    "symptoms": {
        "common cold": "Common cold symptoms include runny nose, sneezing, sore throat, mild fever, and cough. Most colds resolve in 7-10 days. Rest, fluids, and over-the-counter pain relievers can help.",
        "flu symptoms": "Flu symptoms include fever (high), body aches, chills, headache, and cough. It's more severe than a cold. Seek medical attention if symptoms worsen.",
        "fever": "A fever is usually a sign your body is fighting an infection. Normal body temperature is around 98.6°F (37°C). Call a doctor if fever exceeds 103°F (39.4°C)."
    },
    "prevention": {
        "disease prevention": "Wash hands regularly, maintain hygiene, eat healthy, exercise, get adequate sleep, and stay updated with vaccinations.",
        "prevent cold": "Wash hands frequently, avoid touching your face, maintain distance from sick people, and keep your immune system strong.",
        "prevent covid": "Get vaccinated, wear masks in crowded places, maintain social distance, and follow local health guidelines."
    },
    "stress": {
        "manage stress": "Try deep breathing, meditation, exercise, adequate sleep, and talk to someone. Limiting screen time and spending time in nature also helps.",
        "mental health": "Mental health is as important as physical health. If you're struggling, reach out to a counselor or mental health professional.",
        "anxiety": "Anxiety can be managed through relaxation techniques, regular exercise, proper sleep, and professional support when needed."
    },
    "emergency": {
        "when to see doctor": "See a doctor for persistent symptoms lasting more than 2 weeks, severe pain, difficulty breathing, chest pain, or signs of serious infection.",
        "emergency": "Call emergency services (911) for chest pain, difficulty breathing, severe allergic reactions, or any life-threatening condition.",
        "serious symptoms": "Seek immediate medical attention for severe headaches, confusion, loss of consciousness, severe bleeding, or breathing difficulty."
    }
};

/* AI Response Generator */
function generateAIResponse(userMessage) {
    const message = userMessage.toLowerCase();

    // Check for keywords in knowledge base
    for (const category in faqKnowledgeBase) {
        for (const keyword in faqKnowledgeBase[category]) {
            if (message.includes(keyword)) {
                return faqKnowledgeBase[category][keyword];
            }
        }
    }

    // Default responses for common patterns
    if (message.includes("help") || message.includes("support")) {
        return "We're here to help! 🤝 You can register as a patient to get connected with a volunteer, or register as a volunteer to support someone in need. What would you like to do?";
    }

    if (message.includes("volunteer") || message.includes("help others")) {
        return "Great! Volunteering is a wonderful way to help your community. Click 'Volunteer Registration' to sign up and let us know your healthcare skills and availability. We'll match you with patients who need support.";
    }

    if (message.includes("patient") || message.includes("need help")) {
        return "We understand you might need healthcare support. Go to the Patient Registration form to tell us about your health concern. Our volunteer network will be notified and someone will reach out to you soon.";
    }

    if (message.includes("thank") || message.includes("thanks")) {
        return "You're welcome! 😊 Is there anything else I can help you with regarding healthcare or our services?";
    }

    // Fallback response
    return "I'm here to help with healthcare questions! You can ask about symptoms, prevention, when to see a doctor, or how our volunteer program works. What would you like to know?";
}

/* Chat Functions */
function sendMessage(quickQuestion = null) {
    const input = document.getElementById('user-input');
    const userMessage = quickQuestion || input.value.trim();

    if (!userMessage) return;

    // Clear input
    if (!quickQuestion) {
        input.value = '';
    }

    // Add user message to chat
    addMessageToChat(userMessage, 'user');

    // Simulate AI thinking (small delay)
    setTimeout(() => {
        const aiResponse = generateAIResponse(userMessage);
        addMessageToChat(aiResponse, 'bot');
    }, 300);
}

function addMessageToChat(message, sender) {
    const chatMessages = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    messageDiv.innerHTML = `<p>${message}</p>`;
    chatMessages.appendChild(messageDiv);

    // Auto scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function handleEnter(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

// Alternative: Data Summary Feature (commented out for future enhancement)
/*
function generateDataSummary(data) {
    // This could summarize patient cases, volunteer hours, impact metrics
    const summary = {
        totalPatients: data.patients?.length || 0,
        totalVolunteers: data.volunteers?.length || 0,
        activeRequests: data.requests?.filter(r => r.status === 'active').length || 0,
        avgResponseTime: calculateAvgResponseTime(data),
        impactScore: calculateImpact(data)
    };
    return summary;
}
*/
