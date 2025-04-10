<script setup>
import { onMounted, nextTick } from "vue";

onMounted(async () => {
  await nextTick(); // đợi DOM render xong
  $("#categoryTable").DataTable({
    language: {
      url: "//cdn.datatables.net/plug-ins/1.13.6/i18n/vi.json",
    },
  });
});
</script>

<template>
  <div class="container mt-4">
    <h2 class="text-center">QUẢN LÝ DANH MỤC</h2>
    <hr />
    <button
      class="btn btn-primary mb-3"
      data-bs-toggle="modal"
      data-bs-target="#categoryModal"
      onclick="openModal(null, '', true)"
      data-aos="false"
    >
      Thêm Mới
    </button>
    <div class="table-responsive">
      <table id="categoryTable" class="table table-striped table-bordered table-hover">
        <thead class="table-dark">
          <!-- Thêm màu nền cho tiêu đề -->
          <tr>
            <th>ID</th>
            <th>Tên danh mục</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody id="categoryTableBody">
          <!-- Categories will be populated dynamically -->
        </tbody>
      </table>
    </div>
  </div>

  <!-- Modal Thêm/Sửa Danh Mục -->
  <div
    class="modal fade"
    id="categoryModal"
    tabindex="-1"
    aria-labelledby="categoryModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="categoryModalLabel">Thêm/Sửa Danh Mục</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form id="categoryForm" method="post">
            <input type="hidden" id="id" name="id" />
            <div class="mb-3">
              <label for="name" class="form-label">Tên danh mục</label>
              <input type="text" class="form-control" id="name" name="name" />
              <div id="nameError" class="text-danger mt-1"></div>
            </div>
            <div class="mb-3">
              <label for="status" class="form-label">Trạng thái</label>
              <select class="form-control" id="status" name="status">
                <option value="true">Active</option>
                <option value="false">Inactive</option>
              </select>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            Đóng
          </button>
          <button type="button" class="btn btn-primary" onclick="submitCategory()">
            Lưu
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

