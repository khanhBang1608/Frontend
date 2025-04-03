<script></script>

<template>
  <div class="container mt-5">
    <h2 class="text-center">Đổi Mật Khẩu</h2>

    <form action="/user/change-password" method="post" id="changePasswordForm">
      <!-- Mật khẩu hiện tại -->
      <div class="mb-3">
        <label for="currentPassword" class="form-label">Mật khẩu hiện tại:</label>
        <input
          type="password"
          class="form-control"
          id="currentPassword"
          name="currentPassword"
        />
        <div class="text-danger" id="currentPasswordError"></div>
      </div>

      <!-- Mật khẩu mới -->
      <div class="mb-3">
        <label for="newPassword" class="form-label">Mật khẩu mới:</label>
        <input
          type="password"
          class="form-control"
          id="newPassword"
          name="newPassword"
        />
        <div class="text-danger" id="newPasswordError"></div>
      </div>

      <!-- Xác nhận mật khẩu mới -->
      <div class="mb-3">
        <label for="confirmPassword" class="form-label">Xác nhận mật khẩu mới:</label>
        <input
          type="password"
          class="form-control"
          id="confirmPassword"
          name="confirmPassword"
        />
        <div class="text-danger" id="confirmPasswordError"></div>
      </div>

      <button type="submit" class="btn btn-danger w-100">Đổi Mật Khẩu</button>
    </form>
  </div>
</template>

<style src=""></style>
