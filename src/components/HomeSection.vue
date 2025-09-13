<template>
  <section id="home" class="min-h-screen flex items-center gradient-bg text-white relative overflow-hidden section-transition">
    <!-- Enhanced Background elements -->
    <div class="bg-blob blob-1"></div>
    <div class="bg-blob blob-2"></div>
    <div class="absolute inset-0 grid-bg opacity-10"></div>
    
    <!-- Animated particles -->
    <div class="absolute inset-0 overflow-hidden">
      <div v-for="i in 15" :key="i" class="home-particle" 
           :style="{
             animationDelay: `${i * 0.5}s`,
             left: `${Math.random() * 100}%`
           }"></div>
    </div>
    
    <div class="container mx-auto px-6 relative z-10">
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 mb-10 md:mb-0 animate-on-scroll fade-in-up">
          <h1 class="glitch text-5xl md:text-7xl mb-6" data-text="JOHN FRITZ IZAR">JOHN FRITZ IZAR</h1>
          <h2 class="text-2xl md:text-3xl font-light mb-6 text-cyan-400" style="font-family: 'Orbitron', sans-serif; letter-spacing: 2px;">FULL STACK DEVELOPER</h2>
          <p class="text-lg mb-8 max-w-lg text-gray-300">
            Crafting digital experiences with cutting-edge technology and innovative solutions. Specialized in creating robust, scalable web applications.
          </p>
          <div class="flex flex-wrap gap-4">
            <a href="#experience" class="btn btn-enhanced btn-primary">View Experience</a>
            <a href="#contact" class="btn btn-enhanced btn-outline">Contact Me</a>
          </div>
        </div>
        <div class="md:w-1/2 flex justify-center animate-on-scroll fade-in-up" style="animation-delay: 0.2s">
          <div class="relative">
            <div class="w-64 h-64 md:w-80 md:h-80 overflow-hidden border-4 border-cyan-400 float-animation card card-enhanced hover-glow-enhanced hover-3d">
              <img src="../assets/Fritz.png" alt="Profile" class="w-full h-full object-cover">
            </div>
            <div class="absolute -bottom-4 -right-4 bg-cyan-400 text-gray-900 p-4 animate-pulse">
              <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Scroll indicator -->
      <div class="scroll-indicator">
        <svg class="w-8 h-8 text-cyan-400 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  </section>
</template>