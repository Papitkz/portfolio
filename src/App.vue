<template>
  <div class="gradient-bg">
    <!-- Background Music Player -->
    <audio ref="backgroundMusic" loop>
      <source :src="currentTrack" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>

    <!-- Rest of the template remains the same -->
    <div class="dynamic-bg"></div>
    <div class="animated-grid"></div>
     <button 
      @click="toggleMusic" 
      class="mb-2 fixed bottom-8 right-8 glass-effect p-3 rounded-full shadow-lg hover:bg-cyan-400/20 transition-all duration-300 z-50 transform hover:scale-110"
      aria-label="Toggle music"
    >
      <svg v-if="isMusicPlaying" class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <svg v-else class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </button>
    
    <!-- Rest of the template remains the same -->
    <!-- Binary Rain Effect - Reduced particles for performance -->
    <div class="binary-rain">
      <span v-for="i in 10" :key="i" class="binary-digit" :style="{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${5 + Math.random() * 10}s`
      }">{{ Math.random() > 0.5 ? '1' : '0' }}</span>
    </div>
    
    <!-- Circuit Board Effect -->
    <svg class="circuit-board" viewBox="0 0 1200 800">
      <path class="circuit-line" d="M0,400 Q300,200 600,400 T1200,400" />
      <path class="circuit-line" d="M0,600 Q300,400 600,600 T1200,600" />
      <circle class="circuit-node" cx="300" cy="300" r="4" />
      <circle class="circuit-node" cx="600" cy="400" r="4" />
      <circle class="circuit-node" cx="900" cy="500" r="4" />
    </svg>
    
    <!-- Enhanced Loading Overlay -->
    <div class="loading-overlay" :class="{ 'hidden': !isLoading }">
      <div class="loader-container">
        <div class="loader">
          <div class="loader-circle"></div>
          <div class="loader-circle"></div>
          <div class="loader-circle"></div>
        </div>
        <div class="loader-text">LOADING PORTFOLIO</div>
      </div>
    </div>
    
    <!-- Page Transition -->
    <div class="page-transition" :class="{ 'active': isPageTransitioning }"></div>
    
    <!-- Enhanced Glass Navigation -->
    <nav class="fixed w-full glass-nav z-50 transition-all duration-300" :class="{ 'shadow-lg': scrolled }">
      <div class="container mx-auto px-6 py-4">
        <div class="flex justify-between items-center">
          <div class="text-2xl font-bold text-cyan-400 flex items-center" style="font-family: 'Orbitron', sans-serif; letter-spacing: 2px;">
            <span class="glow-text">JFI</span>
            <span class="ml-2 text-xs px-2 py-1 bg-cyan-900/50 rounded-full text-cyan-300">FULL STACK</span>
          </div>
          
          <div class="hidden md:flex space-x-8">
            <a 
              v-for="(item, index) in navItems" 
              :key="item.name"
              :href="item.href" 
              class="nav-link nav-link-enhanced relative group" 
              :class="{ 'active': activeSection === item.section }"
              @click="handleNavClick($event, item.section, item.href)"
              ref="navLinks"
            >
              <span class="relative z-10">{{ item.name }}</span>
              <div class="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full"></div>
            </a>
          </div>
          
          <button @click="toggleMobileMenu" class="md:hidden text-cyan-400 p-2 rounded-lg glass-effect">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        <!-- Mobile Menu -->
        <div v-if="mobileMenuOpen" class="md:hidden mt-4 pb-4 glass-menu rounded-xl p-4">
          <a 
            v-for="item in navItems" 
            :key="item.name"
            :href="item.href" 
            class="block py-3 px-4 rounded-lg nav-link nav-link-enhanced relative mb-2" 
            :class="{ 'active': activeSection === item.section }"
            @click="handleNavClick($event, item.section, item.href)"
          >
            <span class="relative z-10">{{ item.name }}</span>
          </a>
        </div>
      </div>
    </nav>
    
    <!-- Main Content -->
    <main>
      <HomeSection  :isMusicPlaying="isMusicPlaying"/>
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectSection />
      <ContactSection />
    </main>
    
    <!-- Enhanced Footer -->
    <footer class="glass-footer border-t border-cyan-900/30 py-8">
      <div class="container mx-auto px-6">
        <div class="flex flex-col items-center">
          <!-- Social Media Icons -->
          <div class="flex space-x-6 mb-6">
            <a href="https://t.me" target="_blank" class="social-icon social-icon-enhanced glass-effect p-3 rounded-full">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16l-1.696 7.99c-.126.572-.463.712-.935.442l-2.584-1.904-1.247 1.2c-.138.138-.254.254-.52.254l.184-2.65 4.788-4.33c.208-.184-.048-.288-.322-.104l-5.914 3.72-2.55-.796c-.554-.176-.564-.554-.116-.82l9.968-3.84c.464-.176.87.103.72.82z"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" class="social-icon social-icon-enhanced glass-effect p-3 rounded-full">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-4.358-.2-6.78-2.618-6.98-6.98-.059-1.281-.073-1.689-.073-4.849 0-3.204.013-3.583.07-4.849.2-4.358 2.618-6.78 6.98-6.98 1.281-.059 1.69-.073 4.949-.073zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" class="social-icon social-icon-enhanced glass-effect p-3 rounded-full">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" class="social-icon social-icon-enhanced glass-effect p-3 rounded-full">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="https://whatsapp.me" target="_blank" class="social-icon social-icon-enhanced glass-effect p-3 rounded-full">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.347-.497.298-.248-.05-.517-.075-.824-.075-.307 0-.8.115-1.22.573-.42.459-1.6 1.566-1.6 3.816 0 2.25 1.64 4.425 1.869 4.734.229.309 3.219 4.917 7.799 6.89.975.421 1.737.672 2.331.86.98.311 1.872.267 2.576.162.787-.116 2.42-.99 2.76-1.946.34-.956.34-1.775.238-1.946-.102-.171-.372-.27-.782-.472z"/>
              </svg>
            </a>
          </div>
          <p class="text-gray-400 text-sm">&copy; {{ new Date().getFullYear() }} John Fritz Izar. All rights reserved.</p>
        </div>
      </div>
    </footer>
    
    <!-- Straight Marquee at Bottom -->
    <div class="marquee-container glass-marquee">
      <div class="marquee">
        <div class="marquee-content">
          <div class="marquee-item">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
            FULL STACK DEVELOPER
          </div>
          <div class="marquee-item">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 101.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clip-rule="evenodd" />
            </svg>
            VUE.JS | NODE.JS | EXPRESS.JS
          </div>
          <div class="marquee-item">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 101.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clip-rule="evenodd" />
            </svg>
            SQL | MONGODB | TAILWIND CSS
          </div>
          <div class="marquee-item">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" />
            </svg>
            API INTEGRATION | RESTful APIS
          </div>
          <!-- Duplicate for seamless loop -->
          <div class="marquee-item">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
            FULL STACK DEVELOPER
          </div>
          <div class="marquee-item">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 101.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clip-rule="evenodd" />
            </svg>
            VUE.JS | NODE.JS | EXPRESS.JS
          </div>
          <div class="marquee-item">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 101.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clip-rule="evenodd" />
            </svg>
            SQL | MONGODB | TAILWIND CSS
          </div>
          <div class="marquee-item">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" />
            </svg>
            API INTEGRATION | RESTful APIS
          </div>
        </div>
      </div>
    </div>
    
    <!-- Back to Top Button -->
        <!-- v-show="showBackToTop"  -->

    <button 
      @click="scrollToTop" 
      class="fixed bottom-24 right-8 glass-effect p-3 rounded-full shadow-lg hover:bg-cyan-400/20 transition-all duration-300 z-50 transform hover:scale-110"
      aria-label="Back to top"
    >
      <svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
      </svg>
    </button>
    
    <!-- AI Miku Assistant -->
    <AiMikuAssistant />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import HomeSection from './components/HomeSection.vue';
import AboutSection from './components/AboutSection.vue';
import ExperienceSection from './components/ExperienceSection.vue';
import EducationSection from './components/EducationSection.vue';
import ProjectSection from './components/ProjectsSection.vue';
import ContactSection from './components/ContactSection.vue';
import AiMikuAssistant from './components/AiMikuAssistant.vue';

const mobileMenuOpen = ref(false);
const scrolled = ref(false);
const showBackToTop = ref(false);
const isLoading = ref(true);
const isPageTransitioning = ref(false);
const activeSection = ref('home');
const navLinks = ref([]);
const backgroundMusic = ref(null);
const isMusicPlaying = ref(false);
const currentTrack = ref('');

// Array of background music tracks
const musicTracks = [
  new URL('./music/F1.mp3', import.meta.url).href,
  new URL('./music/F2.mp3', import.meta.url).href,
  new URL('./music/F3.mp3', import.meta.url).href,
  new URL('./music/F4.mp3', import.meta.url).href,
  new URL('./music/F5.mp3', import.meta.url).href
];

const navItems = [
  { name: 'Home', section: 'home', href: '#home' },
  { name: 'About', section: 'about', href: '#about' },
  { name: 'Experience', section: 'experience', href: '#experience' },
  { name: 'Education', section: 'education', href: '#education' },
  { name: 'Projects', section: 'projects', href: '#projects' },
  { name: 'Contact', section: 'contact', href: '#contact' }
];

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

// Function to select a random track
const selectRandomTrack = () => {
  const randomIndex = Math.floor(Math.random() * musicTracks.length);
  return musicTracks[randomIndex];
};

const toggleMusic = () => {
  if (!backgroundMusic.value) return;
  
  if (isMusicPlaying.value) {
    backgroundMusic.value.pause();
    isMusicPlaying.value = false;
  } else {
    // Select a new random track each time music is turned on
    currentTrack.value = selectRandomTrack();
    
    // We need to reload the audio element when changing the source
    backgroundMusic.value.load();
    
    backgroundMusic.value.play().then(() => {
      isMusicPlaying.value = true;
    }).catch(error => {
      console.error("Playback failed:", error);
      isMusicPlaying.value = false;
    });
  }
};

const createRipple = (event, element) => {
  const ripple = document.createElement('span');
  ripple.classList.add('nav-ripple');
  
  const rect = element.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;
  
  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';
  
  element.appendChild(ripple);
  
  setTimeout(() => {
    ripple.remove();
  }, 600);
};

const handleNavClick = (event, section, href) => {
  event.preventDefault();
  mobileMenuOpen.value = false;
  
  // Create ripple effect
  if (event.target.classList.contains('nav-link')) {
    createRipple(event, event.target);
  }
  
  // Update active section
  activeSection.value = section;
  
  // Trigger page transition
  isPageTransitioning.value = true;
  
  // Smooth scroll to section after transition
  setTimeout(() => {
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    
    // End page transition
    setTimeout(() => {
      isPageTransitioning.value = false;
    }, 400);
  }, 400);
};

const scrollToTop = () => {
  // Trigger page transition
  isPageTransitioning.value = true;
  
  setTimeout(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // End page transition
    setTimeout(() => {
      isPageTransitioning.value = false;
    }, 400);
  }, 400);
};

// Debounced scroll handler for better performance
let scrollTimeout;
const handleScroll = () => {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    scrolled.value = window.scrollY > 10;
    showBackToTop.value = window.scrollY > 300;
    
    // Update active section based on scroll position
    const sections = navItems.map(item => item.section);
    const scrollPosition = window.scrollY + 100;
    
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;
        
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          activeSection.value = section;
          break;
        }
      }
    }
  }, 10);
};

// Optimized scroll animations
const initScrollAnimations = () => {
  const animatedElements = document.querySelectorAll('.animate-on-scroll, .fade-in-up, .fade-in-down, .fade-in-left, .fade-in-right, .zoom-in, .rotate-in');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        
        if (entry.target.classList.contains('stagger-children')) {
          const children = entry.target.children;
          for (let i = 0; i < children.length; i++) {
            setTimeout(() => {
              children[i].classList.add('visible');
            }, i * 100);
          }
        }
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  animatedElements.forEach(element => {
    observer.observe(element);
  });
};

// Optimized digit animations
const initDigitAnimations = () => {
  const digitElements = document.querySelectorAll('.digit-animate');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const targetValue = parseInt(element.getAttribute('data-target'));
        const duration = parseInt(element.getAttribute('data-duration')) || 2000;
        const suffix = element.getAttribute('data-suffix') || '';
        
        let startValue = 0;
        const increment = targetValue / (duration / 16);
        
        const updateCounter = () => {
          startValue += increment;
          if (startValue < targetValue) {
            element.textContent = Math.ceil(startValue) + suffix;
            requestAnimationFrame(updateCounter);
          } else {
            element.textContent = targetValue + suffix;
          }
        };
        
        updateCounter();
        observer.unobserve(element);
      }
    });
  }, {
    threshold: 0.5
  });
  
  digitElements.forEach(element => {
    observer.observe(element);
  });
};

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 1500);
  
  window.addEventListener('scroll', handleScroll, { passive: true });
  initScrollAnimations();
  initDigitAnimations();
  
  // Store nav links references
  navLinks.value = document.querySelectorAll('.nav-link');
  
  // Initialize background music with a random track
  if (backgroundMusic.value) {
    // Set initial random track
    currentTrack.value = selectRandomTrack();
    
    // Set volume to a reasonable level (0.3 = 30%)
    backgroundMusic.value.volume = 0.3;
    
    // Try to autoplay (might be blocked by browser)
    backgroundMusic.value.play().then(() => {
      isMusicPlaying.value = true;
    }).catch(error => {
      console.log("Autoplay prevented:", error);
      // Music will play when user clicks the play button
    });
  }
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  
  // Pause music when component is unmounted
  if (backgroundMusic.value && isMusicPlaying.value) {
    backgroundMusic.value.pause();
  }
});
</script>

<!-- Styles remain the same as in the original code -->
<style>
/* Enhanced Loading Overlay */
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  transition: opacity 0.8s, visibility 0.8s;
}
.loading-overlay.hidden {
  opacity: 0;
  visibility: hidden;
}
.loader-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.loader {
  position: relative;
  width: 120px;
  height: 120px;
  margin-bottom: 20px;
}
.loader-circle {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #00d4ff;
  animation: spin 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
}
.loader-circle:nth-child(2) {
  width: 80%;
  height: 80%;
  top: 10%;
  left: 10%;
  border-top-color: #ff00ff;
  animation-delay: 0.2s;
}
.loader-circle:nth-child(3) {
  width: 60%;
  height: 60%;
  top: 20%;
  left: 20%;
  border-top-color: #00ff88;
  animation-delay: 0.4s;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.loader-text {
  font-family: 'Orbitron', sans-serif;
  font-size: 14px;
  letter-spacing: 2px;
  color: #00d4ff;
  animation: pulse 1.5s infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
}

/* Enhanced Glass Effects */
.glass-nav {
  background: linear-gradient(135deg, rgba(10, 10, 10, 0.7) 0%, rgba(26, 26, 26, 0.7) 100%);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 212, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}
.glass-menu {
  background: linear-gradient(135deg, rgba(10, 10, 10, 0.8) 0%, rgba(26, 26, 26, 0.8) 100%);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 212, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}
.glass-footer {
  background: linear-gradient(135deg, rgba(10, 10, 10, 0.7) 0%, rgba(26, 26, 26, 0.7) 100%);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-top: 1px solid rgba(0, 212, 255, 0.2);
}
.glass-marquee {
  background: linear-gradient(135deg, rgba(10, 10, 10, 0.8) 0%, rgba(26, 26, 26, 0.8) 100%);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-top: 1px solid rgba(0, 212, 255, 0.3);
}
.glass-effect {
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.05) 0%, rgba(255, 0, 255, 0.05) 100%);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 212, 255, 0.2);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}
.glass-effect::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s;
}
.glass-effect:hover::before {
  transform: translateX(100%);
}
.glass-effect:hover {
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(255, 0, 255, 0.1) 100%);
  border-color: rgba(0, 212, 255, 0.4);
  box-shadow: 0 8px 30px rgba(0, 212, 255, 0.2);
  transform: translateY(-2px);
}

/* Enhanced Navigation */
.nav-link {
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  padding: 0.5rem 0;
  font-family: 'Orbitron', sans-serif;
  letter-spacing: 1px;
}
.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #00d4ff, #ff00ff);
  transition: width 0.3s ease;
}
.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}
.nav-link.active {
  color: #00d4ff;
  text-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
}

/* Glowing Text Effect */
.glow-text {
  text-shadow: 0 0 10px rgba(0, 212, 255, 0.7);
}

/* Social Icons */
.social-icon {
  @apply text-gray-400 transition-all duration-300 transform hover:scale-125 hover:text-cyan-400;
}

/* Enhanced animations */
.float-animation {
  animation: float 6s ease-in-out infinite;
}
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

/* Enhanced button effects */
.btn {
  position: relative;
  overflow: hidden;
  z-index: 1;
}
.btn::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 5px;
  height: 5px;
  background: rgba(255, 255, 255, 0.5);
  opacity: 0;
  border-radius: 100%;
  transform: scale(1, 1) translate(-50%);
  transform-origin: 50% 50%;
}
.btn:focus:not(:active)::after {
  animation: ripple 1s ease-out;
}
@keyframes ripple {
  0% {
    transform: scale(0, 0);
    opacity: 0.5;
  }
  100% {
    transform: scale(100, 100);
    opacity: 0;
  }
}

/* Enhanced timeline for mobile */
@media (max-width: 767px) {
  .timeline-line {
    left: 20px;
  }
  
  .timeline-dot {
    left: 20px;
    transform: translateX(-50%);
  }
  
  .timeline-content {
    margin-left: 50px;
  }
}

/* Updated Marquee Styles - Straight and at Bottom */
.marquee-container {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  z-index: 50;
  background: rgba(10, 10, 10, 0.8);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-top: 1px solid rgba(0, 212, 255, 0.3);
}
.marquee {
  display: flex;
  animation: marquee 20s linear infinite;
  white-space: nowrap;
}
.marquee-content {
  display: flex;
  padding: 10px 0;
}
.marquee-item {
  display: flex;
  align-items: center;
  margin-right: 50px;
  color: #00d4ff;
  font-family: 'Orbitron', sans-serif;
  font-weight: 600;
  letter-spacing: 1px;
}
.marquee-item svg {
  margin-right: 8px;
}
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* Enhanced Digit Animations */
.digit-animate {
  font-family: 'Orbitron', sans-serif;
  font-weight: 700;
  background: linear-gradient(90deg, #00d4ff, #ff00ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;
  position: relative;
}

.digit-animate::before {
  content: attr(data-target);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #ff00ff, #00d4ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;
}

.digit-animate:hover::before {
  opacity: 1;
  transform: translateY(0);
}

.digit-animate:hover {
  transform: translateY(-5px);
  text-shadow: 0 5px 15px rgba(0, 212, 255, 0.5);
}

/* Enhanced Digit Container */
.digit-container {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.digit-container .digit {
  display: inline-block;
  font-family: 'Orbitron', sans-serif;
  font-weight: 700;
  font-size: 3rem;
  background: linear-gradient(90deg, #00d4ff, #ff00ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  transition: all 0.3s ease;
  animation: digitPulse 2s infinite alternate;
}

.digit-container .digit:nth-child(odd) {
  animation-delay: 0.1s;
}

.digit-container .digit:nth-child(even) {
  animation-delay: 0.2s;
}

@keyframes digitPulse {
  0% {
    transform: translateY(0) scale(1);
    text-shadow: 0 0 5px rgba(0, 212, 255, 0.5);
  }
  100% {
    transform: translateY(-5px) scale(1.05);
    text-shadow: 0 0 20px rgba(0, 212, 255, 0.8);
  }
}

.digit-container .digit:hover {
  transform: translateY(-10px) scale(1.1);
  text-shadow: 0 10px 25px rgba(0, 212, 255, 0.8);
}

.digit-container .digit::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #00d4ff, #ff00ff);
  border-radius: 3px;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.digit-container .digit:hover::after {
  transform: scaleX(1);
}

/* Enhanced Digit Separator */
.digit-separator {
  font-family: 'Orbitron', sans-serif;
  font-weight: 700;
  font-size: 2.5rem;
  color: #00d4ff;
  margin: 0 0.2rem;
  animation: separatorPulse 2s infinite alternate;
}

@keyframes separatorPulse {
  0%, 100% {
    opacity: 0.5;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}

/* Enhanced Digit Label */
.digit-label {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: #a0a0a0;
  margin-top: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: color 0.3s ease;
}

.digit-container:hover + .digit-label {
  color: #00d4ff;
}

/* Enhanced Digit Card */
.digit-card {
  background: rgba(188, 72, 72, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.digit-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, rgba(1, 185, 10, 0.1), transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.digit-card:hover::before {
  opacity: 1;
}

.digit-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 212, 255, 0.3);
  border-color: rgba(0, 212, 255, 0.5);
}
</style>