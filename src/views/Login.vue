<template>
  <div class="login-page">
    <el-card class="login-card">
      <h2 class="title">欢迎登录</h2>
      <el-form :model="form" ref="formRef">
        <el-form-item label="账号">
          <el-input v-model="form.username" placeholder="请输入账号" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" type="password" placeholder="请输入密码" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" block @click="handleLogin">登录</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="text" @click="router.push('/register')">没有账号？前往注册</el-button>
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
  password: ''
})

const handleLogin = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  if (user && user.username === form.value.username && user.password === form.value.password) {
    ElMessage.success('登录成功')
    router.push('/home')
  } else {
    ElMessage.error('账号或密码错误')
  }
}
</script>

<style scoped>
.login-page {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #74ebd5, #acb6e5);
}
.login-card {
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