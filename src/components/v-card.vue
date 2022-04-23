<template>
  <v-card class="mx-auto" max-width="344">
    <v-img :src="require('@/assets/' + imageSrc)" height="200px"></v-img>

    <v-card-title> {{ title }} </v-card-title>

    <v-card-subtitle> {{ subtitle }} </v-card-subtitle>

    <v-card-actions>
      <v-btn color="light-green lighten-1" text> Details </v-btn>

      <v-spacer></v-spacer>

      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{ text }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>
<script>
export default {
  props: ["title", "subtitle", "imageSrc", "text"],
  name: "card-01",
  data: () => ({
    show: false,
  }),
};
</script>
