<template>
  <div id="landingPage">
    <v-row style="padding-top: 70px">
      <v-col cols="12" sm="5" style="padding-left:100px">
        <v-card style="padding:20px">
          <v-row justify="start">
            <h2>My Booking</h2>
          </v-row>

          <v-row style="padding-bottom:0px">
            <v-col cols="12" sm="12" style="padding-bottom:0px">
              <v-text-field
              v-model="booking_id"
                label="Your Booking ID"
                background-color="#F0F2FF"
                filled
                rounded
                dense
                width="240px"
                height="38px"
                style="padding-bottom:0px"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row style="padding-bottom:0px">
            <v-col cols="12" sm="12" style="padding-bottom:0px">
              <v-file-input
              v-model="image"
                label="File input"
                filled
                rounded
                background-color="#F0F2FF"
                prepend-icon="mdi-camera"
              ></v-file-input>
            </v-col>
          </v-row>

          <v-row
            style="padding-buuton:70px; padding-top:0px; padding-left:140px"
          >
            <v-btn
              rounded
              dark
              large
              elevation="2"
              color="#7586F7"
              width="150px"
              height="50px"
              style="text-transform:Capitalize"
            >
              Upload
            </v-btn>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="12" sm="7" style="padding-top:40px">
        <v-img src="../assets/book_room.jpeg"></v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// import axios from 'axios';
export default {
  name: "Mybook",
  components: {},

  data: ()=> ({
      booking_id: "",
      image: "",

  }),
  methods: {

  }
};
</script>
<style scoped>
#landingPage {
  background-color: #eaf3fa;
  height: 100vw;
}
h2 {
  padding-top: 22px;
  padding-bottom: 15px;
  text-transform: capitalize;
  padding-left: 20px;
  color: #534348;
  font-size: 19px;
  font-weight: 700;
}
</style>
