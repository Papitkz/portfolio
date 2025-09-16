<template>
  <div class="code-snippet-container" :class="{ 'hidden': !isVisible }">
    <button 
      @click="toggleSnippet" 
      class="snippet-toggle-btn glass-effect"
      :class="{ 'collapsed': !isVisible }"
      aria-label="Toggle code snippet"
    >
      <svg v-if="isVisible" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
      <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
      </svg>
    </button>
    
    <div class="code-editor glass-effect" :class="{ 'collapsed': !isVisible }">
      <div class="editor-header">
        <div class="editor-controls">
          <span class="control close"></span>
          <span class="control minimize"></span>
          <span class="control maximize"></span>
        </div>
        <div class="editor-title">portfolio.js</div>
      </div>
      <div class="editor-content" v-show="isVisible">
        <pre><code class="language-javascript" v-html="highlightedCode"></code></pre>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import { isLowEndDevice } from '../utils/performance';

export default {
  setup() {
    const isVisible = ref(true);
    const codeLines = [
      `class FullStackDeveloper {`,
      `  constructor() {`,
      `    this.skills = ['Vue.js', 'Node.js', 'Express.js', 'MongoDB'];`,
      `    this.experience = '4+ years';`,
      `  }`,
      ``,
      `  createAmazingApps() {`,
      `    return 'High-performance, scalable applications';`,
      `  }`,
      ``,
      `  solveComplexProblems() {`,
      `    return 'Innovative solutions with clean code';`,
      `  }`,
      `}`,
      ``,
      `const developer = new FullStackDeveloper();`,
      `developer.buildPortfolio();`,
    ];

    const currentLine = ref(0);
    const highlightedCode = ref('');
    let animationSpeed = isLowEndDevice() ? 300 : 150; // Slower on low-end devices

    const updateCode = () => {
      if (!isVisible.value) return; // Don't update if hidden
      
      const visibleLines = Math.min(currentLine.value + 1, codeLines.length);
      highlightedCode.value = codeLines.slice(0, visibleLines).join('\n');
      
      if (currentLine.value < codeLines.length - 1) {
        currentLine.value++;
      } else {
        // Reset after a pause
        setTimeout(() => {
          currentLine.value = 0;
          highlightedCode.value = '';
        }, 3000);
      }
    };

    const toggleSnippet = () => {
      isVisible.value = !isVisible.value;
      
      // Resume animation when showing
      if (isVisible.value) {
        currentLine.value = 0;
        highlightedCode.value = '';
      }
    };

    let interval;
    onMounted(() => {
      // Use requestIdleCallback for non-critical animations
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          interval = setInterval(updateCode, animationSpeed);
        }, { timeout: 2000 });
      } else {
        // Fallback for browsers that don't support requestIdleCallback
        setTimeout(() => {
          interval = setInterval(updateCode, animationSpeed);
        }, 1000);
      }
    });

    onUnmounted(() => {
      clearInterval(interval);
    });

    return {
      isVisible,
      highlightedCode,
      toggleSnippet,
    };
  },
};
</script>

<style scoped>
/* Code Snippet Container */
.code-snippet-container {
  position: fixed;
  bottom: 80px;
  left: 20px;
  width: 520px;
  z-index: 40;
  transition: all 0.3s ease;
  transform-style: preserve-3d;
}

.code-snippet-container.hidden {
  transform: translateX(-280px);
}

.snippet-toggle-btn {
  position: absolute;
  right: -40px;
  top: 20px;
  width: 36px;
  height: 36px;
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(255, 0, 255, 0.2));
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 212, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #00d4ff;
  transition: all 0.3s ease;
  cursor: pointer;
  z-index: 41;
  border-radius: 0;
}

.snippet-toggle-btn:hover {
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.3), rgba(255, 0, 255, 0.3));
  border-color: rgba(0, 212, 255, 0.5);
  transform: scale(1.05) translateZ(10px);
}

.snippet-toggle-btn.collapsed {
  right: -36px;
  border-radius: 0;
}

.code-editor {
  background: #1e1e1e;
  border-radius: 0;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(0, 212, 255, 0.3);
  transition: all 0.3s ease;
  transform-style: preserve-3d;
  transform: translateZ(0);
}

.code-editor.collapsed {
  border-radius: 0;
}

.editor-header {
  background: #2d2d2d;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #444;
  border-radius: 0;
}

.editor-controls {
  display: flex;
  gap: 6px;
}

.control {
  width: 12px;
  height: 12px;
  border-radius: 0;
}

.close {
  background: #ff5f56;
}

.minimize {
  background: #ffbd2e;
}

.maximize {
  background: #27c93f;
}

.editor-title {
  margin-left: auto;
  color: #999;
  font-family: 'Courier New', monospace;
  font-size: 12px;
}

.editor-content {
  padding: 16px;
  font-family: 'Courier New', monospace;
  font-size: 13px;
  line-height: 1.5;
  color: #f8f8f2;
  max-height: 300px;
  overflow-y: auto;
  border-radius: 0;
}

.editor-content::-webkit-scrollbar {
  width: 6px;
}

.editor-content::-webkit-scrollbar-track {
  background: #2d2d2d;
}

.editor-content::-webkit-scrollbar-thumb {
  background: #555;
  border-radius: 0;
}

.language-javascript {
  color: #f8f8f2;
}

/* Syntax highlighting */
.language-javascript .keyword {
  color: #66d9ef;
}

.language-javascript .string {
  color: #a6e22e;
}

.language-javascript .function {
  color: #f92672;
}

.language-javascript .comment {
  color: #75715e;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.language-javascript::after {
  content: '|';
  color: #f8f8f2;
  animation: blink 1s infinite;
  margin-left: 2px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .code-snippet-container {
    width: 280px;
    bottom: 70px;
  }
  
  .code-snippet-container.hidden {
    transform: translateX(-240px);
  }
  
  .snippet-toggle-btn {
    right: -36px;
    width: 32px;
    height: 32px;
  }
  
  .snippet-toggle-btn.collapsed {
    right: -32px;
  }
}
</style>