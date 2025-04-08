<template>
    <h2 class="text-center">DANH SÁCH ĐƠN HÀNG</h2>
    <br>
  <div class="stats-container">
    <!-- Đơn Hàng -->
    <div class="stat-card">
      <div class="icon-container bg-blue">
        <i class="fa fa-shopping-cart icon"></i>
      </div>
      <div class="stat-info">
        <div class="stat-title">ĐƠN HÀNG</div>
        <div class="stat-value">9 <a href="/admin/order">(Chi tiết)</a></div>
      </div>
    </div>

    <!-- Khách Hàng -->
    <div class="stat-card">
      <div class="icon-container bg-red">
        <i class="fa fa-user icon"></i>
      </div>
      <div class="stat-info">
        <div class="stat-title">KHÁCH HÀNG</div>
        <div class="stat-value">1 <a href="/admin/user">(Chi tiết)</a></div>
      </div>
    </div>

    <!-- Sản Phẩm -->
    <div class="stat-card">
      <div class="icon-container bg-green">
        <i class="fa fa-box icon"></i>
      </div>
      <div class="stat-info">
        <div class="stat-title">SẢN PHẨM</div>
        <div class="stat-value">6 <a href="/admin/product">(Chi tiết)</a></div>
      </div>
    </div>

    <!-- Danh Mục -->
    <div class="stat-card">
      <div class="icon-container bg-purple">
        <i class="fa fa-list icon"></i>
      </div>
      <div class="stat-info">
        <div class="stat-title">DANH MỤC</div>
        <div class="stat-value">4 <a href="/admin/category">(Chi tiết)</a></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.stats-container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
}

.stat-card {
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  background-color: white; /* Màu nền card tổng thể nếu cần */
  color: black;
  width: 260px;
  height: 100px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 15px;
}

.stat-info {
  display: flex;
  flex-direction: column;
  justify-content: center; /* Căn giữa theo chiều dọc */
  align-items: center; /* Căn giữa theo chiều ngang */
  text-align: center; /* Đảm bảo chữ căn giữa */
}

.stat-title {
  font-size: 16px;
  font-weight: bold; /* In đậm chữ tiêu đề */
}

.stat-value {
  font-size: 16px;
}

.icon {
  font-size: 28px;
  color: white;
}

/* Màu nền riêng cho icon */
.bg-blue {
  background-color: #00bcd4;
}

.bg-red {
  background-color: #e53935;
}

.bg-green {
  background-color: #43a047;
}

.bg-purple {
  background-color: #9c27b0;
}
</style>
