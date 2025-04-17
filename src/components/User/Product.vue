<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'

const products = ref([])
const categories = ref([])
const searchQuery = ref('')
const selectedCategory = ref('')
const sortOrder = ref('')

const fetchProducts = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/products')
    products.value = response.data
  } catch (error) {
    console.error('Lỗi khi tải sản phẩm:', error)
  }
}

const fetchCategories = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/categories')
    categories.value = response.data
  } catch (error) {
    console.error('Lỗi khi tải danh mục:', error)
  }
}

onMounted(() => {
  fetchProducts()
  fetchCategories()
})

const filteredProducts = computed(() => {
  let filtered = products.value

  if (searchQuery.value) {
    filtered = filtered.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.value.toLowerCase()),
    )
  }

  if (selectedCategory.value) {
    filtered = filtered.filter((product) => product.categoryId === selectedCategory.value)
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
</script>

<template>
  <div class="container my-4">
    <h2 class="fw-bold text-center mb-4">Danh Sách Sản Phẩm</h2>
    <div class="row mb-3">
      <div class="col-md-4">
        <input
          type="text"
          class="form-control"
          placeholder="Tìm kiếm sản phẩm..."
          v-model="searchQuery"
        />
      </div>
      <div class="col-md-4">
        <select class="form-select" v-model="selectedCategory">
          <option value="">Tất cả danh mục</option>
          <option v-for="category in categories" :key="category.id" :value="category.id">
            {{ category.name }}
          </option>
        </select>
      </div>
      <div class="col-md-4">
        <select class="form-select" v-model="sortOrder">
          <option value="">Sắp xếp theo giá</option>
          <option value="asc">Thấp đến cao</option>
          <option value="desc">Cao đến thấp</option>
        </select>
      </div>
    </div>
    <div class="row g-3">
      <template v-for="product in filteredProducts" :key="product.id">
        <div class="col-md-3 col-sm-6 mb-4" v-if="product.status && product.category?.status">
          <div class="product-card text-center">
            <img
              v-if="product.imageNames && product.imageNames.length"
              :src="`http://localhost:8080/images/${product.imageNames[0]}`"
              :alt="product.name"
              class="img-fluid"
            />
            <h5>{{ product.name }}</h5>
            <p>{{ formatPrice(product.price) }} VND</p>
            <router-link
              :to="`/product/detail?productId=${product.id}`"
              class="btn btn-primary btn-sm"
            >
              Chi Tiết
            </router-link>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style></style>
