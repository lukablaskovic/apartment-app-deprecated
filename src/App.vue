<template class="bg-indigo-100">
  <v-app>
    <!--Header-->
    <nav>
      <v-main>
        <v-app-bar
          color="indigo darken-1
 "
          padless
        >
          <v-app-bar-nav-icon
            v-show="$vuetify.breakpoint.xs"
            @click.stop="drawer = !drawer"
          ></v-app-bar-nav-icon>
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-row justify="left" no-gutters>
            <strong
              class="lighten-2 py-4 text-center white--text text-uppercase"
              >Welcome family {{ currentFamily }}!
            </strong>
          </v-row>
          <v-row justify="center" no-gutters v-show="!$vuetify.breakpoint.xs">
            <v-btn
              v-for="link in links"
              :key="link.title"
              color="white"
              text
              rounded
              class="my-4"
            >
              <v-icon
                color="light-green lighten-1
"
                >{{ link.icon }}</v-icon
              >
              {{ link.title }}
            </v-btn>
          </v-row>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" absolute temporary>
          <v-list dense>
            <v-list-item v-for="link in links" :key="link.title" link>
              <v-list-item-icon>
                <v-icon>{{ link.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ link.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>

        <router-view />
      </v-main>
    </nav>
    <!--Header-->
    <!--Footer-->
    <v-card height="400px">
      <v-footer v-bind="localAttrs" :padless="padless">
        <v-card flat tile width="100%" class="indigo darken-1 text-center">
          <v-card-text>
            <v-btn v-for="link in links" :key="link.title" class="mx-4" icon>
              <v-icon size="24px" color="light-green lighten-1">
                {{ link.icon }}
              </v-icon>
            </v-btn>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-text class="white--text">
            {{ new Date().getFullYear() }} —
            <strong>Apartment Blašković</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </v-card>
    <!--/Footer-->
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    drawer: null,
    currentFamily: "Peikert",
    links: [
      { title: "HOME", icon: "mdi-home-circle" },
      { title: "SERVICES", icon: "mdi-view-dashboard" },
      { title: "INFO", icon: "mdi-information" },
      { title: "WASTE DISPOSAL", icon: "mdi-delete-empty" },
      { title: "DAMAGE REPORT", icon: "mdi-alert" },
      { title: "CONTACT US", icon: "mdi-card-account-phone" },
    ],
    //For footer
    items: ["default", "absolute", "fixed"],
    padless: true,
    variant: "fixed",
  }),

  computed: {
    //For Footer
    localAttrs() {
      const attrs = {};

      if (this.variant === "default") {
        attrs.absolute = false;
        attrs.fixed = false;
      } else {
        attrs[this.variant] = true;
      }
      return attrs;
    },
  },
};
</script>
