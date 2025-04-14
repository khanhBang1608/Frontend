<script setup></script>

<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-8 col-lg-6">
        <h2 class="text-center">Hồ Sơ Cá Nhân</h2>
        <form action="/user/profile/update" method="post" id="profileForm">
          <!-- Họ và tên -->
          <div class="mb-3">
            <label for="name" class="form-label">Họ và Tên:</label>
            <input type="text" class="form-control" id="name" name="name" />
            <div class="text-danger" id="nameError"></div>
          </div>

          <!-- Email (chỉ hiển thị, không sửa) -->
          <div class="mb-3">
            <label for="email" class="form-label">Email:</label>
            <input type="email" class="form-control" id="email" name="email" readonly />
          </div>

          <!-- Địa chỉ -->
          <div class="mb-3">
            <label for="address" class="form-label">Địa chỉ:</label>
            <input type="text" class="form-control" id="address" name="address" />
            <div class="text-danger" id="addressError"></div>
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

<style src=""></style>
