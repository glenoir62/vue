<script setup lang="ts">
import type { FiltersInterface, FilterUpdate, Category } from '../../interfaces'
defineProps<{
  filters: FiltersInterface
  nbrOfProducts: number
}>()
const emit = defineEmits<{
  (e: 'updateFilter', filterUpdate: FilterUpdate): void
}>()
</script>

<!--
    as [number, number][] : permet de préciser à TypeScript que nous avons bien un tableau contenant des tableaux
    avec exactement deux éléments de type nombre.

    v-for="priceRange of : permet d'itérer sur l'ensembles des intervalles de prix.

    :checked="filters.priceRange[0] === priceRange[0]" : nous cochons l'élément uniquement si la valeur minimale de
    l'intervalle contenue dans les filtres passés est la même que la valeur minimale de l'intervalle de l'itération en cours.

    @input="emit('updateFilter', { priceRange })" : permet d'émettre l'événement de mise à jour des filtres avec en
    valeur un objet contenant une propriété qui a en clé le filtre à modifier et en valeur l'intervalle sélectionné.

    :id="priceRange[0].toString()" : nous nous servons de la valeur inférieure de l'intervalle comme identifiant HTML unique.

-->
<template>
  <div class="p-20 d-flex flex-column">
    <section class="mb-20">
      <h3 class="mb-10">Rechercher</h3>
      <input
        :value="filters.search"
        @input="emit('updateFilter', { search: ($event.target as HTMLInputElement).value })"
        type="text"
        placeholder="Rechercher"
      />
    </section>
    <section class="mb-20">
      <h3 class="mb-10">Trier par prix</h3>
      <div
        class="mb-5"
        v-for="priceRange of [
          [0, 10000],
          [800, 1000],
          [1000, 1500],
          [1500, 2000],
          [2000, 10000]
        ] as [number, number][]"
      >
        <input
          :checked="filters.priceRange[0] === priceRange[0]"
          type="radio"
          @input="emit('updateFilter', { priceRange })"
          name="priceRange"
          :id="priceRange[0].toString()"
        />
        <label :for="priceRange[0].toString()">
          {{
            priceRange[0] === 0
              ? 'Tous les prix'
              : priceRange[0] === 2000
                ? 'Plus de 2000€'
                : `Entre ${priceRange[0]}€ et ${priceRange[1]}€`
          }}
        </label>
      </div>
    </section>
    <section class="mb-20 flex-fill">
      <h3 class="mb-10">Trier par categories</h3>
      <!--
        :class="{ selected: filters.category === category }" : permet d'ajouter
        la classe selected si la catégorie sélectionnée dans la props filters est celle de l'itération en cours.
      -->
      <p
        class="category"
        :class="{ selected: filters.category === category }"
        v-for="category in ['all', 'desktop', 'gamer', 'streaming'] as Category[]"
        @click="emit('updateFilter', { category })"
      >
        {{ category }}
      </p>
    </section>
    <small class="mb-5">
      Nombre de résultats:
      <strong>{{ nbrOfProducts }}</strong>
    </small>
    <button class="btn btn-danger" @click="emit('updateFilter', {})">Supprimer les filtres</button>
  </div>
</template>

<style lang="scss" scoped>
.category {
  font-size: 14px;
  line-height: 18px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
}
.selected {
  font-weight: bold;
  text-decoration: underline;
}
</style>
