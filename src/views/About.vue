<template>
  <div class="about">
    <body>
      <div class="aboutHeader">
        <section class="section">
          <div class="container mb-4">
            <h1 class="title is-2">About</h1>
            <h2 class="subtitle is-4 has-text-weight-normal">
              Based in Cincinnati, OH and Charlotte, NC.
            </h2>
          </div>
          <aboutDetails/>
        </section>
      </div>
      <end/>
    </body>
  </div>
</template>

<script>
import aboutDetails from '@/components/aboutDetails.vue'
import end from '@/components/end.vue'

export default {
  components: {
    aboutDetails,
    end
  }
}
</script>

<!--<script>
import foot from '@/components/footer.vue'
import hero from '@/components/hero.vue'
export default {
  name: 'About',
  components: {
    hero,
    foot
  }
}
</script>-->

<!--<style scoped lang="css">
.about {
  display: flex;
  flex-direction: column;
  min-height: 92vh;
}
.content {
  flex: 1;
}
</style>-->
