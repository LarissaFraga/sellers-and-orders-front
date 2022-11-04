<template>
  <div class="color">
    <q-card flat bordered class="my-card">
      <q-card-section class="q-pt-none">
        <p class="sellerTitle">Total of Seller #{{ sellerNumber }}</p>
      </q-card-section>

      <q-separator inset />

      <q-card-section
        ><p class="sellerTotal">${{ total }}</p></q-card-section
      >
    </q-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OutlinedCard',
  props: {
    sellerNumber: {
      type: Number,
      default: 0,
    },
    total: {
      type: Number,
      default: 0,
    },
  },
});
</script>

<style lang="scss" scoped>
.sellerTitle {
  margin-top: 16px;
  font-size: 16px;
}

.sellerTotal {
  display: flex;
  justify-content: flex-end;
  font-size: 20px;
}
.color {
  color: #89299b;
}
</style>
