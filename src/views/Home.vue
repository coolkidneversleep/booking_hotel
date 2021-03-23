
<template>
<v-form>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
        >
        <v-text-field
            label="Filled"
            placeholder="Dense & Rounded"
            filled
            rounded
            dense
          ></v-text-field>
          </v-col>
          <v-col
          cols="12"
          sm="6"
          md="4"
        >
        <v-text-field
            label="Filled"
            placeholder="Dense & Rounded"
            filled
            rounded
            dense
          ></v-text-field>
          </v-col>
          </v-row>
    </v-container>
  </v-form>

</template>

<script>


export default {
  name: 'Home',
  components: {
    
  }
}
</script>
<style>
#side{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>