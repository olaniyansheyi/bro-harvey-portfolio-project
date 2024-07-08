<script setup>
import logoWhite from "~/public/img/logo-white.png";
import logoBlack from "~/public/img/logo-black.png";
import menu from "~/public/img/menu.svg";
import cancel from "~/public/img/cancel.png";

const openMenu = ref(false);

const handleToggleMenu = () => {
  openMenu.value = !openMenu.value;
};

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<template>
  <div
    class="sm:static absolute top-[5%] left-0 right-0 sm:bg-transparent bg-black z-[8]"
  >
    <div
      class="w-full flex justify-between items-start text-white px-8 pb-4 border-white relative"
      :class="openMenu ? 'border-b-[1px] h-[15rem] items-start' : ''"
    >
      <img class="w-[30px] hidden sm:block" :src="logoBlack" alt="" />
      <img :src="logoWhite" class="w-[35px] sm:hidden" alt="" />
      <nav
        :class="
          openMenu
            ? ' flex flex-col absolute bottom-0 left-0 right-0 justify-start items-center h-auto gap-y-5 border-white pt-6 border-t-[1px]'
            : 'hidden sm:flex items-center justify-center gap-x-6 lg:gap-x-10 tracking-wide font-semibold text-xs'
        "
        class="z-[10]"
      >
        <a
          href="#about"
          @click.prevent="
            () => {
              scrollToSection('about');
              if (openMenu) handleToggleMenu();
            }
          "
          >About me</a
        >
        <a
          href="#skill"
          @click.prevent="
            () => {
              scrollToSection('skill');
              if (openMenu) handleToggleMenu();
            }
          "
          >Skills</a
        >
        <a
          href="#portfolio"
          @click.prevent="
            () => {
              scrollToSection('portfolio');
              if (openMenu) handleToggleMenu();
            }
          "
          >Portfolio</a
        >
        <button
          class="text-black rounded-full p-2 bg-white text-xs"
          :class="
            openMenu ? 'w-full rounded-none shadow-lg shadow-black/60 ' : ''
          "
        >
          <a
            href="#contact"
            @click.prevent="
              () => {
                scrollToSection('contact');
                if (openMenu) handleToggleMenu();
              }
            "
            >Contact Me</a
          >
        </button>
      </nav>
      <div @click="handleToggleMenu" class="cursor-pointer sm:hidden">
        <img :class="openMenu ? 'hidden' : 'block'" :src="menu" alt="" />
        <img :class="openMenu ? 'block' : 'hidden'" :src="cancel" alt="" />
      </div>
    </div>
  </div>
</template>
