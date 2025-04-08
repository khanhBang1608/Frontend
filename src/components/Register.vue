<script></script>
<template>
    <div class="register-container">
      <div class="card p-4 shadow" style="max-width: 500px; width: 100%">
        <!-- Logo -->
        <div class="d-flex justify-content-center align-items-center mb-3">
          <a href="#" class="ms-2">
            <img
              src="@/assets/images/Nike.png"
              alt="Logo Nike"
              class="img-fluid"
              style="max-width: 50px"
            />
          </a>
          <a href="#" class="me-2">
            <img
              src="@/assets/images/Jordan.png"
              alt="Logo Jordan"
              class="img-fluid"
              style="max-width: 50px"
            />
          </a>
        </div>
        
        <h2 class="text-center mb-4">Đăng Ký</h2>
  
        <form @submit.prevent="register">
          <!-- Email -->
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input
              v-model="email"
              type="email"
              class="form-control"
              id="email"
              name="email"
              placeholder="Nhập email của bạn"
              readonly
            />
            <div class="text-danger" v-if="errorEmail">{{ errorEmail }}</div>
          </div>
  
          <!-- Mật khẩu -->
          <div class="mb-3">
            <label for="password" class="form-label">Mật khẩu</label>
            <input
              v-model="password"
              type="password"
              class="form-control"
              id="password"
              name="password"
              placeholder="Nhập mật khẩu của bạn"
            />
            <div class="text-danger" v-if="errorPassword">{{ errorPassword }}</div>
          </div>
  
          <!-- Xác nhận mật khẩu -->
          <div class="mb-3">
            <label for="confirmPassword" class="form-label">Xác nhận mật khẩu</label>
            <input
              v-model="confirmPassword"
              type="password"
              class="form-control"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Xác nhận mật khẩu"
            />
            <div class="invalid-feedback" v-if="password !== confirmPassword && confirmPassword">
              Mật khẩu không khớp.
            </div>
          </div>
  
          <!-- Họ và tên -->
          <div class="mb-3">
            <label for="fullname" class="form-label">Họ và tên</label>
            <input
              v-model="fullName"
              type="text"
              class="form-control"
              id="fullname"
              name="fullName"
              placeholder="Nhập họ và tên của bạn"
            />
            <div class="text-danger" v-if="errorFullName">{{ errorFullName }}</div>
          </div>
  
          <!-- Địa chỉ -->
          <div class="mb-3">
            <label for="address" class="form-label">Địa chỉ</label>
            <input
              v-model="address"
              type="text"
              class="form-control"
              id="address"
              name="address"
              placeholder="Nhập địa chỉ của bạn"
            />
            <div class="text-danger" v-if="errorAddress">{{ errorAddress }}</div>
          </div>
  
          <!-- Nút Đăng ký -->
          <div class="d-grid">
            <button type="submit" class="btn btn-dark">Đăng Ký</button>
          </div>
        </form>
  
        <!-- Liên kết khác -->
        <div class="mt-3 text-center">
          <p class="mb-1">
            Đã có tài khoản?
            <a href="/login" class="text-secondary text-decoration-underline">Đăng nhập</a>.
          </p>
        </div>
      </div>
    </div>
  </template>
  <style src="./src/assets/css/register.css"></style>
