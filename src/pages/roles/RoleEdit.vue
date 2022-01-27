<template>
  <form @submit.prevent="submit">
    <div class="mb-3 mt-3 row">
      <label class="col-sm-2 col-form-label">Name</label>
      <div class="col-sm-10">
        <input
          v-model="form.name"
          class="form-control"
          name="name"
          type="text"
        />
      </div>
    </div>

    <div class="mb-3 row">
      <label class="col-sm-2 col-form-label">Permissions</label>
      <div class="col-sm-10">
        <div
          v-for="permission in permissionList"
          :key="permission.id"
          class="form-check form-check-inline col-3"
        >
          <input
            :checked="checked(permission.id)"
            :value="permission.id"
            class="form-check-input"
            type="checkbox"
            @change="select(permission.id, $event.target.checked)"
          />
          <label class="form-check-label">{{ permission.name }}</label>
        </div>
      </div>
    </div>

    <button class="btn btn-outline-secondary">Save</button>
  </form>
</template>

<script lang="ts">
import { onMounted, reactive, ref } from "vue";
import axios from "axios";
import { useRoute, useRouter } from "vue-router";
import { Permission } from "@/models/permission";

export default {
  name: "RoleEdit",
  setup() {
    const { push } = useRouter();
    const { params } = useRoute();

    const form = reactive({
      name: "",
      permissions: [] as number[],
    });

    const permissionList = ref([]);

    onMounted(async () => {
      const { data } = await axios.get("permissions");
      permissionList.value = data;

      const response = await axios.get(`roles/${params.id}`);
      form.name = response.data.name;
      form.permissions = response.data.permissions.map((p: Permission) => p.id);
      console.log("ID of Permissions: " + response.data.permissions);
    });

    const select = (id: number, checked: boolean) => {
      if (checked) {
        form.permissions = [...form.permissions, id];
        return;
      }

      form.permissions = form.permissions.filter((p) => p !== id);
    };

    const submit = async () => {
      await axios.put(`roles/${params.id}`, form);
      await push("/roles");
    };

    const checked = (id: number) => {
      return form.permissions.some((p) => p === id);
    };

    return {
      form,
      permissionList,
      select,
      submit,
      checked,
    };
  },
};
</script>
