<template>
  <v-card class="mx-auto" max-width="344">
    <v-img :src="require('@/assets/' + imageSrc)" :height="height"></v-img>

    <v-card-title> {{ title }} </v-card-title>

    <v-card-subtitle> {{ subtitle }} </v-card-subtitle>

    <v-card-actions>
      <v-btn color="light-green lighten-1" @click="show = !show" text>
        Details
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-img
          class="mx-auto"
          :src="require('@/assets/kante/Allowed.png')"
          aspect-ratio="6.0"
          contain
        ></v-img>
        <v-card-text v-for="item in itemsAllowed" :key="item.src">
          <v-img
            max-height="150"
            max-width="344"
            :src="require('@/assets/' + item.imgSrc)"
          ></v-img>
          {{ item.name }}
        </v-card-text>
        <v-img
          class="mx-auto"
          :src="require('@/assets/kante/Forbidden.png')"
          aspect-ratio="6.0"
          contain
        ></v-img>
        <v-card-text v-for="item in itemsNotAllowed" :key="item.src">
          <v-img
            max-height="150"
            max-width="344"
            :src="require('@/assets/' + item.imgSrc)"
          ></v-img>
          {{ item.name }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>
<script>
export default {
  props: [
    "title",
    "subtitle",
    "imageSrc",
    "rawHTML",
    "height",
    "itemsAllowed",
    "itemsNotAllowed",
  ],
  name: "card-03",
  data: () => ({
    show: false,
  }),
};
</script>
