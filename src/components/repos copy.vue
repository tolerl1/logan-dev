<!--<template>
  <div>
    <section class="section">
      <div class="container is-fluid mb-4">
      <h1 class="title is-2">Projects</h1>
      </div>
      <div class="columns is-centered">
        <div class="column is-12">
          <div class="container is-fluid">
              <div class="columns is-multiline">
                <div class="column is-4" v-for="repo in info" :key="repo.i">
                  <a v-bind:href="repo.html_url" target="_blank" rel="noopener">
                    <div class="box">
                      <p class="title is-6">{{ repo.name }}</p>
                    </div>
                  </a>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'repoData',
  data () {
    return {
      info: null
    }
  },
  created () {
    // GET request using axios with error handling
    axios.get('https://1sgowdpdfk.execute-api.us-east-1.amazonaws.com/prod')
      .then(response => (this.info = response.data))
  }
}
</script>
-->
