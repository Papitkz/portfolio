<template>
  <div>
    <div class="ai-chatbot glass-effect" @click="toggleChatbot">
      <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
      </svg>
    </div>
    
    <div class="ai-chatbot-window glass-effect" :class="{ active: isOpen }">
      <div class="ai-chatbot-header">
        <div class="ai-chatbot-title">AI Assistant</div>
        <div class="ai-chatbot-close" @click="toggleChatbot">×</div>
      </div>
      
      <div class="ai-chatbot-body" ref="chatBody">
        <div class="ai-chatbot-message bot">
          Hello! I'm John's AI assistant. How can I help you today?
        </div>
        
        <div v-for="(message, index) in messages" :key="index" 
             :class="['ai-chatbot-message', message.type]">
          {{ message.text }}
        </div>
        
        <div v-if="isTyping" class="ai-chatbot-message bot">
          <span class="typing-effect">Typing...</span>
        </div>
      </div>
      
      <div class="ai-chatbot-input-container">
        <input 
          type="text" 
          class="ai-chatbot-input" 
          placeholder="Type your message..."
          v-model="userInput"
          @keyup.enter="sendMessage"
        >
        <button class="ai-chatbot-send" @click="sendMessage">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      userInput: '',
      messages: [],
      isTyping: false
    }
  },
  methods: {
    toggleChatbot() {
      this.isOpen = !this.isOpen;
    },
    sendMessage() {
      if (this.userInput.trim() === '') return;
      
      // Add user message
      this.messages.push({
        type: 'user',
        text: this.userInput
      });
      
      const userMessage = this.userInput;
      this.userInput = '';
      
      // Show typing indicator
      this.isTyping = true;
      
      // Simulate AI response after a delay
      setTimeout(() => {
        this.isTyping = false;
        
        // Simple rule-based responses
        let response = '';
        const lowerMessage = userMessage.toLowerCase();
        
        if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
          response = "Hello there! How can I assist you with John's portfolio today?";
        } else if (lowerMessage.includes('experience')) {
          response = "John has over 4 years of experience as a Full Stack Developer. He has worked with companies like H.R.D Singapore Pte Ltd and Global Software Solution Inc., specializing in JavaScript, SQL, Vue.js, and Node.js.";
        } else if (lowerMessage.includes('skills')) {
          response = "John's key skills include Frontend Development (Vue.js, HTML, Tailwind CSS), Backend Development (Node.js, Express.js, Laravel), Database Management (SQL, MongoDB), and API Integration.";
        } else if (lowerMessage.includes('project')) {
          response = "John has worked on various projects including e-commerce platforms, task management apps, and weather dashboards. You can view his projects in the Projects section of this portfolio.";
        } else if (lowerMessage.includes('contact')) {
          response = "You can contact John through the Contact section. His email is johnfritzizar35@gmail.com and phone is +63 956 487 4933.";
        } else if (lowerMessage.includes('education')) {
          response = "John studied Bachelor of Science in Computer Science at Asian Institute of Computer Studies from 2016 to 2020.";
        } else if (lowerMessage.includes('resume') || lowerMessage.includes('cv')) {
          response = "You can download John's CV from the Home section. Look for the 'Download CV' button.";
        } else {
          response = "I'm not sure how to answer that. You can ask me about John's experience, skills, projects, education, or how to contact him.";
        }
        
        this.messages.push({
          type: 'bot',
          text: response
        });
        
        // Scroll to bottom
        this.$nextTick(() => {
          this.scrollToBottom();
        });
      }, 1000);
    },
    scrollToBottom() {
      const chatBody = this.$refs.chatBody;
      chatBody.scrollTop = chatBody.scrollHeight;
    }
  }
}
</script>

<style scoped>
/* Enhanced AI Chatbot Styles */
.ai-chatbot {
  position: fixed;
  bottom: 100px;
  right: 20px;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(0, 212, 255, 0.4);
  z-index: 100;
  transition: all 0.3s ease;
  transform-style: preserve-3d;
  transform: translateZ(0);
  border-radius: 0;
}

.ai-chatbot:hover {
  transform: scale(1.1) translateZ(20px);
  box-shadow: 0 6px 25px rgba(0, 212, 255, 0.6);
}

.ai-chatbot-window {
  position: fixed;
  bottom: 170px;
  right: 20px;
  width: 350px;
  height: 450px;
  background: rgba(10, 10, 10, 0.9);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 212, 255, 0.3);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 100;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(20px);
  pointer-events: none;
  border-radius: 0;
  transform-style: preserve-3d;
}

.ai-chatbot-window.active {
  opacity: 1;
  transform: translateY(0) translateZ(20px);
  pointer-events: all;
}

.ai-chatbot-header {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0;
}

.ai-chatbot-title {
  color: #fff;
  font-family: 'Orbitron', sans-serif;
  font-weight: 600;
  font-size: 16px;
}

.ai-chatbot-close {
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  line-height: 1;
}

.ai-chatbot-body {
  flex: 1;
  padding: 15px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.ai-chatbot-message {
  max-width: 80%;
  padding: 10px 15px;
  border-radius: 0;
  font-size: 14px;
  line-height: 1.4;
}

.ai-chatbot-message.user {
  background: rgba(0, 212, 255, 0.2);
  align-self: flex-end;
  border-bottom-right-radius: 0;
}

.ai-chatbot-message.bot {
  background: rgba(255, 255, 255, 0.1);
  align-self: flex-start;
  border-bottom-left-radius: 0;
}

.ai-chatbot-input-container {
  padding: 15px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  gap: 10px;
}

.ai-chatbot-input {
  flex: 1;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0;
  padding: 10px 15px;
  color: #fff;
  font-size: 14px;
  outline: none;
}

.ai-chatbot-input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.ai-chatbot-send {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  border: none;
  border-radius: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #fff;
}

/* Typing Effect */
.typing-effect {
  display: inline-block;
  overflow: hidden;
  border-right: 2px solid var(--primary-color);
  white-space: nowrap;
  animation: typing 3s steps(30, end), blink-caret 0.75s step-end infinite;
}

@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes blink-caret {
  from, to { border-color: transparent; }
  50% { border-color: var(--primary-color); }
}

/* Responsive adjustments for smaller screens */
@media (max-width: 480px) {
  .ai-chatbot-window {
    width: 90%;
    right: 5%;
    left: 5%;
  }
}
</style>