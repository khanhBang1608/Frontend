<script></script>
<template>
    <div class="container my-4">
		<h2 class="fw-bold text-center mb-4">Danh Sách Sản Phẩm</h2>
		<div class="row mb-3">
			<div class="col-md-4">
				<input type="text" class="form-control"
					placeholder="Tìm kiếm sản phẩm..." id="searchBox"
					onkeydown="handleSearchKey(event)">
			</div>
			<div class="col-md-4">
				<select class="form-select" id="categoryFilter"
					onchange="filterByCategory()">
					<option value="">Tất cả danh mục</option>
					<option th:each="category : ${categories}"
						th:value="${category.id}" th:text="${category.name}"></option>
				</select>
			</div>
			<div class="col-md-4">
				<select class="form-select" id="sortPrice" onchange="sortByPrice()">
					<option value="">Sắp xếp theo giá</option>
					<option value="asc">Thấp đến cao</option>
					<option value="desc">Cao đến thấp</option>
				</select>
			</div>
		</div>
		<div class="row g-3" id="productList">
		    <div class="col-md-3 col-sm-6 mb-4" 
		         th:each="product : ${products}" 
		         th:if="${product.status} and ${product.category.status}">
		        <div class="product-card text-center">
		            <i class="favorite-icon" th:data-product-id="${product.id}"
		                th:classappend="${#lists.contains(favoriteProductIds, product.id)} 
		                                ? 'bi bi-heart-fill text-danger' 
		                                : 'bi bi-heart'"
		                onclick="toggleFavorite(this)"> 
		            </i>
		            <img th:if="${not #lists.isEmpty(product.images)}"
		                 th:src="@{'/images/' + ${product.images[0].name}}"
		                 th:alt="${product.name}" class="img-fluid" />
		            <h5 th:text="${product.name}"></h5>
		            <p th:text="${#numbers.formatDecimal(product.price, 0, 'COMMA', 0, 'POINT')} + ' VND'"></p>
		            <a th:href="@{'/product/detail?productId=' + ${product.id}}" class="btn btn-primary btn-sm">Chi Tiết</a>
		        </div>
		    </div>
		</div>
	</div>
</template>
<style></style>