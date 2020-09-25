<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/register">Register</router-link>
      <button @click="signOut">Sign Out</button>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["signOut"]),
  },
};
</script>
