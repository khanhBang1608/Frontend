<script>
document.addEventListener("DOMContentLoaded", function () {
  const btnLeft = document.getElementById("btnLeft");
  const btnRight = document.getElementById("btnRight");
  const productsContainer = document.getElementById("productsContainer");
  const productWidth = document.querySelector(".product-card").offsetWidth + 20; // Kích thước sản phẩm + margin

  let scrollAmount = 0;
  const maxScroll = productsContainer.scrollWidth - productsContainer.clientWidth;

  function updateButtonState() {
    btnLeft.classList.toggle("disabled", scrollAmount <= 0);
    btnRight.classList.toggle("disabled", scrollAmount >= maxScroll);
  }

  btnRight.addEventListener("click", function () {
    if (scrollAmount < maxScroll) {
      scrollAmount += productWidth;
      productsContainer.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
    updateButtonState();
  });

  btnLeft.addEventListener("click", function () {
    if (scrollAmount > 0) {
      scrollAmount -= productWidth;
      productsContainer.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
    updateButtonState();
  });

  updateButtonState();
});

document.getElementById("productsContainer").addEventListener("wheel", function (event) {
  this.scrollLeft += event.deltaX * 1.5; // Cuộn ngang
  this.scrollTop += event.deltaY * 1.5; // Cuộn dọc
});

document.addEventListener("DOMContentLoaded", function () {
  const sportBtnLeft = document.getElementById("sportBtnLeft");
  const sportBtnRight = document.getElementById("sportBtnRight");
  const sportsContainer = document.getElementById("sportsContainer");
  const sportWidth = document.querySelector(".product-card").offsetWidth + 20;

  let scrollAmount = 0;
  const maxScroll = sportsContainer.scrollWidth - sportsContainer.clientWidth;

  function updateButtonState() {
    sportBtnLeft.classList.toggle("disabled", scrollAmount <= 0);
    sportBtnRight.classList.toggle("disabled", scrollAmount >= maxScroll);
  }

  sportBtnRight.addEventListener("click", function () {
    if (scrollAmount < maxScroll) {
      scrollAmount += sportWidth;
      sportsContainer.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
    updateButtonState();
  });

  sportBtnLeft.addEventListener("click", function () {
    if (scrollAmount > 0) {
      scrollAmount -= sportWidth;
      sportsContainer.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
    updateButtonState();
  });

  updateButtonState();
});

document.getElementById("sportsContainer").addEventListener("wheel", function (event) {
  this.scrollLeft += event.deltaX * 1.5; // Cuộn ngang
  this.scrollTop += event.deltaY * 1.5; // Cuộn dọc
});

document.addEventListener("DOMContentLoaded", function () {
  const favoriteIcons = document.querySelectorAll(".favorite-icon");

  favoriteIcons.forEach((icon) => {
    icon.addEventListener("click", function () {
      this.classList.toggle("active"); // Thêm hoặc xóa class "active"
    });
  });
});
function toggleFavorite(icon) {
  let productId = icon.getAttribute("data-product-id");
  let isFavorite = icon.classList.contains("bi-heart-fill");

  let url = isFavorite
    ? `/user/favorite/remove/${productId}`
    : `/user/favorite/add/${productId}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        icon.classList.toggle("bi-heart-fill");
        icon.classList.toggle("bi-heart");
        icon.classList.toggle("text-danger");
      } else {
        alert(data.message);
      }
    })
    .catch((error) => console.error("Lỗi:", error));
}
</script>
<template>
  <div class="container my-1">
    <!-- Slide chạy ảnh -->
    <div class="mb-3">
      <img th:src="@{/images/Background.jpg}" class="d-block w-100" alt="Slide 1" />
    </div>
    <div class="trending-section mt-4">
      <div class="container">
        <!-- Tiêu đề và nút Shop với nút điều hướng -->
        <div class="d-flex justify-content-between align-items-center">
          <h2 class="fw-bold">Trending Now: Espresso</h2>
          <div class="shop-controls">
            <button class="shop-btn">Shop</button>
            <button class="nav-btn nav-btn-left disabled" id="btnLeft">
              <i class="bi bi-chevron-left"></i>
            </button>
            <button class="nav-btn nav-btn-right" id="btnRight">
              <i class="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>
        <div class="products-container" id="productsContainer">
          <div
            class="col-md-3 col-sm-6 mb-4"
            th:each="product : ${products}"
            th:if="${product.status}"
          >
            <div class="product-card text-center">
              <i
                class="favorite-icon"
                th:data-product-id="${product.id}"
                th:classappend="${#lists.contains(favoriteProductIds, product.id)} 
					                   ? 'bi bi-heart-fill text-danger' 
					                   : 'bi bi-heart'"
                onclick="toggleFavorite(this)"
              >
              </i>
              <img
                th:if="${not #lists.isEmpty(product.images)}"
                th:src="@{'/images/' + ${product.images[0].name}}"
                th:alt="${product.name}"
                class="img-fluid"
              />
              <h5 th:text="${product.name}"></h5>
              <p
                th:text="${#numbers.formatDecimal(product.price, 0, 'COMMA', 0, 'POINT')} + ' VND'"
                th:class="text-danger"
              ></p>
              <a
                th:href="@{'/product/detail?productId=' + ${product.id}}"
                class="btn btn-primary"
                >Chi Tiết</a
              >
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="container mt-4">
				<h2 class="fw-bold">Trending Now: Espresso</h2>
				<div class="products-container">
					<div class="product-card">
						<a href="link-to-product-1.html"> <img
							src="image/Brazil 1998 Reissue.png" alt="Gazelle">
						</a>
						<h5>Gazelle</h5>
						<p>A true classic with a long legacy.</p>
					</div>
				</div>
			</div> -->
      <div class="container mt-5">
        <div class="d-flex justify-content-between align-items-center">
          <h2 class="fw-bold">Shop By Sport</h2>
          <div class="shop-controls">
            <button class="nav-btn nav-btn-left" id="sportBtnLeft">
              <i class="bi bi-chevron-left"></i>
            </button>
            <button class="nav-btn nav-btn-right" id="sportBtnRight">
              <i class="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>
        <div class="d-flex align-items-center justify-content-between position-relative">
          <!-- Danh sách các môn thể thao -->
          <div class="products-container" id="sportsContainer">
            <div class="product-card">
              <img th:src="@{/images/Running.jpg}" class="card-img-top" alt="Running" />
              <button class="sport-btn">Running</button>
            </div>
            <div class="product-card">
              <img th:src="@{/images/Football.jpg}" class="card-img-top" alt="Football" />
              <button class="sport-btn">Football</button>
            </div>
            <div class="product-card">
              <img
                th:src="@{/images/Basketball.jpg}"
                class="card-img-top"
                alt="Basketball"
              />
              <button class="sport-btn">Basketball</button>
            </div>
            <div class="product-card">
              <img
                th:src="@{/images/Training & Gym.jpg}"
                class="card-img-top"
                alt="Basketball"
              />
              <button class="sport-btn">Training & Gym</button>
            </div>
            <div class="product-card">
              <img th:src="@{/images/Tennis.jpg}" class="card-img-top" alt="Basketball" />
              <button class="sport-btn">Tennis</button>
            </div>
            <div class="product-card">
              <img th:src="@{/images/Yoga.jpg}" class="card-img-top" alt="Basketball" />
              <button class="sport-btn">Yoga</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.trending-section {
  background-color: white;
  padding: 40px 20px;
  overflow: hidden;
  position: relative;
}

.shop-controls {
  display: flex;
  align-items: center;
  gap: 10px;
}

.shop-btn {
  background: none;
  border: none;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  color: black;
}

.shop-btn:hover {
  text-decoration: underline;
}

/* Nút chuyển trang */
.nav-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #e5e5e5;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.nav-btn i {
  font-size: 18px;
}

.nav-btn-left {
  color: #a0a0a0;
}

.nav-btn-right {
  color: #000;
}

.nav-btn:hover {
  background-color: #d1d1d1;
}

.nav-btn:hover i {
  color: black !important;
}

.nav-btn.disabled {
  opacity: 0.5;
  cursor: default;
}

/* Slide sản phẩm */
.products-container {
  display: flex;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

.product-card {
  width: 300px;
  flex: 0 0 auto;
  margin-right: 20px;
}

.product-card img {
  width: 100%;
  border-radius: 10px;
}

.product-card .card-body {
  padding-left: 0;
}

.price {
  font-weight: bold;
}

.sport-btn {
  position: absolute;
  bottom: 10px;
  left: 10px;
  background: white;
  border: none;
  padding: 5px 10px;
  font-weight: bold;
  border-radius: 20px;
  cursor: pointer;
}

.product-card {
  width: 300px;
  flex: 0 0 auto;
  margin-right: 20px;
  text-align: center;
}

.product-card img {
  width: 100%;
  border-radius: 10px;
}

.product-card h5 {
  margin-top: 10px;
}

.price-product {
  font-weight: bold;
}

.favorite-icon {
  font-size: 1.5rem;
  color: gray;
  cursor: pointer;
  position: absolute;
  /* top: 10px; */
  right: 10px;
  transition: color 0.3s ease-in-out;
}

.favorite-icon.active {
  color: red;
}

.product-card {
  position: relative;
}
</style>
