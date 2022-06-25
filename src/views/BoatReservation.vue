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
    <h1 class="mt-2">Dear guests!</h1>
    <h2>
      Over the last few years we have had great interest and positive feedback
      from our guests for a private boat tour.
    </h2>
    <h2>
      Check out what's included in tour from the list below. Feel free to choose
      what you like, but you can also choose everything listed :)
    </h2>
    <ul class="mt-4">
      <li>
        <v-icon>mdi-checkbox-marked-circle</v-icon>Navigation next to
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
        local beaches
      </li>
      <li>
        <v-icon>mdi-checkbox-marked-circle</v-icon>Swimming or sunbathing on
        Kozada Island
      </li>
      <li>
        <v-icon>mdi-checkbox-marked-circle</v-icon>2-3 hours tour duration
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
      <v-container class="p-12">
        <v-row justify="center">
          <validation-observer ref="observer" v-slot="{}">
            <form @submit.prevent="submit">
              <validation-provider
                v-slot="{ errors }"
                name="Name"
                rules="required|max:16|min:3"
              >
                <v-text-field
                  v-model="name"
                  :counter="16"
                  :error-messages="errors"
                  label="Name"
                  required
                ></v-text-field>
              </validation-provider>
              <validation-provider
                v-slot="{ errors }"
                name="phoneNumber"
                rules="required|min:7"
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
                name="Comment"
                rules="required|max:200"
              >
                <v-text-field
                  v-model="comment"
                  :counter="200"
                  :error-messages="errors"
                  label="Where would you like to go? (from the list above)"
                  placeholder="Where would you like to go?"
                  required
                ></v-text-field>
              </validation-provider>

              <h2 class="mb-4">Price: <b>70 EUR</b></h2>
              <validation-provider
                v-slot="{ errors }"
                name="select"
                rules="required"
              >
                <v-date-picker
                  :error-messages="errors"
                  :min="minDate"
                  :max="maxDate"
                  v-model="picker"
                  color="green lighten-1"
                ></v-date-picker>
              </validation-provider>

              <v-btn class="mr-4 ml-4 mt-2" type="submit"> book </v-btn>
            </form>
          </validation-observer>
        </v-row>
        <p class="mt-4">
          Or you can contact Davor directly and book via phone.
        </p>
        <v-alert class="mt-4" v-if="bookedSuccessful" type="success">
          You have successfuly booked boat tour!
        </v-alert>
      </v-container>
    </div>

    <!--Rezervacija-->
  </div>
</template>

<script>
import { required, digits, max, min, regex } from "vee-validate/dist/rules";
import emailjs from "@emailjs/browser";
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

extend("min", {
  ...min,
  message: "{_field_} may not be less than {length} characters",
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
    select: null,
    minDate: "2022-06-25",
    maxDate: "2022-07-09",
    picker: "",
    comment: "",
    bookedSuccessful: false,
  }),

  methods: {
    async submit() {
      const isValid = this.$refs.observer.validate();
      console.log(isValid);
      if (isValid) {
        await emailjs.send("service_shpe2hq", "template_wv0c2cr", {
          from_name: this.name,
          date: this.picker,
          phone: this.phoneNumber,
          msg: this.comment,
        });
        this.bookedSuccessful = true;
      }
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
