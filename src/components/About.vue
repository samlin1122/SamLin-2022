<script setup>
import { reactive } from "vue";
const developingList = reactive([
  "JavaScript (ES6+)",
  "RWD",
  "Vue",
  "React",
  "Gatsby",
  "Node.js",
  "Bootstrap",
  "Bulma",
  "Tailwind",
  "Material UI",
  "etc",
]);
const playingList = reactive([
  "Vue3",
  "Nuxt",
  "TypeScript",
  "GraphQL",
  "Python",
  "YAML",
  "GCP",
  "Tensorflow.js",
  "etc",
]);
</script>

<template lang="pug">
section#about
  .flex.items-baseline.divide
    p.text-2xl.text-green.pr-3 01.
    p.text-3xl.text-light.font-bold {{$t('about_title')}}
  .mt-10
    p {{$t('about_label_1')}} :
    ul.skills-list
      li(v-for='list in developingList') {{list}}
  .mt-10.ml-auto.text-right
    p {{$t('about_label_2')}} :
    ul.skills-list
      li(v-for='list in playingList') {{list}}


</template>

<style lang="scss" scoped>
#about {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.skills-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  gap: 0px 10px;
  padding: 0px;
  margin: 20px 0px 0px;
  overflow: hidden;
  list-style: none;
  li {
    position: relative;
    margin-bottom: 10px;
    padding-left: 20px;
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    &::before {
      content: "▹";
      position: absolute;
      left: 0px;
      color: var(--green);
    }
  }
}
.ml-auto {
  li {
    padding-right: 20px;
    &::before {
      content: "▹";
      position: absolute;
      left: unset;
      right: 0px;
      transform: rotate(180deg);
      color: var(--green);
    }
  }
}
</style>
