<template>
  <n-layout has-sider class="w-100 vh-100">
    <n-layout-sider
      bordered
      collapse-mode="width"
      :collapsed-width="64"
      :collapsed="collapsed"
    >
      <Menu />
    </n-layout-sider>
    <n-layout>
      <n-layout-header>
        <Header />
      </n-layout-header>
      <n-layout-content content-style="padding: 24px;">
        <router-view></router-view>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<script setup lang="ts">
import Menu from '@/components/layout/Menu.vue'
import Header from '@/components/layout/Header.vue'
import { useStore } from '@/store/index'
import { storeToRefs } from 'pinia'

const { collapsed } = storeToRefs(useStore())

</script>

<style>
</style>
