<template>
  <v-card class="mx-auto" tile>
    <v-avatar class="profile" size="164" tile>
      <v-img :src="require('@/assets/' + imageSrc)"></v-img>
    </v-avatar>
    <v-card-title> {{ name }} </v-card-title>

    <v-card-subtitle> {{ mob }} </v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  props: ["name", "mob", "imageSrc"],
  name: "profileCard",
};
</script>

<style></style>
