<script setup lang="ts">
// import { useStore } from './stores/user';
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const locale = zhCn
// const store = useStore()
// const query = new URLSearchParams(location.href.split('?')[1])
// const token = query.get('token')
// 判断 `url` 是否携带 `token`
// 如果携带，则存储到全局状态，同时存储到本地缓存
// 如果未携带，则从本地缓存读取，读取成功时存储到全局状态
// if (token) {
//   store.setToken(token)
//   sessionStorage.setItem('token', token)
// } else {
//   const localToken = sessionStorage.getItem('token') || ''
//   if (localToken) {
//     store.setToken(localToken)
//   }
// }
</script>

<template>
  <el-config-provider :locale="locale">
    <router-view></router-view>
  </el-config-provider>
</template>
