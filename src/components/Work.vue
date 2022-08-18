<script setup>
import { ref, reactive } from "vue";
const projectList = reactive([
  {
    label: "Website",
    title: "ClubSim",
    href: "https://www.clubsim.com.hk/zh/",
    description: [
      "使用Vue-CLI從零開發，並加入SSR提升SEO表現",
      "加入Google Analytics分析使用者數據",
    ],
    techs: ["Vue-CLI", "RWD", "GA", "SSR", "Axios"],
  },
  {
    label: "Website",
    title: "LegalClarus",
    href: "https://legalclarus.com/zh_hant",
    description: [
      "使用Vue-CLI從零開發，並加入SSR提升SEO表現",
      "加入Google Analytics分析使用者數據",
    ],
    techs: ["Vue-CLI", "RWD", "GA", "SSR", "Axios"],
  },
  {
    label: "CMS",
    title: "HKTDC",
    href: "https://sourcingsupport.hktdc.com/hc/en-us",
    description: [
      "使用React, Next進行開發各種使用者介面",
      "使用light house稽核，提升更好的SEO與使用者體驗",
    ],
    techs: ["React", "Axios"],
  },
  {
    label: "Single Page",
    title: "Smart Tone 5G Lab",
    href: "https://5g.smartone.com/5GLab/tc/",
    description: ["運用Gatsby進行快速開發"],
    techs: ["Gatsby", "RWD", "SPA"],
  },
  {
    label: "Website",
    title: "Mind Beauty",
    href: "https://booking.mindbeautyhk.com/en",
    description: [
      "使用Vue-CLI從零開發",
      "運用GoogleMap Api 進行商家定位，提升使用者體驗",
    ],
    techs: ["Vue-CLI", "RWD", "GoogleMap", "Axios"],
  },
  {
    label: "Website",
    title: "債券通",
    href: "https://www.bondlvl.com/",
    description: ["從App移植到Web的證券搜尋工具"],
    techs: ["Vue-CLI", "RWD", "Axios"],
  },
  {
    label: "CMS",
    title: "一線通 管家易",
    // href: "https://sourcingsupport.hktdc.com/hc/en-us",
    description: ["使用Next從零開發", "使用Material UI提升開發效率"],
    techs: ["Next", "Redux", "Redux Toolkit", "Axios", "Material UI"],
  },
]);
</script>

<template lang="pug">
section#work
  .flex.items-baseline.divide
    p.text-2xl.text-green.pr-3 03.
    p.text-3xl.text-light.font-bold Some Thing I've Built
  .mt-10.w-full
    .flex.flex-col.mb-8(
      v-for="({ label, title, href, description, techs}, key) in projectList"
      :class="{'items-end':!(key%2)}"
      )
      p.text-green {{label}}
      p.text-light.text-3xl.font-bold.mt-2 {{title}}
      a.mt-4.bg-dark.p-5.rounded.shadow-lg.box(class='w-3/5' :href="href" target='_blank')
        li(v-for='item in description') {{item}}
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
