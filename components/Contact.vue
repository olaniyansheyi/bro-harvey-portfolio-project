<template>
  <div
    class="lg:w-[55%] px-10 gap-y-6 text-center my-12 py-12 flex justify-center flex-col items-center mx-auto"
    id="contact"
  >
    <div>
      <Button> CONTACT </Button>
    </div>

    <p class="mb-[-2rem]">
      Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius
      finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero
      viverra facilisis ut ac est.
    </p>
    <divider />
    <form class="w-full mt-5">
      <input
        class="w-full p-3 border-black border-b-4 border-s-4 bg-transparent placeholder:text-[#000000] my-8 outline-none"
        type="text"
        required
        placeholder="ENTER YOUR NAME*"
      />
      <input
        class="w-full p-3 border-black border-b-4 border-s-4 bg-transparent placeholder:text-[#000000] my-8 outline-none"
        type="text"
        placeholder="ENTER YOUR EMAIL*"
        required
      />
      <input
        class="w-full p-3 my-8 outline-none border-black border-b-4 border-s-4 bg-transparent placeholder:text-[#000000]"
        type="text"
        placeholder="PHONE NUMBER"
      />
      <textarea
        class="w-full border-black border-b-4 border-s-4 bg-transparent placeholder:text-[#000000] px-3 pt-3 pb-20 my-8 outline-none"
        placeholder="YOUR MESSAGE*"
      ></textarea>

      <button
        type="submit"
        class="mt-10 border-x-2 border-[#000000] py-1 px-6 text-md font-semibold"
      >
        SUBMIT
      </button>
    </form>
  </div>
</template>
