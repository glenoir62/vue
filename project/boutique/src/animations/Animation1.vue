<template>
  <div class="p-20">
    <button class="btn btn-primary" @click="show = !show">Cliquez !</button>
    <Transition name="mon-animation" appear>
      <p v-if="show">
        Principes fertur et exitiale aliquando oblato factitarunt quod propositum quod illo ob illo
        numquam obstinatum obstinatum quoque aetatis revocari iussisse vitium factitarunt
        inexorabiles aetatis quod accendente fertur aetatis iussisse vitium similia iussisse
        factitarunt propositum similia neminem revocari adulatorum accendente fertur ob adulatorum
        principes accendente inexorabiles elogio vitium exitiale aliis progressu eius eius eius et
        non quoque vel in in quod more de propositum quod oblato factitarunt poenae hoc principes
        exitiale cohorte hoc similia hoc aliis quod de in in addictum eius adulatorum quoque et ob
        oblato neminem numquam adulatorum addictum ob quod cohorte aliis neminem vel revocari hoc
        hoc similia.
      </p>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const show = ref(true)
</script>

<style lang="scss">
@import './assets/scss/base.scss';

@keyframes mon-animation {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(0.5, 1.5);
  }
  100% {
    transform: scale(1);
  }
}
.mon-animation-enter-active {
  animation: mon-animation 0.5s;
}
.mon-animation-leave-active {
  animation: mon-animation 0.5s reverse;
}
</style>
