<script></script>
<template>
  <header th:fragment="header">
    <!-- Logo Bar -->
    <div class="bg-light">
      <div class="container d-flex justify-content-between align-items-center py-2">
        <!-- Logo -->
        <a href="#">
          <img th:src="@{/images/Jordan.png}" alt="Nike Logo" height="24" />
        </a>

        <!-- Menu điều hướng -->
        <div class="d-flex align-items-center">
          <a href="/contact" class="text-dark text-decoration-none me-3">Tìm cửa hàng</a>
          <a href="/about" class="text-dark text-decoration-none me-3">Giới thiệu</a>
          <!-- Nếu có cookie, hiển thị "Đăng xuất" -->
          <th:block th:if="${hasCookies}">
            <a href="/logout" class="text-dark text-decoration-none me-3">Đăng xuất</a>
          </th:block>

          <th:block th:if="${!hasCookies}">
            <a href="/login" class="text-dark text-decoration-none me-3">Đăng nhập</a>
          </th:block>
        </div>
      </div>
    </div>

    <!-- Thanh Điều Hướng -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img th:src="@{/images/Nike.png}" alt="Logo Nike" height="24" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Chuyển đổi điều hướng"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mx-auto fw-bold text-dark">
            <li class="nav-item dropdown position-static">
              <a class="nav-link no-arrow" href="/" id="navbarDropdown">Trang Chủ</a>
            </li>
            <!-- Menu Dropdown -->
            <li class="nav-item dropdown position-static">
              <a class="nav-link no-arrow" href="/product" id="navbarDropdown"
                >Danh Mục</a
              >
            </li>

            <!-- Mục Nam -->
            <li class="nav-item dropdown position-static">
              <a class="nav-link no-arrow" href="#" id="navbarDropdownMen">Nam</a>
              <div
                class="dropdown-menu custom-dropdown w-100"
                aria-labelledby="navbarDropdownMen"
              >
                <div class="container">
                  <div class="row">
                    <div class="col-md-2">
                      <h6 class="dropdown-header">Nổi Bật</h6>
                      <a class="dropdown-item" href="#">Hàng Mới Về</a>
                      <a class="dropdown-item" href="#">Bán Chạy Nhất</a>
                      <a class="dropdown-item" href="#">Tất Cả Khuyến Mãi</a>
                    </div>
                    <div class="col-md-2">
                      <h6 class="dropdown-header">Giày</h6>
                      <a class="dropdown-item" href="#">Tất Cả Giày</a>
                      <a class="dropdown-item" href="#">Phong Cách Đời Thường</a>
                      <a class="dropdown-item" href="#">Chạy Bộ</a>
                      <a class="dropdown-item" href="#">Bóng Rổ</a>
                      <a class="dropdown-item" href="#">Bóng Đá</a>
                      <a class="dropdown-item" href="#">Tập Luyện & Gym</a>
                      <a class="dropdown-item" href="#">Jordan</a>
                      <a class="dropdown-item" href="#">Dép & Sandal</a>
                    </div>
                    <div class="col-md-2">
                      <h6 class="dropdown-header">Quần Áo</h6>
                      <a class="dropdown-item" href="#">Tất Cả Quần Áo</a>
                      <a class="dropdown-item" href="#">Áo Thun</a>
                      <a class="dropdown-item" href="#">Quần Shorts</a>
                      <a class="dropdown-item" href="#">Áo Hoodie & Áo Nỉ</a>
                      <a class="dropdown-item" href="#">Áo Khoác & Gile</a>
                      <a class="dropdown-item" href="#">Quần & Quần Tập</a>
                    </div>
                    <div class="col-md-2">
                      <h6 class="dropdown-header">Mua Theo Môn Thể Thao</h6>
                      <a class="dropdown-item" href="#">Chạy Bộ</a>
                      <a class="dropdown-item" href="#">Bóng Rổ</a>
                      <a class="dropdown-item" href="#">Bóng Đá</a>
                      <a class="dropdown-item" href="#">Golf</a>
                      <a class="dropdown-item" href="#">Quần Vợt</a>
                      <a class="dropdown-item" href="#">Gym & Tập Luyện</a>
                    </div>
                    <div class="col-md-2">
                      <h6 class="dropdown-header">Phụ Kiện</h6>
                      <a class="dropdown-item" href="#">Tất Cả Phụ Kiện</a>
                      <a class="dropdown-item" href="#">Túi & Ba Lô</a>
                      <a class="dropdown-item" href="#">Tất</a>
                      <a class="dropdown-item" href="#">Mũ & Nón</a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item dropdown position-static">
              <a class="nav-link no-arrow" href="#" id="navbarDropdownWomen">Nữ</a>
              <div
                class="dropdown-menu custom-dropdown w-100"
                aria-labelledby="navbarDropdownWomen"
              >
                <div class="container">
                  <div class="row">
                    <div class="col-md-2">
                      <h6 class="dropdown-header">Nổi Bật</h6>
                      <a class="dropdown-item" href="#">Hàng Mới Về</a>
                      <a class="dropdown-item" href="#">Bán Chạy Nhất</a>
                      <a class="dropdown-item" href="#">Tất Cả Sản Phẩm Giảm Giá</a>
                    </div>
                    <div class="col-md-2">
                      <h6 class="dropdown-header">Giày</h6>
                      <a class="dropdown-item" href="#">Tất Cả Giày</a>
                      <a class="dropdown-item" href="#">Phong Cách Đời Thường</a>
                      <a class="dropdown-item" href="#">Jordan</a>
                      <a class="dropdown-item" href="#">Chạy Bộ</a>
                      <a class="dropdown-item" href="#">Tập Luyện & Gym</a>
                      <a class="dropdown-item" href="#">Bóng Đá</a>
                      <a class="dropdown-item" href="#">Bóng Rổ</a>
                      <a class="dropdown-item" href="#">Dép & Sandal</a>
                      <a class="dropdown-item" href="#">Nike By You</a>
                    </div>
                    <div class="col-md-2">
                      <h6 class="dropdown-header">Quần Áo</h6>
                      <a class="dropdown-item" href="#">Tất Cả Quần Áo</a>
                      <a class="dropdown-item" href="#">Trang Phục Hiệu Suất</a>
                      <a class="dropdown-item" href="#">Áo Thun & Áo Sơ Mi</a>
                      <a class="dropdown-item" href="#">Áo Ngực Thể Thao</a>
                      <a class="dropdown-item" href="#">Quần Dài & Legging</a>
                      <a class="dropdown-item" href="#">Quần Shorts</a>
                      <a class="dropdown-item" href="#">Áo Hoodie & Áo Nỉ</a>
                      <a class="dropdown-item" href="#">Áo Khoác & Gile</a>
                      <a class="dropdown-item" href="#">Váy & Đầm</a>
                      <a class="dropdown-item" href="#">Trang Phục Kín Đáo</a>
                      <a class="dropdown-item" href="#">Trang Phục Dành Cho Bà Bầu</a>
                      <a class="dropdown-item" href="#">Cỡ Đại (Plus Size)</a>
                    </div>
                    <div class="col-md-2">
                      <h6 class="dropdown-header">Mua Sắm Theo Thể Thao</h6>
                      <a class="dropdown-item" href="#">Yoga</a>
                      <a class="dropdown-item" href="#">Chạy Bộ</a>
                      <a class="dropdown-item" href="#">Tập Luyện & Gym</a>
                      <a class="dropdown-item" href="#">Bóng Rổ</a>
                      <a class="dropdown-item" href="#">Tennis</a>
                      <a class="dropdown-item" href="#">Golf</a>
                      <a class="dropdown-item" href="#">Bóng Đá</a>
                      <a class="dropdown-item" href="#">Trượt Ván</a>
                    </div>
                    <div class="col-md-2">
                      <h6 class="dropdown-header">Phụ Kiện & Thiết Bị</h6>
                      <a class="dropdown-item" href="#">Tất Cả Phụ Kiện & Thiết Bị</a>
                      <a class="dropdown-item" href="#">Ba Lô & Túi Xách</a>
                      <a class="dropdown-item" href="#">Tất/Vớ</a>
                      <a class="dropdown-item" href="#">Mũ & Phụ Kiện Đầu</a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item dropdown position-static">
              <a class="nav-link no-arrow" href="#" id="navbarDropdownKids">Trẻ Em</a>
              <div
                class="dropdown-menu custom-dropdown w-100"
                aria-labelledby="navbarDropdownKids"
              >
                <div class="container">
                  <div class="row">
                    <!-- Cột 1: Nổi Bật -->
                    <div class="col-md-2">
                      <h6 class="dropdown-header">Nổi Bật</h6>
                      <a class="dropdown-item" href="#">Hàng Mới Về</a>
                      <a class="dropdown-item" href="#">Bán Chạy Nhất</a>
                      <a class="dropdown-item" href="#">Chuẩn Bị Đến Trường</a>
                      <a class="dropdown-item" href="#">Dụng Cụ Thể Thao</a>
                      <a class="dropdown-item" href="#">Phong Cách Đời Thường</a>
                    </div>
                    <!-- Cột 2: Giày -->
                    <div class="col-md-2">
                      <h6 class="dropdown-header">Giày</h6>
                      <a class="dropdown-item" href="#">Tất Cả Giày</a>
                      <a class="dropdown-item" href="#">Phong Cách Đời Thường</a>
                      <a class="dropdown-item" href="#">Jordan</a>
                      <a class="dropdown-item" href="#">Bóng Đá</a>
                      <a class="dropdown-item" href="#">Chạy Bộ</a>
                      <a class="dropdown-item" href="#">Bóng Rổ</a>
                    </div>
                    <!-- Cột 3: Quần Áo -->
                    <div class="col-md-2">
                      <h6 class="dropdown-header">Quần Áo</h6>
                      <a class="dropdown-item" href="#">Tất Cả Quần Áo</a>
                      <a class="dropdown-item" href="#">Áo Thun & Áo Sơ Mi</a>
                      <a class="dropdown-item" href="#">Áo Ngực Thể Thao</a>
                      <a class="dropdown-item" href="#">Áo Hoodie & Áo Nỉ</a>
                      <a class="dropdown-item" href="#">Quần Dài & Legging</a>
                      <a class="dropdown-item" href="#">Quần Shorts</a>
                    </div>
                    <!-- Cột 4: Trẻ Em Theo Độ Tuổi -->
                    <div class="col-md-2">
                      <h6 class="dropdown-header">Trẻ Em Theo Độ Tuổi</h6>
                      <a class="dropdown-item" href="#">Trẻ Lớn (7 - 14 tuổi)</a>
                      <a class="dropdown-item" href="#">Trẻ Nhỏ (4 - 7 tuổi)</a>
                      <a class="dropdown-item" href="#"
                        >Trẻ Sơ Sinh & Tập Đi (0 - 4 tuổi)</a
                      >
                    </div>
                    <!-- Cột 5: Mua Sắm Theo Môn Thể Thao -->
                    <div class="col-md-2">
                      <h6 class="dropdown-header">Mua Sắm Theo Môn Thể Thao</h6>
                      <a class="dropdown-item" href="#">Bóng Đá</a>
                      <a class="dropdown-item" href="#">Chạy Bộ</a>
                      <a class="dropdown-item" href="#">Bóng Rổ</a>
                      <a class="dropdown-item" href="#">Tập Luyện & Gym</a>
                    </div>
                    <!-- Cột 6: Phụ Kiện & Thiết Bị -->
                    <div class="col-md-2">
                      <h6 class="dropdown-header">Phụ Kiện & Thiết Bị</h6>
                      <a class="dropdown-item" href="#">Tất Cả Phụ Kiện & Thiết Bị</a>
                      <a class="dropdown-item" href="#">Ba Lô & Túi Xách</a>
                      <a class="dropdown-item" href="#">Tất/Vớ</a>
                      <a class="dropdown-item" href="#">Mũ & Phụ Kiện Đầu</a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item dropdown position-static">
              <a class="nav-link no-arrow" href="#" id="navbarDropdownSale">Khuyến Mãi</a>
              <div
                class="dropdown-menu custom-dropdown w-100"
                aria-labelledby="navbarDropdownSale"
              >
                <div class="container">
                  <div class="row">
                    <!-- Cột 1: Giảm Giá & Ưu Đãi -->
                    <div class="col-md-2">
                      <h6 class="dropdown-header">Giảm Giá & Ưu Đãi</h6>
                      <a class="dropdown-item" href="#">Tất Cả Khuyến Mãi</a>
                      <a class="dropdown-item" href="#">Sản Phẩm Bán Chạy</a>
                      <a class="dropdown-item" href="#">Cơ Hội Cuối Cùng</a>
                    </div>
                    <!-- Cột 2: Giảm Giá Nam -->
                    <div class="col-md-2">
                      <h6 class="dropdown-header">Giảm Giá Nam</h6>
                      <a class="dropdown-item" href="#">Giày</a>
                      <a class="dropdown-item" href="#">Quần Áo</a>
                      <a class="dropdown-item" href="#">Phụ Kiện & Thiết Bị</a>
                    </div>
                    <!-- Cột 3: Giảm Giá Nữ -->
                    <div class="col-md-2">
                      <h6 class="dropdown-header">Giảm Giá Nữ</h6>
                      <a class="dropdown-item" href="#">Giày</a>
                      <a class="dropdown-item" href="#">Quần Áo</a>
                      <a class="dropdown-item" href="#">Phụ Kiện & Thiết Bị</a>
                    </div>
                    <!-- Cột 4: Giảm Giá Trẻ Em -->
                    <div class="col-md-2">
                      <h6 class="dropdown-header">Giảm Giá Trẻ Em</h6>
                      <a class="dropdown-item" href="#">Giày</a>
                      <a class="dropdown-item" href="#">Quần Áo</a>
                      <a class="dropdown-item" href="#">Phụ Kiện & Thiết Bị</a>
                    </div>
                    <!-- Cột 5: Mua Sắm Theo Môn Thể Thao -->
                    <div class="col-md-2">
                      <h6 class="dropdown-header">Mua Sắm Theo Môn Thể Thao</h6>
                      <a class="dropdown-item" href="#">Bóng Đá</a>
                      <a class="dropdown-item" href="#">Chạy Bộ</a>
                      <a class="dropdown-item" href="#">Bóng Rổ</a>
                      <a class="dropdown-item" href="#">Tập Luyện & Gym</a>
                      <a class="dropdown-item" href="#">Quần Vợt</a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div class="d-flex align-items-center">
            <!-- Icon Yêu Thích (Trái Tim) -->
            <a href="/user/favorite" class="text-dark text-decoration-none mx-2">
              <i class="fa-solid fa-heart fs-5"></i>
            </a>

            <!-- Icon Giỏ Hàng -->
            <a href="/user/cart" class="text-dark text-decoration-none mx-2">
              <i class="fa-solid fa-shopping-cart fs-5"></i>
            </a>

            <!-- Icon User -->
            <div class="dropdown d-inline">
              <a
                href="#"
                class="text-dark text-decoration-none mx-2"
                id="userDropdown"
                data-bs-toggle="dropdown"
              >
                <i class="fa-solid fa-gear fs-5"></i>
              </a>
              <ul
                class="dropdown-menu dropdown-menu-start"
                aria-labelledby="userDropdown"
              >
                <li>
                  <a class="dropdown-item" href="/user/profile">Cập nhật thông tin</a>
                </li>
                <li>
                  <a class="dropdown-item" href="/user/change-password">Đổi mật khẩu</a>
                </li>
                <li><a class="dropdown-item" href="/user/address">Địa chỉ của tôi</a></li>
                <li><a class="dropdown-item" href="/user/order/history">Đơn hàng</a></li>
              </ul>
            </div>

            <!-- Ô tìm kiếm -->
            <div class="search-box d-flex align-items-center ms-3">
              <i class="fa-solid fa-magnifying-glass me-2"></i>
              <input type="text" class="form-control" placeholder="Tìm kiếm" />
            </div>
          </div>
        </div>
      </div>
    </nav>
    <!-- Message Section -->
    <div class="text-center py-3 bg-light border-bottom">
      <h6 class="mb-1">Di chuyển, Mua sắm, Tùy chỉnh & Cùng chúc mừng với chúng tôi</h6>
      <p class="mb-0">
        Dù hôm nay bạn muốn làm gì, trải nghiệm sẽ tuyệt vời hơn khi trở thành Thành viên.
        <a href="#" class="fw-bold text-dark">Tham gia ngay</a>
      </p>
    </div>
  </header>
</template>
<style>
/* Hiển thị dropdown khi hover vào nav-item */
.nav-item.dropdown:hover .custom-dropdown {
  display: block;
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}

/* Đảm bảo dropdown không bị ẩn khi rê chuột vào dropdown */
.custom-dropdown {
  position: absolute;
  left: 0;
  width: 100vw;
  top: 100%;
  background: white;
  padding: 20px;
  opacity: 0;
  display: none;
  transform: translateY(10px);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  z-index: 1000;
  border: none;
}

/* Khi hover vào dropdown thì không bị ẩn */
.nav-item.dropdown:hover .custom-dropdown,
.custom-dropdown:hover {
  display: block;
  opacity: 1;
  transform: translateY(0);
}

.custom-dropdown .dropdown-header {
  font-weight: bold;
  color: black;
}

.custom-dropdown .dropdown-item {
  color: #555;
  font-size: 14px;
}

.custom-dropdown .dropdown-item:hover {
  color: black;
  background: #f8f9fa;
}

/* Bỏ mũi tên trên dropdown */
.navbar .nav-item .nav-link.no-arrow::after {
  display: none !important;
}

/* Gạch chân khi hover */
.navbar .nav-item .nav-link:hover {
  text-decoration: underline;
}

.search-box {
  display: flex;
  align-items: center;
  border: 1px solid #e0e0e0;
  /* Nhẹ hơn cho cảm giác hiện đại */
  border-radius: 30px;
  /* Tạo góc bo tròn mềm mại */
  padding: 6px 12px;
  /* Tạo khoảng cách gọn gàng */
  width: 200px;
  /* Kích thước phù hợp */
  background-color: #f9f9f9;
  /* Màu nền nhẹ nhàng */
}

.search-box i {
  color: #888;
  /* Màu biểu tượng trung tính */
  font-size: 1.2rem;
  /* Biểu tượng kính lúp rõ hơn */
  margin-right: 8px;
}

.search-box input {
  border: none;
  outline: none;
  flex-grow: 1;
  /* Cho phép ô nhập liệu co giãn */
  font-size: 0.9rem;
  /* Font nhỏ, tinh tế */
  background-color: transparent;
  /* Đồng nhất màu nền */
}

.search-box input::placeholder {
  color: #aaa;
  /* Màu placeholder nhẹ hơn */
}

.search-box:hover {
  border-color: #c5c5c5;
  /* Tạo hiệu ứng khi hover */
}

.search-box i,
.navbar a i {
  color: #555;
  /* Màu xám đậm, phù hợp với header */
  transition: color 0.3s ease;
  /* Hiệu ứng mượt */
}

.search-box:hover i,
.navbar a:hover i {
  color: #333;
  /* Màu đen nhạt khi hover */
}
</style>
