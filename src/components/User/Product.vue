<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'

// Lấy userId từ cookie
const getUserIdFromCookie = () => {
  const match = document.cookie.match(/(?:^|;\s*)userId=(\d+)/)
  return match ? parseInt(match[1]) : null
}

const userId = getUserIdFromCookie()

const products = ref([])
const favorites = ref([]) // Danh sách productId yêu thích
const searchQuery = ref('')
const selectedCategory = ref('')
const sortOrder = ref('')
const categories = ref([])

const fetchProducts = async () => {
  const res = await axios.get('http://localhost:8080/api/products')
  products.value = res.data
}

const fetchCategories = async () => {
  const res = await axios.get('http://localhost:8080/api/categories')
  categories.value = res.data
}

// Lấy danh sách yêu thích từ backend
const fetchFavorites = async () => {
  if (!userId) return
  const res = await axios.get(`http://localhost:8080/api/favorites/${userId}`)
  favorites.value = res.data.map(fav => fav.productId)
}

const isFavorite = (productId) => favorites.value.includes(productId)

const addToFavorites = async (productId) => {
  await axios.post('http://localhost:8080/api/favorites/favorites', null, {
    params: { userId, productId },
  })
  favorites.value.push(productId)
}

const removeFromFavorites = async (productId) => {
  await axios.delete(`http://localhost:8080/api/favorites/${userId}/${productId}`)
  favorites.value = favorites.value.filter(id => id !== productId)
}

const toggleFavorite = async (productId) => {
  if (!userId) {
    alert('Vui lòng đăng nhập để sử dụng chức năng yêu thích!')
    return
  }
  if (isFavorite(productId)) {
    await removeFromFavorites(productId)
  } else {
    await addToFavorites(productId)
  }
}

const filteredProducts = computed(() => {
  let filtered = products.value
  if (searchQuery.value) {
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  }
  if (selectedCategory.value) {
    filtered = filtered.filter(p => p.categoryId === selectedCategory.value)
  }
  if (sortOrder.value === 'asc') {
    filtered.sort((a, b) => a.price - b.price)
  } else if (sortOrder.value === 'desc') {
    filtered.sort((a, b) => b.price - a.price)
  }
  return filtered
})

const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

onMounted(async () => {
  await fetchProducts()
  await fetchCategories()
  await fetchFavorites()
})
</script>


<template>
  <div class="row g-3">
    <template v-for="product in filteredProducts" :key="product.id">
      <div class="col-md-3 col-sm-6 mb-4" v-if="product.status && product.category?.status">
        <div class="product-card text-center">
          <img
            v-if="product.imageNames && product.imageNames.length"
            :src="`http://localhost:8080/images/${product.imageNames[0]}`"
            class="img-fluid"
            :alt="product.name"
          />
          <h5>{{ product.name }}</h5>
          <p>{{ formatPrice(product.price) }} VND</p>

          <button
            class="btn btn-outline-danger btn-sm me-2"
            @click="toggleFavorite(product.id)"
          >
            <i :class="isFavorite(product.id) ? 'bi bi-heart-fill' : 'bi bi-heart'"></i>
          </button>

          <router-link
            :to="`/product/detail?productId=${product.id}`"
            class="btn btn-primary btn-sm"
          >
            Chi tiết
          </router-link>
        </div>
      </div>
    </template>
  </div>
</template>


<style scoped>
.product-card img {
  max-height: 200px;
  object-fit: cover;
}
</style>
