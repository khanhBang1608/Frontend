<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const address = ref({
  customerName: '',
  phone: '',
  address: '',
  user: { id: null } // userId sẽ được gán từ cookie
})
const error = ref(null)
const successMessage = ref(null)
const router = useRouter()

// Hàm lấy giá trị cookie
const getCookie = (name) => {
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop().split(';').shift()
}

// Hàm để lưu địa chỉ
const saveAddress = async () => {
  error.value = null
  successMessage.value = null

  // Kiểm tra các trường nhập
  if (!address.value.customerName.trim()) {
    error.value = 'Tên không được bỏ trống.'
    return
  }

  if (!address.value.phone.trim()) {
    error.value = 'Số điện thoại không được bỏ trống.'
    return
  }

  if (!address.value.address.trim()) {
    error.value = 'Địa chỉ không được bỏ trống.'
    return
  }

  // Lấy userId từ cookie và gán vào đối tượng address
  const userId = getCookie('userId')
  if (userId) {
    address.value.user.id = parseInt(userId)
  }

  try {
    // Gửi yêu cầu POST để thêm địa chỉ
    const response = await axios.post('http://localhost:8080/api/addresses/create', address.value)
    successMessage.value = 'Địa chỉ đã được thêm thành công.'
    // Reset form sau khi thành công
    address.value.customerName = ''
    address.value.phone = ''
    address.value.address = ''
  } catch (err) {
    console.error('❌ Lỗi khi thêm địa chỉ:', err)
    error.value = err.response?.data || 'Đã xảy ra lỗi khi thêm địa chỉ.'
  }
}
</script>

<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-8 col-lg-6">
        <h2 class="text-center">Thêm Địa Chỉ</h2>

        <!-- Hiển thị thông báo lỗi -->
        <div v-if="error" class="alert alert-danger text-center">{{ error }}</div>

        <!-- Hiển thị thông báo thành công -->
        <div v-if="successMessage" class="alert alert-success text-center">{{ successMessage }}</div>

        <!-- Form thêm địa chỉ -->
        <form @submit.prevent="saveAddress">
          <!-- Tên người nhận -->
          <div class="mb-3">
            <label for="customerName" class="form-label">Tên người nhận:</label>
            <input v-model="address.customerName" type="text" class="form-control" id="customerName" />
          </div>

          <!-- Số điện thoại -->
          <div class="mb-3">
            <label for="phone" class="form-label">Số điện thoại:</label>
            <input v-model="address.phone" type="text" class="form-control" id="phone" />
          </div>

          <!-- Địa chỉ -->
          <div class="mb-3">
            <label for="address" class="form-label">Địa chỉ:</label>
            <input v-model="address.address" type="text" class="form-control" id="address" />
          </div>

          <div class="d-flex justify-content-start gap-2">
            <button type="submit" class="btn btn-primary">Thêm Địa Chỉ</button>
            <a href="/user/address" class="btn btn-secondary">Quay lại</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
