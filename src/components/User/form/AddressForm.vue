<script></script>

<template>
  <div class="container d-flex justify-content-center align-items-center mt-4">
    <div class="col-md-6">
      <h2
        class="text-center"
        th:text="${address.id == null ? 'Thêm Địa Chỉ' : 'Chỉnh Sửa Địa Chỉ'}"
      ></h2>
      <form
        th:action="@{${address.id == null ? '/user/address/add' : '/user/address/update/' + address.id}}"
        th:object="${address}"
        method="post"
      >
        <div class="mb-3">
          <label class="form-label">Tên Khách Hàng</label>
          <input type="text" class="form-control" th:field="*{customerName}" />
          <span
            class="text-danger"
            th:if="${#fields.hasErrors('customerName')}"
            th:errors="*{customerName}"
          ></span>
        </div>
        <div class="mb-3">
          <label class="form-label">Số Điện Thoại</label>
          <input type="text" class="form-control" th:field="*{phoneNumber}" />
          <span
            class="text-danger"
            th:if="${#fields.hasErrors('phoneNumber')}"
            th:errors="*{phoneNumber}"
          ></span>
        </div>
        <div class="mb-3">
          <label class="form-label">Địa Chỉ</label>
          <input type="text" class="form-control" th:field="*{address}" />
          <span
            class="text-danger"
            th:if="${#fields.hasErrors('address')}"
            th:errors="*{address}"
          ></span>
        </div>
        <button type="submit" class="btn btn-primary">Lưu</button>
        <a href="/user/address" class="btn btn-secondary">Hủy</a>
      </form>
    </div>
  </div>
</template>

<style src=""></style>
