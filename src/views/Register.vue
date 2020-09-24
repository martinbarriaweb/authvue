<template>
  <div>
    <h1>User register</h1>
    <form>
      <input v-model="email" type="text" placeholder="Ingrese email" />
      <input v-model="password" type="text" placeholder="Ingrese password" />
      <input
        v-model="confirm_password"
        type="text"
        placeholder="Confirme password"
      />
      <button type="submit">Registrar usuario</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      confirm_password: "",
    };
  },
};
</script>

<style>
</style>