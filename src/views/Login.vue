<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login({ email, password })">
      <input v-model="email" type="email" placeholder="Ingrese email" />
      <input v-model="password" type="password" placeholder="Password" />
      <button type="submit">Login</button>
      <p>{{ error }}</p>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["login"]),
  },
  computed: {
    ...mapState(["error"]),
  },
};
</script>

<style>
</style>