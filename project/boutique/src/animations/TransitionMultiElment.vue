<template>
  <div class="p-20">
    <div class="mb-20 d-flex w100 justify-content-center align-items-center">
      <Transition name="fadeCircle" mode="out-in">
        <button
          v-if="selectedComponent === 'B'"
          class="btn btn-primary mr-20"
          @click="selectedComponent = 'A'"
        >
          Composant A
        </button>
        <button v-else class="btn btn-primary" @click="selectedComponent = 'B'">Composant B</button>
      </Transition>
    </div>
    <Transition name="fadeRight" mode="out-in">
      <Component :is="components[selectedComponent]" />
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Component as C } from 'vue'
import A from './components/A.vue'
import B from './components/B.vue'

const components: { [s: string]: C } = {
  A,
  B
}

const selectedComponent = ref('A')
</script>

<style lang="scss">
@import './assets/scss/base.scss';

.fadeRight-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

.fadeRight-enter-active,
.fadeRight-leave-active {
  transition: all 0.4s;
}

.fadeRight-enter-from {
  transform: translateX(-10px);
  opacity: 0;
}

.fadeCircle-leave-to {
  transform: translateX(30px) rotateY(180deg);
  opacity: 0;
}

.fadeCircle-enter-active,
.fadeCircle-leave-active {
  transition: all 0.4s;
}

.fadeCircle-enter-from {
  transform: translateX(-30px) rotateY(-180deg);
  opacity: 0;
}
</style>
