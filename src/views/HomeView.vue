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
              :title="'Wi-Fi'"
              :subtitle="'Free Wi-Fi network'"
              :rawHTML="'<p>Feel free to connect to our Wi-fi network using the credentials bellow:<p><p><b>NAME:</b> LUKA</p><p> <b>PASSWORD:</b> lukadavorada64</p>'"
            ></card-01>
          </v-col>
          <v-col>
            <card-01
              :image-src="'cards/netflix.png'"
              :title="'Netflix'"
              :subtitle="'Free Netflix streaming service'"
              :rawHTML="'<p>We are offering you free Netflix streaming service whilst staying at our apartment. You may locate Netflix app on Smart TV and then choose <b>Guests</b> profile.</p> <p>Please keep in mind that you can use only <b>Guests</b> profile on one device at a time!</p> <p><b>PROFILE:</b> Guests</p> <p><b>PIN:</b> 1304</p>'"
            ></card-01>
          </v-col>
          <v-col>
            <card-01
              :image-src="'cards/air-conditioner.png'"
              :title="'Air conditioners'"
              :subtitle="'Air conditioners information'"
              :rawHTML="'<p>There are two air conditioners in apartment. One in a living room and another in first bedroom.</p><p>Feel free to use them anytime, they have no limits or locks, but please use them responsibly.</p><p> Please turn them <b>OFF when leaving the apartment</b> or set up timers!</p>'"
            ></card-01>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!--BOAT TOUR-->
    <div id="boat-tour" class="mt-4">
      <h1
        class="md:text-7xl text-5xl text-center capitalize tracking-wider font-bold"
      >
        BOAT TOUR
      </h1>
      <v-container>
        <v-row justify="center" align="center">
          <v-col>
            <card-02
              :image-src="'cards/gliser1.jpg'"
              :title="'FAMILY BOAT TOUR'"
              :subtitle="'Boat tour for whole family'"
              :buttonLink="'/boat-reservation'"
            ></card-02>
          </v-col>
          <!--SLIKE-->
          <v-col>
            <v-row>
              <v-col
                v-for="n in 6"
                :key="n"
                class="d-flex child-flex"
                :cols="$vuetify.breakpoint.mobile ? '6' : '4'"
              >
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
    <!--/BOAT TOUR-->

    <!--INFO-->
    <div id="info" class="mt-4">
      <h1
        class="md:text-7xl text-5xl text-center capitalize tracking-wider font-bold mb-4"
      >
        INFO
      </h1>
      <v-container>
        <v-tabs v-model="tab" show-arrows grow class="mb-4">
          <v-tabs-slider color="light-green lighten-1"></v-tabs-slider>
          <v-tab v-for="tab in tabsItems" :key="tab.tab">
            {{ tab.tab }}
          </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item v-for="tab in tabsItems" :key="tab.tab">
            <!--Emergency-->
            <div v-if="tab.content == 1">
              <p>
                We wish you peaceful and healthy holiday in Pula Croatia, but
                emergency situations may occur unexpectedly.
              </p>
              <p>Below is the list of emergency and other useful numbers:</p>
              <h2>General emergency number: <b>112</b></h2>
              <h2>Police: <b>192</b></h2>
              <h2>Ambulance: <b>194</b></h2>
              <h2>Fire deparment: <b>193</b></h2>
              <h2>Help on roads: <b>1987</b></h2>
              <h2>Search and rescue at sea: <b>195</b></h2>
              <h2>Child loss: <b>116 000</b></h2>
              <h2>Doctor, Flanatička 27, Pula <b>+385 95 3256 003</b></h2>
            </div>
            <!--Hosts-->
            <div v-if="tab.content == 2">
              <v-row>
                <profile-card
                  :imageSrc="'hosts/davor.png'"
                  :mob="'+385 92 181 4318'"
                  :name="'Davor'"
                ></profile-card>
                <profile-card
                  :imageSrc="'hosts/luka.png'"
                  :mob="'+385 91 721 7631'"
                  :name="'Luka'"
                ></profile-card>
              </v-row>
            </div>
            <!--FAQ-->
            <div v-if="tab.content == 5">
              <v-expansion-panels focusable>
                <v-expansion-panel v-for="(item, i) in 5" :key="i">
                  <v-expansion-panel-header
                    >Question {{ i }}</v-expansion-panel-header
                  >
                  <v-expansion-panel-content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </div>
          </v-tab-item>
        </v-tabs-items>
      </v-container>
    </div>
    <!--/INFO-->
    <!--WASTE DISPOSAL-->
    <div id="waste-disposal" class="mt-4">
      <h1
        class="md:text-7xl text-5xl text-center capitalize tracking-wider font-bold mb-4"
      >
        WASTE DISPOSAL
      </h1>
      <v-row>
        <v-col> </v-col>
        <v-col> </v-col>
        <v-col> </v-col>
      </v-row>
    </div>
    <!--/WASTE DISPOSAL-->
  </div>
</template>
<script>
import card01 from "@/components/v-card.vue";
import card02 from "@/components/v-card2.vue";
import profileCard from "@/components/profile-card.vue";

export default {
  name: "Home-page",
  components: { card01, card02, profileCard },
  data() {
    return {
      tab: null,
      tabsItems: [
        { tab: "EMERGENCY", content: 1 },
        { tab: "HOSTS", content: 2 },
        { tab: "APARTMENT", content: 3 },
        { tab: "LOCAL SERVICES", content: 4 },
        { tab: "FAQ", content: 5 },
      ],
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
<style></style>
