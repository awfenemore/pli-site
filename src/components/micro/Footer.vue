<template>
  <v-footer color="#3d3d3d" min-height="80">
    <v-row>
      <v-col class="pl-2 pl-md-4" cols="3" md="1">
        <img
          src="../../assets/pli-grey-logo.svg"
          alt="Pli Logo"
          height="60"
          width="80"
        />
      </v-col>

      <v-col cols="9" md="5" class="footer-left">
        Pli is a website about design, interesting stories, and doing things a
        little better. Thanks for visiting.
      </v-col>

      <v-col cols="12" md="4" class="footer-mid">
        <router-link to="/">Home</router-link> |
        <router-link to="aboutpli">About Pli</router-link> |
        <router-link to="aboutme">About Me</router-link> |
        <router-link to="albumofthenow">Album of the Now</router-link> |
        <a href="#top">Back to Top</a>
      </v-col>

      <v-col cols="12" md="2" class="footer-right">
        A Fenemore | {{ new Date().getFullYear() }}
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" src="../../styles/micro/Footer.scss"></style>
