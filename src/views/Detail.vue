<template>
  <div class="detail-page">
    <el-card class="car-detail-card" v-if="car">
      <h2>{{ car.name }}</h2>
      <img :src="car.image" alt="car" class="car-image" />
      <p><strong>品牌：</strong>{{ car.brand }}</p >
      <p><strong>价格：</strong> ¥{{ car.price }} 万</p >
      <p><strong>简介：</strong>{{ car.description }}</p >
      <el-button type="primary" @click="goBack">返回首页</el-button>
    </el-card>
    <div v-else>未找到对应车辆信息</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

// 本地图片引入（根据你的 assets 路径）
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

const route = useRoute()
const router = useRouter()

const car = ref(null)

const carList = [
  { id: 1, name: '宝马 X5', brand: '宝马', price: 65, image: x5, description: '豪华SUV，操控灵活，适合城市与越野兼顾。' },
  { id: 2, name: '奔驰 GLC', brand: '奔驰', price: 52, image: glc, description: '高端中型SUV，注重舒适性与动力平衡。' },
  { id: 3, name: '奥迪 Q5', brand: '奥迪', price: 48, image: q5, description: '德系豪华品牌代表，内饰科技感强。' },
  { id: 4, name: '宝马 3系', brand: '宝马', price: 42, image: b3, description: '运动轿车代表之一，驾驶体验极佳。' },
  { id: 5, name: '大众 途观', brand: '大众', price: 25, image: tg, description: '大众经典SUV，性价比高。' },
  { id: 6, name: '丰田 凯美瑞', brand: '丰田', price: 23, image: camry, description: '耐用省油，家用首选车型。' },
  { id: 7, name: '本田 雅阁', brand: '本田', price: 22, image: accord, description: '稳重中带点年轻，空间宽敞。' },
  { id: 8, name: '宝马 5系', brand: '宝马', price: 55, image: b5, description: '商务与豪华兼顾的中大型轿车。' },
  { id: 9, name: '奔驰 E级', brand: '奔驰', price: 58, image: benzE, description: '行政级座驾，舒适感极佳。' },
  { id: 10, name: '奥迪 A6L', brand: '奥迪', price: 52, image: a6, description: '宽大轴距，乘坐舒适，是企业常用接待车。' },
  { id: 11, name: '大众 高尔夫', brand: '大众', price: 15, image: GOLF, description: '操控灵活的小型两厢车，经济实用。' },
  { id: 12, name: '丰田 汉兰达', brand: '丰田', price: 30, image: hld, description: '大七座家用SUV，口碑优秀。' },
  { id: 13, name: '本田 CR-V', brand: '本田', price: 28, image: CRV, description: '家用SUV代表，燃油经济性好。' },
  { id: 14, name: '雷克萨斯 RX', brand: '雷克萨斯', price: 50, image: RX300, description: '豪华混动SUV，安静省油。' },
  { id: 15, name: '特斯拉 Model 3', brand: '特斯拉', price: 36, image: m3, description: '纯电智能轿车，具备自动驾驶辅助。' },
  { id: 16, name: '蔚来 ES6', brand: '蔚来', price: 38, image: es6, description: '国产电动车代表，智能化程度高。' },
  { id: 17, name: '理想 L9', brand: '理想', price: 45, image: L9, description: '智能增程SUV，适合家庭使用。' },
  { id: 18, name: '奔驰 G级', brand: '奔驰', price: 180, image: benzG, description: '豪华硬派越野车，经典耐看。' },
  { id: 19, name: '奥迪 A4L', brand: '奥迪', price: 36, image: A4L, description: '兼顾动力与舒适，年轻人首选车型。' },
  { id: 20, name: '大众 ID.4', brand: '大众', price: 22, image: ID4, description: '大众电动SUV，城市代步佳品。' }
]

onMounted(() => {
  const id = parseInt(route.params.id)
  const found = carList.find(c => c.id === id)
  if (found) car.value = found
})

const goBack = () => {
  router.push('/home')
}
</script>

<style scoped>
.detail-page {
  padding: 20px;
  display: flex;
  justify-content: center;
}
.car-detail-card {
  max-width: 600px;
  width: 100%;
}
.car-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  margin-bottom: 15px;
  border-radius: 8px;
}
</style>