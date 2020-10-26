<template>
  <div class="error">
    <section class="hero is-success is-fullheight">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1">
            Page not found
          </h1>
        </div>
      </div>
    </section>
    <body>
      <end/>
    </body>
  </div>
</template>

<script>
import end from '@/components/end.vue'
// import hero from '@/components/hero.vue'

export default {
  name: 'Error',
  components: {
    end
  }
}
</script>

<!--<style scoped lang="css">
.error {
  display: flex;
  flex-direction: column;
  min-height: 92vh;
}
.content {
  flex: 1;
}
</style>-->
