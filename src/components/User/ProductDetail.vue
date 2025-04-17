<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const product = ref(null)
const selectedSize = ref(null)
const quantity = ref(1)

const getProductIdFromUrl = () => {
  const params = new URLSearchParams(window.location.search)
  return params.get('productId')
}

const changeMainImage = (imgName) => {
  const mainImage = document.getElementById('mainImage')
  if (mainImage) {
    mainImage.src = `http://localhost:8080/images/${imgName}`
  }
}

const openCartModal = () => {
  // Implement your modal opening logic here
  console.log('Opening cart modal for product:', product.value)
}

const changeQuantity = (delta) => {
  const newQuantity = quantity.value + delta
  if (newQuantity >= 1) {
    quantity.value = newQuantity
  }
}

onMounted(async () => {
  const productId = getProductIdFromUrl()
  if (productId) {
    try {
      const res = await axios.get(`http://localhost:8080/api/productne/${productId}`)
      product.value = res.data
      if (product.value.sizes && product.value.sizes.length > 0) {
        selectedSize.value = product.value.sizes[0]
      }
      console.log('Product loaded:', product.value) // Log the entire product data to check
    } catch (err) {
      console.error('Error fetching product:', err)
    }
  }
})
</script>

<template>
  <div class="container mt-3" v-if="product">
    <div class="row product-container">
      <div class="col-md-5 product-image text-center">
        <img
          :src="'http://localhost:8080/images/' + product.imageNames[0]"
          alt="Product Image"
          class="img-fluid main-image"
          id="mainImage"
        />
      </div>

      <div class="col-md-6 product-info">
        <h2>{{ product.name }}</h2>
        <p class="price text-danger">{{ product.price.toLocaleString() }} VND</p>
        <p class="text-dark">{{ product.description }}</p>
        <p class="text-muted">Bạn cần tìm size/màu khác? Liên hệ Bele ngay nhé!</p>

        <div class="mb-3">
          <label for="sizeSelect" class="form-label fw-semibold">Chọn size:</label>
          <select id="sizeSelect" v-model="selectedSize" class="form-select rounded-3">
            <option v-for="size in product.sizes" :key="size.id" :value="size">
              {{ size.sizeName }} (Còn lại: {{ size.stock }})
            </option>
          </select>
        </div>

        <div class="mb-3">
          <label class="form-label fw-semibold">Số lượng:</label>
          <div class="input-group">
            <button type="button" class="btn btn-outline-dark fw-bold" @click="changeQuantity(-1)">
              -
            </button>
            <input type="number" v-model="quantity" class="form-control text-center" min="1" />
            <button type="button" class="btn btn-outline-dark fw-bold" @click="changeQuantity(1)">
              +
            </button>
          </div>
        </div>

        <div class="d-flex justify-content-between">
          <button class="btn btn-dark btn-custom" @click="openCartModal">
            🛒 Thêm vào giỏ hàng
          </button>
          <button class="btn btn-danger btn-custom">⚡ Mua ngay</button>
        </div>
      </div>
    </div>
  </div>
</template>
