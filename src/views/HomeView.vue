<template>
  <div class="">
    <v-carousel cycle>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="require('@/assets/' + item.src)"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
        <div
          class="flex justify-center items-center text-center md:text-6xl text-4xl"
        >
          <div
            class="mt-12 bg-gradient-to-r from-lime-500 text-zinc-50 font-bold rounded-lg shadow-lg p-4"
          >
            Welcome to apartment Blašković!
          </div>
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>
<script>
export default {
  name: "Home-page",
  components: {},
  data() {
    return {
      items: [
        {
          src: "carousel/cir231_1.jpg",
        },
        {
          src: "carousel/cir231_2.jpg",
        },
        {
          src: "carousel/cir231_3.jpg",
        },
        {
          src: "carousel/cir231_4.jpg",
        },
      ],
    };
  },
};
</script>
