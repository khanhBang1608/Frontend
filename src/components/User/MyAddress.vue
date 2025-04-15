<script></script>

<template>
  <div class="container mt-4">
    <h2 class="text-center">Danh Sách Địa Chỉ</h2>
    <div class="mb-3">
      <a href="/user/address/form" class="btn btn-primary">
        <i class="bi bi-plus-circle"></i> Thêm Địa Chỉ
      </a>
    </div>

    <div class="table-responsive">
      <table class="table table-bordered table-hover text-center align-middle">
        <thead class="table-dark">
          <tr>
            <th>Tên Khách Hàng</th>
            <th>Số Điện Thoại</th>
            <th>Địa Chỉ</th>
            <th>Hành Động</th>
          </tr>
        </thead>
        <tbody>
          <tr th:each="address : ${addresses}">
            <td th:text="${address.customerName}"></td>
            <td th:text="${address.phoneNumber}"></td>
            <td th:text="${address.address}"></td>
            <td>
              <div class="d-flex justify-content-center gap-2">
                <a
                  th:href="@{/user/address/edit/{id}(id=${address.id})}"
                  class="btn btn-warning btn-sm"
                >
                  <i class="bi bi-pencil"></i>
                  Sửa
                </a>
                <form
                  th:action="@{/user/address/delete/{id}(id=${address.id})}"
                  method="post"
                  onsubmit="return confirm('Bạn có chắc chắn muốn xóa?')"
                >
                  <button type="submit" class="btn btn-danger btn-sm">
                    <i class="bi bi-trash"></i> Xóa
                  </button>
                </form>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style src=""></style>
