<template>
  <navbar :windowWidth="windowWidth" :windowHeight="windowHeight" />
  <router-view id="content" />
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
  data() {
    return {
      windowWidth: 0,
      windowHeight: 0,
    };
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
      this.windowHeight = window.innerHeight;
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
      this.onResize();
    });
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.onResize);
  },
};
</script>

<style lang="less">
@import (css)
  url("https://fonts.googleapis.com/css2?family=Lato&family=Lora&family=Send+Flowers&family=Share+Tech+Mono&family=Titillium+Web:wght@600&display=swap");

html {
  font-size: 100%;
  height: 100%;
  background: #f9e9d2;
  color: #291a16;
}

body {
  margin: 0;
  height: 100%;
}

#app {
  font-family: "Lato", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  flex-direction: column;
  text-align: left;
  height: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}

#content {
  margin: 20px;
}
</style>
