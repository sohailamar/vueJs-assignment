<template>
  <v-container>
    <v-card>
      <v-card-title>
        Fruit Lists
        <v-spacer></v-spacer>
        <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
      </v-card-title>
      <!-- <v-data-table :headers="headers" :items="users" :search="search" @click:row="selectRow" :value="selected">
      </v-data-table> -->
      <v-data-table :headers="headers" :items="users" :search="search" @click:row="selectRow" :value="selected"
        :loading="loading"></v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import axios from 'axios';
export default {
  name: 'HelloWorld',

  data() {
    return {
      search: '',
      users: [],
      loading: false,
      headers: [
        {
          text: 'Name',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Family', value: 'family' },
        { text: 'Order', value: 'orderr' },
        { text: 'Genus', value: 'genus' },
        { text: 'Iron (%)', value: 'favourite' },
        { text: 'nutritions (%)', value: 'total' },
      ],
      selected: [],
    }
  },
  methods: {
    selectRow(item) {
      this.loading = true;
      axios.patch(`http://localhost:8080/fruits/${item.id}`, null, {
        params: {
          favourite: true
        }
      })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          this.loading = false;
        });
    }
  },
  mounted() {
    axios.get('http://localhost:8080/fruits')
      .then(response => {
        this.users = response.data;
        this.users.forEach(item => {
          const total = item.nutritions.calories + item.nutritions.carbohydrates + item.nutritions.protein + item.nutritions.sugar + item.nutritions.fat;
          item.total = total.toFixed(2);
        });
        console.log(this.users);
      })
      .catch(error => {
        console.log(error);
      });
  }
}
</script>
