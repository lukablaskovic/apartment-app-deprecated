<template class="bg-indigo-100">
  <v-app>
    <!--Header-->
    <nav>
      <v-main>
        <v-app-bar
          color="blue darken-3
 "
          padless
        >
          <v-app-bar-nav-icon
            v-show="$vuetify.breakpoint.mobile"
            @click.stop="drawer = !drawer"
          ></v-app-bar-nav-icon>
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-row justify="left" no-gutters>
            <strong
              class="lighten-2 py-4 text-center white--text text-uppercase"
              >Welcome family {{ currentFamily }}!
            </strong>
          </v-row>
          <v-row
            justify="center"
            no-gutters
            v-show="!$vuetify.breakpoint.mobile"
          >
            <v-btn
              v-for="link in links"
              :key="link.title"
              color="white"
              text
              rounded
              class="my-4"
              @click="scroll(link.to)"
            >
              <v-icon
                color="light-green lighten-1
"
                class="mr-1"
                >{{ link.icon }}</v-icon
              >
              {{ link.title }}
            </v-btn>
          </v-row>
        </v-app-bar>
        <!--Mobile navigation-->
        <v-navigation-drawer v-model="drawer" absolute temporary>
          <v-list dense>
            <v-list-item v-for="link in links" :key="link.title" link>
              <v-btn @click="scroll(link.to)">
                <v-list-item-icon>
                  <v-icon>{{ link.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ link.title }}</v-list-item-title>
                </v-list-item-content>
              </v-btn>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
        <!--/Mobile navigation-->
        <router-view />
      </v-main>
    </nav>
    <!--Header-->
    <!--Footer-->
    <v-card height="400px">
      <v-footer v-bind="localAttrs" :padless="padless">
        <v-card flat tile width="100%" class="blue darken-3 text-center">
          <v-card-text>
            <v-btn
              v-for="link in links"
              :key="link.title"
              class="mx-4"
              icon
              @click="scroll(link.to)"
            >
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon
                    size="24px"
                    color="light-green lighten-1"
                    v-bind="attrs"
                    v-on="on"
                  >
                    {{ link.icon }}
                  </v-icon>
                </template>
                <span>{{ link.title }}</span>
              </v-tooltip>
            </v-btn>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-text class="white--text">
            <strong>Apartment Blašković</strong> - Season
            {{ new Date().getFullYear() }}.
          </v-card-text>
        </v-card>
      </v-footer>
    </v-card>
    <!--/Footer-->
  </v-app>
</template>

<script>
import router from "@/router";
export default {
  name: "App",
  data: () => ({
    drawer: null,
    currentFamily: "*family-name*",
    links: [
      { title: "Home", icon: "mdi-home-circle", to: "home" },
      { title: "Services", icon: "mdi-view-dashboard", to: "services" },
      { title: "Boat tour", icon: "mdi-sail-boat", to: "boat-tour" },
      { title: "Info", icon: "mdi-information", to: "info" },
      {
        title: "Waste disposal",
        icon: "mdi-delete-empty",
        to: "waste-disposal",
      },
      { title: "Damage report", icon: "mdi-alert", to: "damage-report" },
      { title: "Contact us", icon: "mdi-card-account-phone", to: "contact-us" },
    ],
    //For footer
    items: ["default", "absolute", "fixed"],
    padless: true,
    variant: "fixed",
  }),
  methods: {
    scroll(id) {
      if (this.$route.name != "home-page")
        router.push({ path: "/", replace: true });
      if (id == null) return;
      document.getElementById(id).scrollIntoView({
        behavior: "smooth",
      });
      this.drawer = false;
    },
  },
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
