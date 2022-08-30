<script setup></script>

<template lang="pug">
section#contact.items-center
  .flex.items-center.text-green.mb-4
    p.text-2xl.pr-3 04.
    p.text-3xl.font-bold.font {{$t('contact_title')}}
  p.text-6xl.font-bold.text-light.mb-8 {{$t('contact_label')}}
  p.mb-20.text-center {{$t('contact_detail')}}
  a.button.px-4.py-3(href="mailto:zhlin1122@gmail.com") Say Hello

</template>

<style lang="scss" scoped></style>
