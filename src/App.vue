<template>
  <v-app>
    <v-main>
      <v-footer color="primary lighten-1" padless>
        <v-row justify="left" no-gutters>
          <strong class="lighten-2 py-4 text-center white--text ml-2"
            >Apartman Blašković - {{ new Date().getFullYear() }}
          </strong>
        </v-row>
        <v-row justify="center" no-gutters>
          <v-btn
            v-for="link in links"
            :key="link"
            color="white"
            text
            rounded
            class="my-4"
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
    obitelj: "Peikert",
    links: [
      "Početna",
      "Usluge",
      "Info",
      "Zbrinjavanje otpada",
      "Prijava štete",
      "Kontaktirajte nas",
    ],
  }),
};
</script>
