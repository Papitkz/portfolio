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
      assistantId: "butterflyeffect-3a0f6b4e" // Your assistant ID
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
        // Prepare the payload for Monica AI API
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

        // Call Monica AI API
        const response = await axios.post('https://leaves.mintlify.com/api/assistant/butterflyeffect-3a0f6b4e/message', payload);

        const data = response.data;
        console.log("API Response:", data);

        // Process the response to extract message parts
        let botMessage = this.processMonicaResponse(data);

        // Replace "Monica" with "Miku" in the response
        botMessage = botMessage.replace(/Monica/g, 'Miku');

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
  bottom: 50px;
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