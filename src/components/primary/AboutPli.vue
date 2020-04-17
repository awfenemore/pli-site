<template>
  <div class="about-pli">
    <h1>About Pli</h1>
    <h3>Pli</h3>
    <p>
      Pli is a site focused on design, interesting stories, and other things
      that interest, motivate, and inspire me. Pli is designed, developed,
      written, and run by
      <router-link to="/aboutme">one person</router-link> and it really
      represents a collection of things that I like. There are no rules on what
      will make it's way on to this site, but if I find it interesting, then
      chances are someone else out there does too.
    </p>
    <p>
      The word Pli is
      <a href="https://en.wikipedia.org/wiki/Esperanto" target="_blank"
        >Esperanto</a
      >, and it translates closely to "improvement". I chose an Esperanto word
      because the language itself is totally constructed, synthetic if you will,
      and was intended to be the "Universal Second Language". Not only do I love
      this idea of a universal language by itself, I also love the idea of
      improving something so typically natural and taken for granted. Someone,
      somewhere, looked at something that they do thousands of times a day -
      communicate - and wondered if they could do that a bit better, and that is
      how I try to live my life.
    </p>
    <p>
      This site will mostly focus on finding similar things to look at and
      hopefully improve. No question, there will be plenty of content that is
      nowhere near as helpful or important as language, but the theme of
      improvement should be mostly site wide.
    </p>
    <p>
      Should you feel like contacting me to talk about anything here, please
      feel free to reach out to <router-link to="/aboutme">me</router-link>.
    </p>
  </div>
</template>

<script>
export default {
  name: "AboutPli"
};
</script>

<style lang="scss" src="../../styles/primary/aboutpli.scss"></style>
