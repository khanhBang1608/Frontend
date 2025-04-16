<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const sizes = ref([])
const productName = ref('')
const route = useRoute()
const productId = Number(route.query.productId)


const loadSizes = async () => {
  try {
    const res = await axios.get(`http://localhost:8080/api/product/sizes?productId=${productId}`)
    sizes.value = res.data
  } catch (err) {
    console.error('Lỗi tải size:', err)
  }
}

const loadProductName = async () => {
  try {
    const res = await axios.get(`http://localhost:8080/api/product/${productId}`)
    productName.value = res.data.name
  } catch (err) {
    console.error('Không thể tải tên sản phẩm:', err)
  }
}

onMounted(() => {
  loadProductName()
  loadSizes()
})
</script>

<template>
  <div class="container mt-4">
    <h3 class="text-center">DANH SÁCH SIZE CỦA SẢN PHẨM: <strong>{{ productName }}</strong></h3>
    <hr />
    <div class="alert alert-danger" style="display: none" id="error-message"></div>
    
        <a :href="`/admin/product/productSizeForm?productId=${productId}`">
                <button class="btn btn-primary btn-sm">Thêm size</button>
              </a>
   
    <table class="table table-bordered table-hover">
      <thead class="table-dark">
        <tr>
          <th>ID</th>
          <th>Size</th>
          <th>Số lượng tồn</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="sizes.length === 0">
            <td colspan="3" class="text-center">Không có size nào</td>
        </tr>
        <tr v-for="item in sizes" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.sizeName }}</td>
          <td>{{ item.stock }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>