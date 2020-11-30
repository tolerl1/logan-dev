<template>
  <div class="home">
    <banner/>
    <body>
      <repoData/>
      <end/>
    </body>
  </div>
</template>

<script>
// @ is an alias to /src
import banner from '@/components/banner.vue'
import repoData from '@/components/repos.vue'
import end from '@/components/end.vue'

export default {
  name: 'Home',
  components: {
    banner,
    repoData,
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
