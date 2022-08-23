<script setup>
import { ref, reactive } from "vue";
const projectList = reactive([
  {
    label: "web",
    title: "ClubSim",
    href: "https://www.clubsim.com.hk/zh/",
    description: ["work_clubsim_1", "work_clubsim_2"],
    techs: ["Vue-CLI", "RWD", "GA", "SSR", "Axios"],
  },
  {
    label: "web",
    title: "LegalClarus",
    href: "https://legalclarus.com/zh_hant",
    description: ["work_legal_1", "work_legal_2"],
    techs: ["Vue-CLI", "RWD", "GA", "SSR", "Axios"],
  },
  {
    label: "cms",
    title: "HKTDC",
    href: "https://sourcingsupport.hktdc.com/hc/en-us",
    description: ["work_hktdc_1", "work_hktdc_2"],
    techs: ["React", "Axios"],
  },
  {
    label: "Single Page",
    title: "Smart Tone 5G Lab",
    href: "https://5g.smartone.com/5GLab/tc/",
    description: ["work_5glab_1"],
    techs: ["Gatsby", "RWD", "SPA"],
  },
  {
    label: "web",
    title: "Mind Beauty",
    href: "https://booking.mindbeautyhk.com/en",
    description: ["work_mindbeauty_1", "work_mindbeauty_2"],
    techs: ["Vue-CLI", "RWD", "GoogleMap", "Axios"],
  },
  {
    label: "web",
    title: "債券通",
    href: "https://www.bondlvl.com/",
    description: ["work_bond_1"],
    techs: ["Vue-CLI", "RWD", "Axios"],
  },
  {
    label: "cms",
    title: "一線通 管家易",
    href: "",
    description: ["work_ehs_1", "work_ehs_2"],
    techs: ["Next", "Redux", "Redux Toolkit", "Axios", "Material UI"],
  },
]);
</script>

<template lang="pug">
section#work
  .flex.items-baseline.divide
    p.text-2xl.text-green.pr-3 03.
    p.text-3xl.text-light.font-bold {{$t('work_title')}}
  .mt-10.w-full
    .flex.flex-col.mb-8(
      v-for="({ label, title, href, description, techs}, key) in projectList"
      :class="{'items-end':!(key%2)}"
      )
      p.text-green {{$t(label)}}
      p.text-light.text-3xl.font-bold.mt-2 {{title}}
      a.mt-4.bg-dark.p-5.rounded.shadow-lg.box(class='w-3/5' :href="href" target='_blank')
        li(v-for='item in description') {{$t(item)}}
      .flex.items-center.mt-4
        p.mr-4(v-for="tech in techs") {{tech}}


</template>

<style lang="scss" scoped>
.box {
  li {
    color: var(--color-text);
  }
  &:hover {
    background: #000;
    transform: scale(1.1);
    li {
      color: var(--green);
    }
  }
}
</style>
