<script setup>
import figma from "~/public/img/figma.png";
import bootstrap from "~/public/img/bootstrap.svg";
import css from "~/public/img/css.svg";
import git from "~/public/img/git.svg";
import html from "~/public/img/html.svg";
import javascript from "~/public/img/javascript.svg";
import mySql from "~/public/img/mySql.svg";
import nodejs from "~/public/img/nodejs.png";
import sass from "~/public/img/sass.svg";
import react from "~/public/img/react.svg";
import ts from "~/public/img/ts.png";
import mangodb from "~/public/img/mangodb.png";

const skillsLearned = [
  {
    name: "HTML5",
    img: html,
    category: "usingNow",
  },
  {
    name: "CSS3",
    img: css,
    category: "usingNow",
  },
  {
    name: "SASS",
    img: sass,
    category: "usingNow",
  },
  {
    name: "JAVASCRIPT",
    img: javascript,
    category: "usingNow",
  },
  {
    name: "REACT",
    img: react,
    category: "usingNow",
  },
  {
    name: "BOOTSTRAP",
    img: bootstrap,
    category: "usingNow",
  },
  {
    name: "GIT",
    img: git,
    category: "usingNow",
  },
  {
    name: "FIGMA",
    img: figma,
    category: "usingNow",
  },
];

const skillsLearning = [
  {
    name: "NODEJS",
    img: nodejs,
    category: "LEARNING",
  },
  {
    name: "MySQL",
    img: mySql,
    category: "LEARNING",
  },
  {
    name: "MANGODB",
    img: mangodb,
    category: "LEARNING",
  },
  {
    name: "TYPESCRIPT",
    img: ts,
    category: "LEARNING",
  },
];
</script>

<template>
  <div
    id="skill"
    class="lg:w-[55%] mx-auto lg:px-0 px-10 py-5 flex items-center justify-center flex-col tracking-wider"
  >
    <Button> SKILLS </Button>
    <h2 class="text-[#000000] font-bold text-left text-xl sm:me-auto my-8">
      USING NOW:
    </h2>
    <div class="w-full flex items-center justify-center gap-10 flex-wrap">
      <div
        v-for="(skill, index) in skillsLearned"
        :key="index"
        class="sm:w-[20%] flex items-center gap-y-4 flex-col justify-between mt-5 w-[5rem]"
      >
        <img :src="skill.img" alt="" />
        <h5 class="font-semibold">{{ skill.name }}</h5>
      </div>
    </div>

    <h2
      class="text-[#000000] font-bold text-left text-xl sm:me-auto my-8 mt-20"
    >
      LEARNING:
    </h2>
    <div class="w-full flex items-center justify-center gap-10 flex-wrap">
      <div
        v-for="(skill, index) in skillsLearning"
        :key="index"
        class="sm:w-[20%] flex items-center gap-y-4 flex-col justify-between mt-5 w-[5rem]"
      >
        <img :src="skill.img" alt="" />
        <h5 class="font-semibold">{{ skill.name }}</h5>
      </div>
    </div>
  </div>
</template>
