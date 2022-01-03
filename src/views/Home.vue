<template>
  <n-divider title-placement="left">
    <span class="color-gray">以下数据纯属扯蛋</span>
  </n-divider>
  <div class="top flex">
    <n-card class="mr-15">
      <template #header>
        <div class="flex flex-row-between flex-col-center">
          <div class="flex flex-col-center">
            <UserIcon />
            <span class="color-666 fs-16 ml-10">用户数量</span>
          </div>
          <div><CountUp id="user" :value="3358" /> 人</div>
        </div>
      </template>
      <span class="fs-14 color-999">用户的统计数量是指在该平台注册通过以及后台添加的所有用户</span>
    </n-card>
    <n-card class="mr-15">
      <template #header>
        <div class="flex flex-row-between flex-col-center">
          <div class="flex flex-col-center">
            <StarIcon />
            <span class="color-666 fs-16 ml-10">收藏数量</span>
          </div>
          <div>
            <CountUp id="star" :value="101" /> Stars
          </div>
        </div>
      </template>
      <span class="fs-14 color-999">收藏数量是指在Github别人点击的star数量</span>
    </n-card>
    <n-card class="mr-15">
      <template #header>
        <div class="flex flex-row-between flex-col-center">
          <div class="flex flex-col-center">
            <ViewIcon />
            <span class="color-333 fs-16 ml-10">浏览统计</span>
          </div>
          <div><CountUp id="view" :value="12321" /> 次</div>
        </div>
      </template>
      <span class="fs-14 color-999">浏览数量是指用户进入该系统的次数，一个用户可以有多次</span>
    </n-card>
  </div>
  <div id="line-charts" class="line-charts mt-30"></div>
  <div class="statistics flex flex-row-between">
    <div id="pie-charts" class="pie-charts"></div>
    <div id="bar-charts" class="bar-charts"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import CountUp from '@/components/CountUp.vue'
import { useIcon } from '@/utils'
import { UserAvatar, LogoGithub, View } from '@vicons/carbon'
import { useLineCharts, usePieCharts, useBarCharts } from '@/utils/charts/home'

const UserIcon = useIcon(UserAvatar, 36, '#333')
const StarIcon = useIcon(LogoGithub, 36, '#333')
const ViewIcon = useIcon(View, 36, '#333')

onMounted(() => {
  useLineCharts('line-charts')
  usePieCharts('pie-charts')
  useBarCharts('bar-charts')
})

</script>

<style lang="scss" scoped>
.line-charts {
  width: 100%;
  height: 300px;
}
.pie-charts, .bar-charts {
  width: 50%;
  height: 300px;
}
</style>