<script></script>

<template>
  <div class="container mt-5">
    <h2 class="text-center">Đổi Mật Khẩu</h2>

    <!-- Hiển thị thông báo thành công hoặc lỗi -->
    <div th:if="${successMessage}" class="alert alert-success">
      <span th:text="${successMessage}"></span>
    </div>
    <div th:if="${errorMessage}" class="alert alert-danger">
      <span th:text="${errorMessage}"></span>
    </div>

    <form th:action="@{/user/change-password}" method="post" th:object="${changePasswordBean}">
      <!-- Mật khẩu hiện tại -->
      <div class="mb-3">
        <label for="current	Password" class="form-label">Mật khẩu hiện tại:</label>
        <input
          type="password"
          class="form-control"
          id="currentPassword"
          name="currentPassword"
          th:field="*{currentPassword}"
        />
        <div
          class="text-danger"
          th:if="${#fields.hasErrors('currentPassword')}"
          th:errors="*{currentPassword}"
        ></div>
      </div>

      <!-- Mật khẩu mới -->
      <div class="mb-3">
        <label for="newPassword" class="form-label">Mật khẩu mới:</label>
        <input
          type="password"
          class="form-control"
          id="newPassword"
          name="newPassword"
          th:field="*{newPassword}"
        />
        <div
          class="text-danger"
          th:if="${#fields.hasErrors('newPassword')}"
          th:errors="*{newPassword}"
        ></div>
      </div>

      <!-- Xác nhận mật khẩu mới -->
      <div class="mb-3">
        <label for="confirmPassword" class="form-label">Xác nhận mật khẩu mới:</label>
        <input
          type="password"
          class="form-control"
          id="confirmPassword"
          name="confirmPassword"
          th:field="*{confirmPassword}"
        />
        <div
          class="text-danger"
          th:if="${#fields.hasErrors('confirmPassword')}"
          th:errors="*{confirmPassword}"
        ></div>
      </div>
      <button type="submit" class="btn btn-danger w-100">Đổi Mật Khẩu</button>
    </form>
  </div>
</template>

<style src=""></style>
