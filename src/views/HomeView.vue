<template>
  <div class="main">
    <v-carousel>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="require('@/assets/' + item.src)"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
        <div
          class="flex justify-center items-center text-center md:text-6xl text-3xl"
        >
          <div
            class="mt-12 bg-gradient-to-r from-lime-500 text-zinc-50 font-bold rounded-lg shadow-lg p-4"
          >
            Welcome to apartment Blašković!
          </div>
        </div>
      </v-carousel-item>
    </v-carousel>
    <div class="mt-4">
      <h1
        class="md:text-7xl text-5xl text-center capitalize tracking-wider font-bold"
      >
        SERVICES
      </h1>
      <v-container class="grey lighten-5">
        <v-row no-gutters>
          <v-col class="mb-4">
            <card-01
              :image-src="'cards/wifi.png'"
              :title="'Wi-fi'"
              :subtitle="'Free Wi-fi network'"
              :text="'Wi-fi network details: \n NAME: LUKA \n PASSWORD: lukadavorada64'"
            ></card-01>
          </v-col>
          <v-col>
            <card-01
              :image-src="'cards/netflix.png'"
              :title="'Netflix'"
              :subtitle="'Free Netflix streaming service'"
              :text="'Netflix streaming service info...'"
            ></card-01>
          </v-col>
          <v-col>
            <card-01
              :image-src="'cards/air-conditioner.png'"
              :title="'Air conditioners'"
              :subtitle="'Air conditioner instructions'"
              :text="'Air conditoiner info...'"
            ></card-01>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
import card01 from "@/components/v-card.vue";
export default {
  name: "Home-page",
  components: { card01 },
  data() {
    return {
      alignments: ["start", "center", "end"],
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
