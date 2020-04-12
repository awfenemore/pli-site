<template>
  <div class="album">
    <h1>Album of the Now</h1>

    <v-expansion-panels class="bg-grey" v-model="panel">
      <v-expansion-panel
        v-for="al in albumsOTN"
        :key="al.index"
        class="bg-grey"
      >
        <v-expansion-panel-header class="bg-grey"
          ><h3>{{ al.title }} - {{ al.artist }}</h3></v-expansion-panel-header
        >
        <v-expansion-panel-content class="bg-grey">
          <v-card class="aotn-card my-8 px-12 py-10">
            <v-row>
              <v-col md="4">
                <v-img height="300" width="300" :src="al.image"></v-img
              ></v-col>
              <v-col md="8" class="aotn-col-right">
                <h3 class="aotn-title">{{ al.title }}</h3>
                <h3 class="aotn-artist">{{ al.artist }}</h3>
                <h5 class="aotn-release-date mt-2">
                  {{ al.release }}
                </h5>
                <p class="aotn-whyIlike mt-2">{{ al.whyILike }}</p>
                <a :href="al.link" target="_blank"
                  ><h3 class="aotn-store-link">Link</h3></a
                >
              </v-col></v-row
            >
          </v-card>
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
