<template>
<div id="app">
    <div class="page-layout">
        <sidebar-component :active="activeSidebar" />
        <div class="page-layout-inner">
            <header-component :sidebarOpened="activeSidebar" :openSidebar="openSidebar" />
            <main>
            <div class="main-content">
                <el-row class="container">
                    <router-view></router-view>
                </el-row>
            </div>
        </main>
    </div>
        <dimmer :active="activeDimmer" :closeDimmer="closeDimmer" />
    </div>
</div>
</template>
<script>
import Header from 'components/Header'
import Sidebar from 'components/Sidebar'
import Dimmer from 'components/Dimmer'
export default {
    name: 'App',
    data() {
        return {
            activeSidebar: window.innerWidth > 1024,
            activeDimmer: false
        }
    },
    methods: {
        openSidebar() {
            this.activeSidebar = true
            this.activeDimmer = true
        },
        closeDimmer() {
            this.activeDimmer = false
            this.activeSidebar = false
        },
        handleResize() {
            let {
                innerWidth
            } = window;
            this.activeSidebar = (innerWidth > 1024)
        }
    },
    components: {
        'header-component': Header,
        'sidebar-component': Sidebar,
        Dimmer
    },
    created: function() {
        window.addEventListener('resize', this.handleResize)
    }
}
</script>

<style lang="scss">
// You can import all your SCSS variables using webpack alias
@import '~scss_vars';
@import './style.scss';</style>
