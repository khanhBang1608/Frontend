<script setup>
import { ref, onMounted } from 'vue'
import cartAPI from '@/assets/js/cartAPI'

const cart = ref([])

const cartId = getCookie('userId')
function getCookie(name) {
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop().split(';').shift()
}

async function fetchCart() {
  try {
    const response = await cartAPI.viewCart(cartId)
    cart.value = response.data
  } catch (error) {
    console.error('Lỗi lấy giỏ hàng:', error)
  }
}

async function handleRemoveFromCart(productSizeId) {
  try {
    await cartAPI.deleteItem(cartId, productSizeId)
    fetchCart()
  } catch (error) {
    console.error('Lỗi xoá sản phẩm:', error)
  }
}

async function updateQuantity(item) {
  try {
    await cartAPI.updateQuantity(cartId, item.productSize.id, item.quantity)
    fetchCart()
  } catch (error) {
    console.error('Lỗi cập nhật số lượng:', error)
  }
}

async function clearCart() {
  try {
    await cartAPI.clearCart(cartId)
    fetchCart()
  } catch (error) {
    console.error('Lỗi xoá toàn bộ:', error)
  }
}

onMounted(() => {
  fetchCart()
})
</script>
<template>
  <div class="cart-container-modern">
    <h2 class="cart-title-modern">Giỏ hàng của bạn</h2>
    <div v-if="!cart || cart.length === 0" class="cart-empty-msg-modern">
      Không có sản phẩm trong giỏ hàng
    </div>

    <div v-else>
      <table class="cart-table-modern">
        <thead>
          <tr>
            <th>Ảnh</th>
            <th>Sản phẩm</th>
            <th>Size</th>
            <th>Số lượng</th>
            <th>Giá</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cart" :key="item.id" class="cart-item-row-modern">
            <td class="text-center">
              <img
                :src="'http://localhost:8080/images/' + item.product.imageNames[0]"
                alt="Ảnh sản phẩm"
                class="cart-item-img-modern"
              />
            </td>
            <td class="cart-product-name-modern">{{ item.product.name }}</td>
            <td>{{ item.productSize.sizeName }}</td>
            <td>
              <input
                type="number"
                min="1"
                :max="item.productSize.stock"
                class="cart-qty-input-modern"
                v-model.number="item.quantity"
                @change="updateQuantity(item)"
              />
            </td>
            <td class="cart-price-highlight-modern">
              {{ (item.product.price * item.quantity).toLocaleString('vi-VN') }}₫
            </td>
            <td class="text-center">
              <button
                class="cart-remove-btn-modern"
                @click="handleRemoveFromCart(item.productSize.id)"
              >
                Xoá
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="text-end cart-total-price-modern">
        Tổng tiền:
        {{
          cart
            .reduce((total, item) => total + item.product.price * item.quantity, 0)
            .toLocaleString('vi-VN')
        }}₫
      </div>

      <div class="text-end">
        <button class="cart-clear-btn-modern" @click="clearCart">Xoá tất cả</button>
      </div>
    </div>
  </div>
</template>
