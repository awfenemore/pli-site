<template>
  <div class="header-container">
    <div class="header-logo">
      <router-link to="/" tag="span" style="cursor: pointer">
        <img
          src="../../assets/pli-grey-logo.svg"
          alt="Pli Logo"
          height="60"
          width="80"
        />
      </router-link>
    </div>

    <div class="header-left">
      <span class="header-title">Design, Stories, Improving</span>
    </div>

    <div class="header-middle">
      <div class="menu-container">
        <div class="menu-col">
          <a
            v-on:click="$emit('openProjects')"
            class="menu-button left menu-projects"
            >Projects</a
          >
        </div>
        <div class="menu-col">
          <a
            v-on:click="$emit('openStories')"
            class="menu-button left menu-stories"
            >Stories
          </a>
        </div>
        <div class="menu-col">
          <router-link
            to="/albumofthenow"
            class="menu-button center menu-albums"
            >Albums
          </router-link>
        </div>
        <div class="menu-col">
          <router-link to="/aboutpli" class="menu-button right menu-pli"
            >About Pli
          </router-link>
        </div>
        <div class="menu-col">
          <router-link to="/aboutme" class="menu-button right menu-me"
            >About Me
          </router-link>
        </div>
      </div>
    </div>

    <div class="header-aotn">
      <div class="album-otn">
        <div class="album-otn-left">
          <h4>Album of the Now</h4>
          <h5>{{ albumOfTheNow.title }} - {{ albumOfTheNow.artist }}</h5>
          <h5 class="released">Released: {{ albumOfTheNow.release }}</h5>
          <router-link to="/albumofthenow"
            ><h4 class="album-otn-store-link">More</h4></router-link
          >
        </div>
        <div class="album-otn-right">
          <router-link to="/albumofthenow"
            ><img class="album-otn-image" :src="albumOfTheNow.image"
          /></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import albums from "../../data/albums.js";

export default {
  name: "Header",
  data() {
    return {
      menuOpen: 0,
      albumOfTheNow: albums[0]
    };
  }
};
</script>

<style lang="scss" src="../../styles/micro/Header.scss"></style>
