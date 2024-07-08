<script setup>
import project01 from "~/assets/project-01.png";
import project3 from "~/assets/project-3.png";
import project2 from "~/assets/project-2.png";
const projects = [
  {
    id: 1,
    img: project3,
    category: "CODED",
  },
  {
    id: 2,
    img: project2,
    category: "CODED",
  },
  {
    id: 3,
    img: project01,
    category: "CODED",
  },
  {
    id: 4,
    img: project2,
    category: "DESIGNED",
  },
  {
    id: 5,
    img: project3,
    category: "DESIGNED",
  },
  {
    id: 6,
    img: project01,
    category: "DESIGNED",
  },
];

const activeTab = ref("ALL");

const setActiveTab = (tab) => {
  activeTab.value = tab;
};

const filteredProjects = computed(() => {
  if (activeTab.value === "ALL") {
    return projects;
  }
  return projects.filter((project) => project.category === activeTab.value);
});
</script>

<template>
  <div class="mt-12 w-full">
    <div
      class="bg-projectHeaderImg flex w-full justify-center items-center bg-cover bg-center bg-no-repeat h-[13rem]"
    >
      <Button> PORTFOLIO </Button>
    </div>
  </div>
  <div class="bg-[#1A1A1A] py-10 w-full">
    <div
      class="mx-auto flex flex-wrap sm:w-[50%] sm:px-0 px-10 justify-center items-center gap-y-4"
    >
      <button
        :class="{ activeTab: activeTab === 'ALL' }"
        @click="setActiveTab('ALL')"
        class="text-[#7C7C7C] border-b-[1px] border-[#7C7C7C] px-10 text-md font-semibold py-1 active-tab"
      >
        ALL
      </button>
      <button
        :class="{ activeTab: activeTab === 'CODED' }"
        @click="setActiveTab('CODED')"
        class="text-[#7C7C7C] border-b-[1px] border-[#7C7C7C] px-10 text-md font-semibold py-1"
      >
        CODED
      </button>
      <button
        :class="{ activeTab: activeTab === 'DESIGNED' }"
        @click="setActiveTab('DESIGNED')"
        class="text-[#7C7C7C] border-b-[1px] border-[#7C7C7C] px-10 text-md font-semibold py-1"
      >
        DESIGN
      </button>
    </div>

    <div class="mt-16 flex justify-center items-center w-full flex-wrap">
      <div
        v-for="project in filteredProjects"
        :key="project.id"
        class="lg:w-[33.3%] sm:w-[50%] z-[11] overflow-hidden group relative"
      >
        <img :src="project.img" alt="" />
        <div
          class="absolute inset-0 bg-black/80 bg-opacity-60 opacity-0 transition-opacity duration-300 flex items-center justify-center group-hover:opacity-100 sm:py-10 h-full"
        >
          <div
            class="text-white text-center flex justify-center items-center flex-col gap-y-2 tracking-wider"
          >
            <p class="text-sm">coded. designer</p>
            <h3 class="font-semibold text-xl">eatsome.</h3>
            <p class="text-sm">
              Restaurant browsing in React.js (Using Yelp API)
            </p>
            <span class="flex gap-x-5">
              <button
                class="mt-10 border-x-2 border-white text-white py-1 px-3 text-sm font-semibold"
              >
                DEMO
              </button>
              <button
                class="mt-10 border-x-2 border-white text-white py-1 px-3 text-sm font-semibold"
              >
                MORE
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
