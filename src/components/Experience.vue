<script setup>
const slillsList = ["JavaScript (ES6+)", "Vue", "React"];
</script>

<template lang="pug">
section#experience
  .flex.items-baseline.divide
    p.text-2xl.text-green.pr-3 02.
    p.text-3xl.text-light.font-bold Where I’ve Worked
  .mt-10
    .flex.items-center.pb-2
      p.text-light.font-bold.pr-2 Front-End Developer
      p.text-green.font-bold @ Redso
    p.text-sm Sep 2019 - Present
    ul.mt-5
      li Write modern, performant, maintainable code for a diverse array of client and internal projects.
      li Work with a variety of different platforms and frameworks to build website and content management systems.



</template>

<style lang="scss" scoped>
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
</style>
