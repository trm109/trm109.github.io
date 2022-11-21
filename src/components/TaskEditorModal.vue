<template>
  <div class="modal">
    <div class="modal-inner">
      <slot />
      <span> </span>
      <button class="modal-close" @click="toggleModal()">Close Modal</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["toggleModal",],
};
</script>
<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-inner {
  background: #fff;
  padding: 32px;
  color: black;
}
</style>
