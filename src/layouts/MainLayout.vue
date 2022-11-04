<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-space></q-space>
        <div class="buttons">
          <q-btn
            outline
            color="white"
            label="Orders"
            @click="navigateRoute('/')"
            :style="[isInfo ? '' : 'border: 2px solid;']"
          />
          <q-btn
            outline
            color="white"
            label="Info"
            @click="navigateRoute('/info')"
            :style="[isInfo ? 'border: 2px solid;' : '']"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainLayout',

  data() {
    return {
      isInfo: false,
    };
  },
  methods: {
    navigateRoute(routeName: string) {
      if (routeName === '/info') {
        this.isInfo = true;
      } else {
        this.isInfo = false;
      }
      this.$router.push(routeName);
    },
  },
});
</script>

<style lang="scss" scoped>
.buttons {
  display: flex;
  gap: 5px;
}
</style>
