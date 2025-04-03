<script>
export default {
  data() {
    return {
      orders: [
        { id: 1, dateCreated: '2024-04-01', totalAmount: 1200000, status: 0 },
        { id: 2, dateCreated: '2024-04-02', totalAmount: 2500000, status: 3 },
        { id: 3, dateCreated: '2024-04-03', totalAmount: 500000, status: 4 },
      ],
    }
  },
  methods: {
    formatCurrency(amount) {
      return new Intl.NumberFormat('vi-VN').format(amount) + ' VND'
    },
    getStatusText(status) {
      switch (status) {
        case 0:
          return { text: 'Chưa duyệt', class: 'text-warning' }
        case 1:
          return { text: 'Đã duyệt', class: 'text-primary' }
        case 2:
          return { text: 'Đang giao', class: 'text-info' }
        case 3:
          return { text: 'Giao thành công', class: 'text-success' }
        case 4:
          return { text: 'Đã hủy', class: 'text-danger' }
        default:
          return { text: 'Không xác định', class: 'text-secondary' }
      }
    },
    confirmCancel(orderId) {
      if (confirm('Bạn có chắc muốn hủy đơn hàng này không?')) {
        this.orders = this.orders.map((order) =>
          order.id === orderId ? { ...order, status: 4 } : order,
        )
      }
    },
  },
}
</script>

<template>
  <div class="container mt-3">
    <h2 class="text-center">Lịch Sử Đơn Hàng</h2>
    <table id="orderHistoryTable" class="table table-striped table-bordered">
      <thead class="table-dark">
        <tr>
          <th>STT</th>
          <th>Ngày đặt</th>
          <th>Tổng tiền</th>
          <th>Trạng thái</th>
          <th>Chi tiết</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(order, index) in orders" :key="order.id">
          <td>{{ index + 1 }}</td>
          <td>{{ order.dateCreated }}</td>
          <td class="text-danger">{{ formatCurrency(order.totalAmount) }}</td>
          <td :class="getStatusText(order.status).class">
            {{ getStatusText(order.status).text }}
          </td>
          <td>
            <a :href="'/user/order/details/' + order.id" class="btn btn-primary btn-sm">Xem</a>
            <button
              v-if="order.status === 0"
              @click="confirmCancel(order.id)"
              class="btn btn-danger btn-sm"
            >
              Hủy đơn hàng
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.container {
  max-width: 900px;
  margin: auto;
}
</style>
