<template>
  <v-footer color="#FEFAE1" min-height="80">
    <div class="footer-logo">
      <img
        src="../../assets/pli-grey-logo.svg"
        alt="Pli Logo"
        height="60"
        width="80"
      />
    </div>

    <div class="footer-left">
      <span>
        Pli is a website about design, interesting stories, and doing things a
        little better.
      </span>
    </div>

    <div class="footer-mid">
      <router-link to="/">Home</router-link> |
      <router-link to="/aboutpli">About Pli</router-link> |
      <router-link to="/aboutme">About Me</router-link> |
      <router-link to="/albumofthenow">Album of the Now</router-link> |
      <a href="#top">Back to Top</a>
    </div>

    <div class="footer-right">
      <span>A Fenemore | {{ new Date().getFullYear() }}</span>
    </div>
  </v-footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" src="../../styles/micro/Footer.scss"></style>
