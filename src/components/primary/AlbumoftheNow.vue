<template>
  <div class="album">
    <h1>Album of the Now</h1>

    <v-expansion-panels class="bg container" v-model="panel">
      <v-expansion-panel v-for="al in albumsOTN" :key="al.index" class="bg">
        <v-expansion-panel-header class="bg"
          ><h3 class="header">
            {{ al.title }} - {{ al.artist }}
          </h3></v-expansion-panel-header
        >
        <v-expansion-panel-content class="bg">
          <div class="aotn-card">
            <div class="aotn-col-left">
              <img :src="al.image" class="aotn-image" />
            </div>
            <div class="aotn-col-right">
              <h3 class="aotn-title">{{ al.title }}</h3>
              <h3 class="aotn-artist">{{ al.artist }}</h3>
              <h5 class="aotn-release-date">
                {{ al.release }}
              </h5>
              <p class="aotn-whyIlike">{{ al.whyILike }}</p>
              <a :href="al.link" target="_blank"
                ><h3 class="aotn-store-link">Link</h3></a
              >
            </div>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import albums from "../../data/albums.js";

export default {
  name: "AlbumoftheNow",
  data() {
    return {
      albumOfTheNow: albums[0],
      panel: 0,
      albumsOTN: albums
    };
  }
};
</script>

<style lang="scss" src="../../styles/primary/albumofthenow.scss"></style>
