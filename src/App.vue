<template>
  <nav>
    <router-link to="/login">Login</router-link> |
    <router-link to="/register">Register</router-link>
  </nav>
  <router-view></router-view>
</template>

<style>
nav {
  text-align: center;
  padding: 10px;
}
nav a {
  margin: 0 10px;
  text-decoration: none;
  color: blue;
}
</style>
