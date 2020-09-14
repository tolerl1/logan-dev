<template>
<div class="navbar">
    <b-navbar :fixed-top="true" slot="burger" type="is-light" :transparent="true">
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img src="../assets/brand.svg" alt="Logan Toler" width="112" height="28">
            </b-navbar-item>
        </template>
        <template slot="start" aria-label="menu" aria-expanded="false" class="active">
            <b-navbar-item tag="router-link" to="/" exact>
                Home
            </b-navbar-item>
            <b-navbar-item tag="router-link" to="/about" exact>
                About
            </b-navbar-item>
        </template>
    </b-navbar>
    <router-view/>
</div>
</template>

<script>
export default {
  name: 'navbar'
}
</script>
