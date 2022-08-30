<script setup></script>

<template lang="pug">
section#experience
  .flex.items-baseline.divide
    p.text-2xl.text-green.pr-3 02.
    p.text-3xl.text-light.font-bold.font {{$t('experience_title')}}
  .mt-10
    .flex.items-center.pb-2
      p.text-light.font-bold.pr-2 {{$t('FE_developer')}}
      p.text-green.font-bold @ {{$t('redso')}}
    p.text-sm Sep 2019 - Present
    ul.mt-5
      li {{$t('experience_detail_1')}}
      li {{$t('experience_detail_2')}}



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
