<template>
  <NavbarMenu/>
  <router-view />
</template>

<script>
import NavbarMenu from './components/NavbarMenu';


export default {
  name: 'App',
  components: {
    NavbarMenu
  }
}
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>