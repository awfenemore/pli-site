<template>
  <v-app-bar flat color="#3d3d3d">
    <!-- to make smaller on mobile-->
    <v-row>
      <v-col cols="3" md="1" class="main-logo pt-12 px-2 pl-md-4">
        <router-link to="/" tag="span" style="cursor: pointer">
          <img
            class="ml-0 ml-md-3 mt-5 mt-md-6 d-flex"
            src="../../assets/pli-grey-logo.svg"
            alt="Pli Logo"
            height="60"
            width="80"
          />
        </router-link>
      </v-col>

      <v-col cols="0" md="3" class="d-none d-md-flex pt-md-12 mt-md-3">
        <v-toolbar-title
          class="ml-4 ml-md-8 ml-lg-4 mt-9 mt-md-0 mt-lg-9 header-title"
          >Design, Stories, Improvement</v-toolbar-title
        >
      </v-col>

      <v-col cols="9" md="8" lg="6" class="pl-0 pl-md-8 pr-2 pt-8 pt-md-12">
        <v-row class="pt-6 px-md-0 menu-container">
          <v-col
            class="d-none d-md-flex"
            cols=""
            md="1"
            lg="1"
            style="padding: 0;"
          ></v-col>
          <v-col class="menu-col" cols="4" md="2" style="padding: 0;"
            ><a v-on:click="$emit('openProjects')"
              ><PliMenuButton
                buttonText="Projects"
                class="menu-button-left menu-projects"/></a
          ></v-col>
          <v-col class="menu-col" cols="4" md="2" style="padding: 0;"
            ><a v-on:click="$emit('openStories')"
              ><PliMenuButton
                buttonText="Stories"
                class="menu-button-left menu-stories"/></a
          ></v-col>
          <v-col class="menu-col" cols="4" md="2" style="padding: 0;"
            ><router-link to="albumofthenow"
              ><PliMenuButton
                buttonText="Albums"
                class="menu-button-center menu-albums"/></router-link
          ></v-col>
          <v-col class="d-md-none" cols="2" md="0" style="padding: 0;"></v-col>
          <v-col
            class="menu-col pt-3 pt-md-0"
            cols="4"
            md="2"
            style="padding: 0;"
            ><router-link to="aboutpli"
              ><PliMenuButton
                buttonText="About Pli"
                class="menu-button-right menu-pli"/></router-link
          ></v-col>
          <v-col
            class="menu-col pt-3 pt-md-0"
            cols="4"
            md="2"
            style="padding: 0;"
            ><router-link to="aboutme"
              ><PliMenuButton
                buttonText="About Me"
                class="menu-button-right menu-me"/></router-link
          ></v-col>
          <v-col class="d-md-none" cols="2" md="0" style="padding: 0;"></v-col>
          <v-col
            class="d-none d-md-flex"
            cols=""
            lg="1"
            style="padding: 0;"
          ></v-col>
        </v-row>
      </v-col>

      <v-col cols="0" md="2" class="d-none d-md-flex" style="padding: 0;">
        <!-- Album of the now placeholder -->
        <div class="d-none d-lg-flex album-otn mt-10 pt-3">
          <div class="album-otn-left pt-2">
            <h4>Album of the Now</h4>
            <h5>{{ albumOfTheNow.title }} - {{ albumOfTheNow.artist }}</h5>
            <h5>Released: {{ albumOfTheNow.release }}</h5>
          </div>
          <div class="album-otn-right pl-2 pt-2">
            <a :href="albumOfTheNow.link"
              ><img
                class="album-otn-image"
                src="../../assets/albumImages/Tame_Impala_-_The_Slow_Rush.png"
            /></a>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
import PliMenuButton from "../micro/PliMenuButtons.vue";
import albums from "../../data/albums.js";

export default {
  name: "Header",
  components: {
    PliMenuButton
  },
  data() {
    return {
      menuOpen: 0,
      albumOfTheNow: albums[0]
    };
  }
};
</script>

<style lang="scss" src="../../styles/micro/Header.scss"></style>
