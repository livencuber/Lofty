<template>
  <header>
    <AuthModal></AuthModal>
  </header>
</template>

<script>
import AuthModal from './AuthModal';

export default {
  components: {
    AuthModal,
  },
};
</script>

<style scoped>
  header {
    width: 100%;
    height: 50px;
    padding: 0 16px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background: darkgray;
    box-sizing: border-box;
  }
</style>
