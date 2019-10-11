<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item navbar-item-logo" href="#">
        <img src="/img/compareclub-logo.svg" width="112" height="28">
      </a>

      <div class="columns is-mobile is-gapless navbar-burger-container">
        <div class="column user-avatar-mobile-column">
          <i class="fas fa-user-circle fa-lg user-avatar user-avatar-mobile"></i>
        </div>
        <div class="column">
          <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="compareclub-navbar">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      </div>
    </div>

    <div id="compareclub-navbar" class="navbar-menu">
      <div class="navbar-start">
        <a href="#" class="navbar-item" v-for="menu in menus" :key="menu">{{ menu }}</a>
      </div>

      <div class="navbar-end">
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            <i class="fas fa-user-circle fa-lg user-avatar user-avatar-original"></i>&nbsp;Hi, Jennifer
          </a>

          <div class="navbar-dropdown is-right">
            <a class="navbar-item">Profile</a>
            <a class="navbar-item">Other Menu</a>
            <a class="navbar-item">Logout</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  mounted() {
    document.addEventListener('DOMContentLoaded', () => {
      // Get all "navbar-burger" elements
      const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

      // Check if there are any navbar burgers
      if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach( el => {
          el.addEventListener('click', () => {

            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');

          });
        });
      }
    });
  },
  data() {
    return {
      menus: ['Groceries', 'Fuel', 'Insurance', 'Credit', 'Bills', 'About Us', 'Blog']
    }
  }
}
</script>