<template>
    <v-container>
        <v-card>
            <v-data-table :headers="headers" :items="users" :items-per-page="5" class="elevation-1"></v-data-table>
        </v-card>
    </v-container>
</template>
<script>
import axios from 'axios';
export default {


    data() {
        return {
            users: [],
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
        { text: 'nutritions (%)', value: 'nutritions.sugar' },
      ],
           

        }
    },
    mounted() {
        axios.get('http://localhost:8080/favourite_fruits')
            .then(response => {
                this.users = response.data;
            })
            .catch(error => {
                console.log(error);
            })
    },

}
</script>