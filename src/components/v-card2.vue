<template>
  <v-card class="mx-auto" max-width="500">
    <v-img
      class="white--text align-end"
      height="250px"
      :src="require('@/assets/' + imageSrc)"
    >
      <v-card-title>{{ title }}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0"> {{ subtitle }} </v-card-subtitle>

    <v-card-actions>
      <v-btn
        @click="$router.push(buttonLink)"
        color="light-green lighten-1"
        text
      >
        Find out more
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: ["title", "subtitle", "imageSrc", "rawHTML", "buttonLink"],
  name: "card-02",
  data: () => ({
    show: false,
  }),
};
</script>
