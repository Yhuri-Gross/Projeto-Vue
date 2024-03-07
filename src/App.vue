<template>
  <NavbarMenu/>
  <router-view />
  <AppFooter />
</template>

<script>
import NavbarMenu from './components/NavbarMenu';
import AppFooter from './components/AppFooter';


export default {
  name: 'App',
  components: {
    NavbarMenu,
    AppFooter
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