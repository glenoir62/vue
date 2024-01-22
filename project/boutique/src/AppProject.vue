<script setup lang="ts">
import TheHeader from './components/Header.vue'
import TheFooter from './components/Footer.vue'
import Shop from './components/Shop/Shop.vue'
import Cart from './components/Cart/Cart.vue'
import data from './data/product'

import { computed, reactive } from 'vue'
import { DEFAULT_FILTERS } from './data/filters'
import type {
  FiltersInterface,
  ProductCartInterface,
  ProductInterface,
  FilterUpdate
} from './interfaces'

const state = reactive<{
  products: ProductInterface[]
  cart: ProductCartInterface[]
  filters: FiltersInterface
}>({
  products: data,
  cart: [],
  filters: DEFAULT_FILTERS
})

function addProductToCart(productId: number): void {
  const product = state.products.find((product) => product.id === productId)
  if (product) {
    const productInCart = state.cart.find((product) => product.id === productId)
    if (productInCart) {
      productInCart.quantity++
    } else {
      state.cart.push({ ...product, quantity: 1 })
    }
  }
}

function updateFilter(filterUpdate: FilterUpdate) {
  if (filterUpdate.search !== undefined) {
    state.filters.search = filterUpdate.search
  } else if (filterUpdate.priceRange) {
    state.filters.priceRange = filterUpdate.priceRange
  } else if (filterUpdate.category) {
    state.filters.category = filterUpdate.category
  } else {
    state.filters = { ...DEFAULT_FILTERS }
  }
}

function removeProductFromCart(productId: number): void {
  const productFromCart = state.cart.find((product) => product.id === productId)
  if (productFromCart?.quantity === 1) {
    state.cart = state.cart.filter((product) => product.id !== productId)
  } else {
    productFromCart!.quantity--
  }
}
const filteredProducts = computed(() => {
  console.log(state.products.length)

  return state.products.filter((product) => {
    if (
      product.title.toLocaleLowerCase().startsWith(state.filters.search.toLocaleLowerCase()) &&
      product.price >= state.filters.priceRange[0] &&
      product.price <= state.filters.priceRange[1] &&
      (product.category === state.filters.category || state.filters.category === 'all')
    ) {
      return true
    } else {
      return false
    }
  })
})

const cartEmpty = computed(() => state.cart.length === 0)
</script>

<template>
  <div
    class="app-container"
    :class="{
      gridEmpty: cartEmpty
    }"
  >
    <TheHeader class="header" />

    <!--
      Nous créons une fonction addProductToCart() qui va permettre d'ajouter un produit dans le panier en utilisant son id unique.
       La logique est simple : nous récupérons le produit à l'aide de son id depuis la propriété réactive state, ensuite nous vérifions qu'il n'est pas déjà dans le panier,
        et enfin nous l'ajoutons au panier.
    -->
    <Shop
      @update-filter="updateFilter"
      :products="filteredProducts"
      :filters="state.filters"
      :nbrOfProducts="filteredProducts.length"
      @add-product-to-cart="addProductToCart"
      class="shop"
    />
    <Cart
      v-if="!cartEmpty"
      :cart="state.cart"
      @remove-product-from-cart="removeProductFromCart"
      class="cart"
    />
    <TheFooter class="footer" />
  </div>
</template>

<style lang="scss">
.app-container {
  min-height: 100vh;
  display: grid;
  grid-template-areas: 'header header' 'shop cart' 'footer footer';
  grid-template-columns: 75% 25%;
  grid-template-rows: 48px auto 48px;
}
.gridEmpty {
  grid-template-areas: 'header' 'shop' 'footer';
  grid-template-columns: 100%;
}
.header {
  grid-area: header;
}
.shop {
  grid-area: shop;
}
.cart {
  grid-area: cart;
  border-left: var(--border);
  background-color: white;
}
.footer {
  grid-area: footer;
}
</style>
