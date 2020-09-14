<template>
  <div class="home">
    <banner/>
    <body>
      <foot/>
    </body>
  </div>
</template>

<script>
// @ is an alias to /src
import banner from '@/components/banner.vue'
import foot from '@/components/footer.vue'

export default {
  name: 'Home',
  components: {
    banner,
    foot
  }
}
</script>

<!--<style scoped lang="css">
.home {
  display: flex;
  flex-direction: column;
  min-height: 92vh;
}
.content {
  flex: 1;
}
</style>-->
