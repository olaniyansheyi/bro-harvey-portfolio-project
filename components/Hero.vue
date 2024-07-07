<script setup>
import at from "~/public/img/at.png";
import github from "~/public/img/github.png";
import linkdin from "~/public/img/linkdin.png";
import me from "~/public/img/me.png";
import linkdinWhite from "~/public/img/linkdin-white.png";
import githubWhite from "~/public/img/github-white.png";
import atWhite from "~/public/img/at-white.png";
import heroFooterBgMobile from "~/public/img/hero-footer-img-mobile.png";
</script>

<template>
  <div
    class="h-[35rem] lg:h-[45rem] text-black w-full relative hero-bg lg:px-32 px-10 pt-10 hidden sm:block"
  >
    <Header />
    <div class="h-full w-full flex py-8 items-center">
      <div class="">
        <h3 class="tracking-wide font-semibold text-xl">Hi, I am</h3>
        <h1 class="tracking-wide font-bold text-3xl mt-5">Tomasz Gajda</h1>
        <p class="text-primary">Fron-end developer / UI Designer</p>

        <div class="flex gap-x-3 mt-10">
          <div
            class="bg-primary flex justify-center items-center p-2 rounded-sm"
          >
            <img class="w-[18px]" :src="at" alt="" />
          </div>
          <div
            class="bg-primary flex justify-center items-center p-2 rounded-sm"
          >
            <img class="w-[18px]" :src="github" alt="" />
          </div>
          <div
            class="bg-primary flex justify-center items-center p-2 rounded-sm"
          >
            <img class="w-[18px]" :src="linkdin" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="w-[50%] lg:h-[87%] absolute bottom-0 right-2">
      <img class="w-full h-full" :src="me" alt="" />
    </div>
  </div>

  <!-- mobile container -->

  <div class="sm:hidden w-full h-[37rem] hero-bg-mobile relative z-[1] pt-6">
    <Header />

    <div class="flex justify-end items-end h-full w-full">
      <img class="z-[2]" :src="me" alt="" />
    </div>
    <img
      class="w-full absolute bottom-0 left-0 right-0 z-[3]"
      :src="heroFooterBgMobile"
      alt=""
    />
    <div
      class="absolute bottom-5 right-5 left-6 text-white z-[4] items-center flex gap-x-4 justify-between"
    >
      <div>
        <h3 class="tracking-wide font-semibold text-xl">Hi, I am</h3>
        <h1 class="tracking-wide font-bold text-3xl mt-1">Tomasz Gajda</h1>
        <p class="">Fron-end developer / UI Designer</p>
      </div>
      <div class="flex flex-col gap-y-6">
        <img :src="atWhite" alt="" />
        <img :src="linkdinWhite" alt="" />
        <img :src="githubWhite" alt="" />
      </div>
    </div>
  </div>
</template>
