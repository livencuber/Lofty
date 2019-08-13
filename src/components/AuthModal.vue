<template>
  <div>
  <button type="button" @click="isOpen = true">
    SignIn
  </button>

  <div v-if="isOpen" class="modal" @click.self="close">
    <form class="modal-content" @submit.prevent="handleSubmit">
      <input type="text" v-model="name" required placeholder="Name"/>
      <input type="password" v-model="password" required placeholder="Password"/>
      <button type="submit" @click="isOpen = true">
        Subbmit
      </button>
     </form>
  </div>
  </div>
</template>

<script>
import { signIn } from '../api/axios';

export default {
  data() {
    return {
      isOpen: false,
      name: '',
      password: '',
    };
  },

  methods: {
    handleSubmit() {
      signIn({ name: this.name, password: this.password });
      alert('Send Request');
    },

    close() {
      this.isOpen = false;
    },
  },
};
</script>

<style scoped lang="scss">
.modal {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba( 0, 0, 0, 0.5 );
  top:0;
  left: 0;
  display: flex;
}
  .modal-content {
    min-width: 300px;
    background: white;
    margin: auto;
    display: flex;
    flex-direction: column;
    padding: 30px;

    input {
      margin: 16px 0;
      height: 40px;
    }

    button {
      height: 40px;
    }
  }
</style>
