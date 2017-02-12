<template>
<div>
    <h1>Post page with id: {{postId}}</h1>
</div>
</template>

<script>
export default {
    name: 'Post',
    data(){
        return {}
    },
    computed: {
        postId() {
            return this.$route.params.id
        }
    },
    components: {
        //     Counter
    }
}
</script>
