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
    </v-app-bar>-->

    <v-content>
      <router-view></router-view>
    </v-content>

    <div class="bot-border"></div>

    <v-footer color="#3d3d3d" min-height="80">
      <v-row>
        <v-col cols="2" md="2" >
          <img src="./assets/pli-grey-logo.svg" alt="Pli Logo" height="60" width="100" />
        </v-col>

        <v-col cols="10" md="4" class="footer-left pt-8">   
          Pli is a website about design, interesting stories, and doing things a little better. Thanks for visiting.
        </v-col>

        <v-col cols="12"  md="4" class="footer-mid pt-8">
            <router-link to="/">Home</router-link> |
            <router-link to="aboutpli">About Pli</router-link> |
            <router-link to="aboutme">About Me</router-link> |
            <router-link to="albumofthenow">Album of the Now</router-link> |
            <router-link to="aboutpli">Back to Top</router-link>
            <!-- TODO send this to the top of the page, not another link -->
        </v-col>

        <v-col cols="12"  md="2" class="footer-right pt-8">
          A Fenemore | {{ new Date().getFullYear() }}
        </v-col>
      </v-row>
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
