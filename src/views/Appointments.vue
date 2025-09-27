<template>
  <div class="py-8 bg-gradient-to-b from-white to-yellow-50 min-h-screen">
    <div class="container mx-auto px-4">
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold mb-3 text-yellow-600 animate-fade-in-up">Book an Appointment</h1>
        <p class="text-gray-600 max-w-xl mx-auto animate-fade-in-up animation-delay-200">
          Schedule your nail service with our easy-to-use booking system.
        </p>
      </div>

      <!-- Mobile Step Indicator -->
      <div class="md:hidden mb-6">
        <div class="flex items-center justify-between mb-4">
          <span class="text-sm font-medium text-gray-500">Step {{ currentStep + 1 }} of {{ steps.length }}</span>
          <span class="text-sm font-medium text-yellow-600">{{ steps[currentStep] }}</span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2">
          <div 
            class="bg-yellow-600 h-2 rounded-full transition-all duration-500" 
            :style="{ width: `${((currentStep + 1) / steps.length) * 100}%` }"
          ></div>
        </div>
      </div>

      <div class="max-w-3xl mx-auto">
        <div class="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-yellow-100 animate-fade-in-up animation-delay-400">
          <form @submit.prevent="submitAppointment">
            <!-- Desktop Step Indicator -->
            <div class="hidden md:block mb-10">
              <div class="flex justify-between items-center relative">
                <div
                  v-for="(step, index) in steps"
                  :key="index"
                  class="flex flex-col items-center z-10"
                  :class="{ 'text-yellow-600': currentStep >= index }"
                >
                  <div
                    class="step-circle flex items-center justify-center mb-2 transition-all duration-300"
                    :class="{ 'active': currentStep >= index }"
                  >
                    <span v-if="currentStep > index" class="text-white">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    <span v-else>{{ index + 1 }}</span>
                  </div>
                  <span class="text-sm font-medium">{{ step }}</span>
                </div>
                <div class="absolute top-5 left-0 right-0 h-1 bg-gray-200 -z-10">
                  <div 
                    class="h-full bg-yellow-600 transition-all duration-500" 
                    :style="{ width: `${(currentStep / (steps.length - 1)) * 100}%` }"
                  ></div>
                </div>
              </div>
            </div>

            <!-- 步骤 1: 选择服务 -->
            <div v-if="currentStep === 0" class="animate-fadeIn">
              <h2 class="text-2xl font-bold mb-6 text-yellow-600">Select Service</h2>
              
              <div class="space-y-4 mb-8">
                <div
                  v-for="(service, index) in services"
                  :key="index"
                  class="service-option p-4 md:p-5 rounded-xl border-2 cursor-pointer transition-all duration-300"
                  :class="{ 'border-yellow-500 bg-yellow-50 shadow-md': appointment.service === service.name }"
                  @click="appointment.service = service.name"
                >
                  <div class="flex flex-col md:flex-row md:justify-between md:items-center">
                    <div class="mb-3 md:mb-0">
                      <h3 class="font-bold text-lg">{{ service.name }}</h3>
                      <p class="text-gray-600 text-sm mt-1">{{ service.description }}</p>
                    </div>
                    <div class="md:text-right">
                      <span class="font-bold text-yellow-600 text-lg">{{ service.price }}</span>
                      <div class="flex flex-wrap justify-start md:justify-end mt-1">
                        <span
                          v-for="(tag, tagIndex) in service.tags"
                          :key="tagIndex"
                          class="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded mr-1 mb-1"
                        >
                          {{ tag }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mb-8">
                <h3 class="font-bold mb-4 text-lg">Add-On Services</h3>
                <div class="grid grid-cols-1 gap-3">
                  <label 
                    v-for="(addon, index) in addons"
                    :key="index"
                    class="flex items-center p-4 rounded-lg border border-gray-200 hover:bg-yellow-50 cursor-pointer transition-colors duration-300"
                  >
                    <input
                      type="checkbox"
                      v-model="appointment.addons"
                      :value="addon.name"
                      class="h-5 w-5 text-yellow-600 rounded focus:ring-yellow-500"
                    >
                    <div class="ml-3 flex justify-between items-center w-full">
                      <span class="font-medium">{{ addon.name }}</span>
                      <span class="text-yellow-600 font-medium">{{ addon.price }}</span>
                    </div>
                  </label>
                </div>
              </div>

              <div>
                <h3 class="font-bold mb-4 text-lg">Service Location</h3>
                <div class="space-y-3">
                  <!-- Disabled Salon Visit Option -->
                  <label class="flex items-center p-4 rounded-xl border-2 border-gray-200 opacity-50 cursor-not-allowed">
                    <input
                      type="radio"
                      v-model="appointment.location"
                      value="salon"
                      class="h-5 w-5 text-yellow-600 focus:ring-yellow-500"
                      disabled
                    >
                    <div class="ml-4">
                      <span class="font-medium text-lg">Salon Visit</span>
                      <p class="text-gray-600 text-sm">Visit our salon for your appointment</p>
                      <span class="inline-block mt-1 px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded">Currently unavailable</span>
                    </div>
                  </label>
                  <!-- Home Service (Default) -->
                  <label class="flex items-center p-4 rounded-xl border-2 border-yellow-500 bg-yellow-50 cursor-pointer transition-colors duration-300">
                    <input
                      type="radio"
                      v-model="appointment.location"
                      value="home"
                      class="h-5 w-5 text-yellow-600 focus:ring-yellow-500"
                      checked
                    >
                    <div class="ml-4">
                      <span class="font-medium text-lg">Home Service</span>
                      <p class="text-gray-600 text-sm">We'll come to your location (+P300)</p>
                      <span class="inline-block mt-1 px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Recommended</span>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            <!-- 步骤 2: 选择日期和时间 -->
            <div v-if="currentStep === 1" class="animate-fadeIn">
              <h2 class="text-2xl font-bold mb-6 text-yellow-600">Select Date & Time</h2>
              
              <div class="grid grid-cols-1 gap-6">
                <div>
                  <h3 class="font-bold mb-4 text-lg">Choose Date</h3>
                  <div class="bg-gray-50 p-4 rounded-xl">
                    <input
                      type="date"
                      v-model="appointment.date"
                      :min="minDate"
                      class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600 text-lg"
                    >
                    <div class="mt-4 text-center">
                      <p class="text-gray-600 mb-2">Selected Date</p>
                      <p class="text-xl font-bold text-yellow-600">{{ formatDate(appointment.date) }}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 class="font-bold mb-4 text-lg">Available Time Slots</h3>
                  <div class="bg-gray-50 p-4 rounded-xl">
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-3 max-h-80 overflow-y-auto p-1">
                      <button
                        v-for="(time, index) in availableTimes"
                        :key="index"
                        type="button"
                        class="py-3 px-2 rounded-lg text-sm font-medium border transition-all duration-200"
                        :class="appointment.time === time ? 'bg-yellow-600 text-white border-yellow-600 shadow-md' : 'border-gray-300 hover:bg-gray-100'"
                        @click="appointment.time = time"
                      >
                        {{ time }}
                      </button>
                    </div>
                    <div v-if="appointment.time" class="mt-4 text-center">
                      <p class="text-gray-600 mb-2">Selected Time</p>
                      <p class="text-xl font-bold text-yellow-600">{{ appointment.time }}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Home Service Address (shown only when home service is selected) -->
              <div v-if="appointment.location === 'home'" class="mt-8 bg-blue-50 p-6 rounded-xl border border-blue-200">
                <h3 class="font-bold mb-4 text-lg text-blue-800 flex items-center">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  Home Service Address
                </h3>
                <div class="space-y-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Street Address</label>
                    <input
                      type="text"
                      v-model="appointment.address"
                      required
                      placeholder="Enter your complete address"
                      class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    >
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-2">Barangay</label>
                      <input
                        type="text"
                        v-model="appointment.barangay"
                        required
                        placeholder="Barangay"
                        class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      >
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-2">City</label>
                      <input
                        type="text"
                        v-model="appointment.city"
                        required
                        placeholder="City"
                        class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      >
                    </div>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Additional Directions (Optional)</label>
                    <textarea
                      v-model="appointment.directions"
                      rows="2"
                      placeholder="Landmarks, gate color, etc."
                      class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>

            <!-- 步骤 3: 个人信息 -->
            <div v-if="currentStep === 2" class="animate-fadeIn">
              <h2 class="text-2xl font-bold mb-6 text-yellow-600">Your Information</h2>
              
              <div class="space-y-5">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    v-model="appointment.name"
                    required
                    placeholder="Enter your full name"
                    class="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600 transition-all duration-300"
                  >
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    v-model="appointment.phone"
                    required
                    placeholder="Enter your phone number"
                    class="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600 transition-all duration-300"
                  >
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    v-model="appointment.email"
                    required
                    placeholder="Enter your email address"
                    class="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600 transition-all duration-300"
                  >
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Special Requests or Notes</label>
                  <textarea
                    v-model="appointment.notes"
                    rows="4"
                    placeholder="Any special requests or notes for your appointment"
                    class="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600 transition-all duration-300"
                  ></textarea>
                </div>

                <div class="flex items-start p-4 bg-yellow-50 rounded-lg transition-all duration-300 hover:bg-yellow-100">
                  <input
                    type="checkbox"
                    v-model="appointment.terms"
                    required
                    class="h-5 w-5 text-yellow-600 rounded focus:ring-yellow-500 mt-1"
                  >
                  <label class="ml-3 text-sm text-gray-700">
                    I agree to the
                    <a href="#" class="text-yellow-600 hover:text-yellow-700 font-medium">terms and conditions</a>
                    and understand the cancellation policy.
                  </label>
                </div>
              </div>
            </div>

            <!-- 步骤 4: 确认预约 -->
            <div v-if="currentStep === 3" class="animate-fadeIn">
              <h2 class="text-2xl font-bold mb-6 text-yellow-600">Confirm Your Appointment</h2>
              
              <div class="bg-gradient-to-br from-yellow-50 to-white rounded-xl p-6 mb-8 border border-yellow-200 shadow-sm">
                <div class="space-y-4">
                  <div class="pb-3 border-b border-yellow-100">
                    <div class="flex justify-between mb-1">
                      <span class="font-bold text-gray-700">Service:</span>
                      <span class="font-medium">{{ appointment.service }}</span>
                    </div>
                  </div>
                  <div v-if="appointment.addons.length > 0" class="pb-3 border-b border-yellow-100">
                    <div class="flex justify-between mb-1">
                      <span class="font-bold text-gray-700">Add-ons:</span>
                      <span class="font-medium">{{ appointment.addons.join(', ') }}</span>
                    </div>
                  </div>
                  <div class="pb-3 border-b border-yellow-100">
                    <div class="flex justify-between mb-1">
                      <span class="font-bold text-gray-700">Location:</span>
                      <span class="font-medium">{{ appointment.location === 'home' ? 'Home Service' : 'Salon' }}</span>
                    </div>
                  </div>
                  <div v-if="appointment.location === 'home'" class="pb-3 border-b border-yellow-100">
                    <div class="flex justify-between mb-1">
                      <span class="font-bold text-gray-700">Address:</span>
                      <span class="font-medium">{{ appointment.address }}, {{ appointment.barangay }}, {{ appointment.city }}</span>
                    </div>
                  </div>
                  <div class="pb-3 border-b border-yellow-100">
                    <div class="flex justify-between mb-1">
                      <span class="font-bold text-gray-700">Date:</span>
                      <span class="font-medium">{{ formatDate(appointment.date) }}</span>
                    </div>
                  </div>
                  <div class="pb-3 border-b border-yellow-100">
                    <div class="flex justify-between mb-1">
                      <span class="font-bold text-gray-700">Time:</span>
                      <span class="font-medium">{{ appointment.time }}</span>
                    </div>
                  </div>
                  <div class="pb-3 border-b border-yellow-100">
                    <div class="flex justify-between mb-1">
                      <span class="font-bold text-gray-700">Name:</span>
                      <span class="font-medium">{{ appointment.name }}</span>
                    </div>
                  </div>
                  <div class="pb-3 border-b border-yellow-100">
                    <div class="flex justify-between mb-1">
                      <span class="font-bold text-gray-700">Phone:</span>
                      <span class="font-medium">{{ appointment.phone }}</span>
                    </div>
                  </div>
                  <div class="pt-3">
                    <div class="flex justify-between">
                      <span class="font-bold text-lg text-gray-800">Total:</span>
                      <span class="font-bold text-xl text-yellow-600">{{ calculateTotal() }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="text-center mb-6">
                <div class="inline-flex items-center bg-blue-50 text-blue-800 rounded-lg p-4 mb-4 transition-all duration-300 hover:bg-blue-100">
                  <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <p>A confirmation message will be sent to your phone number.</p>
                </div>
                <button
                  type="submit"
                  class="bg-yellow-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center mx-auto w-full md:w-auto"
                  :disabled="loading"
                >
                  <span v-if="loading" class="flex items-center">
                    <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                  <span v-else class="flex items-center">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Confirm Booking
                  </span>
                </button>
              </div>
            </div>

            <!-- 导航按钮 -->
            <div class="flex flex-col md:flex-row justify-between mt-8 gap-4">
              <button
                v-if="currentStep > 0"
                type="button"
                class="px-6 py-3 border border-yellow-600 text-yellow-600 rounded-full font-medium hover:bg-yellow-50 transition-all duration-300 flex items-center justify-center order-2 md:order-1"
                @click="prevStep"
              >
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                Back
              </button>
              <div v-else class="order-2 md:order-1"></div>
              <button
                v-if="currentStep < steps.length - 1"
                type="button"
                class="bg-yellow-600 text-white px-6 py-3 rounded-full font-medium hover:bg-yellow-700 transition-all duration-300 flex items-center justify-center order-1 md:order-2"
                @click="nextStep"
                :disabled="!canProceed"
              >
                Next
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Confirmation Dialog -->
    <div v-if="showConfirmationDialog" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div class="p-6">
          <h3 class="text-2xl font-bold mb-4 text-yellow-600">Appointment Confirmed!</h3>
          <p class="text-gray-600 mb-6">Your appointment has been booked successfully. Download your confirmation and choose how to share it.</p>
          
          <div class="mb-6">
            <button @click="generatePDF" class="w-full bg-yellow-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-yellow-700 transition-colors duration-300 flex items-center justify-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"></path>
              </svg>
              Generate and Download Confirmation (PDF)
            </button>
          </div>
          
          <div class="mb-6">
            <h4 class="font-bold mb-3">Send confirmation via:</h4>
            <div class="flex flex-wrap gap-3">
              <button @click="shareViaFacebook" class="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300">
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </button>
              <button @click="shareViaInstagram" class="flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity duration-300">
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                </svg>
                Instagram
              </button>
              <button @click="shareViaEmail" class="flex items-center bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors duration-300">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                Email
              </button>
            </div>
          </div>
          
          <div class="text-center">
            <button @click="closeConfirmationDialog" class="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors duration-300 w-full">
              Close and Return to Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jsPDF from 'jspdf'

export default {
  name: 'Appointments',
  data() {
    return {
      loading: false,
      currentStep: 0,
      steps: ['Service', 'Date & Time', 'Information', 'Confirm'],
      minDate: new Date().toISOString().substr(0, 10),
      availableTimes: [
        '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', 
        '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
      ],
      appointment: {
        service: '',
        addons: [],
        location: 'home', // Default to home service
        date: new Date().toISOString().substr(0, 10),
        time: '',
        name: '',
        phone: '',
        email: '',
        notes: '',
        terms: false,
        address: '',
        barangay: '',
        city: '',
        directions: ''
      },
      services: [
        {
          name: 'Gel Polish',
          price: 'P300',
          description: 'Includes gel application, cuticle care, and basic nail shaping.',
          tags: ['60 min', 'Gel', 'Manicure']
        },
        {
          name: 'Gel Overlay',
          price: 'P350',
          description: 'Strengthens natural nails with a layer of gel polish.',
          tags: ['45 min', 'Gel', 'Natural Nails']
        },
        {
          name: 'Soft Gel Extensions',
          price: 'P500',
          description: 'Adds length to natural nails using soft gel tips.',
          tags: ['90 min', 'Extensions', 'Soft Gel']
        },
        {
          name: 'Dual Form Extensions',
          price: 'P500',
          description: 'Creates extensions using dual forms for a perfect shape.',
          tags: ['120 min', 'Extensions', 'Dual Form']
        },
        {
          name: 'Lash Lift',
          price: 'P300',
          description: 'Enhances natural lashes with a lifting and tinting service.',
          tags: ['60 min', 'Lashes', 'Semi-permanent']
        },
        {
          name: 'Nail Repair',
          price: 'P150',
          description: 'Fix broken or damaged nails with professional repair techniques.',
          tags: ['30 min', 'Repair', 'Damaged Nails']
        }
      ],
      addons: [
        {
          name: 'Nail Art (Simple)',
          price: 'P50'
        },
        {
          name: 'Nail Art (Complex)',
          price: 'P100'
        },
        {
          name: 'French Tips',
          price: 'P50'
        },
        {
          name: 'Charms ',
          price: 'P50+'
        },
        {
          name: 'Ombre',
          price: 'P50'
        },
        {
          name: 'Nail Strengthener',
          price: 'P100'
        },
         {
          name: '3D Sculpt',
          price: 'P50'
        }
      ],
      showConfirmationDialog: false,
      businessInfo: {
        name: "Amper&ands",
        facebookUrl: "https://www.facebook.com/your-business-page",
        instagramUrl: "https://www.instagram.com/your-business-profile",
        email: "kategudez@gmail.com"
      }
    }
  },
  computed: {
    canProceed() {
      if (this.currentStep === 0) {
        return this.appointment.service !== ''
      } else if (this.currentStep === 1) {
        const dateAndTimeValid = this.appointment.date !== '' && this.appointment.time !== ''
        if (this.appointment.location === 'home') {
          return dateAndTimeValid && 
                 this.appointment.address !== '' && 
                 this.appointment.barangay !== '' && 
                 this.appointment.city !== ''
        }
        return dateAndTimeValid
      } else if (this.currentStep === 2) {
        return this.appointment.name !== '' && this.appointment.phone !== '' && 
               this.appointment.email !== '' && this.appointment.terms
      }
      return true
    }
  },
  methods: {
    nextStep() {
      if (this.canProceed) {
        this.currentStep++
        window.scrollTo(0, 0)
      }
    },
    prevStep() {
      this.currentStep--
      window.scrollTo(0, 0)
    },
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' }
      return new Date(date).toLocaleDateString(undefined, options)
    },
    calculateTotal() {
      let total = 0
      
      // 添加服务价格
      const service = this.services.find(s => s.name === this.appointment.service)
      if (service) {
        // 移除货币符号和逗号，转换为数字
        const price = parseInt(service.price.replace(/[^\d]/g, ''))
        total += price
      }
      
      // 添加附加服务价格
      this.appointment.addons.forEach(addonName => {
        const addon = this.addons.find(a => a.name === addonName)
        if (addon) {
          // 对于有"+"的价格，我们使用最小值
          const price = parseInt(addon.price.replace(/[^\d]/g, ''))
          total += price
        }
      })
      
      // 添加家庭服务费
      if (this.appointment.location === 'home') {
        total += 300
      }
      
      return `P${total.toLocaleString()}`
    },
generatePDF() {
  // Create a new jsPDF instance
  const doc = new jsPDF()
  
  // Page dimensions
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  
  // Set background color - very light cream
  doc.setFillColor(255, 255, 250);
  doc.rect(0, 0, pageWidth, pageHeight, 'F');
  
  // Add header background (reduced height from 80 to 60)
  doc.setFillColor(255, 253, 240);
  doc.rect(0, 0, pageWidth, 60, 'F');
  
  // Business name (adjusted position)
  doc.setTextColor(180, 150, 100);
  doc.setFontSize(28);
  doc.setFont('helvetica', 'bold');
  doc.text(this.businessInfo.name, pageWidth / 2, 30, { align: 'center' });
  
  // Appointment Slip title (adjusted position)
  doc.setTextColor(150, 120, 70);
  doc.setFontSize(20);
  doc.setFont('helvetica', 'normal');
  doc.text('Appointment Slip', pageWidth / 2, 45, { align: 'center' });
  
  // Add appointment ID and booking date (adjusted position)
  const appointmentId = `APT-${Date.now().toString().slice(-6)}`;
  const bookingDate = new Date().toLocaleDateString();
  doc.setFontSize(10);
  doc.setTextColor(150, 120, 70);
  doc.text(`ID: ${appointmentId}`, pageWidth - 60, 20);
  doc.text(`Booked: ${bookingDate}`, pageWidth - 60, 30);
  
  // Add divider line (adjusted position)
  doc.setDrawColor(220, 200, 160);
  doc.setLineWidth(0.5);
  doc.line(40, 55, pageWidth - 40, 55);
  
  // Content section (starting position adjusted)
  let yPosition = 75;
  
  // Service
  doc.setTextColor(150, 120, 70);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('Service:', 50, yPosition);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(80, 70, 50);
  doc.text(this.appointment.service, 90, yPosition);
  yPosition += 20;
  
  // Add-ons
  if (this.appointment.addons.length > 0) {
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(150, 120, 70);
    doc.text('Add-ons:', 50, yPosition);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(80, 70, 50);
    doc.text(this.appointment.addons.join(', '), 90, yPosition);
    yPosition += 20;
  }
  
  // Location
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(150, 120, 70);
  doc.text('Location:', 50, yPosition);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(80, 70, 50);
  doc.text(this.appointment.location === 'home' ? 'Home Service' : 'Salon', 90, yPosition);
  yPosition += 20;
  
  // Address if home service
  if (this.appointment.location === 'home') {
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(150, 120, 70);
    doc.text('Address:', 50, yPosition);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(80, 70, 50);
    const address = `${this.appointment.address}, ${this.appointment.barangay}, ${this.appointment.city}`;
    // Handle long addresses by breaking into lines manually
    const maxLineLength = 100;
    if (address.length > maxLineLength) {
      const firstLine = address.substring(0, maxLineLength);
      const secondLine = address.substring(maxLineLength);
      doc.text(firstLine, 90, yPosition);
      yPosition += 15;
      doc.text(secondLine, 90, yPosition);
    } else {
      doc.text(address, 90, yPosition);
    }
    yPosition += 20;
  }
  
  // Date
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(150, 120, 70);
  doc.text('Date:', 50, yPosition);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(80, 70, 50);
  doc.text(this.formatDate(this.appointment.date), 90, yPosition);
  yPosition += 20;
  
  // Time
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(150, 120, 70);
  doc.text('Time:', 50, yPosition);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(80, 70, 50);
  doc.text(this.appointment.time, 90, yPosition);
  yPosition += 20;
  
  // Name
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(150, 120, 70);
  doc.text('Name:', 50, yPosition);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(80, 70, 50);
  doc.text(this.appointment.name, 90, yPosition);
  yPosition += 20;
  
  // Phone
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(150, 120, 70);
  doc.text('Phone:', 50, yPosition);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(80, 70, 50);
  doc.text(this.appointment.phone, 90, yPosition);
  
  // Total section
  yPosition += 40;
  doc.setFillColor(255, 253, 240);
  doc.rect(pageWidth / 2 - 70, yPosition, 140, 40, 'F');
  
  doc.setTextColor(180, 150, 100);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.text('TOTAL', pageWidth / 2 - 30, yPosition + 25);
  doc.text(this.calculateTotal(), pageWidth / 2 + 20, yPosition + 25);
  
  // Add simple decorative circles
  doc.setDrawColor(200, 180, 140);
  doc.setLineWidth(0.5);
  doc.circle(pageWidth / 2 - 90, yPosition + 20, 5);
  doc.circle(pageWidth / 2 + 90, yPosition + 20, 5);
  
  // Signature section
  yPosition += 70;
  doc.setTextColor(150, 120, 70);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('Customer Signature:', 50, yPosition);
  doc.line(50, yPosition + 5, 150, yPosition + 5);
  
  // Footer background (reduced height from 60 to 40)
  const footerHeight = 40;
  doc.setFillColor(255, 253, 240);
  doc.rect(0, pageHeight - footerHeight, pageWidth, footerHeight, 'F');
  
  // Footer text (adjusted position)
  doc.setTextColor(150, 120, 70);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text('Thank you for choosing ' + this.businessInfo.name, pageWidth / 2, pageHeight - 25, { align: 'center' });
  doc.text('Contact: ' + this.businessInfo.email, pageWidth / 2, pageHeight - 10, { align: 'center' });
  
  // Add page number (adjusted position)
  doc.setFontSize(8);
  doc.setTextColor(180, 150, 100);
  doc.text('Page 1 of 1', pageWidth / 2, pageHeight - 5, { align: 'center' });
  
  // Save the PDF
  doc.save(`appointment-slip-${appointmentId}.pdf`)
},

drawNailArt(doc, x, y, size) {
  // Draw a simple nail art design using lines and circles
  doc.setDrawColor(200, 180, 140);
  doc.setLineWidth(1);
  
  // Draw a simple flower pattern
  // Center point
  doc.setFillColor(200, 180, 140);
  doc.circle(x, y, size / 4, 'FD');
  
  // Petals
  for (let i = 0; i < 6; i++) {
    const angle = (i / 6) * Math.PI * 2;
    const petalX = x + Math.cos(angle) * size / 2;
    const petalY = y + Math.sin(angle) * size / 2;
    doc.circle(petalX, petalY, size / 6, 'FD');
  }
},

drawDecoration(doc, x, y, size) {
  // Draw a simple decoration - a diamond shape
  doc.setDrawColor(200, 180, 140);
  doc.setLineWidth(0.5);
  
  // Draw a diamond using lines
  doc.line(x, y - size, x + size, y);
  doc.line(x + size, y, x, y + size);
  doc.line(x, y + size, x - size, y);
  doc.line(x - size, y, x, y - size);
  
  // Center circle
  doc.setFillColor(200, 180, 140);
  doc.circle(x, y, size / 3, 'FD');
},
    
    drawNailArt(doc, x, y, size) {
      // Draw a simple nail art design
      doc.setDrawColor(200, 180, 140);
      doc.setLineWidth(1);
      
      // Draw multiple small circles to represent nail art
      for (let i = 0; i < 5; i++) {
        const angle = (i / 5) * Math.PI * 2;
        const circleX = x + Math.cos(angle) * size / 2;
        const circleY = y + Math.sin(angle) * size / 2;
        doc.circle(circleX, circleY, size / 6, 'S');
      }
      
      // Center circle
      doc.circle(x, y, size / 4, 'S');
    },
    
    drawDecoration(doc, x, y, size) {
      // Draw a simple decoration - a circle with smaller circles around it
      doc.setDrawColor(200, 180, 140);
      doc.setLineWidth(0.5);
      
      // Center circle
      doc.circle(x, y, size, 'S');
      
      // Surrounding circles
      for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2;
        const circleX = x + Math.cos(angle) * size * 1.5;
        const circleY = y + Math.sin(angle) * size * 1.5;
        doc.circle(circleX, circleY, size / 2, 'S');
      }
    },
    
    shareViaFacebook() {
      // Open Facebook in a new tab
      window.open(this.businessInfo.facebookUrl, '_blank');
    },
    shareViaInstagram() {
      // Open Instagram in a new tab
      window.open(this.businessInfo.instagramUrl, '_blank');
    },
    shareViaEmail() {
      // Open email client with pre-filled subject and body
      const subject = encodeURIComponent('Appointment Slip');
      const body = encodeURIComponent(`Thank you for booking with ${this.businessInfo.name}!\n\nYour appointment details:\nService: ${this.appointment.service}\nDate: ${this.formatDate(this.appointment.date)}\nTime: ${this.appointment.time}\n\nPlease download and attach the confirmation PDF for your records.`);
      window.location.href = `mailto:${this.appointment.email}?subject=${subject}&body=${body}`;
    },
    closeConfirmationDialog() {
      this.showConfirmationDialog = false;
      // Reset the form and go back to step 0
      this.resetForm();
      this.currentStep = 0;
    },
    submitAppointment() {
      if (this.canProceed) {
        this.loading = true
        
        // 模拟API调用
        setTimeout(() => {
          // 保存预约数据到localStorage
          const appointments = JSON.parse(localStorage.getItem('appointments') || '[]')
          const newAppointment = {
            ...this.appointment,
            id: Date.now(),
            createdAt: new Date().toISOString()
          }
          appointments.push(newAppointment)
          localStorage.setItem('appointments', JSON.stringify(appointments))
          
          this.loading = false
          
          // Show dialog
          this.showConfirmationDialog = true;
        }, 1500)
      }
    },
    resetForm() {
      this.appointment = {
        service: '',
        addons: [],
        location: 'home', // Keep home service as default
        date: new Date().toISOString().substr(0, 10),
        time: '',
        name: '',
        phone: '',
        email: '',
        notes: '',
        terms: false,
        address: '',
        barangay: '',
        city: '',
        directions: ''
      }
    }
  }
}
</script>

<style scoped>
.step-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f0f0f0;
  color: #999;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.step-circle.active {
  background-color: var(--primary-color);
  color: white;
  box-shadow: 0 4px 6px rgba(212, 175, 55, 0.3);
}

.service-option {
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.service-option:hover {
  border-color: var(--primary-color);
  transform: translateY(-2px);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fadeIn {
  animation: fadeIn 0.5s ease forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease forwards;
  opacity: 0;
}

.animation-delay-200 {
  animation-delay: 0.2s;
}

.animation-delay-400 {
  animation-delay: 0.4s;
}

/* Mobile-specific improvements */
@media (max-width: 768px) {
  /* Improved form layout for mobile */
  .bg-white.rounded-xl.shadow-lg.p-8 {
    padding: 1.5rem;
  }
  
  /* Improved step indicator for mobile */
  .step-circle {
    width: 36px;
    height: 36px;
    font-size: 0.875rem;
  }
  
  /* Improved service options for mobile */
  .service-option {
    padding: 1rem;
  }
  
  /* Improved time slots for mobile */
  .grid.grid-cols-3.gap-3 {
    grid-template-columns: repeat(2, 1fr);
  }
  
  /* Improved buttons for mobile */
  button.px-6.py-3 {
    padding: 0.75rem 1.5rem;
    font-size: 0.875rem;
  }
  
  /* Improved form inputs for mobile */
  input, textarea {
    font-size: 1rem;
  }
  
  /* Improved confirmation section for mobile */
  .bg-gradient-to-br.from-yellow-50.to-white.rounded-xl.p-6 {
    padding: 1rem;
  }
  
  /* Improved navigation buttons for mobile */
  .flex.justify-between.mt-10 {
    flex-direction: column-reverse;
    gap: 1rem;
  }
  
  button.px-6.py-3 {
    width: 100%;
    justify-content: center;
  }
}

/* Modal styles */
.fixed.inset-0 {
  z-index: 9999;
}
</style>