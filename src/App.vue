<script setup lang="ts">
</script>

<template>
  <div class="header"></div>
  <div class="content"></div>
</template>

<style scoped>
.header{
  width: 100%;
  height: 100px;
  background-color: aqua;
}
.content{
  width: 100%;
  height: calc(100% - 100px);
  background-color: brown;
}
</style>
