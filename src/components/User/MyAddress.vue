<script></script>

<template>
  <div class="container mt-5">
    <h2 class="text-center">Hồ Sơ Cá Nhân</h2>

    <!-- Hiển thị thông báo cập nhật thành công -->
    <div th:if="${successMessage}" class="alert alert-success">
      <span th:text="${successMessage}"></span>
    </div>

    <form th:action="@{/user/profile/update}" method="post" th:object="${user}">
      <!-- Họ và tên -->
      <div class="mb-3">
        <label for="name" class="form-label">Họ và Tên:</label>
        <input type="text" class="form-control" id="name" name="name" th:field="*{name}" />
        <div class="text-danger" th:if="${#fields.hasErrors('name')}" th:errors="*{name}"></div>
      </div>

      <!-- Email (chỉ hiển thị, không sửa) -->
      <div class="mb-3">
        <label for="email" class="form-label">Email:</label>
        <input
          type="email"
          class="form-control"
          id="email"
          name="email"
          th:field="*{email}"
          readonly
        />
      </div>

      <!-- Địa chỉ -->
      <div class="mb-3">
        <label for="address" class="form-label">Địa chỉ:</label>
        <input type="text" class="form-control" id="address" name="address" th:field="*{address}" />
        <div
          class="text-danger"
          th:if="${#fields.hasErrors('address')}"
          th:errors="*{address}"
        ></div>
      </div>

      <button type="submit" class="btn btn-primary">Lưu Thay Đổi</button>
    </form>
  </div>
</template>

<style src=""></style>
