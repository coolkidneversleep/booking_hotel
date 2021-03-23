<template>
  <v-app>
    <v-app-bar
      app
      color="transparent"
      style="position:absolute;top:0;left:0;width:100vw"
      flat
    >
    <v-spacer></v-spacer>
      
        <v-btn
        href="/"
        text
      >
        <h2>Sign In</h2>
      </v-btn>
      <v-btn
        href="/signup"
        text
      >
        <h2>Sign Up</h2>
      </v-btn>
    </v-app-bar>

    <v-main style="padding:0;">
      <Signup/>
    </v-main>
  </v-app>
</template>

<script>
import Signup from '../components/Signup';

export default {
  name: 'Signup_page',

  components: {
    Signup,
  },

  data: () => ({
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
