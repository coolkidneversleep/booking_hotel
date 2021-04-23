<template>
  <v-app>
    <v-app-bar
      app
      color=#EAF3FA
      dark
      flat
    >
    <v-spacer></v-spacer>
      <v-btn
        href="/booking"
        text
      >
        <h2>Home</h2>
      </v-btn>
      <v-btn
        href="/mybooking"
        text
      >
        <h2>My booking</h2>
      </v-btn>
      
    </v-app-bar>

    <v-main>
      <Cancelbook/>
    </v-main>
  </v-app>
</template>

<script>
import Cancelbook from '../components/Cancelbook';

export default {
  name: 'Cancel_page',

  components: {
    Cancelbook,
  },

  data: () =>
    Cancelbook({
    //
  }),
};
</script>
<style>
h2 {
  color: #534348;
  font-size: 18px;
  text-transform: capitalize;
  font-weight: 700;
}
</style>