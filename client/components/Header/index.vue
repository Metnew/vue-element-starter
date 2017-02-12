<template>
<header>
    <el-menu theme="dark" mode="horizontal">
        <el-menu-item class="header-navicon" index="1">
            <el-button type="text" @click="openSidebar">
                <i class="md-icon">menu</i>
            </el-button>
        </el-menu-item>
        <span v-if="showPageTitle" class="header-title">{{pageTitle}}</span>
        <el-submenu class="header-menu" index="3">
            <template slot="title">Workspace</template>
                <el-menu-item index="4-1">item one</el-menu-item>
                <el-menu-item index="4-2">item two</el-menu-item>
                <el-menu-item index="4-3">item three</el-menu-item>
            </el-submenu>
        </el-menu>
    </header>
</template>

<script>
export default {
    name: 'Header',
    props: ['openSidebar', 'sidebarOpened'],
    methods: {
        handleResize() {
            if (window.innerWidth > 480) {
                this.showPageTitle = true
            } else {
                this.showPageTitle = false
            }
        }
    },
    data() {
        return {
            showPageTitle: window.innerWidth > 480,
            pageTitle:this.$route.meta.title || 'Title'
        }
    },
    created() {
        window.addEventListener('resize', this.handleResize)
    }
}
</script>

<style lang="scss">
// You can import all your SCSS variables using webpack alias
@import '~scss_vars';
@import './style.scss';
</style>
