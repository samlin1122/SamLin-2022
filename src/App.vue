<script setup>
import Header from "./components/Header.vue";
import Greeting from "./components/Landing.vue";
import About from "./components/About.vue";
import Experience from "./components/Experience.vue";
import Work from "./components/Work.vue";
import Contact from "./components/Contact.vue";
</script>

<template lang="pug">
Header
main
  Greeting
  About
  Experience
  Work
  Contact
</template>

<style lang="scss" scoped>
main {
  margin: 0px auto;
  width: 100%;
  max-width: 1600px;
  min-height: 100vh;
  padding: 0 150px;
}
</style>
