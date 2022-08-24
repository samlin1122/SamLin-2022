<script setup></script>

<template lang="pug">
#footer.text-center.items-center.mx-auto.mb-8
  a.linkedin(href='https://www.linkedin.com/in/zhlin1122/' target="_blank")
  a.hackMD(href='https://hackmd.io/?nav=overview' target="_blank")
  a.github(href='https://github.com/samlin1122' target="_blank")
</template>

<style lang="scss" scoped>
#footer {
  width: 200px;
  display: none;
  @include touch {
    display: flex;
  }
}
a {
  display: inline-block;
  text-decoration: none;
  text-decoration-skip-ink: auto;
  color: inherit;
  margin: 20px auto;
  padding: 10px;
  width: 25px;
  height: 25px;
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
</style>
