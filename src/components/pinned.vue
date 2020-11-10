<template>
  <div>
    <section class="section">
      <div class="container is-fluid mb-4">
      <h1 class="title is-2">Projects</h1>
      </div>
      <div class="columns is-centered">
        <div class="column is-12">
          <div class="container is-fluid">
              <div class="columns is-multiline">
                <div class="column is-4" v-for="i in user.pinnedItems.edges" :key="i.id">
                  <a v-bind:href="i.node.url" target="_blank" rel="noopener">
                    <div class="box">
                      <p class="title is-6">{{ i.node.name }}</p>
                      <p>{{ i.node.description }}</p>
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
import { getPinned } from '../queries/gh'
export default {
  apollo: {
    user: getPinned
  },
  data () {
    return {
      user: []
    }
  }
}
</script>
