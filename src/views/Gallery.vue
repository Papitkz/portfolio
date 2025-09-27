<template>
  <div class="py-12 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-10">
        <h1 class="text-4xl font-bold mb-4 text-yellow-600 animate-fade-in-up">Our Gallery</h1>
        <p class="text-gray-600 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
          Explore our portfolio of stunning nail designs and artistry.
        </p>
      </div>

      <!-- 作品分类 -->
      <div class="flex flex-wrap justify-center mb-8">
        <button
          v-for="(category, index) in categories"
          :key="index"
          class="m-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105"
          :class="selectedCategory === category ? 'bg-yellow-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
          @click="selectedCategory = category"
        >
          {{ category }}
        </button>
      </div>

      <!-- 作品网格 -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div
          v-for="(work, index) in filteredWorks"
          :key="index"
          class="gallery-item overflow-hidden rounded-lg shadow-md animate-fade-in-up"
          :style="`animation-delay: ${400 + index * 100}ms`"
        >
          <img
            :src="work.image"
            :alt="work.title"
            class="w-full h-64 object-cover"
          />
          <div class="gallery-overlay">
            <h3 class="font-bold text-lg">{{ work.title }}</h3>
            <p class="text-sm">{{ work.category }}</p>
          </div>
          <div class="p-4 bg-white">
            <p class="text-gray-600 mb-3">{{ work.description }}</p>
            <div class="flex flex-wrap">
              <span
                v-for="(tag, tagIndex) in work.tags"
                :key="tagIndex"
                class="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded mr-2 mb-2"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- 加载更多按钮 -->
      <div class="text-center mt-10">
        <button class="px-6 py-3 border border-yellow-600 text-yellow-600 rounded-full hover:bg-yellow-600 hover:text-white transition-all duration-300 transform hover:scale-105">
          Load More
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// Import images directly
import nail1 from '@/images/nail1.jpg';
import nail2 from '@/images/nail2.jpg';
import nail3 from '@/images/nail3.jpg';
import nail4 from '@/images/nail4.jpg';
import nail5 from '@/images/nail5.jpg';
import nail6 from '@/images/nail6.jpg';
import nail7 from '@/images/nail7.jpg';
import nail8 from '@/images/nail8.jpg';
import nail9 from '@/images/nail9.jpg';
import nail10 from '@/images/nail10.jpg';

export default {
  name: 'Gallery',
  data() {
    return {
      selectedCategory: 'All',
      categories: ['All', 'Gel Nails', 'Extensions', 'Nail Art', 'Bridal'],
      works: [
        {
          title: 'Elegant French',
          category: 'Gel Nails',
          description: 'Classic French tips with a modern twist.',
          image: nail1,
          tags: ['Classic', 'Elegant']
        },
        {
          title: 'Glitter Glam',
          category: 'Nail Art',
          description: 'Sparkling glitter design perfect for special occasions.',
          image: nail2,
          tags: ['Glitter', 'Party']
        },
        {
          title: 'Floral Fantasy',
          category: 'Nail Art',
          description: 'Delicate hand-painted floral design.',
          image: nail3,
          tags: ['Floral', 'Hand-painted']
        },
        {
          title: 'Bridal Bliss',
          category: 'Bridal',
          description: 'Elegant design perfect for your special day.',
          image: nail4,
          tags: ['Bridal', 'Pearls']
        },
        {
          title: 'Chrome Dreams',
          category: 'Gel Nails',
          description: 'Mirror-like chrome finish for a futuristic look.',
          image: nail5,
          tags: ['Chrome', 'Metallic']
        },
        {
          title: 'Stiletto Extensions',
          category: 'Extensions',
          description: 'Bold stiletto-shaped nail extensions.',
          image: nail6,
          tags: ['Stiletto', 'Bold']
        },
        {
          title: 'Minimalist Chic',
          category: 'Gel Nails',
          description: 'Clean and simple design for everyday elegance.',
          image: nail7,
          tags: ['Minimalist', 'Clean']
        },
        {
          title: 'Ombre Magic',
          category: 'Gel Nails',
          description: 'Beautiful ombre blend from light to dark.',
          image: nail8,
          tags: ['Ombre', 'Gradient']
        },
        {
          title: 'Summer Vibes',
          category: 'Nail Art',
          description: 'Bright and colorful summer-themed design.',
          image: nail9,
          tags: ['Summer', 'Colorful']
        },
        {
          title: 'Winter Wonderland',
          category: 'Nail Art',
          description: 'Elegant winter-themed nail art with snowflakes.',
          image: nail10,
          tags: ['Winter', 'Snowflakes']
        }
      ]
    }
  },
  computed: {
    filteredWorks() {
      if (this.selectedCategory === 'All') {
        return this.works
      }
      return this.works.filter(work => work.category === this.selectedCategory)
    }
  }
}
</script>

<style scoped>
/* The gallery styles are already defined in your main.css file */
</style>