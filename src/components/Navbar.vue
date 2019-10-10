<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item navbar-item-logo" href="#">
        <img src="/img/compareclub-logo.svg" width="112" height="28">
      </a>

      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a href="#" class="navbar-item" v-for="menu in menus" :key="menu">{{ menu }}</a>
      </div>

      <div class="navbar-end">
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            <i class="fas fa-user-circle fa-lg user-avatar"></i>&nbsp;Hi, Jennifer
          </a>

        <div class="navbar-dropdown is-right">
          <a class="navbar-item">
            Profile
          </a>
          <a class="navbar-item">
            Other Menu
          </a>
          <hr class="navbar-divider">
          <div class="navbar-item">
            Logout
          </div>
        </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menus: ['Groceries', 'Fuel', 'Insurance', 'Credit', 'Bills', 'About Us', 'Blog']
    }
  }
}
</script>