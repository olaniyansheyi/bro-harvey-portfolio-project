<script setup>
import project1 from "~/public/img/project-1.png";
import project3 from "~/public/img/project-3.png";
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
        class="text-[#7C7C7C] border-b-[1px] border-[#7C7C7C] px-10 text-md font-semibold py-1 active-tab"
      >
        ALL
      </button>
      <button
        class="text-[#7C7C7C] border-b-[1px] border-[#7C7C7C] px-10 text-md font-semibold py-1"
      >
        CODED
      </button>
      <button
        class="text-[#7C7C7C] border-b-[1px] border-[#7C7C7C] px-10 text-md font-semibold py-1"
      >
        DESIGN
      </button>
    </div>

    <div class="mt-16 flex justify-center items-center w-full flex-wrap">
      <div
        class="lg:w-[33.3%] sm:w-[50%] z-[11] overflow-hidden group relative"
      >
        <img :src="project1" alt="" />
        <div
          class="absolute inset-0 bg-black/80 bg-opacity-60 opacity-0 transition-opacity duration-300 flex items-center justify-center group-hover:opacity-100 sm:py-10 h-full"
        >
          <div
            class="text-white text-center flex justify-center items-center flex-col gap-y-2 tracking-wider"
          >
            <p class="text-sm">coded. designer</p>
            <h3 class="font-semibold text-xl">Project Description</h3>
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

<!-- const projects = ref([
  { id: 1, name: "Project 1", img: "path/to/image1.jpg", category: "new" },
  { id: 2, name: "Project 2", img: "path/to/image2.jpg", category: "old" },
  { id: 3, name: "Project 3", img: "path/to/image3.jpg", category: "new" },
  { id: 4, name: "Project 4", img: "path/to/image4.jpg", category: "old" },
  { id: 5, name: "Project 5", img: "path/to/image5.jpg", category: "new" },
  { id: 6, name: "Project 6", img: "path/to/image6.jpg", category: "old" },
]);

const activeTab = ref('all');

const setActiveTab = (tab) => {
  activeTab.value = tab;
};

const filteredProjects = computed(() => {
  if (activeTab.value === 'all') {
    return projects.value;
  }
  return projects.value.filter(project => project.category === activeTab.value);
});
</script> -->
