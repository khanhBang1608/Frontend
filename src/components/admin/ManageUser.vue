<script setup>
import { onMounted, nextTick } from "vue";

onMounted(async () => {
  await nextTick();
  $("#userTable").DataTable({
    responsive: true,
    language: {
      url: "//cdn.datatables.net/plug-ins/1.13.6/i18n/vi.json",
    },
  });
});
</script>

<template>
  <div class="container mt-4">
    <h2 class="text-center">DANH SÁCH NGƯỜI DÙNG</h2>
    <hr />
    <div class="alert alert-danger" style="display: none" id="error-message"></div>
    <div class="table-responsive">
      <!-- Bảng danh sách người dùng -->
      <table id="userTable" class="table table-striped table-bordered">
        <thead class="table-dark">
          <tr>
            <th>ID</th>
            <th>Tên</th>
            <th>Email</th>
            <th>Địa chỉ</th>
            <th>Vai trò</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          <!-- <th:block th:each="item: ${users}">
            <tr th:if="${item.role != 1}">
              <td th:text="${item.id}"></td>
              <td th:text="${item.name}"></td>
              <td th:text="${item.email}"></td>
              <td th:text="${item.address}"></td>
              <td th:text="${item.role == 1 ? 'Admin' : 'Người dùng'}"></td>
              <td>
                <form
                  th:action="@{/admin/user/update-status/{id}(id=${item.id})}"
                  method="post"
                >
                  <select
                    name="status"
                    class="form-select form-select-sm"
                    onchange="this.form.submit()"
                  >
                    <option th:value="true" th:selected="${item.status}">
                      Hoạt động
                    </option>
                    <option th:value="false" th:selected="${!item.status}">
                      Không hoạt động
                    </option>
                  </select>
                </form>
              </td>
            </tr>
          </th:block> -->
          <!-- Thêm các dòng dữ liệu khác tại đây -->
        </tbody>
      </table>
    </div>
  </div>
</template>
<style scoped>
@media (max-width: 768px) {
  #userTable td img {
    width: 40px;
    height: 40px;
  }

  #userTable td,
  #userTable th {
    font-size: 14px;
  }
}
</style>
