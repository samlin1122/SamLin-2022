<script setup>
import Header from "./components/Header.vue";
import Greeting from "./components/Landing.vue";
import About from "./components/About.vue";
import Experience from "./components/Experience.vue";
import Work from "./components/Work.vue";
import Side from "./components/Side.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
</script>

<template lang="pug">
Header
main
  Greeting
  About
  Experience
  Work
  Side
  Contact
Footer
</template>

<style lang="scss" scoped>
main {
  margin: 0px auto;
  width: 100%;
  max-width: 1600px;
  min-height: 100vh;
  padding: 0 150px;
  @include touch {
    padding: 0 64px;
  }
}
</style>
