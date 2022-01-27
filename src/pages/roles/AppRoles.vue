<template>
  <div class="pt-3 pb-2 mb-3 border-bottom">
    <router-link class="btn btn-sm btn-outline-secondary" to="/roles/create"
      >Add</router-link
    >
  </div>
  <div class="table-responsive">
    <table class="table table-striped table-sm">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="role in roles" :key="role.id">
          <td>{{ role.id }}</td>
          <td>{{ role.name }}</td>
          <td>
            <div class="btn-group mr-2">
              <router-link
                :to="`/roles/${role.id}/edit`"
                class="btn btn-sm btn-outline-secondary"
                >Edit
              </router-link>
              <a
                class="btn btn-sm btn-outline-secondary"
                href="javascript:void(0)"
                @click="remove(role.id)"
                >Delete</a
              >
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from "vue";
import axios from "axios";
import { Role } from "@/models/role";

export default {
  name: "AppRoles",
  setup() {
    const roles = ref([]);

    onMounted(async () => {
      const { data } = await axios.get("roles");
      roles.value = data;
    });

    const remove = async (id: number) => {
      if (confirm("Are you sure?")) {
        await axios.delete(`roles/${id}`);
        roles.value = roles.value.filter((role: Role) => role.id !== id);
      }
    };

    return {
      roles,
      remove,
    };
  },
};
</script>

<style scoped></style>
