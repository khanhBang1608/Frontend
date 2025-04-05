<script setup>
import "@/assets/main.js";
</script>
<template>
  <div class="container my-1">
    <div class="section" data-aos="fade-up">
      <div class="slide-container">
        <div class="slide">
          <div
            class="item"
            style="
              background-image: url(https://taothuonghieu.com/wp-content/uploads/2023/10/3-khac-biet-chien-luoc-thuong-hieu-Nike.webp.webp);
            "
          >
            <div class="content">
              <div class="name">Switzerland</div>
              <div class="des">Lorem ipsum dolor, sit amet!</div>
              <button>see more</button>
            </div>
          </div>

          <div
            class="item"
            style="
              background-image: url(https://taothuonghieu.com/wp-content/uploads/2023/10/3-khac-biet-chien-luoc-thuong-hieu-Nike.webp.webp);
            "
          >
            <div class="content">
              <div class="name">Finland</div>
              <div class="des">Lorem ipsum dolor, sit amet!</div>
              <button>see more</button>
            </div>
          </div>

          <div
            class="item"
            style="
              background-image: url(https://taothuonghieu.com/wp-content/uploads/2023/10/3-khac-biet-chien-luoc-thuong-hieu-Nike.webp.webp);
            "
          >
            <div class="content">
              <div class="name">Iceland</div>
              <div class="des">Lorem ipsum dolor, sit amet!</div>
              <button>see more</button>
            </div>
          </div>

          <div
            class="item"
            style="
              background-image: url(https://taothuonghieu.com/wp-content/uploads/2023/10/3-khac-biet-chien-luoc-thuong-hieu-Nike.webp.webp);
            "
          >
            <div class="content">
              <div class="name">Australia</div>
              <div class="des">Lorem ipsum dolor, sit amet!</div>
              <button>see more</button>
            </div>
          </div>

          <div
            class="item"
            style="
              background-image: url(https://taothuonghieu.com/wp-content/uploads/2023/10/3-khac-biet-chien-luoc-thuong-hieu-Nike.webp.webp);
            "
          >
            <div class="content">
              <div class="name">Netherland</div>
              <div class="des">Lorem ipsum dolor, sit amet!</div>
              <button>see more</button>
            </div>
          </div>
          <!-- <div class="item"
                        style="background-image: url(https://taothuonghieu.com/wp-content/uploads/2023/10/3-khac-biet-chien-luoc-thuong-hieu-Nike.webp.webp);">
                        <div class="content">
                            <div class="name">Ireland</div>
                            <div class="des">Lorem ipsum dolor, sit amet!</div>
                            <button>see more</button>
                        </div>
                    </div> -->
        </div>
        <div class="button">
          <button class="prev"><i class="bi bi-arrow-left"></i></button>
          <button class="next"><i class="bi bi-arrow-right"></i></button>
        </div>
      </div>
    </div>
    <div class="trending-section mt-4">
      <div class="section" data-aos="fade-up">
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
          <!-- <div class="products-container" id="productsContainer">
          <div class="col-md-3 col-sm-6 mb-4">
            <div class="product-card text-center">
              <i
                class="favorite-icon bi bi-heart"
                data-product-id="${product.id}"
                onclick="toggleFavorite(this)"
              >
              </i>
              <img
                src="/images/${product.images[0].name}"
                alt="${product.name}"
                class="img-fluid"
              />
              <h5>${product.name}</h5>
              <p class="text-danger">${product.price} VND</p>
              <a href="/product/detail?productId=${product.id}" class="btn btn-primary">
                Chi Tiết
              </a>
            </div>
          </div>
        </div> -->
        </div>
      </div>
      <div class="section" data-aos="fade-up">
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
          <div
            class="d-flex align-items-center justify-content-between position-relative"
          >
            <!-- Danh sách các môn thể thao -->
            <div class="products-container" id="sportsContainer">
              <div class="product-card">
                <img
                  src="@/assets/images/Running.jpg"
                  class="card-img-top"
                  alt="Running"
                />
                <button class="sport-btn">Running</button>
              </div>
              <div class="product-card">
                <img
                  src="@/assets/images/Football.jpg"
                  class="card-img-top"
                  alt="Football"
                />
                <button class="sport-btn">Football</button>
              </div>
              <div class="product-card">
                <img
                  src="@/assets/images/Basketball.jpg"
                  class="card-img-top"
                  alt="Basketball"
                />
                <button class="sport-btn">Basketball</button>
              </div>
              <div class="product-card">
                <img
                  src="@/assets/images/Training & Gym.jpg"
                  class="card-img-top"
                  alt="Training & Gym"
                />
                <button class="sport-btn">Training & Gym</button>
              </div>
              <div class="product-card">
                <img src="@/assets/images/Tennis.jpg" class="card-img-top" alt="Tennis" />
                <button class="sport-btn">Tennis</button>
              </div>
              <div class="product-card">
                <img src="@/assets/images/Yoga.jpg" class="card-img-top" alt="Yoga" />
                <button class="sport-btn">Yoga</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="./src/assets/css/main.css"></style>
