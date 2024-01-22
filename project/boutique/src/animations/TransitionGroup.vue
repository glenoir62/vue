<template>
  <div class="p-20">
    <div class="mb-20 d-flex w100 justify-content-center align-items-center">
      <button class="btn btn-primary mr-20" @click="add">Ajouter</button>
      <button class="btn btn-primary" @click="remove">Enlever</button>
    </div>
    <div class="container">
      <TransitionGroup name="list" tag="ul">
        <li class="mb-10 card" v-for="item in items" :key="item">
          {{ item }}
        </li>
      </TransitionGroup>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let nextNum = ref(10)
const items = ref<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9])

function randomIndex() {
  return Math.floor(Math.random() * items.value.length)
}

function add() {
  items.value.splice(randomIndex(), 0, nextNum.value++)
}

function remove() {
  items.value.splice(randomIndex(), 1)
}
</script>

<style lang="scss">
@import './assets/scss/base.scss';

li {
  cursor: pointer;
  width: 100%;
}

.container {
  position: relative;
  padding: 0;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-leave-active {
  position: absolute;
}
</style>
