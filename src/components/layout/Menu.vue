<template>
  <n-menu :options="menus" :collapsed="collapsed" />
</template>

<script setup lang="ts">
import { ref, toRefs, resolveComponent, h } from 'vue'
import * as Icon5 from '@vicons/ionicons5'
import * as MateriaIcon from '@vicons/material'
import { useIcon } from '@/utils';
import { useStore } from '@/store/index'
import { getMenus } from '@/utils/apis'
import { onBeforeMount } from 'vue'

const Icon = {
  ...Icon5,
  ...MateriaIcon
}

const { collapsed } = toRefs(useStore())
const menus = ref([])
onBeforeMount(async () => {
  const res = await getMenus()
  if (res.code === 0) {
    menus.value = res.data.map(menu => {
      return {
        label: menu.children && menu.children.length ?
          menu.label :
            () =>  h(resolveComponent('router-link'), {
            to: {
              name: menu.name,
            }
          }, { default: () => menu.label }),
        key: menu.name,
        icon: useIcon(Icon[menu.icon]),
        children: menu.children ? menu.children.map(child => {
          return {
            label: () =>  h(resolveComponent('router-link'), {
              to: {
                name: child.name,
              }
            }, { default: () => child.label }),
            key: child.name,
            icon: useIcon(Icon[child.icon])
          }
        }) : null
      }
    })
  }
})
</script>

<style lang="scss" scoped>

</style>