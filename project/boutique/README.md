# boutique

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

See https://restapi.fr/ for doc

```
const vDirective = {
  // appelé avant que les attributs et les écouteurs
  // d’événements soient enregistrés sur l’élément
  created(el, binding, vnode, prevVnode) {},
  // appelé avant que l’élément soit monté sur le DOM
  beforeMount() {},
  // appelé quand l’élément, son parent et ses enfants
  // ont été montés sur le DOM
  mounted() {},
  // appelé avant que le composant parent ne soit mis à jour
  beforeUpdate() {},
  // appelé après que le composant parent et tous les
  // composants enfants aient été mis à jour
  updated() {},
  // appelé avant que le composant parent soit démonté
  beforeUnmount() {},
  // appelé lorsque le composant parent est démonté
  unmounted() {}
  }
};

const vFocus = {
  mounted: (el) => el.focus()
}

app.directive('focus', vFocus);

app.directive('color', (el, binding) => {
  el.style.color = binding.value
});

value : valeur passée à la directive. Par exemple v-directive="42"
oldValue : valeur précédente. Disponible uniquement dans les hooks beforeUpdate et updated
arg : arguments passés à la directive par exemple v-directive:test

modifiers : modificateurs passés à la directive par exemple v-directive.modif1.modif2. Nous aurions alors { modif1: true, modif2: true }
instance : l'instance du composant sur laquelle la directive est utilisée
dir : l'objet de définition de la directive

https://animate.style/

```
