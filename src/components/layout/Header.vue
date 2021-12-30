<template>
  <header class="header flex flex-row-between flex-col-center px-15 pointer">
    <n-icon size="30" :depth="2" @click="handleToggleCollapse">
      <list-sharp />
    </n-icon>
    <div class="header-right">
      <n-popover placement="bottom" trigger="hover">
        <template #trigger>
          <div class="flex flex-col-center">
            <UserIcon />
            <span class="ml-8">管理员用户</span>
          </div>
        </template>
        <span>
          <n-button quaternary>登出</n-button>
        </span>
      </n-popover>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ListSharp } from '@vicons/ionicons5'
import { useStore } from '@/store/index'
import { UserAvatar } from '@vicons/carbon'
import { useIcon } from '@/utils';

const store = useStore()
const UserIcon = useIcon(UserAvatar, 26, '#666')
const handleToggleCollapse = () => {
  store.collapsed = !store.collapsed
}
</script>

<style lang="scss" scoped>
.header {
  height: 60px;
  border-bottom: 1px solid #eee;
}
</style>