<script setup>
import { ref, reactive } from "vue";
const projectList = reactive([
  {
    label: "Featured Project",
    title: "ClubSim",
    description:
      "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
    techs: ["VS Code", "Sublime Text", "Atmos"],
  },
  {
    label: "Featured Project",
    title: "ClubSim",
    description:
      "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
    techs: ["VS Code", "Sublime Text", "Atmos"],
  },
  {
    label: "Featured Project",
    title: "ClubSim",
    description:
      "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
    techs: ["VS Code", "Sublime Text", "Atmos"],
  },
]);
</script>

<template lang="pug">
section#work
  .flex.items-baseline.divide
    p.text-2xl.text-green.pr-3 03.
    p.text-3xl.text-light.font-bold Some Thing I've Built
  .mt-10
    .flex.flex-col.mb-8(
      v-for="({ label, title, description, techs}, key) in projectList"
      :class="{'items-end':!(key%2)}"
      )
      p.text-green {{label}} {{key%2 > 0}}
      p.text-light.text-3xl.font-bold.mt-2 {{title}}
      .mt-4.bg-dark.p-5.rounded.shadow-lg(class='w-3/5')
        p {{description}}
      .flex.items-center.mt-4
        p.mr-4(v-for="tech in techs") {{tech}}


</template>

<style lang="scss" scoped></style>
