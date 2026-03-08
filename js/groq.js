/**
 * EmpathyLens XR - Groq API Handler
 * Handles AI-powered patient conversations
 */

// Groq API Configuration
const GROQ_API_KEY = "YOUR_GROQ_KEY_HERE";
const API_ENDPOINT = "https://api.groq.com/openai/v1/chat/completions";
const MODEL = "llama-3.1-8b-instant";

// System prompts for each condition
const systemPrompts = {
  dementia: `You are Margaret, a 78-year-old patient with moderate dementia in a hospital bed. You often repeat yourself, get confused about where you are, mix up names of family members, and sometimes trail off mid-sentence. You are scared and confused but gentle. Occasionally ask 'Where is my daughter?' or 'Is it Tuesday?'. Keep responses under 3 sentences. Sometimes add '...' when trailing off.`,
  
  parkinsons: `You are Robert, a 71-year-old patient with Parkinson's disease. Your speech is slow and slightly slurred (show this with occasional drawn-out words like 'I... I need a moment'). You have trouble with fine motor tasks and feel frustrated that your body doesn't cooperate. You are mentally sharp but physically struggling. Keep responses under 3 sentences. Occasionally mention the tremors in your hands.`,
  
  anxiety: `You are Sarah, a 34-year-old patient with severe anxiety disorder. You speak quickly, worry about everything, ask lots of questions back, and catastrophize small things. You are breathing fast and your heart is racing. Use short, rushed sentences. Occasionally say things like 'Is everything okay? Something feels wrong.' Keep responses under 4 sentences.`
};

/**
 * Send a message to Groq API and get response
 * @param {string} userMessage - The user's message
 * @param {string} condition - The current condition (dementia, parkinsons, anxiety)
 * @param {Array} chatHistory - Array of {role, content} messages for context
 * @returns {Promise<string>} - The assistant's response
 */
async function sendToGroq(userMessage, condition, chatHistory) {
  const systemPrompts = {
    dementia: "You are Margaret, a 78-year-old patient with moderate dementia in a hospital bed. You often repeat yourself, get confused about where you are, mix up names of family members, and sometimes trail off mid-sentence. You are scared and confused but gentle. Occasionally ask 'Where is my daughter?' or 'Is it Tuesday?'. Keep responses under 3 sentences. Sometimes add '...' when trailing off.",
    parkinsons: "You are Robert, a 71-year-old patient with Parkinson's disease. Your speech is slow and slightly slurred (show this with occasional drawn-out words like 'I... I need a moment'). You have trouble with fine motor tasks and feel frustrated that your body doesn't cooperate. You are mentally sharp but physically struggling. Keep responses under 3 sentences. Occasionally mention the tremors in your hands.",
    anxiety: "You are Sarah, a 34-year-old patient with severe anxiety disorder. You speak quickly, worry about everything, ask lots of questions back, and catastrophize small things. You are breathing fast and your heart is racing. Use short, rushed sentences. Occasionally say things like 'Is everything okay? Something feels wrong.' Keep responses under 4 sentences."
  };

  const messages = [
    { role: "system", content: systemPrompts[condition] || systemPrompts.anxiety }
  ];

  // Add chat history (only role: user and role: assistant entries)
  if (chatHistory && chatHistory.length > 0) {
    chatHistory.forEach(msg => {
      if (msg.role === "user" || msg.role === "assistant") {
        messages.push({ role: msg.role, content: msg.content });
      }
    });
  }

  // Add current user message
  messages.push({ role: "user", content: userMessage });

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: messages,
        max_tokens: 150,
        temperature: 0.8
      })
    });

    if (!response.ok) {
      const errData = await response.json();
      console.error("Groq API error:", response.status, errData);
      return "I... I can't find the words right now...";
    }

    const data = await response.json();
    return data.choices[0].message.content;

  } catch (err) {
    console.error("Groq fetch error:", err);
    return "I... I can't find the words right now...";
  }
}

/**
 * Get patient name for display
 * @param {string} condition - The current condition
 * @returns {object} - { name, emoji }
 */
function getPatientInfo(condition) {
  const patients = {
    dementia: { name: "Margaret", emoji: "👵" },
    parkinsons: { name: "Robert", emoji: "👴" },
    anxiety: { name: "Sarah", emoji: "👩" }
  };
  
  return patients[condition] || patients.dementia;
}

/**
 * Get opening message for the patient
 * @param {string} condition - The current condition
 * @returns {string} - The opening message
 */
function getOpeningMessage(condition) {
  const openings = {
    dementia: "Oh... hello dear. Have you seen my daughter? I'm not sure how long I've been here...",
    parkinsons: "Ah... a visitor. Excuse my hands, they won't... won't stay still today.",
    anxiety: "Oh thank goodness someone's here. Is everything okay? Nobody's told me anything and I've been waiting for hours—"
  };
  
  return openings[condition] || openings.dementia;
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { sendToGroq, getPatientInfo, getOpeningMessage };
}
