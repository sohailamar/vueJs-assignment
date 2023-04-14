<template>
  <v-app>
    <v-app-bar app color="primary" dark>

      <v-toolbar-title class="v-app-bar-title__content">
        Fruits
      </v-toolbar-title>

      <v-tabs right>
        <v-tab><router-link to="/" class="links" exact>Home</router-link></v-tab>
        <v-tab><router-link to="/favourite" class="links" exact>Favorite Fruits</router-link></v-tab>
        
      </v-tabs>
      <v-spacer />


    </v-app-bar>
   
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>
<style>
.v-app-bar-title__content {
  width: 200px !important;
}

.links {
  color: white !important;
  text-decoration: none !important;
}
</style>
