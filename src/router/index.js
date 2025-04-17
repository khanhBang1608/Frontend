import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import OtpFormView from '@/views/OtpFormView.vue'
import ForgotPasswordView from '@/views/ForgotPasswordView.vue'
import ChangePasswordView from '@/views/ChangePasswordView.vue'
import ProfileView from '@/views/ProfileView.vue'
import MyAddressView from '@/views/MyAddressView.vue'
import MyAddressFormView from '@/views/AddressFormView.vue'
import ManageCategoryView from '@/views/ManageCategoryView.vue'
import ManageProductView from '@/views/ManageProductView.vue'
import ManageUserView from '@/views/ManageUserView.vue'
import ManageOrderView from '@/views/ManageOrderView.vue'
import ManageOderDetailView from '@/views/ManageOderDetailView.vue'
import ProductFormView from '@/views/ProductFormView.vue'
import ManageDashboardView from '@/views/ManageDashboardView.vue'
import OrderHistoryView from '@/views/OrderHistoryView.vue'
import FavoriteView from '@/views/FavoriteView.vue'
import VerifyOtpView from '@/views/VerifyOtpView.vue'
import ResetPasswordView from '@/views/ResetPasswordView.vue'
import ManageImage from '@/views/ManageImageView.vue'
import ManageProductSize from '@/views/manageProductSizeView.vue'
import ManageAddressView from '@/views/ManageAddressView.vue'
import ProductSizeFrom from '@/views/ProductSizeFormView.vue'
import EditAddressForm from '@/components/User/form/EditAddressForm.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/login', name: 'login', component: LoginView },
  { path: '/register', name: 'register', component: RegisterView },
  { path: '/register/otp', name: 'OtpFormView', component: OtpFormView },
  { path: '/forgot-password', name: 'forgot-password', component: ForgotPasswordView },
  { path: '/user/change-password', name: 'change-password', component: ChangePasswordView },
  { path: '/user/profile', name: 'profile', component: ProfileView },
  { path: '/user/address', name: 'address', component: MyAddressView },
  { path: '/user/address/form', name: 'MyAddressFormView', component: MyAddressFormView },
  { path: '/user/address/edit/:id', name: 'EditAddress', component: EditAddressForm },
  { path: '/user/order/history', name: 'order-history', component: OrderHistoryView },
  { path: '/user/favorite', name: 'favorite', component: FavoriteView },
  { path: '/verify-otp', name: 'verify-otp', component: VerifyOtpView },
  { path: '/reset-password', name: 'reset-password', component: ResetPasswordView },
  { path: '/admin/category', name: 'category', component: ManageCategoryView },
  { path: '/admin/product', name: 'product', component: ManageProductView },
  { path: '/admin/product/form', name: 'ProductFormView', component: ProductFormView },
  { path: '/admin/user', name: 'user', component: ManageUserView },
  { path: '/admin/address/list', name: 'address', component: ManageAddressView },
  { path: '/admin/order', name: 'order', component: ManageOrderView },
  {
    path: '/admin/order/detail',
    name: 'ManageOderDManageOrderViewetailView',
    component: ManageOderDetailView,
  },
  { path: '/admin', name: 'dashboard', component: ManageDashboardView },
  { path: '/admin/product/images', name: 'manageImage', component: ManageImage },
  { path: '/admin/product/sizes', name: 'manageProductSize', component: ManageProductSize },
  { path: '/admin/product/productSizeForm', name: 'ProductSizeForm', component: ProductSizeFrom },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
  },
]

// Gán meta.allowedRoles tự động cho các route có tiền tố
routes.forEach((route) => {
  if (route.path.startsWith('/admin')) {
    route.meta = { allowedRoles: [0] } // chỉ admin (role = 0)
  }
  if (route.path.startsWith('/user')) {
    route.meta = { allowedRoles: [1] } // chỉ user (role = 1)
  }
})

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// Middleware kiểm tra role trước khi vào route
router.beforeEach((to, from, next) => {
  const allowedRoles = to.meta.allowedRoles

  if (!allowedRoles) {
    return next()
  }

  const role = parseInt(localStorage.getItem('role'))

  if (isNaN(role)) {
    return next('/login')
  }

  if (!allowedRoles.includes(role)) {
    return next('/login')
  }

  next()
})

export default router
