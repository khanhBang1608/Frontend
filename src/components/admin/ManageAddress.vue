<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";

// Khai báo biến reactive cho danh sách địa chỉ
const addresses = ref([]);

// Lấy userId từ URL (query params)
const route = useRoute();
const userId = route.query.userId;  // userId sẽ được lấy từ URL

// Hàm để lấy danh sách địa chỉ từ API
const fetchAddresses = async () => {
  try {
    const response = await axios.get(`http://localhost:8080/api/addresses/user/${userId}`);
    addresses.value = response.data; // Gán dữ liệu vào biến addresses
    initDataTable(); // Khởi tạo DataTable sau khi dữ liệu đã được tải
  } catch (error) {
    console.error("Error fetching addresses:", error);
  }
};

// Hàm khởi tạo DataTable
const initDataTable = () => {
  const table = $("#addressTable");
  if ($.fn.dataTable.isDataTable("#addressTable")) {
    table.DataTable().destroy(); // Xóa bảng cũ nếu có
  }

  table.DataTable({
    responsive: true,
    language: {
      url: "//cdn.datatables.net/plug-ins/1.13.6/i18n/vi.json",
    },
  });
};

// Gọi fetchAddresses khi component được mount
onMounted(() => {
  fetchAddresses();
});
</script>

<template>
  <div class="container mt-4">
    <h2 class="text-center">Danh Sách Địa Chỉ</h2>

    <div class="table-responsive">
      <table
        id="addressTable"
        class="table table-bordered table-hover text-center align-middle"
      >
        <thead class="table-dark">
          <tr>
            <th>Tên Khách Hàng</th>
            <th>Số Điện Thoại</th>
            <th>Địa Chỉ</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="address in addresses" :key="address.id">
            <td>{{ address.customerName }}</td>
            <td>{{ address.phone }}</td>
            <td>{{ address.address }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 768px) {
  #addressTable td img {
    width: 40px;
    height: 40px;
  }

  #addressTable td,
  #addressTable th {
    font-size: 14px;
  }
}
</style>
