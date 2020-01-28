<template>
  <v-app>


    <v-app-bar flat color="#3d3d3d" max-height="100">    <!-- to make smaller on mobile-->
      <v-app-bar-nav-icon class="d-sm-none"></v-app-bar-nav-icon>
      <v-app-bar-nav-icon class="d-none d-md-flex ml-3 mt-3">
        <router-link to="/" tag="span" style="cursor: pointer">
          <img src="./assets/pli-grey-logo.svg" alt="Pli Logo" height="60" width="80" />
        </router-link>
      </v-app-bar-nav-icon>
      <v-toolbar-title class="ml-12 mt-8 ">Design, Stories, Improvement</v-toolbar-title>
    </v-app-bar>

    <div class="top-border"></div>


    <!-- <v-navigation-drawer v-model="burgerOpen" app>
      <v-list>
        <v-list-tile v-for="item in menuItems" :key="item.title" :to="item.path">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app max-height="100">
      <span class="hidden-sm-and-up">
        <v-toolbar-side-icon @click="burgerOpen = !burgerOpen">
        </v-toolbar-side-icon>
      </span>

      <v-toolbar-title class="hidden-xs-only">
        <router-link to="/" tag="span" style="cursor: pointer">
          <img src="./assets/pli-grey-logo.svg" alt="Pli Logo" height="60" width="80" /> 
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar> -->



    <v-content>
      <router-view></router-view>
    </v-content>

    <div class="bot-border"></div>

    <v-footer color="#3d3d3d" min-height="80">
      <v-row>
        <v-col cols="3" md="1">
          <img src="./assets/pli-grey-logo.svg" alt="Pli Logo" height="60" width="80" />
        </v-col>

        <v-col cols="9" md="5" class="footer-left">   
          Pli is a website about design, interesting stories, and doing things a little better. Thanks for visiting.
        </v-col>

        <v-col cols="12"  md="4" class="footer-mid">
            <router-link to="/">Home</router-link> |
            <router-link to="aboutpli">About Pli</router-link> |
            <router-link to="aboutme">About Me</router-link> |
            <router-link to="albumofthenow">Album of the Now</router-link> |
            <router-link to="aboutpli">Back to Top</router-link>
            <!-- TODO send this to the top of the page, not another link -->
        </v-col>

        <v-col cols="12"  md="2" class="footer-right">
          A Fenemore | {{ new Date().getFullYear() }}
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",
  data() {
    return {
      burgerOpen: false,
      menuItems: [
        { title: "Home", path: "/home", icon: "home" },
        { title: "Sign Up", path: "/signup", icon: "face" },
        { title: "Sign In", path: "/signin", icon: "lock_open" }
      ]
    };
  }
});
</script>

<style lang="scss" src="./styles/base.scss"></style>
