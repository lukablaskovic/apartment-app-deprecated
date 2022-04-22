<template>
  <v-app>
    <v-main>
      <v-footer color="primary lighten-1" padless>
        <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
          <strong>Apartman Blašković</strong> - {{ new Date().getFullYear() }}
        </v-col>
        <v-row justify="center" no-gutters>
          <v-btn
            v-for="link in links"
            :key="link"
            color="white"
            text
            rounded
            class="my-2"
          >
            {{ link }}
          </v-btn>
        </v-row>
      </v-footer>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    links: [
      "Početna",
      "About Us",
      "Otpad",
      "Usluge",
      "Prijava štete",
      "Kontaktirajte nas",
    ],
  }),
};
</script>
