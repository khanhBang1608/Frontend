<script setup>
import { ref } from 'vue'
import axios from 'axios'

const form = ref({
  email: '',
  password: '',
  confirmPassword: '',
  fullName: '',
})

const errors = ref({
  email: '',
  password: '',
  confirmPassword: '',
  fullName: '',
  general: '',
})

const register = async () => {
  try {
    // Clear lỗi cũ
    errors.value = {}

    const response = await axios.post('http://localhost:8080/api/register', form.value)

    alert('Đăng ký thành công!')
    // Sau khi đăng ký có thể chuyển sang login
    window.location.href = '/login'
  } catch (error) {
    if (error.response) {
      errors.value.general = error.response.data
    } else {
      errors.value.general = 'Lỗi kết nối server.'
    }
  }
}
</script>

<template>
  <div class="register-container">
    <div class="card p-4 shadow" style="max-width: 500px; width: 100%">
      <h2 class="text-center mb-4">Đăng Ký</h2>

      <form @submit.prevent="register">
        <div class="text-danger mb-2" v-if="errors.general">{{ errors.general }}</div>

        <!-- Email -->
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input
            v-model="form.email"
            type="text"
            class="form-control"
            id="email"
            placeholder="Nhập email của bạn"
          />
        </div>

        <!-- Mật khẩu -->
        <div class="mb-3">
          <label for="password" class="form-label">Mật khẩu</label>
          <input
            v-model="form.password"
            type="password"
            class="form-control"
            id="password"
            placeholder="Nhập mật khẩu"
          />
        </div>

        <!-- Xác nhận mật khẩu -->
        <div class="mb-3">
          <label for="confirmPassword" class="form-label">Xác nhận mật khẩu</label>
          <input
            v-model="form.confirmPassword"
            type="password"
            class="form-control"
            id="confirmPassword"
            placeholder="Xác nhận mật khẩu"
          />
          <div class="text-danger" v-if="form.password !== form.confirmPassword">
            Mật khẩu không khớp.
          </div>
        </div>

        <!-- Họ tên -->
        <div class="mb-3">
          <label for="fullName" class="form-label">Họ và tên</label>
          <input
            v-model="form.fullName"
            type="text"
            class="form-control"
            id="fullName"
            placeholder="Nhập họ tên"
          />
        </div>

        <!-- Nút Đăng ký -->
        <div class="d-grid">
          <button type="submit" class="btn btn-dark">Đăng Ký</button>
        </div>
      </form>

      <div class="mt-3 text-center">
        <p>
          Đã có tài khoản?
          <a href="/login" class="text-secondary text-decoration-underline">Đăng nhập</a>.
        </p>
      </div>
    </div>
  </div>
</template>
<style src="./src/assets/css/register.css">
</style>
