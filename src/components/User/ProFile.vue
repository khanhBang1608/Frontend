<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

// Hàm lấy giá trị từ cookie
const getCookie = (name) => {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'))
  return match ? decodeURIComponent(match[2]) : null
}

const id = parseInt(getCookie('userId')) || 0
const name = ref('')
const email = ref('')
const avatar = ref(null)
const previewUrl = ref('')

// Lấy thông tin người dùng khi trang được tải
onMounted(async () => {
  try {
    const response = await axios.get(`http://localhost:8080/api/profile/${id}`)
    const userProfile = response.data

    if (userProfile) {
      name.value = userProfile.name
      email.value = userProfile.email
      previewUrl.value = userProfile.avatar
        ? `http://localhost:8080/images/${userProfile.avatar}`
        : '/images/default.png'
    }
  } catch (error) {
    console.error('Lỗi khi lấy thông tin người dùng:', error)
  }
})

// Cập nhật thông tin người dùng
const updateProfile = async () => {
  const formData = new FormData()
  formData.append('id', id)
  formData.append('fullName', name.value)
  formData.append('email', email.value)
  if (avatar.value) {
    formData.append('avatar', avatar.value)
  }

  try {
    const response = await axios.post('http://localhost:8080/api/profile/update', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    alert(response.data) // Hiển thị thông báo sau khi cập nhật thành công
  } catch (error) {
    console.error('Lỗi khi cập nhật thông tin:', error)
  }
}
</script>

<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-8 col-lg-6">
        <h2 class="text-center mb-4">Hồ Sơ Cá Nhân</h2>

        <div class="text-center mb-4">
          <img
            :src="previewUrl"
            alt="Avatar"
            class="shadow"
            width="120"
            height="120"
            id="avatarPreview"
          />
        </div>

        <form @submit.prevent="updateProfile">
          <div class="mb-3">
            <label for="name" class="form-label">Họ và Tên:</label>
            <input type="text" class="form-control" v-model="name" />
          </div>

          <div class="mb-4">
            <label for="email" class="form-label">Email:</label>
            <input type="email" class="form-control" v-model="email" readonly />
          </div>

          <div class="mb-3">
            <label for="avatar" class="form-label">Avatar:</label>
            <input
              type="file"
              class="form-control"
              @change="(e) => (avatar.value = e.target.files[0])"
            />
          </div>

          <div class="d-flex justify-content-start gap-2">
            <button type="submit" class="btn btn-primary">Cập Nhật</button>
            <a href="/" class="btn btn-secondary">Quay lại</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
img#avatarPreview {
  object-fit: cover;
  border: 2px solid #ccc;
}
</style>
