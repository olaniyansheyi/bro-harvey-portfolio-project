<script setup>
import linkdinWhite from "~/public/img/linkdin-white.png";
import githubWhite from "~/public/img/github-white.png";
import atWhite from "~/public/img/at-white.png";
</script>

<template>
  <div
    class="py-12 text-center w-full bg-[#1A1A1A] text-white flex justify-center items-center gap-y-5 flex-col"
  >
    <button class="px-4 py-2 rounded-md border-primary border-[1px] text-sm">
      BACK TO TOP
    </button>
    <div class="flex gap-x-5 items-center justify-center mt-3">
      <div
        class="flex justify-center items-center rounded-sm p-2 border-primary border-[1px]"
      >
        <img :src="linkdinWhite" alt="" />
      </div>
      <div
        class="flex justify-center items-center rounded-sm p-2 border-primary border-[1px]"
      >
        <img :src="githubWhite" alt="" />
      </div>
      <div
        class="flex justify-center items-center rounded-sm p-2 border-primary border-[1px]"
      >
        <img :src="atWhite" alt="" />
      </div>
    </div>
    <p class="tracking-wider mt-4">
      &copy;2020 Tomasz Gajda All Rights Reserved.
    </p>
  </div>
</template>
