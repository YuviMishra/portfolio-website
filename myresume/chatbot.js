// ==========================================
// Prakash Mishra — AI Resume Chatbot
// Updated: AI Developer role
// ==========================================

const resumeData = {
    name: "Prakash Mishra",
    phone: "+919673441853",
    email: "mishraprakash453@gmail.com",
    location: "Vasai, Mumbai, Maharashtra, India",
    role: "AI Developer",
    experience_years: "4.5",
    company: "Bristlecone",
    company_duration: "Sep 2022 — Present",
    company_location: "Mumbai, India",
    summary: "AI Developer with 4.5+ years of experience building intelligent systems, scalable web apps, REST APIs, and chatbots using Django, Flask, FastAPI, Copilot Agents, Multi-Agent systems, LangChain, and Generative AI technologies. Skilled in cloud computing, database management, and DevOps.",
    experience_details: [
        "Created a Microsoft Copilot Agent and integrated it with Microsoft Teams for enterprise conversational AI",
        "Designed and orchestrated multi-agent AI systems for complex workflow automation",
        "Built chatbot solutions for Mahindra using Rasa, OpenAI, and RAG",
        "Built multiple AI solutions including intelligent document processing, automated email generation, and smart ticketing systems",
        "Developed and optimized backend solutions using Django and Flask",
        "Designed scalable REST APIs and GraphQL endpoints",
        "Managed cloud deployments on Azure and AWS",
        "Led NLP and Generative AI projects for automation"
    ],
    education: "Mumbai University, graduated January 2021",
    certifications: [
        "Generative AI Certification — Microsoft",
        "Azure Fundamentals — Microsoft",
        "AWS Certified Cloud Practitioner — AWS"
    ],
    awards: [
        "Spot Award from Bristlecone (Jul 2025) — Appreciated for leading smart AI initiatives at Mahindra, like building chatbots, automating OCR processes, and exploring Generative AI use cases."
    ],
    projects: [
        { name: "RAG-based Chatbot", description: "Built a context-aware chatbot using LangChain, FAISS, and OpenAI APIs to retrieve precise answers from internal documents." },
        { name: "AI Agent Development", description: "Built an LLM-powered agent integrated with external APIs for real-time data processing and automation. Implemented secure tool-calling and error handling." },
        { name: "Copilot Agent on MS Teams", description: "Created a Microsoft Copilot Agent and integrated it with Microsoft Teams, enabling enterprise users to interact with AI-powered workflows directly within their collaboration platform." },
        { name: "Multi-Agent AI Systems", description: "Designed and orchestrated multi-agent architectures where specialized AI agents collaborate to solve complex tasks — from data retrieval and analysis to decision-making and automated reporting." },
        { name: "Model Context Protocol (MCP)", description: "Working with MCP to enable structured tool communication and agent interoperability." },
        { name: "Email Draft Generator", description: "Developed an AI tool that generates professional email drafts using OpenAI GPT models integrated with FastAPI." },
        { name: "Azure Chatbot Ticketing", description: "Automated ticket generation via email using Azure NLP chatbot." },
        { name: "WhatsApp Bot for Dealers", description: "Developed a WhatsApp chatbot enabling dealers to check outstanding amounts, retrieve receipts, and access account details, leveraging FastAPI, Infobip API, and database integrations." },
        { name: "Resume Processing Automation", description: "Built an AI-powered system to extract and compare resume data with job descriptions." }
    ],
    skills: {
        programming: ["Python", "JavaScript", "SQL", ".NET"],
        frameworks: ["Django", "Flask", "FastAPI", "LangChain", "OpenAI API", "Copilot Studio", "Multi-Agent AI", "Jira", "Postman", "Cron Job", "RAG"],
        databases: ["Oracle", "MySQL", "PostgreSQL", "MongoDB", "Redis", "Firestore", "GCS", "Vector DB"],
        cloud_devops: ["Azure", "AWS", "Docker", "Git", "GitHub", "Bitbucket", "Cloud Functions", "App Engine", "Google ADK", "MCP"]
    }
};

// ==========================================
// Knowledge base matching
// ==========================================
function getResponse(input) {
    const q = input.toLowerCase().trim();

    // Greetings
    if (/^(hi|hello|hey|howdy|greetings|hola|namaste|sup|what'?s up)/i.test(q)) {
        return `Hello! 👋 I'm Prakash's AI assistant. He's an **AI Developer** with 4.5+ years building intelligent systems. What would you like to know about his work?`;
    }

    // Who is / about
    if (/who (is|are)|about (prakash|him|you)|introduce|tell me about (yourself|prakash|him)/i.test(q)) {
        return `**Prakash Mishra** is an ${resumeData.role} with ${resumeData.experience_years}+ years of experience, currently at **${resumeData.company}** in ${resumeData.location}.\n\n${resumeData.summary}`;
    }

    // Name
    if (/what('?s| is) (your |his )?name/i.test(q) || q === 'name') {
        return `His name is **${resumeData.name}** — an AI Developer based in Mumbai.`;
    }

    // Contact / email / phone
    if (/contact|email|phone|number|reach|call|mail/i.test(q)) {
        return `📧 **Email:** ${resumeData.email}\n📱 **Phone:** ${resumeData.phone}\n📍 **Location:** ${resumeData.location}\n🔗 **LinkedIn:** Available on his profile`;
    }

    // Location
    if (/where|location|city|live|based|from/i.test(q)) {
        return `Prakash is based in **${resumeData.location}**. He works at ${resumeData.company} in Mumbai.`;
    }

    // Copilot / Teams / multi-agent
    if (/copilot|teams|multi.?agent|multiple.?agent|agent.?system/i.test(q)) {
        return `🧩 **Copilot Agent & Multi-Agent Experience:**\n\n**Microsoft Copilot Agent on Teams:**\nPrakash created a Microsoft Copilot Agent and integrated it with MS Teams, enabling enterprise users to interact with AI-powered workflows directly inside their collaboration platform.\n\n**Multi-Agent AI Systems:**\nDesigned and orchestrated multi-agent architectures where specialized AI agents collaborate to solve complex tasks — data retrieval, analysis, decision-making, and automated reporting.\n\n**Multiple AI Solutions:**\nRAG chatbots, WhatsApp bots, email generators, ticketing automation, resume processing, and more — all built and deployed at enterprise scale.`;
    }

    // Experience
    if (/experience|work(ed|ing)?|job|career|role|position|company|bristlecone|employ/i.test(q)) {
        let resp = `💼 **${resumeData.role}** at **${resumeData.company}** (${resumeData.company_duration})\n📍 ${resumeData.company_location}\n\n**Key Responsibilities:**\n`;
        resumeData.experience_details.forEach(d => {
            resp += `• ${d}\n`;
        });
        resp += `\nTotal experience: **${resumeData.experience_years}+ years**`;
        return resp;
    }

    // Skills
    if (/skill|tech|tool|stack|language|framework|librar|know|proficien|capable/i.test(q)) {
        let resp = `🛠️ **Prakash's Tech Arsenal:**\n\n`;
        resp += `**Programming:** ${resumeData.skills.programming.join(', ')}\n\n`;
        resp += `**AI & Frameworks:** ${resumeData.skills.frameworks.join(', ')}\n\n`;
        resp += `**Databases:** ${resumeData.skills.databases.join(', ')}\n\n`;
        resp += `**Cloud & DevOps:** ${resumeData.skills.cloud_devops.join(', ')}`;
        return resp;
    }

    // Python
    if (/python/i.test(q) && !/project/i.test(q)) {
        return `Python is Prakash's **primary language**. He builds AI systems, backend APIs, and automation tools with **Django, Flask, FastAPI, LangChain, and OpenAI API**. He's been coding Python for ${resumeData.experience_years}+ years.`;
    }

    // Django / Flask / FastAPI
    if (/django|flask|fastapi/i.test(q)) {
        return `Prakash is expert with Python web frameworks:\n\n🟢 **Django** — Robust backend solutions at Bristlecone\n🔵 **Flask** — Lightweight APIs and microservices\n⚡ **FastAPI** — High-performance APIs (WhatsApp Bot, Email Draft Generator)\n\nPlus **REST APIs** and **GraphQL** endpoints at scale.`;
    }

    // AI / ML / GenAI / LLM / NLP / chatbot
    if (/\b(ai|artificial intelligence|machine learning|ml|genai|generative|llm|nlp|natural language|chatbot|openai|langchain|rag|rasa|gpt)\b/i.test(q)) {
        return `🤖 **AI & Generative AI Expertise:**\n\nPrakash is an AI Developer leading GenAI projects at Bristlecone:\n\n• Created **Microsoft Copilot Agent** on **MS Teams**\n• Designed **multi-agent AI systems** for workflow automation\n• Built **RAG Chatbot** with LangChain, FAISS, OpenAI\n• Built **LLM-powered AI Agents** with tool-calling\n• **Chatbot solutions for Mahindra** using Rasa, OpenAI, RAG\n• Works with **MCP** for agent interoperability\n• **Email Draft Generator** with GPT + FastAPI\n• Built **multiple AI solutions** — document processing, OCR, ticketing\n• Microsoft **Generative AI Certification**`;
    }

    // Cloud / Azure / AWS
    if (/cloud|azure|aws|devops|docker|deploy|infrastructure/i.test(q)) {
        return `☁️ **Cloud & DevOps:**\n\n• **Azure** — Deployments, Copilot Agent, Azure NLP Chatbot. **Azure Fundamentals** certified.\n• **AWS** — Cloud deployments. **AWS Cloud Practitioner** certified.\n• **Docker** — Containerization\n• **Other:** Git, GitHub, Bitbucket, Cloud Functions, App Engine, Google ADK, MCP`;
    }

    // Database
    if (/database|db|sql|mongo|postgres|mysql|oracle|redis|firestore|vector/i.test(q)) {
        return `🗃️ **Database Expertise:**\n\n${resumeData.skills.databases.join(', ')}\n\nRelational (Oracle, MySQL, PostgreSQL), NoSQL (MongoDB, Redis, Firestore), and **Vector Databases** for AI/RAG applications.`;
    }

    // Projects
    if (/project|built|build|develop|portfolio|work.*on/i.test(q)) {
        let resp = `🚀 **Prakash's AI Projects:**\n\n`;
        resumeData.projects.forEach((p, i) => {
            resp += `${i + 1}. **${p.name}** — ${p.description}\n\n`;
        });
        return resp;
    }

    // Education
    if (/educat|university|college|degree|study|school|graduat|qualif/i.test(q)) {
        return `🎓 **Education:**\n\n**Mumbai University** — Graduated January 2021`;
    }

    // Certifications
    if (/certif|certified|credential/i.test(q)) {
        let resp = `�� **Certifications:**\n\n`;
        resumeData.certifications.forEach(c => {
            resp += `✅ ${c}\n`;
        });
        return resp;
    }

    // Awards
    if (/award|achievement|recognition|spot/i.test(q)) {
        return `🏆 **Awards:**\n\n${resumeData.awards[0]}`;
    }

    // Strengths / why hire
    if (/strength|why hire|why should|strong suit|good at|best at|what makes/i.test(q)) {
        return `💪 **Why Prakash:**\n\n• 4.5+ years as an AI Developer\n• Created **Copilot Agent** integrated with **MS Teams**\n• Designed **multi-agent AI systems**\n• Deep expertise in **RAG, LangChain, OpenAI, MCP**\n• Built **9+ AI solutions** at enterprise scale\n• **Azure & AWS certified**\n• Spot Award for **AI leadership at Mahindra**\n• Full-stack backend (Django, Flask, FastAPI)`;
    }

    // Resume / CV
    if (/resume|cv|download/i.test(q)) {
        return `📄 You're viewing Prakash's AI portfolio! All his resume details are here. Ask me anything specific!`;
    }

    // WhatsApp
    if (/whatsapp/i.test(q)) {
        return `📱 **WhatsApp Bot for Dealers:**\n\nBuilt a chatbot for dealers to check outstanding amounts, retrieve receipts, and access account details.\n\n**Tech:** FastAPI, Infobip API, database integrations.`;
    }

    // MCP
    if (/\bmcp\b|model context protocol/i.test(q)) {
        return `🔌 **Model Context Protocol (MCP):**\n\nPrakash works with MCP to enable structured tool communication and agent interoperability — a cutting-edge protocol for connecting AI agents with external tools.`;
    }

    // Thanks / bye
    if (/thank|thanks|bye|goodbye|see you|take care/i.test(q)) {
        return `You're welcome! 😊 Feel free to come back anytime. Have a great day!`;
    }

    // Salary
    if (/salary|compensation|rate|pay|ctc|money/i.test(q)) {
        return `💰 For compensation discussions, please contact Prakash directly:\n📧 ${resumeData.email}\n📱 ${resumeData.phone}`;
    }

    // Catch-all
    return `Great question! I can tell you about Prakash's:\n\n• 🤖 **AI Work** — Copilot Agents, Multi-Agent systems, RAG\n• 💼 **Experience** — 4.5+ years at Bristlecone\n• 🚀 **Projects** — 9+ AI solutions\n• 🛠️ **Skills** — Full tech stack\n• 📜 **Certifications** — Microsoft, AWS\n• 📧 **Contact** — Email, phone, location\n\nTry asking about any of these! 😊`;
}

// ==========================================
// Format & UI
// ==========================================
function formatResponse(text) {
    return text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\n/g, '<br>');
}

const chatbotToggle = document.getElementById('chatbotToggle');
const chatbotWindow = document.getElementById('chatbotWindow');
const chatbotClose = document.getElementById('chatbotClose');
const chatInput = document.getElementById('chatInput');
const chatSend = document.getElementById('chatSend');
const chatMessages = document.getElementById('chatbotMessages');

chatbotToggle.addEventListener('click', () => {
    chatbotWindow.classList.toggle('open');
    chatbotToggle.style.display = chatbotWindow.classList.contains('open') ? 'none' : 'block';
});

chatbotClose.addEventListener('click', () => {
    chatbotWindow.classList.remove('open');
    chatbotToggle.style.display = 'block';
});

chatSend.addEventListener('click', sendMessage);
chatInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') sendMessage();
});

function sendMessage() {
    const text = chatInput.value.trim();
    if (!text) return;
    appendMessage(text, 'user');
    chatInput.value = '';
    const typingEl = appendTyping();
    setTimeout(() => {
        typingEl.remove();
        appendMessage(getResponse(text), 'bot');
    }, 500 + Math.random() * 700);
}

function appendMessage(text, sender) {
    const msg = document.createElement('div');
    msg.className = `chat-message ${sender}`;
    msg.innerHTML = `
        <div class="chat-avatar">${sender === 'bot' ? '🤖' : '👤'}</div>
        <div class="chat-bubble">${sender === 'bot' ? formatResponse(text) : text}</div>
    `;
    chatMessages.appendChild(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function appendTyping() {
    const msg = document.createElement('div');
    msg.className = 'chat-message bot';
    msg.innerHTML = `<div class="chat-avatar">🤖</div><div class="chat-bubble"><div class="typing-indicator"><span></span><span></span><span></span></div></div>`;
    chatMessages.appendChild(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return msg;
}

window.askSuggestion = function(text) {
    chatInput.value = text;
    sendMessage();
};
