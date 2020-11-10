<template>
  <div class="home">
    <banner/>
    <body>
      <pinned/>
      <end/>
    </body>
  </div>
</template>

<script>
// @ is an alias to /src
import banner from '@/components/banner.vue'
import pinned from '@/components/pinned.vue'
import end from '@/components/end.vue'

export default {
  name: 'Home',
  components: {
    banner,
    pinned,
    end
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
