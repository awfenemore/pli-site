<template>
  <div class="home">
    <div class="latest-post">
      <div class="left">
        <img
          src="../../assets/storiesImages/animals/Springer-square.jpg"
          class="preview-image"
        />
      </div>
      <div class="right">
        <h3 class="latest-post-title">Latest Post</h3>
        <router-link to="/stories/springer"
          ><h3 class="latest-post-desc">Springer</h3></router-link
        >
        <p class="mt-2">
          A story about an inspirational orphaned orca returned to the wild.
        </p>
      </div>
    </div>

    <div class="text-container">
      <h1>Welcome to Pli</h1>
      <p>
        Pli is a personal site dedicated to interesting stories, design and why
        things are how they are, and most of all, making things a little better.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang="scss" src="../../styles/primary/home.scss"></style>
