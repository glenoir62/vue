<template>
  <div>
    <input name="email" v-model="email" />
    <p>{{ emailError }}</p>
    <input name="password" v-model="password" type="password" />
    <p>{{ passwordError }}</p>
  </div>
</template>

<script setup lang="ts">
import { useForm, useField } from 'vee-validate'

const validationSchema = {
  email(value: string) {
    if (value.includes('@') && value.length > 5) {
      return true
    } else {
      return 'Email non valide'
    }
  },
  password(value: string) {
    if (value?.length >= 8) {
      return true
    } else {
      return 'Le mot de passe doit être de 8 caractères au moins'
    }
  }
}
/*
vee-validate
La librairie vee-validate permet de gérer des formulaires complexes.
Les deux fonctions principales sont useField() et useForm().


La fonction useForm() permet de créer un formulaire géré 
par VeeValidate et y associe automatiquement tous les champs créés avec useField().

Le schéma de validation passé à useForm() permet de définir des fonctions de validation pour chaque champ du formulaire.

Il faut bien sûr que le nom des méthodes du schéma de validation coïncident à celles données aux champs.
*/
useForm({ validationSchema })

const { value: email, errorMessage: emailError } = useField('email')
const { value: password, errorMessage: passwordError } = useField('password')
</script>

<style scoped lang="scss"></style>
