<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()

const email = ref('')
const otp = ref('')
const message = ref('')
const error = ref('')
const isOtpSent = ref(false)
const isSending = ref(false)

axios.defaults.withCredentials = true

const sendOtp = async () => {
  if (isSending.value) return
  isSending.value = true
  error.value = ''
  message.value = ''
  try {
    const formData = new FormData()
    formData.append('email', email.value)

    const res = await axios.post('http://localhost:8080/api/register/otp', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })

    message.value = res.data.message
    isOtpSent.value = true
  } catch (err) {
    error.value = err.response?.data?.error || 'Lỗi gửi OTP'
  } finally {
    isSending.value = false
  }
}

const confirmOtp = async () => {
  error.value = ''
  message.value = ''
  try {
    const formData = new FormData()
    formData.append('email', email.value)
    formData.append('otp', otp.value)

    const res = await axios.post('http://localhost:8080/api/register/otp', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })

    if (res.data.message === 'Xác thực OTP thành công.') {
      message.value = res.data.message
      router.push({ path: '/register', query: { email: res.data.email } })
    } else {
      error.value = 'Xác thực thất bại'
    }
  } catch (err) {
    error.value = err.response?.data?.error || 'Xác thực thất bại'
  }
}
</script>

<template>
  <div class="otp-container">
    <div class="card p-4 shadow" style="max-width: 400px; width: 100%">
      <!-- Logo -->
      <div class="d-flex justify-content-center align-items-center mb-3">
        <img src="@/assets/images/Nike.png" alt="Nike" class="img-fluid" style="max-width: 50px" />
        <img src="@/assets/images/Jordan.png" alt="Jordan" class="img-fluid" style="max-width: 50px" />
      </div>

      <h2 class="text-center mb-4">Xác Thực OTP</h2>

      <div v-if="message" class="alert alert-success text-center">{{ message }}</div>
      <div v-if="error" class="alert alert-success text-center">{{ error }}</div>

      <!-- Gửi OTP -->
      <div v-if="!isOtpSent">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input
            type="email"
            class="form-control"
            id="email"
            v-model="email"
            placeholder="Nhập email của bạn"
          />
        </div>
        <div class="d-grid">
          <button class="btn btn-dark" @click="sendOtp" :disabled="isSending">
            {{ isSending ? 'Đang gửi...' : 'Gửi OTP' }}
          </button>
        </div>
      </div>

      <!-- Nhập và xác nhận OTP -->
      <div v-else>
        <div class="mb-3">
          <label for="otp" class="form-label">Mã OTP</label>
          <input
            type="text"
            class="form-control"
            id="otp"
            v-model="otp"
            placeholder="Nhập mã OTP"
          />
        </div>
        <div class="d-grid">
          <button class="btn btn-dark" @click="confirmOtp">Xác Nhận</button>
        </div>
      </div>

      <!-- Quay lại -->
      <div class="mt-3 text-center">
        <a href="/login" class="text-secondary text-decoration-underline">Quay lại đăng nhập</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.otp-container {
  background-color: #f8f9fa;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arial, sans-serif;
}

.card {
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 1.5rem;
  font-weight: bold;
  color: #343a40;
}

.btn-dark,
.btn-success {
  border: none;
  border-radius: 8px;
  font-weight: bold;
  padding: 0.75rem;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.btn-dark:hover {
  background-color: #495057;
  box-shadow: 0 0 8px rgba(52, 58, 64, 0.5);
}

.btn-success:hover {
  background-color: #495057;
  box-shadow: 0 0 8px rgba(52, 58, 64, 0.5);
}

a.text-secondary {
  color: #6c757d !important;
  text-decoration: underline;
}

a.text-secondary:hover {
  color: #5a6268 !important;
  text-decoration: none;
}
</style>
