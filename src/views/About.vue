<template>
  <div class="about">
    <banner/>
    <body>
      <div class="aboutHeader">
        <section class="section">
          <div class="container">
            <h1 class="title is-2 ">About</h1>
            <h2 class="subtitle is-4 has-text-weight-normal">
              Technology professional based out of Cincinnati, OH and Charlotte, NC.
            </h2>
          </div>
        </section>
      </div>
      <div class="aboutDetails">
        <section class="section">
          <div class="container">
            <aboutDetails/>
          </div>
        </section>
      </div>
      <foot/>
    </body>
  </div>
</template>

<script>
import banner from '@/components/banner.vue'
import aboutDetails from '@/components/aboutDetails.vue'
import foot from '@/components/footer.vue'

export default {
  components: {
    banner,
    aboutDetails,
    foot
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
