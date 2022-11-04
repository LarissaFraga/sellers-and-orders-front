<template>
  <q-page class="column items-center justify-evenly">
    <div class="sellersCards">
      <OutlinedCard
        class="sellerCard"
        v-for="seller in sellers"
        :key="seller.id"
        :sellerNumber="seller.id"
        :total="calculateTotalPerSeller(seller.id)"
      />
    </div>
    <div class="filters">
      <q-select
        class="filter"
        outlined
        v-model="seller"
        :options="sellersOptions"
        label="All sellers"
      />
      <q-select
        class="filter"
        outlined
        v-model="country"
        :options="countriesOptions"
        label="All countries"
      />
      <q-btn
        outline
        color="primary"
        label="Clear Filters"
        @click="clearAllFilters()"
      />
      <q-btn color="primary" label="Search" @click="search()" />
    </div>
    <div class="q-pa-md">
      <q-table :rows="rows" :columns="columns" row-key="name" />
    </div>
  </q-page>
</template>

<script lang="ts">
import api from 'components/api';
import { defineComponent } from 'vue';
import { Order, Seller } from 'components/models';
import OutlinedCard from 'components/OutlinedCard.vue';

export default defineComponent({
  name: 'OrdersPage',
  components: {
    OutlinedCard,
  },
  data() {
    return {
      seller: '',
      country: '',
      sellersOptions: new Array<number>(),
      countriesOptions: new Array<string>(),
      orders: new Array<Order>(),
      sellers: new Array<Seller>(),
      columns: [
        {
          name: 'orderId',
          required: true,
          label: 'Order Id',
          align: 'left',
          field: 'orderId',
          sortable: true,
        },
        {
          name: 'product',
          align: 'center',
          label: 'Products',
          field: 'product',
          sortable: true,
        },
        { name: 'price', label: 'Price', field: 'price', sortable: true },
        { name: 'seller', label: 'Seller', field: 'seller', sortable: true },
        { name: 'country', label: 'Country', field: 'country', sortable: true },
      ],
      rows: new Array<Order>(),
    };
  },
  methods: {
    async getOrders() {
      await api.get('/orders').then((res) => (this.orders = res.data.orders));
      this.rows = this.orders;
      this.getFiltersOptions();
    },
    async getSellers() {
      const response = await api.get('/sellers');
      this.sellers = response.data.sellers;
    },
    calculateTotalPerSeller(id: number) {
      const total = this.orders
        .filter((order) => order.seller === id)
        .reduce((acc, order) => acc + order.price, 0);
      return total;
    },
    getFiltersOptions() {
      this.sellersOptions = [
        ...new Set(this.orders.map((order) => order.seller)),
      ];
      this.countriesOptions = [
        ...new Set(this.orders.map((order) => order.country)),
      ];
    },
    clearAllFilters() {
      this.seller = '';
      this.country = '';
      this.rows = this.orders;
    },
    filterBySeller() {
      console.log(this.seller);
      this.rows = this.orders.filter(
        (order) => order.seller === parseInt(this.seller)
      );
    },
    filterByCountry() {
      this.rows = this.orders.filter((order) => order.country === this.country);
    },
    search() {
      if (this.seller !== '' && this.country !== '') {
        this.filterBySeller();
        this.filterByCountry();
      } else if (this.seller !== '') {
        this.filterBySeller();
      } else if (this.country !== '') {
        this.filterByCountry();
      }
    },
  },
  mounted() {
    this.getOrders();
    this.getSellers();
  },
});
</script>

<style lang="scss" scoped>
.q-pa-md {
  width: 850px;
  padding: 16px 0;
}

.sellersCards {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  width: 850px;
  margin-top: 16px;

  .sellerCard {
    width: 200px;
  }
}

.filters {
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: flex-end;
  width: 850px;
  margin-top: 16px;

  .filter {
    width: 200px;
  }
}
</style>
