<template>
  <div id="navbar">
      <router-link to="/" @click="closeMenu" id="website_title">
        <div class="link">Lindsay's Horses</div>
      </router-link>
    <div>
      <div v-if="windowWidth <= 775" @click="toggleMenu" class="hamburger_icon">
        <font-awesome-icon icon="bars" class="fa-xs link" />
      </div>
      <ul id="nav_list" v-bind:style="navbarStyle" @click="closeMenu">
        <router-link to="/eal" @click="closeMenu" class="link">
          <li>EAL</li>
        </router-link>
        <router-link to="/testimonials" class="link">
          <li>Testimonials</li>
        </router-link>
        <router-link to="/contact" class="link">
          <li>Contact</li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      navbarOpen: false,
    };
  },
  props: {
    windowWidth: Number,
    windowHeight: Number,
  },
  computed: {
    navbarStyle() {
      if (this.windowWidth > 775) {
        return {};
      } else {
        if (this.navbarOpen === false) {
          return {
            display: "none",
          };
        } else {
          var menu_height = Math.max(this.windowHeight, document.body.scrollHeight, document.body.offsetHeight) - 100;

          return {
            position: "absolute",
            padding: "0px",
            margin: "0px",
            height: menu_height + "px",
            width: "100%",
            top: "100px",
            left: "0px",
            background: "black",
            opacity: "90%",
          };
        }
      }
    }
  },
  methods: {
    toggleMenu() {
      this.navbarOpen = !this.navbarOpen;
    },
    closeMenu() {
      this.navbarOpen = false;
    },
  },
};
</script>

<style scoped>
#navbar {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  min-width: 290px;
  align-items: center;
  background: #a01a23;
  color: white;
  min-height: 100px;
  height: 100px;
  gap: 15px;
  font-size: 150%;
}

#nav_options {
  display: flex;
  justify-content: flex-end;
  gap: 25px;
}

#website_title {
  display: flex;
  align-items: center;
  font-weight: 550;
  white-space: nowrap;
}

#website_title,
#nav_options {
  flex: 1;
}

li {
  list-style: none;
}

.link {
  margin: 15px 20px;
}

.link:hover {
  cursor: pointer;
}

#nav_list {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  gap: 25px;
  margin: 0;
  padding: 0;
}

a.router-link-exact-active {
  font-weight: bold;
}

.hamburger_icon {
  display: none;
}

@media (max-width: 775px) {
  .hamburger_icon {
    display: block;
  }

  #nav_list {
    flex-direction: column;
  }

  #nav_list li {
    width: 100%;
    margin: 30px 0px;
  }
}

@media (max-width: 430px) {
  #nav {
    height: auto;
    flex-wrap: wrap;
    justify-content: center;
  }

  #hamburger_small_screen {
    margin: 0px;
    text-align: center;
  }
}
</style>
