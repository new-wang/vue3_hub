<template>
    <el-scrollbar wrap-class="scrollbar-wrapper">
        <el-menu mode="vertical"
            :default-active="activeMenu"
            :background-color="variables.menuBg"
            :text-color="variables.menuText"
            :unique-opened="false"
            :active-text-color="variables.menuActiveText"
        >
            <sidebar-item v-for="route in routes" 
            :key="route.path" 
            :item="route" 
            :base-path="route.path" />

        </el-menu>
    </el-scrollbar>
</template>

<script setup>
import variables from "styles/variables.module.scss";
import SidebarItem from "./SidebarItem.vue";
import { useRoute } from "vue-router";
import { routes } from "@/router/router";
import { computed } from "vue";

// 当前激活菜单
const activeMenu = computed(() => {
  const route = useRoute();
  const { meta, path } = route;
  if (meta.activeMenu) {
    return meta.activeMenu;
  }
  return path;
});
</script>
<style lang="scss" scoped>
</style>