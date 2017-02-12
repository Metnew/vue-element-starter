<template>
<div class="dimmer" :class="{active}" @click="closeDimmer">
</div>
</template>

<script>
export default {
    name: 'Dimmer',
    props:['active', 'closeDimmer']
}
</script>

<style lang="scss">
.dimmer {
    position: absolute;
    top: 0!important;
    left: 0!important;
    text-align: center;
    vertical-align: middle;
    background-color: rgba(0,0,0,.85);
    opacity: 0;
    line-height: 1;
    animation-fill-mode: both;
    transition: background-color 0.5s linear;
    user-select: none;
    will-change: opacity;
    z-index: 100;
    width: 100%;
    height: 100%;
    display: none;
    position: absolute;
    &.active {
        display: block!important;
        visibility: visible!important;
        opacity: 1;
    }
}
</style>
