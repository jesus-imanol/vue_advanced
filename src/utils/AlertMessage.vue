<template>
  <div
  class="info-alert fixed top-4 right-4 flex flex-col gap-2 w-60 sm:w-72 text-[10px] sm:text-xs z-50"
>
  <div
    class="cursor-default flex items-center justify-between w-full h-12 sm:h-14 rounded-lg bg-[#232531] px-[10px] shadow-lg"
  >
    <div class="flex gap-2">
      <div class="text-[#1c56be] bg-white/5 backdrop-blur-xl p-1 rounded-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.8"
          stroke="currentColor"
          class="w-6 h-6 shadow-[#1c569e]"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
          ></path>
        </svg>
      </div>
      <div>
        <p class="text-white">You have a message!</p>
        <p class="text-gray-500">{{ props.message }}</p>
      </div>
    </div>
    <button
      @click="sendClose()"
      class="text-gray-600 hover:bg-white/10 p-1 rounded-md transition-colors ease-linear"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18 18 6M6 6l12 12"
        ></path>
      </svg>
    </button>
  </div>
</div>
</template>

<script setup lang="ts">

const closeModal = defineEmits(["closeModal"])

defineOptions({
  name: "AlertMessage"
})
const props = defineProps<{
  message:string,
}>()
const sendClose = () => {
  closeModal("closeModal",false)
}
</script>
