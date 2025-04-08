<script setup>
import { onMounted, nextTick } from "vue";

onMounted(async () => {
  await nextTick();
  $("#orderTable").DataTable({
    responsive: true,
    language: {
      url: "//cdn.datatables.net/plug-ins/1.13.6/i18n/vi.json",
    },
  });
});
</script>

<template>
  <div class="container mt-4">
    <h2 class="text-center">DANH SÁCH ĐƠN HÀNG</h2>
    <hr />
    <div class="alert alert-danger" style="display: none" id="error-message"></div>
    <div class="table-responsive">
      <!-- Bảng danh sách đơn hàng -->
      <table id="orderTable" class="table table-striped table-bordered">
        <thead class="table-dark">
          <tr>
            <th>ID</th>
            <th>Tên</th>
            <!-- <th>Số điện thoại</th> -->
            <th>Trạng thái</th>
            <th>Ngày tạo</th>
            <th>Tổng tiền</th>
            <th>Địa chỉ</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          <th:block th:each="item : ${orders}">
            <tr>
              <td th:text="${item.id}"></td>
              <td th:text="${item.address.customerName}"></td>
              <td>
                <form
                  th:action="@{/admin/order/update-status/{id}(id=${item.id})}"
                  method="post"
                >
                  <select
                    name="status"
                    class="form-select form-select-sm"
                    onchange="this.form.submit()"
                    th:disabled="${item.status == 4}"
                  >
                    <option th:value="0" th:selected="${item.status == 0}">
                      Chưa duyệt
                    </option>
                    <option th:value="1" th:selected="${item.status == 1}">
                      Đã duyệt
                    </option>
                    <option th:value="2" th:selected="${item.status == 2}">
                      Đang giao
                    </option>
                    <option th:value="3" th:selected="${item.status == 3}">
                      Giao thành công
                    </option>
                    <option th:value="4" th:selected="${item.status == 4}">
                      Hủy đơn
                    </option>
                  </select>
                </form>
              </td>
              <td th:text="${item.dateCreated}"></td>
              <td
                th:text="${#numbers.formatDecimal(item.totalAmount, 0, 'COMMA', 0, 'POINT')} + ' VND'"
              ></td>
              <td th:text="${item.address.address}"></td>
              <td>
                <a
                  th:href="@{/admin/order/detail(orderId=${item.id})}"
                  class="btn btn-primary btn-sm"
                  >Chi tiết</a
                >
              </td>
            </tr>
          </th:block>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style scoped>
@media (max-width: 768px) {
  #orderTable td img {
    width: 40px;
    height: 40px;
  }

  #orderTable td,
  #orderTable th {
    font-size: 14px;
  }
}
</style>
