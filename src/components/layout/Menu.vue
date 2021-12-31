<template>
  <n-menu
    :options="menus"
    :value="acitveMenu"
    :collapsed="collapsed"
    :expanded-keys="expandedKeys"
  />
</template>

<script setup lang="ts">
import { ref, toRefs, resolveComponent, h, onBeforeMount, watch, nextTick } from 'vue'
import * as Icon5 from '@vicons/ionicons5'
import * as MateriaIcon from '@vicons/material'
import { useIcon } from '@/utils';
import { useStore } from '@/store/index'
import { getMenus } from '@/utils/apis'
import { useRoute } from 'vue-router'
import { MenuOption } from 'naive-ui';

const route = useRoute()

const Icon = { ...Icon5, ...MateriaIcon }
const { collapsed } = toRefs(useStore())
const acitveMenu = ref('')
const expandedKeys = ref<Array<string>>([])

const menus = ref<Array<MenuOption>>([])
const res = await getMenus()
if (res.code === 0) {
  menus.value = res.data.map((menu: MenuOption) => {
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
      children: menu.children ? menu.children.map((child: MenuOption) => {
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

const findParentMenu = (menus: Array<MenuOption>, routeName: string): MenuOption | null => {
  let target: MenuOption = null
  menus.forEach((menu: MenuOption) => {
    if (menu.children && menu.children.length) {
      menu.children.forEach((child: MenuOption) => {
        if (child.key === routeName) {
          target = menu
        }
      })
    }
  })
  return target
}

watch(() => route.name, (routeName: string) => {
  acitveMenu.value = routeName
  const parentMenu = findParentMenu(menus.value, routeName)
  expandedKeys.value = parentMenu ? [parentMenu.key] : undefined
}, { immediate: true })
</script>

<style lang="scss" scoped>

</style>