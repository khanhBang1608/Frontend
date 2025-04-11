<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const form = ref({
  name: '',
  description: '',
  price: 0,
  status: true,
  categoryId: '',
  images: []
})

const errors = ref({})
const categories = ref([])

onMounted(async () => {
  const res = await axios.get('http://localhost:8080/api/product/categories')
  categories.value = res.data
})

const handleSubmit = async () => {
  const formData = new FormData()
  formData.append('name', form.value.name)
  formData.append('description', form.value.description)
  formData.append('price', form.value.price)
  formData.append('status', form.value.status)
  formData.append('categoryId', form.value.categoryId)
  for (let file of form.value.images) {
    formData.append('images', file)
  }

  try {
    await axios.post('http://localhost:8080/api/product/add', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
    alert('Lưu thành công')
  } catch (err) {
    errors.value = err.response.data
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="form.name" type="text" class="" />
    <div class="text-danger">{{ errors.name }}</div>

    <textarea v-model="form.description"></textarea>
    <div class="text-danger">{{ errors.description }}</div>

    <input v-model="form.price" type="number" />
    <div class="text-danger">{{ errors.price }}</div>

    <select v-model="form.categoryId">
      <option disabled value="">Chọn danh mục</option>
      <option v-for="c in categories" :key="c.id" :value="c.id">
        {{ c.name }}
      </option>

    </select>
    <div class="text-danger">{{ errors.categoryId }}</div>

    <input type="file" multiple @change="e => form.images = Array.from(e.target.files)" />
    <div class="text-danger">{{ errors.images }}</div>

    <button type="submit">Thêm sản phẩm</button>
  </form>
</template>