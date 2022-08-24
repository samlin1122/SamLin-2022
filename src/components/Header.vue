<script setup>
import { reactive, ref, onMounted, nextTick } from "vue";
import { useI18n } from "vue-i18n";

const headerList = reactive(["about", "experience", "work", "contact"]);
const open = ref(false);
const { locale } = useI18n({ useScope: "global" });
let lang = ref(locale.value);

onMounted(() => {
  if (window.location.hash) {
    nextTick(() => {
      let hash = document.querySelector(window.location.hash);
      window.scrollTo(0, hash.offsetTop);
    });
  }
});

const handleLangChange = () => {
  lang.value = lang.value === "tc" ? "en" : "tc";
  locale.value = lang.value;
};
</script>

<template lang="pug">
header.fixed.inset-x-0.top-0.z-10.flex.items-center.justify-end
  .items-center.justify-end.gap-x-10.hidden(class='lg:flex')
    a.flex.items-center(v-for='(list, key) in headerList' :key='list' :href="`#${list}`") 
      p.header-key.mr-2 0{{key+1}}.
      p.header-item {{$t(list)}}
    a.header-item(@click='handleLangChange') {{$t('lang')}}
    a.button.px-3.py-2(href='https://docs.google.com/document/d/1TXq6JqcOfig6stJ06x5agzAwsPENW9Nqhw7YPgm0ZDA/edit?usp=sharing' target="_blank") {{$t('resume')}}
  .menu.cursor-pointer.z-20(class='lg:hidden' :class='{open}' @click='open=!open')
  transition(name="slide-fade")
    .menu-list.fixed.inset-y-0.right-0.bg-dark.flex.flex-col.shadow-lg(v-if='open' @click='open=!open')
      a.flex.items-center(v-for='(list, key) in headerList' :key='list' :href="`#${list}`") 
        p.header-key.text-2xl.mr-2 0{{key+1}}.
        p.header-item.text-2xl.py-3 {{$t(list)}}
      a.header-item.text-2xl.py-3.mx-auto.mt-auto(@click.stop='handleLangChange') {{$t('lang')}}
      a.button.px-3.py-2.mx-auto(href='https://docs.google.com/document/d/1TXq6JqcOfig6stJ06x5agzAwsPENW9Nqhw7YPgm0ZDA/edit?usp=sharing' target="_blank") {{$t('resume')}}
.shadow(v-if='open' @click='open=!open')
  
.left.fixed.z-10
  .flex.flex-col.items-center.relative
    a.linkedin(href='https://www.linkedin.com/in/zhlin1122/' target="_blank")
    a.github(href='https://github.com/samlin1122' target="_blank")
    a.hackMD(href='https://hackmd.io/?nav=overview' target="_blank")
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
  bottom: 0px;
  @include touch {
    display: none;
  }
  & > *::after {
    content: "";
    display: inline-block;
    width: 1px;
    height: 90px;
    background-color: var(--color-text);
    margin-top: 1rem;
  }
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

.linkedin,
.github,
.hackMD,
.menu {
  -webkit-mask-position: center;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: cover;
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: cover;
  background: var(--vt-c-white);
  &:hover {
    background: var(--green);
  }
}
.linkedin {
  mask-image: url("../assets/icons/linkedin.svg");
}
.github {
  mask-image: url("../assets/icons/github.svg");
}
.hackMD {
  mask-image: url("../assets/icons/note.svg");
}
.menu {
  mask-image: url("../assets/icons/menu.svg");
  width: 30px;
  height: 30px;
  padding: 10px;
  &.open {
    mask-image: url("../assets/icons/close.svg");
  }
  &-list {
    width: 300px;
    padding: 100px 1.5rem;
  }
}
.shadow {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(4px);
  z-index: 1;
}
.slide-fade-enter-active,
.slide-fade-leave-active {
  transform: translateX(20px);
  opacity: 0;
  transition: all 0.3s ease-in-out;
}
.slide-fade-enter-to {
  transform: translateX(0px);
  opacity: 1;
}
</style>
