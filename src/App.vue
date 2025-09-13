<template>
  <div class="gradient-bg">
    <!-- Dynamic Background -->
    <div class="dynamic-bg"></div>
    <div class="animated-grid"></div>
    
    <!-- Loading Overlay -->
    <div class="loading-overlay" :class="{ 'hidden': !isLoading }">
      <div class="loading-spinner"></div>
    </div>
    
    <!-- Page Transition -->
    <div class="page-transition" :class="{ 'active': isPageTransitioning }"></div>
    
    <!-- Custom Cursor -->
    <div class="cursor"></div>
    <div class="cursor-follower"></div>
    
    <!-- Navigation -->
    <nav class="fixed w-full bg-gray-900/90 backdrop-blur-md z-50 transition-all duration-300" :class="{ 'shadow-lg': scrolled }">
      <div class="container mx-auto px-6 py-4">
        <div class="flex justify-between items-center">
          <div class="text-2xl font-bold text-cyan-400" style="font-family: 'Orbitron', sans-serif; letter-spacing: 2px;">JFI</div>
          
          <div class="hidden md:flex space-x-8">
            <a 
              v-for="(item, index) in navItems" 
              :key="item.name"
              :href="item.href" 
              class="nav-link nav-link-enhanced relative" 
              :class="{ 'active': activeSection === item.section }"
              @click="handleNavClick($event, item.section, item.href)"
              ref="navLinks"
            >
              {{ item.name }}
            </a>
          </div>
          
          <button @click="toggleMobileMenu" class="md:hidden text-cyan-400">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        <!-- Mobile Menu -->
        <div v-if="mobileMenuOpen" class="md:hidden mt-4 pb-4">
          <a 
            v-for="item in navItems" 
            :key="item.name"
            :href="item.href" 
            class="block py-2 nav-link nav-link-enhanced relative" 
            :class="{ 'active': activeSection === item.section }"
            @click="handleNavClick($event, item.section, item.href)"
          >
            {{ item.name }}
          </a>
        </div>
      </div>
    </nav>
    
    <!-- Main Content -->
    <main>
      <HomeSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectSection />
      <ContactSection />
    </main>
    
    <!-- Footer -->
    <footer class="bg-gray-900 border-t border-gray-800 py-8">
      <div class="container mx-auto px-6">
        <div class="flex flex-col items-center">
          <!-- Social Media Icons -->
          <div class="flex space-x-6 mb-6">
            <a href="https://t.me" target="_blank" class="social-icon social-icon-enhanced">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16l-1.696 7.99c-.126.572-.463.712-.935.442l-2.584-1.904-1.247 1.2c-.138.138-.254.254-.52.254l.184-2.65 4.788-4.33c.208-.184-.048-.288-.322-.104l-5.914 3.72-2.55-.796c-.554-.176-.564-.554-.116-.82l9.968-3.84c.464-.176.87.103.72.82z"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" class="social-icon social-icon-enhanced">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.281-.073-1.689-.073-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" class="social-icon social-icon-enhanced">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" class="social-icon social-icon-enhanced">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="https://wa.me" target="_blank" class="social-icon social-icon-enhanced">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>
          </div>
          <p class="text-gray-400">&copy; {{ new Date().getFullYear() }} John Fritz Izar. All rights reserved.</p>
        </div>
      </div>
    </footer>
    
    <!-- Marquee -->
    <div class="marquee-container">
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
              <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
            VUE.JS | NODE.JS | EXPRESS.JS
          </div>
          <div class="marquee-item">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clip-rule="evenodd" />
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
              <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
            VUE.JS | NODE.JS | EXPRESS.JS
          </div>
          <div class="marquee-item">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clip-rule="evenodd" />
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
    <button 
      v-show="showBackToTop" 
      @click="scrollToTop" 
      class="fixed bottom-20 right-8 bg-cyan-500 text-gray-900 p-3 rounded-full shadow-lg hover:bg-cyan-400 transition-all duration-300 z-50 transform hover:scale-110"
      aria-label="Back to top"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
      </svg>
    </button>
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

const mobileMenuOpen = ref(false);
const scrolled = ref(false);
const showBackToTop = ref(false);
const isLoading = ref(true);
const isPageTransitioning = ref(false);
const activeSection = ref('home');
const navLinks = ref([]);

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

const handleScroll = () => {
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
};

// Custom Cursor
const initCursor = () => {
  const cursor = document.querySelector('.cursor');
  const follower = document.querySelector('.cursor-follower');
  
  let mouseX = 0, mouseY = 0;
  let followerX = 0, followerY = 0;
  
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
  });
  
  // Smooth follower animation
  const animateFollower = () => {
    followerX += (mouseX - followerX) * 0.1;
    followerY += (mouseY - followerY) * 0.1;
    
    follower.style.left = followerX + 'px';
    follower.style.top = followerY + 'px';
    
    requestAnimationFrame(animateFollower);
  };
  
  animateFollower();
  
  document.addEventListener('mousedown', () => {
    cursor.classList.add('hover');
    follower.classList.add('hover');
  });
  
  document.addEventListener('mouseup', () => {
    cursor.classList.remove('hover');
    follower.classList.remove('hover');
  });
  
  document.querySelectorAll('a, button, .btn, .nav-link').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('hover');
      follower.classList.add('hover');
    });
    
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
      follower.classList.remove('hover');
    });
  });
};

// Enhanced Scroll Animations
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

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
  
  window.addEventListener('scroll', handleScroll);
  initCursor();
  initScrollAnimations();
  
  // Store nav links references
  navLinks.value = document.querySelectorAll('.nav-link');
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style>
/* Loading Overlay */
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #0a0a0a;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  transition: opacity 0.5s, visibility 0.5s;
}
.loading-overlay.hidden {
  opacity: 0;
  visibility: hidden;
}
.loading-spinner {
  width: 60px;
  height: 60px;
  border: 4px solid rgba(0, 212, 255, 0.2);
  border-top-color: #00d4ff;
  border-radius: 50%;
  animation: spin 1s infinite linear;
}
@keyframes spin {
  to { transform: rotate(360deg); }
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
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
}
/* Glowing effect for cards */
.card-glow {
  position: relative;
}
.card-glow::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 0;
  padding: 2px;
  background: linear-gradient(45deg, #00d4ff, #ff00ff, #00d4ff);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.3s;
  z-index: -1;
}
.card-glow:hover::before {
  opacity: 1;
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
</style>