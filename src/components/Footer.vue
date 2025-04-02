<script></script>

<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-top">
        <div class="company-info">
          <h2 class="company-logo">Minn Nhựt</h2>
          <p class="company-description">
            Minn Nhựt chuyên cung cấp thời trang authentic từ các thương hiệu cao cấp như
            Nike, Adidas, Gucci,... Cam kết chất lượng, dịch vụ tận tâm và cập nhật xu
            hướng mới nhất, mang đến trải nghiệm mua sắm đáng tin cậy cho khách hàng.
          </p>

          <ul class="footer-list">
            <li class="footer-list-item">
              <a href="#" class="footer-list-link">
                <i class="bi bi-facebook"></i>
              </a>
            </li>
            <li class="footer-list-item">
              <a href="#" class="footer-list-link">
                <i class="bi bi-twitter"></i>
              </a>
            </li>
            <li class="footer-list-item">
              <a href="#" class="footer-list-link">
                <i class="bi bi-instagram"></i>
              </a>
            </li>
            <li class="footer-list-item">
              <a href="#" class="footer-list-link">
                <i class="bi bi-linkedin"></i>
              </a>
            </li>
            <li class="footer-list-item">
              <a href="#" class="footer-list-link">
                <i class="bi bi-youtube"></i>
              </a>
            </li>
          </ul>
          <span class="copyright">2023 Nike. Tất cả quyền được bảo lưu.</span>
        </div>
        <div>
          <h6 class="footer_title">Về Chúng Tôi</h6>
          <ul class="footer_list">
            <li class="footer-list-item">
              <a href="#" class="footer-list-link">Giới thiệu</a>
            </li>
            <li class="footer-list-item">
              <a href="#" class="footer-list-link">Cửa hàng</a>
            </li>
            <li class="footer-list-item">
              <a href="#" class="footer-list-link">Liên hệ</a>
            </li>
            <li class="footer-list-item">
              <a href="#" class="footer-list-link">Chính sách bảo mật</a>
            </li>
          </ul>
        </div>
        <div>
          <h6 class="footer_title">Hỗ Trợ Khách Hàng</h6>
          <ul class="footer_list">
            <li class="footer-list-item">
              <a href="#" class="footer-list-link">Hướng dẫn mua hàng</a>
            </li>
            <li class="footer-list-item">
              <a href="#" class="footer-list-link">Chính sách đổi trả</a>
            </li>
            <li class="footer-list-item">
              <a href="#" class="footer-list-link">Chính sách vận chuyển</a>
            </li>
            <li class="footer-list-item">
              <a href="#" class="footer-list-link">Câu hỏi thường gặp</a>
            </li>
          </ul>
        </div>
        <div>
          <h6 class="footer_title">Thông Tin Liên Hệ</h6>
          <ul class="footer_list">
            <li class="footer-list-item">
              <span>Địa chỉ: Cái Răng - Cần Thơ</span>
            </li>
            <li class="footer-list-item">
              <span>Hotline: 0378 447 716</span>
            </li>
            <li class="footer-list-item">
              <span>Email: zalohub@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  font-family: sans-serif;
  font-size: 1.6rem;
  background-color: #12131c;
}

i {
  font-size: clamp(1.6rem, 2vw, 2.4rem);
}

.footer {
  padding-block: 5rem;
  background-color: #151823;
  color: #666873;
}

.footer-container {
  max-width: 116rem;
  margin: auto;
  padding: 0 1.5rem;
}

.footer-top {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  row-gap: 2rem;
}

.footer_title {
  font-size: 1.8rem;
  color: #fff;
  font-weight: 500;
  margin-bottom: 2rem;
}

.footer-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.footer-list-item {
  margin-bottom: 0.5rem;
  list-style: none;
}

.footer_list {
  gap: 0.8rem;
}

.footer-list-link {
  text-decoration: none;
  color: inherit;
  transition: color 0.25s;
}

.footer-list-link:hover {
  color: #fff;
}

.footer-list-link:hover .bi-facebook {
  color: #1877f2;
}

.footer-list-link:hover .bi-twitter {
  color: #1da1f2;
}

.footer-list-link:hover .bi-instagram {
  color: #e4405f;
}

.footer-list-link:hover .bi-linkedin {
  color: #0077b5;
}

.footer-list-link:hover .bi-youtube {
  color: #ff0000;
}

.footer-list-link:hover .bi-twitter {
  color: #0d8bf0;
}

.footer-list-link:hover .bi-instagram {
  color: #c13584;
}

.footer-list-link:hover .bi-linkedin {
  color: #005582;
}

.footer-list-link:hover .bi-youtube {
  color: #cc0000;
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

.company-info {
  grid-column: 1/-1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-right: 5rem;
}

.company-logo {
  color: #fff;
  font-size: 3rem;
}

.company-info ul {
  flex-direction: row;
}

.copyright {
  margin-top: auto;
}

@media screen and (min-width: 40rem) {
  .company-info {
    grid-column: span 2;
  }
}
</style>
