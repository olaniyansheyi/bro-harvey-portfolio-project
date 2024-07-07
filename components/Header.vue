<script setup>
import logoWhite from "~/public/img/logo-white.png";
import logoBlack from "~/public/img/logo-black.png";
</script>

<template>
  <div class="w-full flex justify-between items-center text-white">
    <img class="w-[30px]" :src="logoBlack" alt="" />
    <nav
      class="flex items-center justify-center gap-x-6 lg:gap-x-10 tracking-wide font-semibold text-xs"
    >
      <Nuxt>About me</Nuxt>
      <Nuxt>Skills</Nuxt>
      <Nuxt>Portfolio</Nuxt>
      <button class="text-black rounded-full p-2 bg-white text-xs">
        Contact Me
      </button>
    </nav>
  </div>
</template>
