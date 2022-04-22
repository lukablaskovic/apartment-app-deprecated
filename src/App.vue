<template>
  <v-card class="mx-auto overflow-hidden" height="400" width="344">
    <v-system-bar color="deep-purple darken-3"></v-system-bar>

    <v-app-bar color="deep-purple accent-4" dark prominent>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>My files</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-filter</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-card-text>
      The navigation drawer will appear from the bottom on smaller size screens.
    </v-card-text>
  </v-card>
</template>
<!--
<template>
  <v-app>
    <nav>
      <v-main>
        <v-app-bar color="primary " padless>
          <v-app-bar-nav-icon
            @click.stop="drawer = !drawer"
          ></v-app-bar-nav-icon>
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-row justify="left" no-gutters>
            <strong
              class="lighten-2 py-4 text-center white--text ml-2 text-uppercase"
              >Welcome family {{ currentFamily }}!
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
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" absolute bottom temporary>
          <v-list nav dense>
            <v-list-item-group
              v-model="group"
              active-class="deep-purple--text text--accent-4"
            >
              <v-list-item>
                <v-list-item-title>Foo</v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>Bar</v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>Fizz</v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>Buzz</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>

        <router-view />
      </v-main>
    </nav>
  </v-app>
</template>
-->

<script>
export default {
  name: "App",
  watch: {
    group() {
      this.drawer = false;
    },
  },

  data: () => ({
    drawer: false,
    group: null,
    currentFamily: "Peikert",
    links: [
      "HOME",
      "SERVICES",
      "INFO",
      "WASTE DISPOSAL",
      "DAMAGE REPORT",
      "CONTACT US",
    ],
  }),
};
</script>
