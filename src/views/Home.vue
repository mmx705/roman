<template>
  <div class="home-page">
    <h2 class="title">欢迎浏览汽车展示平台</h2>

    <!-- 筛选栏 -->
    <div class="filter-bar">
        <el-input
  v-model="searchKeyword"
  placeholder="请输入关键词搜索车型"
  clearable
  style="width: 200px; margin-right: 20px;"
/>
      <el-select v-model="selectedBrand" placeholder="选择品牌" clearable style="width: 200px; margin-right: 20px;">
        <el-option v-for="brand in brandOptions" :key="brand" :label="brand" :value="brand" />
      </el-select>

      <el-select v-model="sortOrder" placeholder="价格排序" clearable style="width: 200px;">
        <el-option label="价格从低到高" value="asc" />
        <el-option label="价格从高到低" value="desc" />
      </el-select>
    </div>

    <!-- 展示列表 -->
    <el-row :gutter="20">
      <el-col
        v-for="car in filteredCars"
        :key="car.id"
        :xs="24"
        :sm="12"
        :md="8"
        :lg="6"
        class="car-item"
      >
        <el-card :body-style="{ padding: '10px' }" shadow="hover">
          <img :src="car.image" class="car-image" alt="car" />
          <h3>{{ car.name }}</h3>
          <p>品牌：{{ car.brand }}</p >
          <p>价格：¥{{ car.price }} 万</p >
          <el-button type="primary" size="small" @click="viewDetail(car.id)">查看详情</el-button>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
const searchKeyword = ref('')
import { reactive, ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const selectedBrand = ref('')
const sortOrder = ref('')

import x5 from '@/assets/cars/x5.png'
import glc from '@/assets/cars/glc.png'
import q5 from '@/assets/cars/q5.png'
import b3 from '@/assets/cars/3.png'
import tg from '@/assets/cars/tg.png'

import camry from '@/assets/cars/camry.png'
import accord from '@/assets/cars/accord.png'
import b5 from '@/assets/cars/b5.png'
import benzE from '@/assets/cars/benzE.png'
import a6 from '@/assets/cars/a6.png'

import GOLF from '@/assets/cars/GOLF.png'
import hld from '@/assets/cars/hld.png'
import CRV from '@/assets/cars/CRV.png'
import RX300 from '@/assets/cars/RX300.png'
import m3 from '@/assets/cars/m3.png'

import es6 from '@/assets/cars/es6.png'
import L9 from '@/assets/cars/L9.png'
import benzG from '@/assets/cars/benzG.png'
import A4L from '@/assets/cars/A4L.png'
import ID4 from '@/assets/cars/ID4.png'
// 全部汽车数据（20个示例）
const carList = reactive([
  { id: 1, name: '宝马 X5', brand: '宝马', price: 65, image: x5 },
  { id: 2, name: '奔驰 GLC', brand: '奔驰', price: 52, image: glc },
  { id: 3, name: '奥迪 Q5', brand: '奥迪', price: 48, image: q5},
  { id: 4, name: '宝马 3系', brand: '宝马', price: 42, image: b3 },
  { id: 5, name: '大众 途观', brand: '大众', price: 25, image: tg },
  { id: 6, name: '丰田 凯美瑞', brand: '丰田', price: 23, image: camry },
  { id: 7, name: '本田 雅阁', brand: '本田', price: 22, image: accord },
  { id: 8, name: '宝马 5系', brand: '宝马', price: 55, image:b5 },
  { id: 9, name: '奔驰 E级', brand: '奔驰', price: 58, image: benzE },
  { id: 10, name: '奥迪 A6L', brand: '奥迪', price: 52, image: a6 },
  { id: 11, name: '大众 高尔夫', brand: '大众', price: 15, image: GOLF },
  { id: 12, name: '丰田 汉兰达', brand: '丰田', price: 30, image: hld },
  { id: 13, name: '本田 CR-V', brand: '本田', price: 28, image: CRV},
  { id: 14, name: '雷克萨斯 RX', brand: '雷克萨斯', price: 50, image: RX300 },
  { id: 15, name: '特斯拉 Model 3', brand: '特斯拉', price: 36, image:m3 },
  { id: 16, name: '蔚来 ES6', brand: '蔚来', price: 38, image: es6 },
  { id: 17, name: '理想 L9', brand: '理想', price: 45, image:L9 },
  { id: 18, name: '奔驰 G级', brand: '奔驰', price: 180, image: benzG },
  { id: 19, name: '奥迪 A4L', brand: '奥迪', price: 36, image: A4L },
  { id: 20, name: '大众 ID.4', brand: '大众', price: 22, image: ID4 }
])

// 品牌列表（自动生成）
const brandOptions = [...new Set(carList.map(car => car.brand))]

// 过滤 + 排序
const filteredCars = computed(() => {
  let result = [...carList]

  // 品牌筛选
  if (selectedBrand.value) {
    result = result.filter(car => car.brand === selectedBrand.value)
  }

  // 关键词搜索（匹配车型名或品牌）
  if (searchKeyword.value) {
    const keyword = searchKeyword.value.toLowerCase()
    result = result.filter(car =>
      car.name.toLowerCase().includes(keyword) ||
      car.brand.toLowerCase().includes(keyword)
    )
  }

  // 排序
  if (sortOrder.value === 'asc') {
    result.sort((a, b) => a.price - b.price)
  } else if (sortOrder.value === 'desc') {
    result.sort((a, b) => b.price - a.price)
  }

  return result
})

// 查看详情
const viewDetail = (id) => {
  router.push(`/detail/${id}`)
}
</script>

<style scoped>
.home-page {
  padding: 20px;
}
.title {
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
}
.filter-bar {
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.car-item {
  margin-bottom: 20px;
}
.car-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 10px;
}
</style>