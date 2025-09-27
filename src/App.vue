<template>
  <div class="min-h-screen flex flex-col font-sans" style="background: var(--bg-gradient);">
    <!-- Global Loader -->
    <div v-if="isLoading" class="loader-container">
      <div class="loader-content">
        <div class="loader-logo">
          <div class="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-300 flex items-center justify-center shadow-lg animate-pulse">
            <span  class="text-white font-bold text-2xl">A</span>
          </div>
        </div>
        <div class="loader-text">
          <p class="text-yellow-600 font-medium">Loading AMPER&ANDS...</p>
        </div>
        <div class="loader-bar">
          <div class="loader-progress"></div>
        </div>
      </div>
    </div>

    <!-- Navigation -->
    <header class="bg-white/90 backdrop-blur-sm shadow-md border-b border-yellow-100 relative z-10 sticky top-0 transition-all duration-300">
      <div class="flex justify-between items-center w-full">
        <!-- Logo and Title on the left -->
        <div class="flex items-center space-x-2 md:space-x-3 pl-4 md:pl-6 py-3 md:py-4">
          <div class="w-10 h-10 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-300 flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-110">
            <span class="text-white font-bold text-lg md:text-2xl">
              <router-link
                to="/"
                class="block w-full h-full flex items-center justify-center"
              >
                A
              </router-link>
            </span>
          </div>
          <h1 class="text-xl md:text-3xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent">
            <router-link
                to="/"
                class="block"
              >
              AMPER&ANDS
            </router-link></h1>
        </div>
        
        <!-- Desktop Navigation on the right -->
        <nav class="hidden md:flex items-center space-x-6 md:space-x-10 pr-6 py-4">
          <router-link 
            to="/" 
            class="nav-link text-gray-700 hover:text-yellow-600 transition-all duration-300 font-medium relative group text-sm md:text-base"
          >
            Home
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
          </router-link>
          <router-link 
            to="/services" 
            class="nav-link text-gray-700 hover:text-yellow-600 transition-all duration-300 font-medium relative group text-sm md:text-base"
          >
            Services
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
          </router-link>
          <router-link 
            to="/gallery" 
            class="nav-link text-gray-700 hover:text-yellow-600 transition-all duration-300 font-medium relative group text-sm md:text-base"
          >
            Gallery
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
          </router-link>
          <router-link 
            to="/appointments" 
            class="nav-link text-gray-700 hover:text-yellow-600 transition-all duration-300 font-medium relative group text-sm md:text-base"
          >
            Appointments
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
          </router-link>
        </nav>
        
        <!-- Mobile Menu Button only -->
        <div class="flex items-center pr-4 md:pr-6 py-3 md:py-4 md:hidden">
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen" 
            class="text-yellow-600 focus:outline-none"
          >
            <svg v-if="!mobileMenuOpen" class="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            <svg v-else class="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>
      
      <!-- Mobile Navigation -->
      <div 
        v-show="mobileMenuOpen" 
        class="md:hidden px-4 pb-4 border-t border-gray-100 pt-4 transition-all duration-300 ease-in-out"
      >
        <div class="flex flex-col space-y-3">
          <router-link 
            to="/" 
            @click="mobileMenuOpen = false"
            class="nav-link text-gray-700 hover:text-yellow-600 transition-colors font-medium py-2 text-base"
          >
            Home
          </router-link>
          <router-link 
            to="/services" 
            @click="mobileMenuOpen = false"
            class="nav-link text-gray-700 hover:text-yellow-600 transition-colors font-medium py-2 text-base"
          >
            Services
          </router-link>
          <router-link 
            to="/gallery" 
            @click="mobileMenuOpen = false"
            class="nav-link text-gray-700 hover:text-yellow-600 transition-colors font-medium py-2 text-base"
          >
            Gallery
          </router-link>
          <router-link 
            to="/appointments" 
            @click="mobileMenuOpen = false"
            class="nav-link text-gray-700 hover:text-yellow-600 transition-colors font-medium py-2 text-base"
          >
            Appointments
          </router-link>
        </div>
      </div>
    </header>

    <!-- Main Content with Page Transition -->
    <main class="flex-grow">
      <transition name="page" mode="out-in">
        <router-view></router-view>
      </transition>
    </main>

    <!-- Footer -->
    <footer class="pro-footer">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <!-- Company Info -->
          <div class="text-left">
            <h3 class="pro-footer-title">AMPER&ANDS</h3>
            <p class="text-gray-600 mb-8 leading-relaxed">Professional nail artistry at your fingertips. Book an appointment today!</p>
            <div class="flex space-x-4">
              <a href="#" class="pro-social-link">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
                </svg>
              </a>
              <a href="#" class="pro-social-link">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          <!-- Contact Info -->
          <div class="text-left">
            <h4 class="pro-footer-title">Contact Us</h4>
            <div class="space-y-5">
              <div class="pro-contact-item">
                <div class="pro-contact-icon">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <p class="font-medium">123 Beauty Street</p>
                  <p class="text-gray-600">City, Country 12345</p>
                </div>
              </div>
              <div class="pro-contact-item">
                <div class="pro-contact-icon">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <p class="font-medium">(123) 456-7890</p>
                </div>
              </div>
              <div class="pro-contact-item">
                <div class="pro-contact-icon">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <p class="font-medium">info@amperands.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Opening Hours & CTA -->
          <div class="text-left">
            <h4 class="pro-footer-title">Opening Hours</h4>
            <div class="space-y-4 mb-8">
              <div class="flex justify-between items-center pb-2 border-b border-yellow-100">
                <span class="font-medium">Monday - Friday:</span>
                <span class="text-gray-600">9am - 7pm</span>
              </div>
              <div class="flex justify-between items-center pb-2 border-b border-yellow-100">
                <span class="font-medium">Saturday:</span>
                <span class="text-gray-600">10am - 6pm</span>
              </div>
              <div class="flex justify-between items-center pb-2 border-b border-yellow-100">
                <span class="font-medium">Sunday:</span>
                <span class="text-gray-600">Closed</span>
              </div>
            </div>
            
            <router-link 
              to="/appointments" 
              class="btn-primary"
            >
              Book Appointment
            </router-link>
          </div>
        </div>
        
        <!-- Footer Bottom -->
        <div class="pro-footer-bottom">
          <p>&copy; {{ new Date().getFullYear() }} AMPER&ANDS. All rights reserved.</p>
        </div>
      </div>
    </footer>

    <!-- Go to Top Button with Transition -->
    <transition name="fade-up">
      <button 
        v-show="showScrollTopButton"
        @click="scrollToTop" 
        class="go-to-top-btn fixed bottom-6 right-6 bg-yellow-500 hover:bg-yellow-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 transform hover:scale-110 focus:outline-none"
        aria-label="Go to top"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
        </svg>
      </button>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      mobileMenuOpen: false,
      isLoading: true,
      isMobile: false,
      showScrollTopButton: false,
      isScrolling: false,
      scrollTimeout: null
    }
  },
  mounted() {
    // Check if mobile
    this.checkIfMobile();
    window.addEventListener('resize', this.checkIfMobile);
    
    // Simulate initial loading
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);

    // Show loader when navigating between pages
    this.$router.beforeEach((to, from, next) => {
      this.isLoading = true;
      setTimeout(() => {
        next();
      }, 500);
    });

    this.$router.afterEach(() => {
      setTimeout(() => {
        this.isLoading = false;
        // Scroll to top after navigation
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, 500);
    });

    // Add scroll event listener for the "Go to Top" button
    window.addEventListener('scroll', this.handleScroll);
    
    // Add smooth scroll behavior for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkIfMobile);
    window.removeEventListener('scroll', this.handleScroll);
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
  },
  watch: {
    $route(to, from) {
      // Close mobile menu when route changes
      this.mobileMenuOpen = false;
    }
  },
  methods: {
    checkIfMobile() {
      this.isMobile = window.innerWidth <= 768;
    },
    handleScroll() {
      // Show the button when user scrolls down 300px from the top
      this.showScrollTopButton = window.pageYOffset > 300;
      
      // Add smooth scrolling effect when scrolling stops
      if (this.scrollTimeout) {
        clearTimeout(this.scrollTimeout);
      }
      
      this.isScrolling = true;
      document.body.classList.add('is-scrolling');
      
      this.scrollTimeout = setTimeout(() => {
        this.isScrolling = false;
        document.body.classList.remove('is-scrolling');
      }, 150);
    },
    scrollToTop() {
      // Enhanced smooth scroll to top with animation
      const scrollToTop = () => {
        const currentPosition = window.pageYOffset;
        if (currentPosition > 0) {
          window.requestAnimationFrame(scrollToTop);
          window.scrollTo(0, currentPosition - currentPosition / 10);
        }
      };
      scrollToTop();
    }
  }
}
</script>

<style>
/* Page transition styles */
.page-enter-active, .page-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.page-enter, .page-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/* Enhanced loader styles */
.loader-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #FFFBEB 0%, #FFF8DC 50%, #FFEFBA 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  backdrop-filter: blur(5px);
}

.loader-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(212, 175, 55, 0.2);
  max-width: 90%;
  width: 400px;
}

.loader-logo {
  margin-bottom: 1.5rem;
}

.loader-text {
  margin-bottom: 1.5rem;
  font-family: var(--font-family);
}

.loader-bar {
  width: 100%;
  height: 6px;
  background: rgba(212, 175, 55, 0.2);
  border-radius: 3px;
  overflow: hidden;
}

.loader-progress {
  height: 100%;
  background: var(--gold-gradient);
  border-radius: 3px;
  width: 0;
  animation: loading 2s ease-in-out infinite;
}

@keyframes loading {
  0% { width: 0; }
  50% { width: 70%; }
  100% { width: 100%; }
}

/* Professional gold background for all sections */
section {
  background: var(--bg-gradient);
  position: relative;
}

/* Professional card styles */
.girlie-card {
  background: linear-gradient(135deg, #FFFFFF 0%, #FFFBEB 100%);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(212, 175, 55, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  font-family: var(--font-family);
}

.girlie-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: var(--gold-gradient);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s ease;
}

.girlie-card:hover::before {
  transform: scaleX(1);
}

.girlie-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(212, 175, 55, 0.2);
}

/* Professional button styles */
.btn-primary {
  background: var(--gold-gradient);
  color: white;
  border-radius: 50px;
  padding: 12px 24px;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
  font-family: var(--font-family);
  display: inline-block;
}

.btn-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  transform: translateX(-100%);
  transition: transform 0.5s ease;
  z-index: -1;
}

.btn-primary:hover::before {
  transform: translateX(0);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(212, 175, 55, 0.4);
}

/* Professional navigation */
.nav-link {
  position: relative;
  padding: 0.5rem 0;
  transition: color 0.3s ease;
  font-family: var(--font-family);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--gold-gradient);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

/* Professional footer */
.pro-footer {
  background: linear-gradient(to bottom, #FFFBEB, #FFF8DC);
  padding: 4rem 0 2rem;
  position: relative;
  font-family: var(--font-family);
  border-top: 1px solid rgba(212, 175, 55, 0.2);
}

.pro-footer-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--primary-color);
  font-family: var(--font-family);
}

.pro-footer-link {
  display: block;
  color: var(--text-light);
  margin-bottom: 0.75rem;
  transition: color 0.3s ease;
  font-family: var(--font-family);
}

.pro-footer-link:hover {
  color: var(--primary-color);
}

.pro-footer-bottom {
  border-top: 1px solid var(--border-color);
  padding-top: 2rem;
  margin-top: 3rem;
  text-align: center;
  color: var(--text-light);
  font-family: var(--font-family);
}

.pro-social-link {
  color: var(--primary-color);
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(212, 175, 55, 0.1);
}

.pro-social-link:hover {
  background: var(--gold-gradient);
  color: white;
  transform: translateY(-3px);
}

.pro-contact-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.pro-contact-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(212, 175, 55, 0.1);
  color: var(--primary-color);
  flex-shrink: 0;
}

/* Go to Top Button Transition */
.fade-up-enter-active, .fade-up-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.fade-up-enter, .fade-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/* Go to Top Button Styles */
.go-to-top-btn {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Smooth scrolling effect */
html {
  scroll-behavior: smooth;
}

/* Enhanced scrolling effect */
.is-scrolling {
  scroll-behavior: smooth;
}

/* Responsive improvements */
@media (max-width: 768px) {
  .pro-heading {
    font-size: 2rem;
  }
  
  .pro-section {
    padding: 3rem 0;
  }
  
  .service-list-price {
    position: static;
    transform: none;
    margin-top: 0.5rem;
  }
  
  .service-list-item:hover {
    padding-left: 0;
  }
  
  /* Mobile navigation adjustments */
  .nav-link {
    padding: 0.75rem 0;
  }
  
  /* Mobile card adjustments */
  .girlie-card {
    margin-bottom: 1.5rem;
  }
  
  /* Mobile button adjustments */
  .btn-primary {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
  
  /* Mobile loader adjustments */
  .loader-content {
    width: 90%;
    padding: 1.5rem;
  }
  
  /* Mobile go to top button adjustments */
  .go-to-top-btn {
    width: 40px;
    height: 40px;
    bottom: 15px;
    right: 15px;
  }
  
  /* Mobile logo fix */
  .w-10.h-10 {
    width: 2.5rem;
    height: 2.5rem;
  }
  
  .text-lg {
    font-size: 1.125rem;
  }
}
</style>