<script setup>
import { reactive, onMounted, nextTick } from "vue";

onMounted(() => {
  if (window.location.hash) {
    nextTick(() => {
      let hash = document.querySelector(window.location.hash);
      window.scrollTo(0, hash.offsetTop);
    });
  }
});

const headerList = reactive(["About", "Experience", "Work", "Contact"]);
const scrollTo = (id) => {
  let target = document.getElementById(id.toLowerCase());
  target && window.scrollTo(0, target.offsetTop);
};
</script>

<template lang="pug">
header.fixed.inset-x-0.top-0.flex.items-center.justify-end.gap-x-10.z-10
  a.flex.items-center(v-for='(list, key) in headerList' :key='list' @click.capture='scrollTo(list)' :href="`#${list.toLowerCase()}`") 
    p.header-key.mr-2 0{{key+1}}.
    p.header-item {{list}}
  a.button.px-3.py-2 Resume
.left.fixed.z-10
  .flex.flex-col.items-center.relative
    a hello
.right.fixed.z-10
  .flex.flex-col.items-center.relative
    a(href="mailto:zhlin1122@gmail.com") zhlin1122@gmail.com
</template>

<style lang="scss" scoped>
header {
  height: 100px;
  background: var(--color-background);
  .header-item {
    color: var(--color-text);
  }
}
.left,
.right {
  width: 40px;
  position: fixed;
  bottom: 0px;
  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    margin: 20px auto;
    padding: 10px;
    letter-spacing: 0.1em;
    -webkit-writing-mode: vertical-rl;
    writing-mode: vertical-rl;
    &::after {
      content: "";
      display: inline-block;
      width: 1px;
      height: 90px;
      background-color: var(--color-text);
      margin-top: 1rem;
    }
  }
}
.left {
  right: auto;
  left: 40px;
}
.right {
  left: auto;
  right: 40px;
}
</style>
