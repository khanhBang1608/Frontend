// <script>
// import axios from "axios";

// export default {
//   data() {
//     return {
//       email: "",
//       password: "",
//       error: "",
//     };
//   },
//   methods: {
//     async login() {
//       try {
//         const response = await axios.post("http://localhost:8080/api/login", {
//           email: this.email,
//           password: this.password,
//         });
//         console.log(response.data);
//         // Xử lý đăng nhập thành công
//       } catch (error) {
//         this.error = "Email hoặc mật khẩu không đúng";
//       }
//     },
//   },
// };
// </script>

<template>
  <div class="card p-4 shadow" style="max-width: 400px; width: 100%">
    <!-- Logo -->
    <div class="d-flex justify-content-center align-items-center mb-3">
      <img src="/images/Nike.png" alt="Nike" class="img-fluid" style="max-width: 50px" />
      <img src="/images/Jordan.png" alt="Jordan" class="img-fluid" style="max-width: 50px" />
    </div>

    <h2 class="text-center mb-4">Đăng Nhập</h2>
    <!-- Hiển thị thông báo lỗi nếu có -->
    <div v-if="error" class="alert alert-danger text-center" role="alert">
      {{ error }}
    </div>

    <form @submit.prevent="login">
      <!-- Email -->
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input
          type="text"
          class="form-control"
          id="email"
          v-model="email"
          placeholder="Nhập email của bạn"
        />
      </div>

      <!-- Mật khẩu -->
      <div class="mb-3">
        <label for="password" class="form-label">Mật khẩu</label>
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="password"
          placeholder="Nhập mật khẩu"
        />
      </div>

      <!-- Nút Đăng nhập -->
      <div class="d-grid">
        <button type="submit" class="btn btn-dark">Đăng Nhập</button>
      </div>
    </form>
    <!-- Liên kết khác -->
    <div class="mt-3 text-center">
      <p class="mb-1">
        <a href="/forgot-password" class="text-secondary text-decoration-underline"
          >Quên mật khẩu?</a
        >
      </p>
      <p>
        Chưa có tài khoản?
        <a href="/register/otp" class="text-secondary text-decoration-underline"
          >Đăng ký ngay</a
        >.
      </p>
    </div>
  </div>
</template>

<style>
body {
  background-color: #f8f9fa;
  height: 100vh;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arial, sans-serif;
}

.card {
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
}

h2 {
  font-size: 1.5rem;
  font-weight: bold;
  color: #343a40;
}

.btn-dark {
  background-color: #343a40;
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

a.text-secondary {
  color: #6c757d !important;
  text-decoration: underline;
}

a.text-secondary:hover {
  color: #5a6268 !important;
  text-decoration: none;
}
</style>
