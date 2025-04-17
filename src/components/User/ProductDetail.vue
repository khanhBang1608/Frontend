<template>
    <div class="container mt-3">
		<div class="row product-container">
			<div class="col-md-5 product-image text-center">
				<img th:src="${'/images/'+imageEntities.get(0).name}"
					alt="Giày Adidas Alphabounce" class="img-fluid main-image"
					id="mainImage">
				<div class="thumbnail-container d-flex justify-content-center mt-3">
					<th:block th:each="item : ${imageEntities}">
						<img th:src="${'/images/'+item.name}" class="img-thumbnail mx-2"
							onclick="changeImage(this.src)">
					</th:block>
				</div>
			</div>

			<div class="col-md-6 product-info">
				<h2 th:text="${product.name}"></h2>
				<p class="price"
					th:text="${#numbers.formatDecimal(product.price, 0, 'COMMA', 0, 'POINT')} + ' VND'" th:class="text-danger"></p>
				<p class="text-dark" th:text="${product.desc}"></p>
				<p class="text-muted">Bạn cần tìm size/màu khác? Liên hệ Bele
					ngay nhé!</p>
				<div class="d-flex justify-content-between">
					<button class="btn btn-dark btn-custom" onclick="openCartModal()"
						th:data-id="${product.id}" th:data-name="${product.name}"
						th:data-price="${product.price}">🛒 Thêm vào giỏ hàng</button>

					<button class="btn btn-danger btn-custom">⚡ Mua ngay</button>
				</div>
			</div>
		</div>
		<div class="container my-5">
			<hr>
			<h3 class="text-center mb-4">Sản phẩm liên quan</h3>
			<div class="row" id="productsContainer">
				<div class="col-md-3 col-sm-6 mb-4">
					<div class="product-card text-center">
						<i class="bi bi-heart favorite-icon"></i> <img
							th:src="@{/images/Nike Air Force 1 '07 Essential.png}" alt="Nike Air Force 1"
							class="img-fluid">
						<h5 class="mt-2">Nike Air Force 1 '07 Essential</h5>
						<p class="price-product  font-weight-bold text-danger">3,200,000 VND</p>
						<button class="btn btn-primary btn-sm">Chi Tiết</button>
					</div>
				</div>
				<div class="col-md-3 col-sm-6 mb-4">
					<div class="product-card text-center">
						<i class="bi bi-heart favorite-icon"></i> <img
							th:src="@{/images/Jordan 1 Mid RM EasyOn.png}" alt="Nike Air Force 1"
							class="img-fluid">
						<h5 class="mt-2">Jordan 1 Mid RM EasyOn</h5>
						<p class="price-product  font-weight-bold text-danger">2,200,000 VND</p>
						<button class="btn btn-primary btn-sm">Chi Tiết</button>
					</div>
				</div>
				<div class="col-md-3 col-sm-6 mb-4">
					<div class="product-card text-center">
						<i class="bi bi-heart favorite-icon"></i> <img
							th:src="@{/images/Nike Air Force 1 '07 LX.png}" alt="Nike Air Force 1"
							class="img-fluid">
						<h5 class="mt-2">Nike Air Force 1 '07 LX</h5>
						<p class="price-product  font-weight-bold text-danger">2,800,000 VND</p>
						<button class="btn btn-primary btn-sm">Chi Tiết</button>
					</div>
				</div>
<!-- 				<div class="col-md-3 col-sm-6 mb-4">
					<div class="product-card text-center">
						<i class="bi bi-heart favorite-icon"></i> <img
							th:src="@{/images/Nike Air Force 1 Mid By You.png}" alt="Nike Air Force 1"
							class="img-fluid">
						<h5 class="mt-2">Nike Air Force 1 Mid By You</h5>
						<p class="price-product  font-weight-bold">3,800,000 VND</p>
						<button class="btn btn-primary btn-sm">Chi Tiết</button>
					</div>
				</div> -->
			</div>
		</div>
	</div>

	<!-- Modal Thêm Vào Giỏ Hàng -->
<div class="modal fade" id="addToCartModal" tabindex="-1" aria-labelledby="addToCartLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
           <div class="modal-header bg-gradient bg-dark text-white border-0 d-flex justify-content-between align-items-center">
                <h5 class="modal-title fw-bold w-100 text-center" id="addToCartLabel">Thêm Vào Giỏ Hàng</h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body p-4">
                <form action="/product/cart/add" method="post">
                    <input type="hidden" id="modalProductId" name="productId">
                    
                    <div class="mb-3">
                        <p class="mb-1 text-muted"><strong>Sản phẩm:</strong> <span id="modalProductName" class="fw-semibold text-dark"></span></p>
                        <p class="mb-1 text-muted"><strong>Giá:</strong> <span id="modalProductPrice" class="fw-bold text-danger"></span></p>
                    </div>
                    
                    <div class="mb-3">
                        <label for="modalSizeSelect" class="form-label fw-semibold">Chọn size:</label>
                        <select name="size" class="form-select rounded-3" id="modalSizeSelect">
                            <th:block th:each="item : ${productSizeEntity}">
                                <option th:value="${item.size}" th:text="${item.size}"></option>
                            </th:block>
                        </select>
                    </div>
                    
                    <div class="mb-3">
                        <label class="form-label fw-semibold">Số lượng:</label>
                        <div class="input-group">
                            <button type="button" class="btn btn-outline-dark fw-bold" onclick="changeModalQuantity(-1)">-</button>
                            <input type="number" id="modalQuantity" name="quantity" class="form-control text-center" value="1" min="1">
                            <button type="button" class="btn btn-outline-dark fw-bold" onclick="changeModalQuantity(1)">+</button>
                        </div>
                    </div>
                    
                    <div class="text-center">
                        <button type="submit" class="btn btn-primary btn-sm w-50 py-2 fw-bold " onclick="addToCart()">
                             Thêm vào giỏ hàng
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</template>