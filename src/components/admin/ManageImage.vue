<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'

const route = useRoute()
const productId = Number(route.query.productId)

const imageList = ref([])

// Load ảnh sản phẩm từ API
const loadImagesByProduct = async () => {
  try {
    if (!productId) return
    const res = await axios.get(`http://localhost:8080/api/product/images?productId=${productId}`)
    imageList.value = res.data
  } catch (err) {
    console.error('Lỗi khi load ảnh:', err)
  }
}

// Gọi hàm loadImagesByProduct khi component được mount
onMounted(() => {
  loadImagesByProduct()
})
</script>

<template>
  <div class="container p-3">
    <div class="form-container shadow p-4 rounded bg-light">
      <h5 class="text-center mb-4">Danh sách ảnh sản phẩm</h5>

      <!-- Nút quay lại và thêm ảnh -->
      <div class="d-flex justify-content-between mb-3">
        <a href="/admin/product" class="btn btn-secondary">Quay lại</a>
        <button class="btn btn-primary" @click="handleAddImage">Thêm ảnh</button>
      </div>

      <!-- Bảng hiển thị ảnh sản phẩm -->
      <div v-if="imageList.length" class="mb-4">
        <label class="form-label fw-semibold">Danh sách ảnh</label>
        <table class="table table-bordered table-hover">
          <thead class="table-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Ảnh</th>
              <th scope="col">Tên ảnh</th>
              <th scope="col">Hành động</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(img, index) in imageList" :key="img.id">
              <td>{{ index + 1 }}</td>
              <td>
                <img
                  :src="`http://localhost:8080/images/${img.name}`"
                  alt="Ảnh sản phẩm"
                  style="width: auto; height: 50px"
                />
              </td>
              <td>{{ img.name }}</td>
              <td>
                <button class="btn btn-danger btn-sm" @click="handleDeleteImage(img.id)">
                  Xóa
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Thông báo nếu không có ảnh -->
      <div v-else>
        <p class="text-danger">Không có ảnh sản phẩm nào.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-danger {
  font-size: 13px;
  color: red;
}
</style>
