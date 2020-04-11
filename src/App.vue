<template>
  <v-app>
    <Header
      v-on:openProjects="projClick"
      v-on:openStories="storiesClick"
      id="top"
    />

    <div class="top-border"></div>

    <v-expand-transition>
      <div v-show="this.isProjMenuOpen" class="projects-menu">
        <div class="inner-menu px-4 py-4">Projects</div>
        <div class="bot-border"></div>
      </div>
    </v-expand-transition>

    <v-expand-transition>
      <div v-show="this.isStoriesMenuOpen" class="stories-menu">
        <div class="inner-menu px-4 py-4">Stories</div>
        <div class="bot-border"></div>
      </div>
    </v-expand-transition>

    <v-content class="content">
      <router-view></router-view>
    </v-content>

    <div class="bot-border"></div>

    <Footer />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Footer from "./components/micro/Footer.vue";
import Header from "./components/micro/Header.vue";

export default Vue.extend({
  name: "App",
  components: {
    Footer,
    Header
  },
  data() {
    return {
      isProjMenuOpen: false,
      isStoriesMenuOpen: false
    };
  },
  methods: {
    projClick(): void {
      if (!this.isProjMenuOpen) {
        if (this.isStoriesMenuOpen) {
          this.isStoriesMenuOpen = false;
        }
        this.isProjMenuOpen = true;
      } else {
        this.isProjMenuOpen = false;
      }
    },
    storiesClick(): void {
      if (!this.isStoriesMenuOpen) {
        if (this.isProjMenuOpen) {
          this.isProjMenuOpen = false;
        }
        this.isStoriesMenuOpen = true;
      } else {
        this.isStoriesMenuOpen = false;
      }
    }
  }
});
</script>

<style lang="scss" src="./styles/App.scss"></style>
