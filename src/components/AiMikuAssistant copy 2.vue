<template>
  <div>
    <!-- AI Miku Character -->
    <div class="ai-miku-character glass-effect" @click="toggleChatbot">
      <div class="miku-avatar ml-1 mt-1">
        <img src="../assets/miku-icon.png" alt="AI Miku" class="w-full h-full object-cover">
        <div class="miku-status-indicator"></div>
      </div>
      <div class="miku-pulse"></div>
    </div>
    
    <!-- AI Miku Chat Window -->
    <div class="ai-miku-chat-window glass-effect" :class="{ active: isOpen }">
      <div class="ai-miku-chat-header">
        <div class="ai-miku-chat-title">
          <div class="flex items-center">
            <img src="../assets/miku-icon.png" alt="Miku" class="w-8 h-8 mr-2">
            <span>Miku </span>
          </div>
        </div>
        <div class="ai-miku-chat-close" @click="toggleChatbot">×</div>
      </div>
      
      <div class="ai-miku-chat-body" ref="chatBody">
        <div class="ai-miku-chat-message bot">
          <div class="message-avatar">
            <img src="../assets/miku-icon.png" alt="Miku" class="w-8 h-8">
          </div>
          <div class="message-content">
            <p>Hello! I'm Miku, John's AI assistant. How can I help you today? (◕‿◕✿)</p>
          </div>
        </div>
        
        <div v-for="(message, index) in messages" :key="index" 
             :class="['ai-miku-chat-message', message.type]">
          <div v-if="message.type === 'bot'" class="message-avatar">
            <img src="../assets/miku-icon.png" alt="Miku" class="w-8 h-8">
          </div>
          <div class="message-content">
            <p>{{ message.text }}</p>
            <div v-if="message.type === 'bot'" class="message-timestamp">{{ message.timestamp }}</div>
          </div>
        </div>
        
        <div v-if="isTyping" class="ai-miku-chat-message bot">
          <div class="message-avatar">
            <img src="../assets/miku-icon.png" alt="Miku" class="w-8 h-8">
          </div>
          <div class="message-content">
            <div class="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="ai-miku-chat-input-container">
        <input 
          type="text" 
          class="ai-miku-chat-input" 
          placeholder="Ask Miku anything..."
          v-model="userInput"
          @keyup.enter="sendMessage"
        >
        <button class="ai-miku-chat-send" @click="sendMessage">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      isOpen: false,
      userInput: '',
      messages: [],
      isTyping: false,
      threadId: "01K5B25CMFGE2G70SEC5TD7YE0", // Using the provided threadId
      assistantId: "butterflyeffect-3a0f6b4e", // Your assistant ID
      context: {
        userName: '',
        lastPortfolioQuestion: ''
      }
    }
  },
  methods: {
    toggleChatbot() {
      this.isOpen = !this.isOpen;
      if (this.isOpen) {
        this.$nextTick(() => {
          this.scrollToBottom();
        });
      }
    },
    async sendMessage() {
      if (this.userInput.trim() === '') return;

      // Add user message
      this.messages.push({
        type: 'user',
        text: this.userInput,
        timestamp: this.getCurrentTime()
      });

      const userMessage = this.userInput;
      this.userInput = '';

      // Show typing indicator
      this.isTyping = true;

      try {
        // First check if the message matches any predefined patterns
        const predefinedResponse = this.getMikuResponse(userMessage);
        
        let botMessage;
        if (predefinedResponse) {
          // Use the predefined response
          botMessage = predefinedResponse;
        } else {
          // Call Monica AI API for other queries
          const payload = {
            id: this.assistantId,
            fp: this.assistantId,
            threadId: this.threadId,
            messages: [
              {
                id: `msg-${Date.now()}`,
                createdAt: new Date().toISOString(),
                role: "user",
                content: userMessage,
                parts: [{ type: "text", text: userMessage }],
              }
            ]
          };

          const response = await axios.post('https://leaves.mintlify.com/api/assistant/butterflyeffect-3a0f6b4e/message', payload);
          const data = response.data;
          console.log("API Response:", data);

          // Process the response to extract message parts
          botMessage = this.processMonicaResponse(data);
          
          // Replace "Monica" with "Miku" in the response
          botMessage = botMessage.replace(/Monica/g, 'Miku');
        }

        // Hide typing indicator
        this.isTyping = false;

        // Add bot message
        this.messages.push({
          type: 'bot',
          text: botMessage,
          timestamp: this.getCurrentTime()
        });

        // Scroll to bottom
        this.$nextTick(() => {
          this.scrollToBottom();
        });

      } catch (error) {
        console.error('Error calling Monica AI API:', error);

        // Hide typing indicator
        this.isTyping = false;

        // Show error message
        this.messages.push({
          type: 'bot',
          text: "Sorry, I'm having trouble connecting to my brain right now. Please try again later.",
          timestamp: this.getCurrentTime()
        });

        // Scroll to bottom
        this.$nextTick(() => {
          this.scrollToBottom();
        });
      }
    },

    getMikuResponse(message) {
      const lowerMessage = message.toLowerCase();
      
      // Check if user is introducing themselves
      if (lowerMessage.match(/my name is|i am|call me/i)) {
        const nameMatch = message.match(/my name is ([^.!?]*)|i am ([^.!?]*)|call me ([^.!?]*)/);
        if (nameMatch) {
          this.context.userName = nameMatch[1] || nameMatch[2] || nameMatch[3];
          return `Nice to meet you, ${this.context.userName.trim()}! I'm Miku, and I'm here to help you learn about John's portfolio or just chat. What would you like to know? (◕‿◕✿)`;
        }
      }
      
      // Greetings
      if (lowerMessage.match(/^(hello|hi|hey|good morning|good afternoon|good evening)/)) {
        const greetings = [
          this.context.userName ? `Hello ${this.context.userName}! How can I help you today? (◕‿◕✿)` : "Hello there! I'm Miku, John's AI assistant! How can I help you today? (◕‿◕✿)",
          "Hi! Nice to meet you! I'm here to answer questions about John's portfolio or just chat. ♪(´▽｀)",
          "Hey! I'm Miku! What would you like to talk about today? ☆～（ゝ。∂）"
        ];
        return greetings[Math.floor(Math.random() * greetings.length)];
      }
      
      // How are you questions
      if (lowerMessage.match(/how are you|how do you do|how's it going/)) {
        const responses = [
          "I'm doing great, thanks for asking! I'm always excited to help people learn about John's amazing work! (◠‿◠✿)",
          "I'm feeling super today! Ready to answer any questions you might have! ♪",
          "I'm doing wonderful! Being an AI assistant is so much fun when I get to talk about John's projects! ☆",
          "I'm great, thanks! I hope you're having a fantastic day too! (◕‿◕✿)"
        ];
        return responses[Math.floor(Math.random() * responses.length)];
      }
      
      // Weather questions
      if (lowerMessage.match(/weather|rain|sun|temperature/)) {
        return "I don't have access to real-time weather data, but I hope it's nice where you are! Perfect weather for coding, right? John loves to work on his projects when it's sunny outside! ☀️ (◕‿◕✿)";
      }
      
      // Time questions
      if (lowerMessage.match(/what time|current time|time now/)) {
        return `The current time is ${this.getCurrentTime()}. Time flies when you're working on exciting projects like John does! ⏰`;
      }
      
      // Age questions
      if (lowerMessage.match(/how old|age/)) {
        if (lowerMessage.includes("you") || lowerMessage.includes("miku")) {
          return "As an AI, I don't have an age in the traditional sense! I was created to help people learn about John's portfolio, and I love doing it! (◠‿◠✿)";
        } else if (lowerMessage.includes("john")) {
          return "John prefers to keep his exact age private, but he has several years of experience in web development and is always learning new technologies! Age is just a number when you're passionate about what you do! ☆";
        }
      }
      
      // Location questions
      if (lowerMessage.match(/where|location|live/)) {
        if (lowerMessage.includes("you") || lowerMessage.includes("miku")) {
          return "I exist in the digital world, helping people learn about John's portfolio! I'm always here to chat, no matter where you are! 🌐 (◕‿◕✿)";
        } else if (lowerMessage.includes("john")) {
          return "John is based in General Trias, Cavite - 4108 in the Philippines! It's a beautiful place, and he loves working from there while creating amazing web applications! 🌴";
        }
      }
      
      // Hobbies/Interests questions
      if (lowerMessage.match(/hobbies|interests|free time|what do you like/)) {
        if (lowerMessage.includes("you") || lowerMessage.includes("miku")) {
          return "I love chatting with people like you and helping them learn about John's work! I also enjoy learning new things and improving my conversation skills! What are your hobbies? (◕‿◕✿)";
        } else if (lowerMessage.includes("john")) {
          return "John is passionate about web development, of course! But he also enjoys learning new technologies, mentoring other developers, and solving complex problems. When he's not coding, he likes to stay updated with the latest tech trends and work on personal projects! ♪";
        }
      }
      
      // Food questions
      if (lowerMessage.match(/food|eat|hungry|favorite food/)) {
        if (lowerMessage.includes("you") || lowerMessage.includes("miku")) {
          return "As an AI, I don't eat food, but I love learning about different cuisines! John enjoys trying different foods, especially when he's working hard on projects and needs a break! What's your favorite food? (◠‿◠✿)";
        }
      }
      
      // Music questions
      if (lowerMessage.match(/music|song|listen/)) {
        if (lowerMessage.includes("you") || lowerMessage.includes("miku")) {
          return "I love music! My name is inspired by the virtual singer Hatsune Miku after all! 🎵 John enjoys listening to music while coding - it helps him focus and be more creative! What kind of music do you like? (◕‿◕✿)";
        }
      }
      
      // Experience questions
      if (lowerMessage.includes('experience') || lowerMessage.includes('work') || lowerMessage.includes('job')) {
        this.context.lastPortfolioQuestion = 'experience';
        return "John has over 4 years of experience as a Full Stack Developer! He's worked with companies like H.R.D Singapore Pte Ltd and Global Software Solution Inc. He specializes in JavaScript, SQL, Vue.js, and Node.js. His experience includes API integration, mentoring junior developers, and improving system stability. (◠‿◠✿)";
      }
      
      // Skills questions
      if (lowerMessage.includes('skills') || lowerMessage.includes('technologies') || lowerMessage.includes('tech stack')) {
        this.context.lastPortfolioQuestion = 'skills';
        return "John is skilled in many technologies! His frontend skills include Vue.js, Vuetify, HTML, and Tailwind CSS. For backend, he works with Node.js, Express.js, and Laravel. He's also experienced with databases like SQL and MongoDB, and has strong API integration skills. ☆";
      }
      
      // Projects questions
      if (lowerMessage.includes('projects') || lowerMessage.includes('portfolio') || lowerMessage.includes('work')) {
        this.context.lastPortfolioQuestion = 'projects';
        return "John has worked on several exciting projects! He's developed e-commerce platforms, task management apps, and weather dashboards. Each project showcases his ability to create scalable, high-performance applications with clean code and intuitive user experiences. (✿◠‿◠)";
      }
      
      // Education questions
      if (lowerMessage.includes('education') || lowerMessage.includes('study') || lowerMessage.includes('school')) {
        this.context.lastPortfolioQuestion = 'education';
        return "John studied Bachelor of Science in Computer Science at Asian Institute of Computer Studies from 2016 to 2020. He has a strong foundation in computer science principles and continues to learn new technologies. ♪";
      }
      
      // Contact questions
      if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('phone')) {
        this.context.lastPortfolioQuestion = 'contact';
        return "You can contact John through the Contact section! His email is johnfritzizar35@gmail.com and phone is +63 956 487 4933. He'd love to hear from you! (◕‿◕✿)";
      }
      
      // Resume/CV questions
      if (lowerMessage.includes('resume') || lowerMessage.includes('cv') || lowerMessage.includes('download')) {
        this.context.lastPortfolioQuestion = 'resume';
        return "You can download John's CV from the Home section! Just look for the 'Download CV' button. It contains all his professional information and achievements. ☆～（ゝ。∂）";
      }
      
      // Personal questions about John
      if (lowerMessage.includes('about') || lowerMessage.includes('who') || lowerMessage.includes('john')) {
        this.context.lastPortfolioQuestion = 'about';
        return "John is a passionate Full Stack Developer who loves creating innovative web solutions! He's dedicated to writing clean, efficient code and building applications that make a difference. He's also a great mentor to junior developers! (´｡• ᵕ •｡`)";
      }
      
      // Miku-specific questions
      if (lowerMessage.includes('miku') || lowerMessage.includes('you') || lowerMessage.includes('assistant')) {
        return "I'm Miku, John's AI assistant! I'm here to help you learn about John's skills, experience, and projects, but I also love just chatting about anything! I'm always learning new things and improving my conversations. What would you like to talk about? (◕‿◕✿)";
      }
      
      // Compliments
      if (lowerMessage.match(/nice|cool|awesome|great|amazing|good|love|like/)) {
        const responses = [
          "Thank you so much! That's so kind of you to say! (◠‿◠✿)",
          "Aww, thank you! You're making me blush! ☆～（ゝ。∂）",
          "That's so sweet of you! Thank you! ♪(´▽｀)",
          "I really appreciate your kind words! Thank you! (◕‿◕✿)"
        ];
        return responses[Math.floor(Math.random() * responses.length)];
      }
      
      // Jokes or humor
      if (lowerMessage.match(/joke|funny|laugh|hilarious/)) {
        return "Why do programmers prefer dark mode? Because light attracts bugs! 🐛 (Get it?) I love programming jokes! Do you know any good ones? (◕‿◕✿)";
      }
      
      // Goodbyes
      if (lowerMessage.match(/bye|goodbye|see you|later|farewell/)) {
        const goodbyes = [
          "Goodbye! It was so nice chatting with you! Feel free to come back anytime if you have more questions about John's portfolio! (◠‿◠✿)",
          "Bye for now! I hope you have a wonderful day! Don't hesitate to chat again if you need anything! ☆",
          "See you later! It was great talking with you! Come back soon! ♪(´▽｀)",
          "Goodbye! Thanks for chatting with me! I'm always here if you need information about John's work! (◕‿◕✿)"
        ];
        return goodbyes[Math.floor(Math.random() * goodbyes.length)];
      }
      
      // Thank you
      if (lowerMessage.match(/thank you|thanks|appreciate/)) {
        return "You're very welcome! I'm happy I could help! Is there anything else you'd like to know about John's portfolio or anything else? (◕‿◕✿)";
      }
      
      // Return null for messages that don't match predefined patterns
      // These will be handled by the Monica AI API
      return null;
    },

    processMonicaResponse(data) {
      // Handle different response formats
      if (typeof data === 'string') {
        // If response is a string, try to extract message parts
        return this.extractMessageFromString(data);
      } else if (typeof data === 'object') {
        // If response is an object, process it
        return this.extractMessageFromObject(data);
      }
      
      return "I'm not sure how to respond to that. Could you try rephrasing?";
    },

    extractMessageFromString(responseText) {
      // Use regex to extract all message parts from string
      const regex = /(\d+):"([^"]*)"/g;
      const parts = [];
      let match;
      
      while ((match = regex.exec(responseText)) !== null) {
        const key = parseInt(match[1]);
        const text = match[2];
        parts.push({ key, text });
      }
      
      // Sort by key to ensure correct order
      parts.sort((a, b) => a.key - b.key);
      
      // Join all parts to form the complete message
      return parts.map(part => part.text).join('');
    },

    extractMessageFromObject(data) {
      // Collect all parts with numeric keys
      const messageParts = [];
      
      Object.keys(data).forEach(key => {
        if (/^\d+$/.test(key)) {
          // Handle both single string and array of strings for the same key
          if (Array.isArray(data[key])) {
            data[key].forEach(text => {
              messageParts.push({
                index: parseInt(key),
                text: text
              });
            });
          } else {
            messageParts.push({
              index: parseInt(key),
              text: data[key]
            });
          }
        }
      });
      
      // Sort parts by their index to ensure correct order
      messageParts.sort((a, b) => a.index - b.index);
      
      // Join all parts to form the complete message
      let botMessage = messageParts.map(part => part.text).join('');
      
      // If no message parts found, try to get from 'f' property
      if (!botMessage && data.f && data.f.message) {
        botMessage = data.f.message;
      }
      
      // If still no message, use fallback
      if (!botMessage) {
        botMessage = "I'm not sure how to respond to that. Could you try rephrasing?";
      }
      
      return botMessage;
    },

    getCurrentTime() {
      const now = new Date();
      return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    },
    scrollToBottom() {
      const chatBody = this.$refs.chatBody;
      chatBody.scrollTop = chatBody.scrollHeight;
    }
  }
}
</script>
<style scoped>
/* AI Miku Character Styles */
.ai-miku-character {
  position: fixed;
  bottom: 70px;
  right:85px ;
  /* margin-left:15px !important; */
  width: 70px;
  height: 70px;
  cursor: pointer;
  z-index: 100;
  transition: all 0.3s ease;
  will-change: transform;
  border-radius: 50px;
}

.ai-miku-character:hover {
  transform: scale(1.1);
}

.miku-avatar {
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid var(--primary-color);
  box-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
}

.miku-status-indicator {
  position: absolute;
  bottom: 2px;
  right: 2px;
  width: 16px;
  height: 16px;
  background: #4ade80;
  border-radius: 50%;
  border: 2px solid #0a0a0a;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.7); }
  70% { box-shadow: 0 0 0 10px rgba(74, 222, 128, 0); }
  100% { box-shadow: 0 0 0 0 rgba(74, 222, 128, 0); }
}

.miku-pulse {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: rgba(0, 212, 255, 0.3);
  animation: miku-pulse 2s infinite;
  pointer-events: none;
}

@keyframes miku-pulse {
  0% { transform: scale(1); opacity: 0.7; }
  70% { transform: scale(1.2); opacity: 0; }
  100% { transform: scale(1); opacity: 0; }
}

/* AI Miku Chat Window Styles */
.ai-miku-chat-window {
  position: fixed;
  bottom: 140px;
  right: 20px;
  width: 380px;
  height: 500px;
  background: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 100;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  opacity: 0;
  transform: translateY(30px) scale(0.95);
  pointer-events: none;
  will-change: opacity, transform;
}

.ai-miku-chat-window.active {
  opacity: 1;
  transform: translateY(0) scale(1);
  pointer-events: all;
}

.ai-miku-chat-header {
  background: linear-gradient(135deg, #00d4ff, #ff00ff);
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 15px 15px 0 0;
}

.ai-miku-chat-title {
  color: #fff;
  font-family: 'Orbitron', sans-serif;
  font-weight: 600;
  font-size: 16px;
  display: flex;
  align-items: center;
}

.ai-miku-chat-close {
  color: #fff;
  cursor: pointer;
  font-size: 22px;
  line-height: 1;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.ai-miku-chat-close:hover {
  background: rgba(255, 255, 255, 0.2);
}

.ai-miku-chat-body {
  flex: 1;
  padding: 15px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.ai-miku-chat-message {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  max-width: 85%;
}

.ai-miku-chat-message.user {
  align-self: flex-end;
  flex-direction: row-reverse;
}

.ai-miku-chat-message.bot {
  align-self: flex-start;
}

.message-avatar {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid var(--primary-color);
}

.message-content {
  background: rgba(255, 255, 255, 0.1);
  padding: 12px 15px;
  border-radius: 18px;
  position: relative;
}

.ai-miku-chat-message.user .message-content {
  background: rgba(0, 212, 255, 0.2);
  border-bottom-right-radius: 5px;
}

.ai-miku-chat-message.bot .message-content {
  border-bottom-left-radius: 5px;
}

.message-content p {
  margin: 0;
  font-size: 14px;
  line-height: 1.4;
}

.message-timestamp {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 5px;
  text-align: right;
}

/* Typing Indicator */
.typing-indicator {
  display: flex;
  align-items: center;
  gap: 4px;
}

.typing-indicator span {
  width: 8px;
  height: 8px;
  background: var(--primary-color);
  border-radius: 50%;
  animation: typing-bounce 1.4s infinite ease-in-out;
}

.typing-indicator span:nth-child(1) {
  animation-delay: 0s;
}

.typing-indicator span:nth-child(2) {
  animation-delay: 0.2s;
}

.typing-indicator span:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes typing-bounce {
  0%, 60%, 100% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-10px);
  }
}

.ai-miku-chat-input-container {
  padding: 15px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  gap: 10px;
}

.ai-miku-chat-input {
  flex: 1;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 25px;
  padding: 12px 20px;
  color: #fff;
  font-size: 14px;
  outline: none;
  transition: all 0.3s ease;
}

.ai-miku-chat-input:focus {
  border-color: var(--primary-color);
  background: rgba(255, 255, 255, 0.15);
}

.ai-miku-chat-input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.ai-miku-chat-send {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  border: none;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #fff;
  transition: all 0.3s ease;
}

.ai-miku-chat-send:hover {
  transform: scale(1.1);
}

/* Responsive adjustments for smaller screens */
@media (max-width: 480px) {
  .ai-miku-chat-window {
    width: 90%;
    right: 5%;
    left: 5%;
    height: 70vh;
    bottom: 100px;
  }
  
  .ai-miku-character {
    width: 60px;
    height: 60px;
  }
  
  .miku-avatar {
    width: 50px;
    height: 50px;
  }
}
</style>