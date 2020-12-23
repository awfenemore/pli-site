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
        <div class="inner-menu">
          <div class="menu-category">
            <h4 class="menu-title">Product Design</h4>
            <span class="menu-link" v-on:click="closeMenus">Coming Soon</span>
          </div>
          <div class="menu-category">
            <h4 class="menu-title">Visual Design</h4>
            <span class="menu-link" v-on:click="closeMenus">Coming Soon</span>
          </div>
          <div class="menu-category">
            <h4 class="menu-title">Solution Design</h4>
            <span class="menu-link" v-on:click="closeMenus">Coming Soon</span>
          </div>
          <div class="menu-category">
            <h4 class="menu-title">Cetero</h4>
            <span class="menu-link" v-on:click="closeMenus">Coming Soon</span>
          </div>
        </div>
        <div class="bot-border"></div>
      </div>
    </v-expand-transition>

    <v-expand-transition>
      <div v-show="this.isStoriesMenuOpen" class="stories-menu">
        <div class="inner-menu">
          <div class="menu-category">
            <h4 class="menu-title">People</h4>
            <span class="menu-link" v-on:click="closeMenus">Coming Soon</span>
          </div>
          <div class="menu-category">
            <h4 class="menu-title">Animals</h4>
            <router-link to="/stories/springer"
              ><span class="menu-link" v-on:click="closeMenus"
                >Springer</span
              ></router-link
            >
          </div>
          <div class="menu-category">
            <h4 class="menu-title">Sport</h4>
            <span class="menu-link" v-on:click="closeMenus">Coming Soon</span>
          </div>
          <div class="menu-category">
            <h4 class="menu-title">Cetero</h4>
            <span class="menu-link" v-on:click="closeMenus">Coming Soon</span>
          </div>
        </div>
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
  head: {
    meta: [{ name: "theme-color", content: "#3d3d3d" }]
  },
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
    },
    closeMenus(): void {
      this.isProjMenuOpen = false;
      this.isStoriesMenuOpen = false;
    }
  }
});
</script>

<style lang="scss" src="./styles/App.scss"></style>
<style lang="scss" src="./styles/micro/shared.scss"></style>
