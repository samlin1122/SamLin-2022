<script setup>
const slillsList = [
  "JavaScript (ES6+)",
  "RWD",
  "Vue",
  "React",
  "Gatsby",
  "Node.js",
  "Bootstrap",
  "Bulma",
  "Tailwind",
  "etc",
];
</script>

<template lang="pug">
section#about
  .flex.items-baseline.divide
    p.text-2xl.text-green.pr-3 01.
    p.text-3xl.text-light.font-bold About Me
  .flex.mt-10
    .conten
      p Here are a few technologies I’ve been working with :
      ul.skills-list
        li(v-for='list in slillsList') {{list}}
    img


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
</style>
