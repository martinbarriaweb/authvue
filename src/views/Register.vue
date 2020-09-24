<template>
  <div>
    <h1>User register</h1>
    <form @submit.prevent="register({ email, password })">
      <input v-model="email" type="text" placeholder="Ingrese email" />
      <input v-model="password" type="text" placeholder="Ingrese password" />
      <input
        v-model="confirm_password"
        type="text"
        placeholder="Confirme password"
      />
      <button :disabled="!disabled" type="submit">Registrar usuario</button>
    </form>
    <span v-if="error"> {{ error.message }} </span>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      confirm_password: "",
    };
  },
  created() {},
  methods: {
    ...mapActions(["register"]),
  },
  computed: {
    ...mapState(["error"]),
    disabled() {
      return (
        this.password === this.confirm_password && this.password.trim() !== ""
      );
    },
  },
};
</script>

<style>
</style>