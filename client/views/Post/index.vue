<template>
<div>
    <h1>Post page with id: {{postId}}</h1>
    <a href="https://hackernoon.com/webpack-loaders-and-plugins-for-your-new-progressive-web-app-378e09f469">
        Maybe you want to improve your Progressive Web App with more Webpack tools?
    </a>
</div>
</template>

<script>
export default {
  name: 'Post',
  data () {
    return {}
  },
  computed: {
    postId () {
      return this.$route.params.id
    }
  },
  components: {}
}
</script>
