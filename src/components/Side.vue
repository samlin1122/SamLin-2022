<script setup>
import { reactive } from "vue";
const projectList = reactive([
  {
    title: "Personal Website V2",
    description: "side_description_4",
    href: "https://samlin1122.github.io/SamLin-2022/",
    github: "https://github.com/samlin1122/SamLin-2022",
    techs: ["Vue3", "Tailwind CSS", "GitHub Action"],
  },
  {
    title: "UI/UX Designer Website",
    description: "side_description_3",
    href: "https://jex-yeh.de.r.appspot.com/",
    github: "https://github.com/samlin1122/jexyeh",
    techs: ["Vue3", "Tailwind CSS", "GAE"],
  },
  {
    title: "Nearby Restaurant Search",
    description: "side_description_2",
    href: "https://samlin1122.github.io/Maps/index.html",
    github: "https://github.com/samlin1122/Maps",
    techs: ["Google Maps API"],
  },
  {
    title: "Personal Website V1",
    description: "side_description_1",
    href: "https://samlin1122.github.io/Portfolio/index.html",
    github: "https://github.com/samlin1122/Portfolio",
    techs: ["Javascript"],
  },
]);
</script>

<template lang="pug">
section#side.items-center
  p.text-3xl.text-light.font-bold.font {{$t('side_project')}}
  .mt-10.w-full.flex.flex-wrap.justify-around
    a.project(v-for="{title, description, href, github, techs} in projectList" :href='href' target='_blank')
      .content
        .flex.justify-between.items-center
          .icon.file
          a.icon.github(:href='github' target='_blank')
        p.mt-4.font-bold.text-light {{title}}
        p.mt-4.text-sm.text-normal {{$t(description)}}
      .flex.gap-3
        p.text-xs.text-normal.whitespace-nowrap(v-for="tech in techs") {{tech}}
    


</template>

<style lang="scss" scoped>
.project {
  width: 45%;
  height: 300px;
  padding: 2rem 1.75rem;
  margin: 2rem 0;
  box-shadow: 0 10px 30px -15px black;
  background-color: #112240;
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  &:hover {
    transform: translateY(-10px);
  }
}
.icon {
  -webkit-mask-position: center;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: cover;
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: cover;
}
.file {
  mask-image: url("../assets/icons/file.svg");
  background: var(--green);
  width: 40px;
  height: 40px;
}
.github {
  mask-image: url("../assets/icons/github.svg");
  background: var(--vt-c-white);
  width: 25px;
  height: 25px;
  &:hover {
    background: var(--green);
  }
}
</style>
