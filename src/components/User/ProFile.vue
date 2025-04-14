<script></script>

<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-8 col-lg-6">
        <h2 class="text-center mb-4">Hồ Sơ Cá Nhân</h2>

        <div class="text-center mb-4">
          <img
            src="@/assets/images/Jordan.png"
            alt="Avatar"
            class="shadow"
            width="120"
            height="120"
            id="avatarPreview"
          />
          <div class="mt-2">
            <input type="file" id="avatarInput" class="form-control" style="display: none;" />
            <button type="button" class="btn btn-outline-secondary btn-sm" onclick="document.getElementById('avatarInput').click();">
              Thay ảnh
            </button>
          </div>
        </div>

        <!-- Form -->
        <form action="/user/profile/update" method="post" id="profileForm">
          <!-- Họ và tên -->
          <div class="mb-3">
            <label for="name" class="form-label">Họ và Tên:</label>
            <input type="text" class="form-control" id="name" name="name" />
            <div class="text-danger" id="nameError"></div>
          </div>

          <!-- Email (chỉ hiển thị, không sửa) -->
          <div class="mb-4">
            <label for="email" class="form-label">Email:</label>
            <input type="email" class="form-control" id="email" name="email" readonly />
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

<style>
img#avatarPreview {
  object-fit: cover;
  border: 2px solid #ccc;
}
</style>
