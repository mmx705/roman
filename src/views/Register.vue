<template>
  <div class="register-page">
    <el-card class="register-card">
      <h2 class="title">注册账号</h2>
      <el-form :model="form" ref="formRef" :rules="rules" label-width="80px">
        <el-form-item label="账号" prop="username">
          <el-input v-model="form.username" placeholder="请输入账号" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password" type="password" placeholder="请输入密码" />
        </el-form-item>
        <el-form-item label="确认密码" prop="confirmPassword">
          <el-input v-model="form.confirmPassword" type="password" placeholder="请再次输入密码" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" block @click="handleRegister">注册</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="text" @click="router.push('/login')">已有账号？去登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

const router = useRouter()
const formRef = ref()

const form = ref({
  username: '',
  password: '',
  confirmPassword: ''
})

const rules = {
  username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  confirmPassword: [
    { required: true, message: '请确认密码', trigger: 'blur' },
    {
      validator: (_, value) => {
        return value === form.value.password ? true : new Error('两次输入的密码不一致')
      },
      trigger: 'blur'
    }
  ]
}

const handleRegister = () => {
  formRef.value.validate(valid => {
    if (valid) {
      localStorage.setItem('user', JSON.stringify({
        username: form.value.username,
        password: form.value.password
      }))
      ElMessage.success('注册成功，请登录')
      router.push('/login')
    }
  })
}
</script>

<style scoped>
.register-page {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #FFDEE9, #B5FFFC);
}
.register-card {
  width: 400px;
  padding: 30px;
  border-radius: 10px;
}
.title {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}
</style>