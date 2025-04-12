<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();

const email = ref("");
const otp = ref("");
const message = ref("");
const error = ref("");
const isOtpSent = ref(false);
const isSending = ref(false);

axios.defaults.withCredentials = true;

const sendOtp = async () => {
  if (isSending.value) return;
  isSending.value = true;
  error.value = "";
  message.value = "";
  try {
    const formData = new FormData();
    formData.append("email", email.value);

    const res = await axios.post("http://localhost:8080/api/register/otp", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    message.value = res.data.message;
    isOtpSent.value = true;
  } catch (err) {
    error.value = err.response?.data?.error || "Lỗi gửi OTP";
  } finally {
    isSending.value = false;
  }
};

const confirmOtp = async () => {
  error.value = "";
  message.value = "";
  try {
    const formData = new FormData();
    formData.append("email", email.value);
    formData.append("otp", otp.value);

    const res = await axios.post("http://localhost:8080/api/register/otp", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    if (res.data.message === "Xác thực OTP thành công.") {
      message.value = res.data.message;
      error.value = "";
      if (res.data.email) {
        router.push({ path: "/register", query: { email: res.data.email } });
      }
    } else {
      error.value = "Xác thực thất bại";
      message.value = "";
    }
  } catch (err) {
    error.value = err.response?.data?.error || "Xác thực thất bại";
    message.value = "";
  }
};
</script>

<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card shadow-lg">
          <div class="card-header bg-primary text-white text-center">
            <h3>Xác thực Email</h3>
          </div>
          <div class="card-body">
            <!-- Form đầu tiên để nhập email và gửi OTP -->
            <div v-if="!isOtpSent">
              <div class="mb-3">
                <label class="form-label">Email:</label>
                <input type="email" class="form-control" v-model="email" required />
              </div>
              <button
                class="btn btn-primary w-100 mb-3"
                @click="sendOtp"
                :disabled="isSending"
              >
                {{ isSending ? "Đang gửi..." : "Gửi OTP" }}
              </button>
            </div>

            <!-- Form thứ hai để nhập OTP và xác nhận -->
            <div v-if="isOtpSent">
              <h5 class="text-center">Nhập mã OTP</h5>
              <div class="mb-3">
                <label class="form-label">Mã OTP:</label>
                <input type="text" class="form-control" v-model="otp" required />
              </div>
              <button class="btn btn-success w-100" @click="confirmOtp">Xác nhận</button>
            </div>

            <div v-if="message" class="alert alert-success mt-3">{{ message }}</div>
            <div v-if="error" class="alert alert-danger mt-3">{{ error }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Thêm các kiểu tùy chỉnh nếu cần */
</style>
