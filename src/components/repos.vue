<template>
  <div class="container">
    <div class="columns is-tablet">
      <div class="column">
        <p class="has-text-weight-normal">
          {{ info }}
        </p>
      </div>
    </div>
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
    axios.get('https://96c3fv8ld7.execute-api.us-east-1.amazonaws.com/prod')
      .then(response => (this.info = response.data.name))
  }
}
</script>
