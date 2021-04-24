<template>
  <div id="landingPage">
    <v-row style="padding-top: 70px">
      <v-col cols="12" sm="5" style="padding-left:100px">
        <v-card style="padding:20px">
          <v-row justify="start">
            <h2>Book a room</h2>
          </v-row>
          <v-row style="padding-bottom:0px">
            <v-col cols="12" sm="6" style="padding-bottom:0px">
              <v-text-field
                v-model="firstname"
                label="Firstname"
                background-color="#F0F2FF"
                filled
                rounded
                dense
                width="240px"
                height="38px"
                style="padding-bottom:0px"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" style="padding-bottom:0px">
              <v-text-field
                v-model="lastname"
                label="Lastname"
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
            <v-col cols="12" sm="6" style="padding-bottom:0px">
              <v-text-field
                v-model="email"
                label="Email"
                background-color="#F0F2FF"
                filled
                rounded
                dense
                width="240px"
                height="38px"
                style="padding-bottom:0px"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" style="padding-bottom:0px">
              <v-text-field
                v-model="phonenumber"
                label="Phone Number"
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
            <v-col cols="12" sm="6" style="padding-bottom:0px">
              <v-select
                v-model="items"
                :items="items"
                filled
                label="Room Types"
                background-color="#F0F2FF"
                style="padding-bottom:0px"
              ></v-select>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="rooms"
                label="Rooms"
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
            <v-col cols="12" sm="6" style="padding-bottom:0px">
              <v-text-field
                v-model="adults"
                label="Adults"
                background-color="#F0F2FF"
                filled
                rounded
                dense
                width="240px"
                height="38px"
                style="padding-bottom:0px"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" style="padding-bottom:0px">
              <v-text-field
                v-model="children"
                label="Childrens"
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
            <v-col
              cols="12"
              sm="6"
              style="padding-bottom:30px; padding-left:30px;padding-top:27px"
            >
              <Datepicker
                v-model="checkin"
                placeholder="CheckIn-date"
                background-color="#F0F2FF"
              ></Datepicker>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              style="padding-bottom:30px; padding-left:30px;padding-top:27px"
            >
              <Datepicker
                v-model="checkout"
                placeholder="CheckOut-date"
                background-color="#F0F2FF"
              ></Datepicker>
            </v-col>
          </v-row>
          <v-row
            style="padding-buuton:70px; padding-top:0px; padding-left:110px"
          >
          <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
     <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="mybooking"
              dark
              large
              elevation="2"
              color="#7586F7"
              width="250px"
              height="50px"
              v-bind="attrs"
              v-on="on"
            >
              Book Now
            </v-btn>
            </template>
      <v-card>
        <v-card-title class="headline">
          Booking Success !
        </v-card-title>
        <v-card-text>Please check your email to verify your booking</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            ok
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
import Datepicker from "vuejs-datepicker";
import axios from "axios";
export default {
  name: "BookingForm",
  components: {
    Datepicker,
  },

  data: () => ({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    items: ["Single", "Double", "Queen", "King", "Suite"],
    rooms: "",
    adults: "",
    children: "",
    checkin: "",
    checkout: "",
    dialog: false,
  }),
  methods: {
    mybooking() {
      axios.post( 'http://192.168.133.10:3000/reserve',{
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        phonenumber: this.phonenumber,
        items: this.items,
        rooms: this.rooms,
        adults: this.adults,
        children: this.children,
        checkin: this.checkin,
        checkout: this.checkout,
      })
    },
  },
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
