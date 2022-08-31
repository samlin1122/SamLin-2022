<script setup>
import { reactive } from "vue";
import getImageUrl from "@/utils/imgUrl";
const projectList = reactive([
  {
    label: "web",
    title: "ClubSim",
    img: "clubsim",
    href: "https://www.clubsim.com.hk/zh/",
    description: ["work_clubsim_1", "work_clubsim_2"],
    techs: ["Vue-CLI", "RWD", "GA", "SEO", "SSR", "Axios"],
  },
  {
    label: "web",
    title: "LegalClarus",
    img: "legal",
    href: "https://legalclarus.com/zh_hant",
    description: ["work_legal_1", "work_legal_2"],
    techs: ["Vue-CLI", "RWD", "GA", "SSR", "Axios"],
  },
  {
    label: "cms",
    title: "HKTDC",
    img: "hktdc",
    href: "https://sourcingsupport.hktdc.com/hc/en-us",
    description: ["work_hktdc_1", "work_hktdc_2"],
    techs: ["React", "Axios"],
  },
  {
    label: "single_page",
    title: "Smart Tone 5G Lab",
    img: "5g_lab",
    href: "https://5g.smartone.com/5GLab/tc/",
    description: ["work_5glab_1"],
    techs: ["Gatsby", "RWD", "SPA"],
  },
  {
    label: "web",
    title: "Mind Beauty",
    img: "mindbeauty",
    href: "https://booking.mindbeautyhk.com/en",
    description: ["work_mindbeauty_1", "work_mindbeauty_2"],
    techs: ["Vue-CLI", "RWD", "GoogleMap", "Axios"],
  },
  {
    label: "web",
    title: "債券通",
    img: "bond",
    href: "https://www.bondlvl.com/",
    description: ["work_bond_1", "work_bond_2"],
    techs: ["Vue-CLI", "RWD", "Axios"],
  },
  {
    label: "cms",
    title: "一線通 管家易",
    img: "ehs",
    href: "",
    description: ["work_ehs_1", "work_ehs_2", "work_ehs_3"],
    techs: ["Next", "Redux", "Redux Toolkit", "Axios", "Material UI"],
  },
]);
</script>

<template lang="pug">
section#work
  .flex.items-baseline.divide
    p.text-2xl.text-green.pr-3 03.
    p.text-3xl.text-light.font-bold.font {{$t('work_title')}}
  .mt-10.w-full
    .relative.flex.items-center.justify-between.my-10.py-10.project(
      v-for="({ label, title, img, href, description, techs}, key) in projectList"
      :class="{'flex-row-reverse':(key%2)}"
      )
      a.img(:href="href" target='_blank' class='w-3/5')
        img(:src="getImageUrl(img)")
      .content.flex.flex-col(:class="{'items-end':!(key%2)}" class='w-2/5')
        p.text-green {{$t(label)}}
        a.text-light.text-3xl.font-bold.mt-2(:href="href" target='_blank' ) {{title}}
        .mt-4.bg-dark.p-5.rounded.shadow-lg.box
          li(v-for='item in description') {{$t(item)}}
        .flex.items-center.mt-4
          p.mr-4.whitespace-nowrap(v-for="tech in techs") {{tech}}


</template>

<style lang="scss" scoped>
.project {
  min-height: 340px;
}
.content {
  @include touch {
    position: absolute;
    z-index: 2;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100%;
    align-items: center;
    justify-content: center;
  }
}
.box {
  width: 130%;
  @include touch {
    width: auto;
  }
}
a:hover {
  transform: scale(1.05);
}
.img {
  position: relative;
  filter: grayscale(90%) blur(2px);
  &:hover {
    filter: unset;
  }
  img {
    object-fit: cover;
    object-position: center;
  }
  @include touch {
    width: 100%;
  }
}
</style>
