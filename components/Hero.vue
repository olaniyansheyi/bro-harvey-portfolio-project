<script setup>
import at from "~/public/img/at.png";
import github from "~/public/img/github.png";
import linkdin from "~/public/img/linkdin.png";
import me from "~/public/img/me.png";
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

  <div
    class="w-full h-screen hero-bg-mobile relative z-[1] flex justify-end items-end"
  >
    <img class="z-[2]" :src="me" alt="" />
    <img
      class="w-full absolute bottom-[-4%] left-0 right-0 z-[3]"
      :src="heroFooterBgMobile"
      alt=""
    />
    <div class="absolute bottom-5 right-5 left-6 text-white z-[4] flex gap-x-4">
      <div>
        <h3 class="tracking-wide font-semibold text-xl">Hi, I am</h3>
        <h1 class="tracking-wide font-bold text-3xl mt-1">Tomasz Gajda</h1>
        <p class="">Fron-end developer / UI Designer</p>
      </div>
    </div>
  </div>
</template>
