<script>
export default {
  data() {
    return {
      addresses: [
        { id: 1, customerName: 'Nguyễn Văn A', phoneNumber: '0901234567', address: 'Hà Nội' },
        { id: 2, customerName: 'Trần Thị B', phoneNumber: '0912345678', address: 'TP HCM' },
      ],
    }
  },
  methods: {
    confirmDelete(id) {
      if (confirm('Bạn có chắc chắn muốn xóa?')) {
        this.addresses = this.addresses.filter((address) => address.id !== id)
      }
    },
  },
}
</script>

<template>
  <div class="container mt-4">
    <h2 class="text-center">Danh Sách Địa Chỉ</h2>
    <div class="mb-3">
      <a href="/user/address/add" class="btn btn-primary">
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
          <tr v-for="address in addresses" :key="address.id">
            <td>{{ address.customerName }}</td>
            <td>{{ address.phoneNumber }}</td>
            <td>{{ address.address }}</td>
            <td>
              <div class="d-flex justify-content-center gap-2">
                <a :href="'/user/address/edit/' + address.id" class="btn btn-warning btn-sm">
                  <i class="bi bi-pencil"></i> Sửa
                </a>
                <button @click="confirmDelete(address.id)" class="btn btn-danger btn-sm">
                  <i class="bi bi-trash"></i> Xóa
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style></style>
