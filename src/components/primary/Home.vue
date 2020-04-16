<template>
  <div class="home">
    <h1>Welcome to Pli</h1>
    <p>
      Pli is a personal site dedicated to interesting stories, design and why
      things are how they are, and most of all, making things a little better.
    </p>
    <v-card class="latest-post mt-12 px-4 py-3 px-md-12 py-md-10">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-img
              src="../../assets/storiesImages/animals/Springer-square.jpg"
              height="300"
              width="300"
              class="preview-image"
            ></v-img>
          </v-col>
          <v-col cols="12" md="8">
            <h3 class="latest-post-title">Latest Post</h3>
            <router-link to="/stories/springer"
              ><h3 class="latest-post-desc">Springer</h3></router-link
            >
            <p class="mt-2">
              A story about an inspirational orphaned orca returned to the wild.
            </p>
            <router-link to="/stories/springer"
              ><h3 class="latest-post-link">Link</h3></router-link
            >
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang="scss" src="../../styles/primary/home.scss"></style>
