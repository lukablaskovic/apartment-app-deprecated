<template>
  <!--IDEJA: CHECK IN!-->
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
            class="mt-12 bg-gradient-to-r from-lime-600 text-zinc-50 font-bold rounded-lg shadow-lg p-4"
          >
            Welcome to apartment Blašković!
          </div>
        </div>
      </v-carousel-item>
    </v-carousel>
    <div id="services" class="mt-4">
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
              :subtitle="'Free Wi-Fi network'"
              :rawHTML="'<p>Feel free to connect to our Wi-fi network using the credentials bellow:<p><p><b>NAME:</b> LUKA</p><p> <b>PASSWORD:</b> lukadavorada64</p>'"
            ></card-01>
          </v-col>
          <v-col>
            <card-01
              :image-src="'cards/netflix.png'"
              :title="'Netflix'"
              :subtitle="'Free Netflix streaming service'"
              :rawHTML="'<p>We are offering you free Netflix streaming service whilst staying at our apartment. Please locate Netflix app on Smart TV and then choose <b>Guests</b> profile.</p> <p>Please keep in mind that you can use only <b>Guests</b> profile on one device at a time!</p> <p><b>PROFILE:</b> Guests</p> <p><b>PIN:</b> 1304</p>'"
            ></card-01>
          </v-col>
          <v-col>
            <card-01
              :image-src="'cards/air-conditioner.png'"
              :title="'Air conditioners'"
              :subtitle="'Air conditioners information'"
              :rawHTML="'<p>There are two air conditioners in apartment. One in a living room and another in first bedroom.</p><p>Feel free to use them anytime, they have no limits or locks, but please use them responsibly.</p><p> Please turn them <b>OFF</b> when leaving the apartment or set up timers!</p>'"
            ></card-01>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!--BOAT EXCURSION-->
    <div id="boat-excursion" class="mt-4">
      <h1
        class="md:text-7xl text-5xl text-center capitalize tracking-wider font-bold"
      >
        BOAT EXCURSION
      </h1>
      <v-container>
        <v-row justify="center" align="center">
          <v-col>
            <card-02
              :image-src="'cards/gliser1.jpg'"
              :title="'FAMILY BOAT EXCURSION'"
              :subtitle="'Boat excursion for whole family'"
              :rawHTML="'<p>There are two air conditioners in apartment. One in a living room and another in first bedroom.</p><p>Feel free to use them anytime, they have no limits or locks, but please use them responsibly.</p><p> Please turn them <b>OFF</b> when leaving the apartment or set up timers!</p>'"
            ></card-02>
          </v-col>
          <!--SLIKE-->
          <v-col>
            <v-row>
              <v-col v-for="n in 6" :key="n" class="d-flex child-flex" cols="4">
                <v-img
                  :src="require('@/assets/boat/boat' + n + '.jpg')"
                  aspect-ratio="1"
                  class="grey lighten-2"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-col>
            </v-row>
          </v-col>
          <!--/SLIKE-->
        </v-row>
      </v-container>
    </div>
    <!--/BOAT EXCURSION-->
    <div id="info" class="mt-4">
      <h1
        class="md:text-7xl text-5xl text-center capitalize tracking-wider font-bold"
      >
        INFO
      </h1>
    </div>
  </div>
</template>
<script>
import card01 from "@/components/v-card.vue";
import card02 from "@/components/v-card2.vue";
export default {
  name: "Home-page",
  components: { card01, card02 },
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
