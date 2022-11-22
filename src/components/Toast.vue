<template>
  <div class="toast-wrapper">
    <div class="toast">
      <div class="panel panel-primary">
        <div class="panel-heading">
          <h3 class="panel-title">Panel title</h3>
        </div>
        <div class="panel-body">
          Panel content
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.toast-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  pointer-events: none;
}
</style>