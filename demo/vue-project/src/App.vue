<template>
  <h1>Bonjour {{ name.toUpperCase() }}</h1>
</template>

<script lang="ts">
export default {
  setup() {
    const name = 'Jean ff'

    return {
      name
      // name: name
    }
  }
}
</script>
<style></style>
