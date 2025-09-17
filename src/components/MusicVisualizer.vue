<template>
  <div v-if="isPlaying" class="music-visualizer">
    <div class="visualizer-container">
      <div 
        v-for="i in particleCount" 
        :key="i" 
        class="visualizer-particle"
        :style="getParticleStyle(i)"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isPlaying: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      particleCount: 100,
      animationInterval: null
    }
  },
  methods: {
    getParticleStyle(index) {
      const seed = index * 7.3; // Arbitrary seed for consistency
      const random = this.pseudoRandom(seed)
      
      return {
        left: `${random * 100}%`,
        top: `${random * 100}%`,
        width: `${2 + random * 6}px`,
        height: `${2 + random * 6}px`,
        animationDelay: `${random * 3}s`,
        animationDuration: `${3 + random * 7}s`,
        background: this.getParticleGradient(random),
        borderRadius: '50%',
        opacity: 0.2 + random * 0.8
      }
    },
    pseudoRandom(seed) {
      // Deterministic pseudo-random number generator
      const x = Math.sin(seed) * 10000
      return x - Math.floor(x)
    },
    getParticleGradient(random) {
      const hue = 180 + random * 60 // Cyan to purple range
      
      return `radial-gradient(circle, hsla(${hue}, 100%, 70%, 0.8), hsla(${hue}, 100%, 70%, 0))`
    },
    startAnimation() {
      if (this.animationInterval) return
      
      this.animationInterval = setInterval(() => {
        // Update particles periodically to simulate music reaction
        const particles = document.querySelectorAll('.visualizer-particle')
        if (particles.length === 0) return
        
        particles.forEach((particle, index) => {
          const seed = index * 7.3 + Date.now() / 1000
          const random = this.pseudoRandom(seed)
          
          // Update position to create movement
          const newLeft = random * 100
          const newTop = random * 100
          const newSize = 2 + random * 6
          
          particle.style.left = `${newLeft}%`
          particle.style.top = `${newTop}%`
          particle.style.width = `${newSize}px`
          particle.style.height = `${newSize}px`
          
          // Add a pulse effect
          particle.style.transform = `scale(${0.8 + random * 0.4})`
        })
      }, 150)
    },
    stopAnimation() {
      if (this.animationInterval) {
        clearInterval(this.animationInterval)
        this.animationInterval = null
      }
    }
  },
  mounted() {
    if (this.isPlaying) {
      this.startAnimation()
    }
  },
  watch: {
    isPlaying(newVal) {
      if (newVal) {
        this.startAnimation()
      } else {
        this.stopAnimation()
      }
    }
  },
  beforeUnmount() {
    this.stopAnimation()
  }
}
</script>

<style scoped>
.music-visualizer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;
  opacity: 0.8;
  mix-blend-mode: screen;
}

.visualizer-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.visualizer-particle {
  position: absolute;
  border-radius: 50%;
  animation: particle-float infinite ease-in-out;
  will-change: transform, opacity;
  box-shadow: 0 0 10px currentColor;
}

@keyframes particle-float {
  0% {
    transform: translate(0, 0) scale(0.5);
    opacity: 0.2;
  }
  50% {
    transform: translate(0, -20px) scale(1);
    opacity: 0.8;
  }
  100% {
    transform: translate(0, 0) scale(0.5);
    opacity: 0.2;
  }
}
</style>