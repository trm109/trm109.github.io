<template>
  <button
    type="button"
    @click="onClick()"
    :style="{ background: color }"
    class="btn btn-primary"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: {
      type: String,
      default: "Button",
    },
    color: String,
  },
  methods: {
    onClick() {
      this.$emit("btn-click");
    },
  },
};
</script>
