<script setup>
import logoWhite from "~/public/img/logo-white.png";
import logoBlack from "~/public/img/logo-black.png";
import menu from "~/public/img/menu.svg";
</script>

<template>
  <div class="w-full flex justify-between items-center text-white px-8">
    <img class="w-[30px] hidden sm:block" :src="logoBlack" alt="" />
    <img :src="logoWhite" class="w-[35px] sm:hidden" alt="" />
    <nav
      class="hidden flex items-center justify-center gap-x-6 lg:gap-x-10 tracking-wide font-semibold text-xs"
    >
      <Nuxt>About me</Nuxt>
      <Nuxt>Skills</Nuxt>
      <Nuxt>Portfolio</Nuxt>
      <button class="text-black rounded-full p-2 bg-white text-xs">
        Contact Me
      </button>
    </nav>
    <div class="cursor-pointer">
      <img :src="menu" alt="" />
    </div>
  </div>
</template>
