<template>
  <v-carousel>
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "Home-page",
  components: {},
  data() {
    return {
      items: [
        {
          src: "@/assets/carousel/cir231_1.jpg",
        },
        {
          src: "@/assets/carousel/cir231_2.jpg",
        },
        {
          src: "@/assets/carousel/cir231_3.jpg",
        },
        {
          src: "@/assets/carousel/cir231_4.jpg",
        },
      ],
    };
  },
};
</script>
