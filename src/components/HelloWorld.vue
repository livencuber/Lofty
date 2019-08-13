<template>
  <div class="container">
    <Header></Header>
    <div class="box-items">
      <div class="box" v-for="(listItem, index) in list" :key="index"></div>
    </div>
  </div>
</template>

<script>

import Header from './Header';

export default {
  components: {
    Header,
  },

  data() {
    return {
      list: [
        { name: 'test' },
        { name: 'test' },
        { name: 'test' },
        { name: 'test' },
        { name: 'test' },
        { name: 'test' },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.box-items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  padding: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
}

.box {
  min-width: 100%;
  height: 200px;
  background: darkgray;
}
</style>
