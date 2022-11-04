<template>
  <q-page class="row items-start justify-between">
    <div class="main">
      <h3>Info</h3>
      <p class="devName">Dev: Larissa Fraga</p>
      <p>This mini-project was created by using:</p>
      <ul>
        <li>Vue 3</li>
        <li>Quasar 2</li>
        <li>Typescript</li>
        <li>SCSS</li>
        <li>HTML</li>
      </ul>
    </div>
  </q-page>
</template>

<script lang="ts">
export default {
  name: 'InfoPage',
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 16px;

  p {
    margin: 0;
  }

  ul {
    margin: 0;
  }

  h3 {
    margin-bottom: 16px;
  }
}

.devName {
  font-size: 16px;
}
</style>
