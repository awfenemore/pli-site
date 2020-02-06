<template>
  <v-app>
    <Header v-on:openProjects="projClick" v-on:openStories="storiesClick" />

    <div :style="{ height: this.menuProj + 'px' }" class="menu-to-open">
      Proj
    </div>

    <div :style="{ height: this.menuStories + 'px' }" class="menu-to-open">
      Stories
    </div>

    <div class="top-border"></div>

    <v-content>
      <router-view></router-view>
    </v-content>

    <div class="bot-border"></div>

    <Footer />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";

export default Vue.extend({
  name: "App",
  components: {
    Footer,
    Header
  },
  data() {
    return {
      menuProj: 0,
      menuStories: 0
    };
  },
  methods: {
    projClick: function() {
      this.menuProj = 100;
      // Working here. If one is already open then close it, and make them toggle to closed if open
      // Change the button stylings on menu open
    },
    storiesClick: function() {
      this.menuStories = 100;
    }
  }
});
</script>

<style lang="scss" src="./styles/App.scss"></style>
