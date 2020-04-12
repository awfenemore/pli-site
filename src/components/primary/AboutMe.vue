<template>
  <div class="about-me">
    <h1>About Me</h1>
    <v-row align-content="space-between">
      <v-col cols="12" md="8" lg="9">
        <h3>Welcome</h3>
        <p>
          Welcome, and thanks for visiting. As you may have seen elsewhere on
          the site, this is a site designed, developed, supported, and run by
          one person. My name is Adam, I am very passionate about improving
          things, learning stuff, and understanding why things are how they are.
        </p>
        <p>
          I am both a designer and developer by trade, but I am someone who is
          passionate about a lot of things and fascinated by even more things -
          far more than only development and design. Hopefully you have seen a
          bit of my personality come through in other parts of the site, but in
          case you haven't, or just want to know more...
        </p>
        <p>
          I have 5 main goals in life: to learn as much as possible, to chase
          all my passions, to make the world a better place, to constantly
          improve, and to die a grumpy old man who gave out all his love for the
          world while he still could. I consider my true passions to be the
          things that I love for reasons that I can't always explain and have
          loved for a long time. For me, that includes but is not limited to:
          games, sport music, travel, volunteering, design of all kinds, and
          animals.
        </p>
        <p>
          If you would like to reach out to me, you are welcome to below, and I
          look forward to hearing from you.
        </p>
      </v-col>
      <v-col cols="12" md="4" lg="3"
        ><v-img src="../../assets/blue-mountains.jpg"></v-img
      ></v-col>
    </v-row>
    <a href="https://www.linkedin.com/in/awfenemore/" target="_blank"
      ><h3 class="link">Linkedin</h3></a
    ><br />
    <a href="mailto:awfenemore@gmail.com"><h3 class="link">Email</h3></a>
  </div>
</template>

<script>
export default {
  name: "AboutMe"
};
</script>

<style lang="scss" src="../../styles/primary/aboutme.scss"></style>
