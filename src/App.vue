<template>
  <div id="app">
    <div id="nav">
      <b-navbar
        :fixed-top=true
        slot="burger"
        type="is-light"
        aria-label="main navigation"
        :transparent=true
      >
        <template slot="brand">
          <b-navbar-item tag="router-link" :to="{ path: '/' }">
            <img
              src="./assets/brand.svg"
              alt="Logan Toler"
              width="112"
              height="28"
            />
          </b-navbar-item>
        </template>
        <template slot="start" aria-label="menu" aria-expanded="false" class="is-boxed">
          <b-navbar-item tag="router-link" to="/" class="is-active" exact>
            Home
          </b-navbar-item>
          <b-navbar-item tag="router-link" to="/about" class="is-active" exact>
            About
          </b-navbar-item>
        </template>
      </b-navbar>
    </div>
    <router-view />
  </div>
</template>

<!--<script>
import navbar from './components/navbar.vue'
// import hero from '@/components/hero.vue'
// import foot from '@/components/footer.vue'
export default {
  components: {
    navbar
  }
}
</script>-->

<style lang="scss">
@import "./plugins/styles.scss";

#nav {
  a {
    color: #000;

    &.router-link-exact-active {
      color: #2c3e50;
      font-weight: bold;
    }
  }
}
</style>
