<template>
  <div class="container mt-5">
    <h1 class="text-center">Quản lý học sinh</h1>
    <div class="row">
      
      <div class="col-sm-4">
        <form @submit.prevent="submitForm">
          <h3>Thêm học sinh</h3>
          
          <div class="mb-3 mt-3">
            <label>Họ tên:</label>
            <input 
              type="text" 
              class="form-control" 
              v-model="student.name" 
              required 
            />
          </div>
          
          <div class="mb-3">
            <label>Điểm:</label>
            <input 
              type="number" 
              max="10" 
              min="0" 
              class="form-control" 
              v-model="student.score" 
              required 
            />
          </div>
          
          <div class="mb-3">
            <label>Ngày sinh:</label>
            <input 
              type="date" 
              class="form-control" 
              v-model="student.dob" 
              required 
            />
          </div>
          
          <button type="submit" class="btn btn-success">
            {{ isEditing ? 'Cập nhật' : 'Thêm' }}
          </button>
          
          <button 
            type="button" 
            class="btn btn-secondary ms-2" 
            @click="resetForm"
          >Nhập mới</button>
        </form>
      </div>

      <div class="col-sm-8">
        <h3>Danh sách học sinh</h3>
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Họ và tên</th>
              <th>Điểm</th>
              <th>Ngày sinh</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(stu, index) in students" :key="index">
              <td>{{ stu.name }}</td>
              <td>{{ stu.score }}</td>
              <td>{{ stu.dob }}</td>
              <td>
                <button class="btn btn-warning me-2" @click="editStudent(index)">
                  Sửa
                </button>
                <button class="btn btn-danger" @click="deleteStudent(index)">
                  Xóa
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Dữ liệu mẫu y chang đề bài
const students = ref([
  { name: 'Nguyễn Chí Hùng', score: 8, dob: '2006-01-01' },
  { name: 'Phạm Thị Lan', score: 9, dob: '2006-05-15' }
])

// Biến student dùng cho form
const student = ref({
  name: '',
  score: null,
  dob: ''
})

// Biến trạng thái
const isEditing = ref(false)
const editingIndex = ref(null)

// Hàm Submit (Thêm hoặc Sửa)
function submitForm() {
  if (isEditing.value) {
    // Logic cập nhật
    students.value[editingIndex.value] = { ...student.value }
    isEditing.value = false
    editingIndex.value = null
  } else {
    // Logic thêm mới
    students.value.push({ ...student.value })
  }
  resetForm()
}

// Hàm Sửa
function editStudent(index) {
  student.value = { ...students.value[index] }
  isEditing.value = true
  editingIndex.value = index
}

// Hàm Xóa (Bỏ confirm để giống code mẫu ngắn gọn)
function deleteStudent(index) {
  students.value.splice(index, 1)
}

// Hàm Reset
function resetForm() {
  student.value = {
    name: '',
    score: null,
    dob: ''
  }
  isEditing.value = false
  editingIndex.value = null
}
</script>