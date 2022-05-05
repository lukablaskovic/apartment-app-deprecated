<template>
  <div class="text-center">
    <h1
      class="md:text-7xl text-5xl text-center capitalize tracking-wider font-bold mt-2"
    >
      BOAT TOUR
    </h1>
    <h1 class="md:text-4xl text-3xl text-center tracking-wider font-bold">
      Up for a boat tour? Feel free to contact us and we can arrange it!
    </h1>
    <h1>Dear guests!</h1>
    <h2>
      Over the last few years we have had great interest and positive feedback
      from our guests for a private boat tour.
    </h2>
    <h2>
      Check out what's included in tour from the list below. Feel free to choose
      what you like, but you can also choose everything listed
      <v-icon color="blue darken-3">mdi-emoticon-cool</v-icon>
    </h2>
    <ul class="mt-4">
      <li>
        <v-icon>mdi-checkbox-marked-circle</v-icon>Navigation around
        <a target="_blank" href="https://www.np-brijuni.hr/en"
          >Brijuni National Park</a
        >
      </li>
      <li>
        <v-icon>mdi-checkbox-marked-circle</v-icon>Visit of the town
        <a target="_blank" href="https://www.fazana.hr/">Fažana</a>
      </li>
      <li>
        <v-icon>mdi-checkbox-marked-circle</v-icon>Swimming or sunbathing on
        local beaches and islands
      </li>
      <li>
        <v-icon>mdi-checkbox-marked-circle</v-icon>4-5 hours tour duration
      </li>
      <li>
        <v-icon>mdi-checkbox-marked-circle</v-icon>Departure time by agreement
      </li>
    </ul>
    <!--SLIKE-->
    <v-col>
      <v-row>
        <v-col
          v-for="n in 8"
          :key="n"
          class="d-flex child-flex"
          :cols="$vuetify.breakpoint.mobile ? '6' : '3'"
        >
          <v-img
            :src="require('@/assets/boat/boat' + n + '.jpg')"
            aspect-ratio="1"
            class="grey lighten-2"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
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
    <!--Rezervacija-->
    <div>
      <p class="md:text-4xl text-3xl">Book the tour here</p>
      <v-container>
        <v-row justify="center">
          <validation-observer ref="observer" v-slot="{ invalid }">
            <form @submit.prevent="submit">
              <validation-provider
                v-slot="{ errors }"
                name="Name"
                rules="required|max:12"
              >
                <v-text-field
                  v-model="name"
                  :counter="12"
                  :error-messages="errors"
                  label="Name"
                  required
                ></v-text-field>
              </validation-provider>
              <validation-provider
                v-slot="{ errors }"
                name="phoneNumber"
                :rules="{
                  required: true,
                }"
              >
                <v-text-field
                  v-model="phoneNumber"
                  :counter="16"
                  :error-messages="errors"
                  label="Phone Number"
                  required
                ></v-text-field>
              </validation-provider>

              <validation-provider
                v-slot="{ errors }"
                name="select"
                rules="required"
              >
                <v-select
                  v-model="select"
                  :items="items"
                  :error-messages="errors"
                  label="Select"
                  data-vv-name="select"
                  required
                ></v-select>
              </validation-provider>

              <validation-provider
                v-slot="{ errors }"
                name="select"
                rules="required"
              >
                <v-date-picker
                  :error-messages="errors"
                  :min="minDate"
                  :max="maxDate"
                  :items="items"
                  v-model="picker"
                  color="green lighten-1"
                ></v-date-picker>
              </validation-provider>

              <v-btn class="mr-4 ml-4" type="submit" :disabled="invalid">
                book
              </v-btn>
              <v-btn @click="clear"> clear </v-btn>
            </form>
          </validation-observer>
        </v-row>
      </v-container>
      <p class="mt-4">Or you can contact Davor directly and book via phone.</p>
    </div>

    <!--Rezervacija-->
  </div>
</template>

<script>
import { required, digits, max, regex } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";
setInteractionMode("eager");

extend("digits", {
  ...digits,
  message: "{_field_} needs to be {length} digits. ({_value_})",
});

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});

extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters",
});

extend("regex", {
  ...regex,
  message: "{_field_} {_value_} does not match {regex}",
});

export default {
  name: "boat-reservation",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    name: "",
    phoneNumber: "",
    date: "",
    select: null,
    items: ["2 people - 50€", "3-4 people - 80€", "5-6 people - 120€"],
    minDate: "2022-05-05",
    maxDate: "2022-05-12",
  }),

  methods: {
    submit() {
      this.$refs.observer.validate();
    },
    clear() {
      this.name = "";
      this.phoneNumber = "";
      this.email = "";
      this.select = null;
      this.checkbox = null;
      this.$refs.observer.reset();
    },
  },
};
</script>
