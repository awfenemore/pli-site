<template>
  <v-app-bar flat color="#3d3d3d">
      <!-- to make smaller on mobile-->
      <v-row>
        <v-col cols="3" md="1" class="main-logo pt-12 px-2 pl-md-4">
            <router-link to="/" tag="span" style="cursor: pointer">
              <img class="ml-0 ml-md-3 mt-8 mt-md-6 d-flex" src="../assets/pli-grey-logo.svg" alt="Pli Logo" height="60" width="80"/>
            </router-link>
        </v-col>

        <v-col cols="0" md="3" class="d-none d-md-flex pt-md-12 mt-md-3">
          <v-toolbar-title class="ml-4 mt-9">Design, Stories, Improvement</v-toolbar-title>
        </v-col>

        <v-col cols="9" md="6" class="pl-0 pl-md-8 pr-2 pt-8 pt-md-12">
            <v-row class="pt-6 px-md-0 menu-container">
                <v-col class="d-none d-md-flex" cols="" md="1" style="padding: 0;"></v-col>
                <v-col class="menu-col" cols="4" md="2" style="padding: 0;"><a v-on:click="$emit('openProjects')"><PliMenuButton buttonText="Projects" class="menu-button-left menu-projects"/></a></v-col>
                <v-col class="menu-col" cols="4" md="2" style="padding: 0;"><a v-on:click="$emit('openStories')"><PliMenuButton buttonText="Stories" class="menu-button-left menu-stories"/></a></v-col>
                <v-col class="menu-col" cols="4" md="2" style="padding: 0;"><router-link to="albumofthenow"><PliMenuButton buttonText="Albums" class="menu-button-center menu-albums"/></router-link></v-col>
                <v-col class="d-md-none" cols="2" md="0" style="padding: 0;"></v-col>
                <v-col class="menu-col pt-3 pt-md-0" cols="4" md="2" style="padding: 0;"><router-link to="aboutpli" ><PliMenuButton buttonText="About Pli" class="menu-button-right menu-pli"/></router-link></v-col>
                <v-col class="menu-col pt-3 pt-md-0" cols="4" md="2" style="padding: 0;"><router-link to="aboutme" ><PliMenuButton buttonText="About Me" class="menu-button-right menu-me"/></router-link></v-col>
                <v-col class="d-md-none" cols="2" md="0" style="padding: 0;"></v-col>
                <v-col class="d-none d-md-flex" cols="" md="1" style="padding: 0;"></v-col>
            </v-row>
        </v-col>

        <v-col cols="0" md="2" class="d-none d-md-flex">
            <!-- Album of the now placeholder -->
            <div class="d-none d-md-flex album-otn"></div>
        </v-col>

      </v-row>

    </v-app-bar>
</template>

<script>
import PliMenuButton from "./micro/PliMenuButtons.vue"

export default {
  name: "Header",
  components : {
      PliMenuButton
  }, 
  data() {
    return {
      menuOpen: 0
    };
  }
};
</script>

<style lang="scss" src="../styles/Header.scss"></style>
