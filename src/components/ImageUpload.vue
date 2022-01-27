<template>
  <label class="btn btn-primary">
    Upload <input type="file" hidden @change="upload($event.target.files)" />
  </label>
</template>

<script lang="ts">
import axios from "axios";
import { Prop, SetupContext } from "vue";

export default {
  name: "ImageUpload",
  emits: ["uploaded"],
  setup(_: Prop<never>, context: SetupContext) {
    const upload = async (files: FileList | null) => {
      if (files === null) return;

      const file = files.item(0);

      if (file === null) return;

      const formData = new FormData();
      formData.append("image", file);

      const { data } = await axios.post("upload", formData);

      context.emit("uploaded", data.url);
    };

    return {
      upload,
    };
  },
};
</script>

<style scoped></style>
