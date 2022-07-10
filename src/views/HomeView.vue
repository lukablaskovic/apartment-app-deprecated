<template>
  <!--IDEJA: CHECK IN!-->
  <div id="home" class="main">
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
            Welcome to apartment Luka!
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
              :QR="true"
              :image-src="'cards/wifi.png'"
              :title="'Wi-Fi'"
              :subtitle="'Free Wi-Fi network'"
              :rawHTML="'<p>Feel free to connect to our Wi-fi network using the credentials bellow:<p><p><b>NAME:</b> LUKA</p><p> <b>PASSWORD:</b> lukadavorada64</p>'"
            ></card-01>
          </v-col>
          <v-col class="mb-4">
            <card-01
              :image-src="'cards/netflix.png'"
              :title="'Netflix'"
              :subtitle="'Free Netflix streaming service'"
              :rawHTML="'<p>We are offering you free Netflix streaming service whilst staying at our apartment. You may locate Netflix app on Smart TV and then choose <b>Guests</b> profile.</p> <p>Please keep in mind that you can use only <b>Guests</b> profile on one device at a time!</p> <p><b>PROFILE:</b> Guests</p> <p><b>PIN:</b> 2217</p>'"
            ></card-01>
          </v-col>
          <v-col>
            <card-01
              :image-src="'cards/air-conditioner.png'"
              :title="'House appliances'"
              :subtitle="'House appliances information'"
              :rawHTML="'<p>There are two air conditioners in the apartment. One in the living room and another in the first bedroom.</p><p> Please turn them <b>OFF when leaving the apartment</b> or set up timers!</p><p>A dishwasher, laundering machine and an oven are also available in the apartment.</p><p>Please use <b>3-4 appliances at once at max</b> since more will result in a power outage.</p>'"
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
    <div id="info" class="mt-4 text-center">
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
              <p>Here's the list of emergency and other useful numbers:</p>
              <h2>General emergency number: <b>112</b></h2>
              <h2>Police: <b>192</b></h2>
              <h2>Ambulance: <b>194</b></h2>
              <h2>Fire brigade: <b>193</b></h2>
              <h2>Help on roads (0-24h): <b>1987</b></h2>
              <h2>General information: <b>11888</b></h2>
              <h2>International information: <b>11802</b></h2>
              <h2>Search and rescue at sea: <b>195</b></h2>
              <h2>Child loss: <b>116 000</b></h2>
              <h2>
                Medical centre, Flanatička 27, Pula <b>+385 95 3256 003</b>
              </h2>
              <p class="text-2xl mt-4">COVID-19 latest updates for Croatia</p>
              <ul>
                <li>
                  <b
                    >- NO public wear of masks required (Only in health
                    facilities)</b
                  >
                </li>
                <li>
                  <b>- NO COVID Certificate required</b>
                </li>
              </ul>
              Get latest COVID-19 information for Croatia<a
                href="https://www.koronavirus.hr/what-to-expect-in-croatia-important-information-for-visitors/624"
                target="_blank"
              >
                here</a
              >
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
            <!--Apartment-->
            <div v-if="tab.content == 3">
              <v-row
                align="center"
                justify="center"
                no-gutters
                class="mb-4 p-8"
              >
                <v-col :cols="$vuetify.breakpoint.mobile ? '6' : '4'">
                  <v-img
                    :src="require('@/assets/apartment/smoking.jpeg')"
                    contain
                    aspect-ratio="2"
                  ></v-img>
                </v-col>
                <v-col>
                  <h1 class="mt-4 md:text-5xl text-3xl">NO SMOKING</h1>

                  Smoking is <b>not allowed</b> in the apartment! Feel free to
                  smoke outside.
                </v-col>
              </v-row>
              <v-divider></v-divider>
              <v-row
                align="center"
                justify="center"
                no-gutters
                class="mb-4 p-8"
              >
                <v-col :cols="$vuetify.breakpoint.mobile ? '12' : '4'">
                  <v-img
                    :src="require('@/assets/apartment/tlocrt.png')"
                    contain
                  ></v-img>
                </v-col>
                <v-col :cols="$vuetify.breakpoint.mobile ? '12' : '4'">
                  <ol>
                    <h1 class="mt-4 md:text-5xl text-3xl">
                      GENERAL INFORMATION
                    </h1>
                    <li>- Garden in front of apartment is available to use.</li>
                    <li>- Please <b>do not</b> enter the farm underneath!</li>
                    <li>
                      - Since the garden is pretty big, hosts will maintain the
                      garden occasionally in the early morning
                    </li>
                    <li>
                      - The apartment itself consists of two bedrooms with two
                      double beds, a bathroom, a large living room, a fully
                      equipped kitchen and a veranda
                    </li>
                  </ol>
                </v-col>
              </v-row>
              <v-divider></v-divider>
              <v-row align="center" justify="center" no-gutters class="p-8">
                <v-col :cols="$vuetify.breakpoint.mobile ? '12' : '6'">
                  <v-img
                    :src="require('@/assets/apartment/cookingOven.png')"
                    contain
                    max-height="450"
                    max-width="900"
                  ></v-img>
                </v-col>
                <v-col :cols="$vuetify.breakpoint.mobile ? '12' : '4'">
                  <ol>
                    <h1 class="md:text-5xl text-3xl">COOKING BOARD</h1>
                    <b>Steps:</b>
                    <li>1. Turn off the locker if activated</li>
                    <li>2. Turn ON the cooking board</li>
                    <li>3. Select desired position</li>
                    <li>4. Adjust the temperature</li>
                  </ol>
                  <p>'H' indicates that cooking board position is still hot.</p>
                  <p>
                    Positions will turn on and off over time automatically
                    because of temperature adjustments.
                  </p>
                </v-col>
              </v-row>
              <v-divider></v-divider>
              <v-row align="center" justify="center" no-gutters class="p-8">
                <v-col :cols="$vuetify.breakpoint.mobile ? '12' : '6'">
                  <v-img
                    :src="require('@/assets/apartment/washingMachine.png')"
                    contain
                  ></v-img>
                </v-col>
                <v-col :cols="$vuetify.breakpoint.mobile ? '12' : '4'">
                  <ol>
                    <h1 class="md:text-5xl text-3xl">WASHING MACHINE</h1>
                    <b>Steps:</b>
                    <li>1. Insert detergent and fabric softener</li>
                    <li>2. Turn ON the washing machine</li>
                    <li>3. Select desired program (middle)</li>
                    <li>4. Start the program</li>
                  </ol>
                  <p>
                    Please <b>do not</b> try opening the doors while the machine
                    is working or when the machine just finished working!
                  </p>
                </v-col>
              </v-row>
              <v-divider></v-divider>
            </div>
            <div v-if="tab.content == 4">
              <v-container class="grey lighten-5">
                <v-row no-gutters>
                  <v-col class="mb-4">
                    <card-01
                      :image-src="'services/tivoli.jpg'"
                      :title="'Pizzeria Tivoli'"
                      :subtitle="'Veli vrh 8, 52100, Pula'"
                      :rawHTML="'<p>`Food is our passion. We strive to offer a unique journey for all your senses. We use only the best ingredients to prepare pizza, pasta, salads and desserts.`</p><p><b>Address:</b> Veli vrh 8, 52100, Pula</p><p><b>Phone:</b> 052 508 000 (Delivery available)</p><p><b>Distance:</b> 5 min walk the from apartment</p>'"
                    ></card-01>
                  </v-col>
                  <v-col class="mb-4">
                    <card-01
                      :image-src="'services/ultra.jpg'"
                      :title="'Grocery store Ultra'"
                      :subtitle="'Braće Leonardelli 1, 52100, Pula'"
                      :rawHTML="'<p>Open everyday from 7AM–9PM</p><p><b>Address:</b> Braće Leonardelli 1, 52100, Pula</p><p><b>Phone:</b> 052 753 819</p><p><b>Distance:</b> 5 min walk from the apartment</p>'"
                    ></card-01>
                  </v-col>
                  <v-col>
                    <card-01
                      :image-src="'services/ljekarna.jpg'"
                      :title="'Pharmacy Veli Vrh'"
                      :subtitle="'Braće Leonardelli 1, 52100, Pula'"
                      :rawHTML="'<p>7AM–8PM Monday-Friday, 8AM-1PM Saturday, Sunday closed</p><p><b>Address:</b> Braće Leonardelli 1, 52100, Pula</p><p><b>Phone:</b> 052 223 657</p><p><b>Distance:</b> 5 min walk from the apartment</p>'"
                    ></card-01>
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col class="mb-4">
                    <card-01
                      :image-src="'services/mons.jpg'"
                      :title="'Barbecue restaurant Mons'"
                      :subtitle="'Creska ul. 2, 52100, Pula'"
                      :rawHTML="'<p>`Tasty grill is always in. Grilled dishes, salads, deserts`</p><p><b>Address:</b> Creska ul. 2, 52100, Pula</p><p><b>Phone:</b> 052 553 679</p><p><b>Distance:</b> 2 min walk from the apartment</p>'"
                    ></card-01>
                  </v-col>
                  <v-col class="mb-4">
                    <card-01
                      :image-src="'services/posta.jpg'"
                      :title="'Post office Veli Vrh'"
                      :subtitle="'Creska ul. 5, 52100, Pula'"
                      :rawHTML="'<p>8–11AM, 11:30AM–3PM Monday-Saturday, Sunday closed</p><p><b>Address:</b> Creska ul. 5, 52100, Pula</p><p><b>Phone:</b> 052 553 679</p><p><b>Distance:</b> 1 min walk from the apartment</p>'"
                    ></card-01>
                  </v-col>
                  <v-col class="mb-4">
                    <card-01
                      :image-src="'services/shell.jpg'"
                      :title="'Petrol station Shell BS Pula'"
                      :subtitle="'Tršćanska ul. 44, 52100, Pula'"
                      :rawHTML="'<p>6AM–12AM everyday</p><p><b>Address:</b> Tršćanska ul. 44, 52100, Pula</p><p><b>Phone:</b> 099 529 4436</p><p><b>Distance:</b> 5 min from the apartment by car</p>'"
                    ></card-01>
                  </v-col>
                </v-row>
              </v-container>
            </div>
            <!--FAQ-->
            <div v-if="tab.content == 5">
              <v-expansion-panels focusable>
                <v-expansion-panel v-for="question in faq" :key="question.id">
                  <v-expansion-panel-header>{{
                    question.question
                  }}</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    {{ question.answer }}
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
      <v-row class="mb-2">
        <v-col
          ><card-03
            :imageSrc="'kante/plava.jpg'"
            :title="'Blue bin'"
            :subtitle="'Paper and cardboard'"
            :itemsAllowed="blueBinAllowed"
            :itemsNotAllowed="blueBinNotAllowed"
          >
          </card-03>
        </v-col>
        <v-col
          ><card-03
            :imageSrc="'kante/zuta.jpg'"
            :title="'Yellow bin'"
            :subtitle="'Plastic and metal'"
            :itemsAllowed="yellowBinAllowed"
            :itemsNotAllowed="yellowBinNotAllowed"
          >
          </card-03>
        </v-col>
        <v-col
          ><card-03
            :imageSrc="'kante/zelena.jpg'"
            :title="'Green bin'"
            :subtitle="'Mixed'"
            :itemsAllowed="greenBinAllowed"
            :itemsNotAllowed="greenBinNotAllowed"
          >
          </card-03>
        </v-col>
      </v-row>
    </div>
    <!--/WASTE DISPOSAL-->

    <!--DAMAGE REPORT-->
    <!--
    <div id="damage-report" class="mt-4 text-center">
      <h1 class="md:text-7xl text-5xl capitalize tracking-wider font-bold mb-4">
        DAMAGE REPORT
      </h1>
      <v-row justify="center" align="center">
        <v-col>
          <p>
            Please upload the image showing damage and fill in the required
            fields bellow and we will try to work out a solution.
          </p>
          <croppa
            v-model="myCroppa"
            :width="400"
            :height="400"
            :disable-rotation="true"
            :prevent-white-space="true"
          ></croppa>
        </v-col>
      </v-row>
    </div>
    -->
    <!--/DAMAGE REPORT-->
  </div>
</template>
<script>
import card01 from "@/components/v-card.vue";
import card02 from "@/components/v-card2.vue";
import card03 from "@/components/v-card3.vue";
import profileCard from "@/components/profile-card.vue";
import store from "@/store";
import faq from "@/faq";
export default {
  name: "Home-page",
  components: { card01, card02, card03, profileCard },
  data() {
    return {
      myCroppa: {},
      store,
      tab: null,
      faq: faq,
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
      blueBinAllowed: [
        {
          imgSrc: "kante/blue/blue1yes.jpg",
          name: "plain paper and newspaper",
        },
        {
          imgSrc: "kante/blue/blue2yes.jpg",
          name: "paper and cardboard packaging",
        },
        {
          imgSrc: "kante/blue/blue3yes.jpg",
          name: "paper towel and napkins",
        },
      ],
      blueBinNotAllowed: [
        {
          imgSrc: "kante/blue/blue1no.jpg",
          name: "tetrapack packaging (milk, juice etc)",
        },
        {
          imgSrc: "kante/blue/blue2no.jpg",
          name: "plasticized or metallized paper",
        },
        {
          imgSrc: "kante/blue/blue3no.jpg",
          name: "photographs",
        },
      ],
      yellowBinAllowed: [
        {
          imgSrc: "kante/yellow/yellow1yes.png",
          name: "packaging detergent or shampoo",
        },
        {
          imgSrc: "kante/yellow/yellow2yes.png",
          name: "plastic food packaging products",
        },
        {
          imgSrc: "kante/yellow/yellow3yes.png",
          name: "cans, cans, metal lids",
        },
      ],
      yellowBinNotAllowed: [
        {
          imgSrc: "kante/yellow/yellow1no.png",
          name: "spray packaging",
        },
        {
          imgSrc: "kante/yellow/yellow2no.png",
          name: "plastic toys",
        },
        {
          imgSrc: "kante/yellow/yellow3no.png",
          name: "strong chemicals and paint",
        },
      ],
      greenBinAllowed: [
        {
          imgSrc: "kante/green/green1yes.jpg",
          name: "cigarettes and tobacco products",
        },
        {
          imgSrc: "kante/green/green2yes.jpeg",
          name: "diapers",
        },
        {
          imgSrc: "kante/green/green3yes.jpg",
          name: "deodorant spray, hair spray, makeup",
        },
      ],
      greenBinNotAllowed: [
        {
          imgSrc: "kante/green/green1no.png",
          name: "glass bottles (put them in separate nylon bags)",
        },
        {
          imgSrc: "kante/green/green2no.jpg",
          name: "green waste (put it in separate nylon bags)",
        },
      ],
    };
  },
  methods: {},
};
</script>
<style></style>
