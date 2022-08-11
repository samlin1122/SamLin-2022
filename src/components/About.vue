<script setup>
const slillsList = ["JavaScript (ES6+)", "Vue", "React"];
</script>

<template lang="pug">
section#about
  .flex.items-baseline.divide
    p.text-2xl.text-green.pr-3 01.
    p.text-3xl.text-light.font-bold About Me
  .flex.mt-10
    .content
      p Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
      p Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
      p Here are a few technologies I’ve been working with recently:
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
