<template>
  <v-app>
    <!-- <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar> -->

    <v-content>
      <router-view></router-view>
    </v-content>

    <div class="bot-border"></div>

    <v-footer color="#3d3d3d" min-height="80">
      <img src="./assets/pli-grey-logo.svg" alt="Pli Logo" height="60" width="100" />
      <div class="footer-left">
        Pli is a website about design, interesting stories, and doing things a little better. Thanks for visiting.
      </div>
      <v-spacer></v-spacer>
      <div class="footer-mid">
        <router-link to="/">Home</router-link> | 
        <router-link to="aboutpli">About Pli</router-link> | 
        <router-link to="aboutme">About Me</router-link> | 
        <router-link to="albumofthenow">Album of the Now</router-link> | 
        <router-link to="aboutpli">Back to Top</router-link>                <!-- TODO send this to the top of the page, not another link -->
      </div>
      <v-spacer></v-spacer>
      <div class="footer-right">
        A Fenemore | {{ new Date().getFullYear() }}
      </div>
    </v-footer>

  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App"
});
</script>

<style lang="scss" src="./styles/base.scss"></style>
