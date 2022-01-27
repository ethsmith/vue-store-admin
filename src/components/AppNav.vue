<template>
  <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
    <a class="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#"
      >Company name</a
    >

    <nav class="my-2 my-md-0 mr-md-3">
      <router-link class="p-2 text-white text-decoration-none" to="/profile"
        >{{ name }}
      </router-link>
      <router-link
        class="p-2 text-white text-decoration-none"
        to="/login"
        @click="logout()"
        >Sign out</router-link
      >
    </nav>
  </nav>
</template>

<script lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import axios from "axios";
import { useStore } from "vuex";

export default {
  name: "AppNav",
  setup() {
    const name = ref("");
    const store = useStore();

    const user = computed(() => store.state.User.user);

    watch(user, () => {
      name.value = `${user.value.first_name} ${user.value.last_name}`;
    });

    const logout = async () => {
      await axios.post("logout");
    };

    return {
      name,
      logout,
    };
  },
};
</script>
