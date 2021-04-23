<template>
  <div id="landingPage">
    <v-row style="padding-top: 70px">
      <v-col cols="12" sm="5" style="padding-left:100px">
        <v-card style="padding:20px">
          <v-row justify="start">
            <h2>Cancle Booking</h2>
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
              <v-text-field
                v-model="booking_id"
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
          </v-row>
          <v-row style="padding-bottom:0px">
            <v-col cols="12" sm="12" style="padding-bottom:0px">
              <v-text-field
                v-model="booking_id"
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
          <v-row
            style="padding-buuton:70px; padding-top:0px; padding-left:140px"
          >
            <v-dialog v-model="dialog" persistent max-width="290">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  rounded
                  dark
                  large
                  elevation="2"
                  color="#7586F7"
                  width="150px"
                  height="50px"
                  style="text-transform:Capitalize"
                  @click="verifyBooking"
                  v-bind="attrs"
                  v-on="on"
                >
                  Accept
                </v-btn>
              </template>
              <v-card>
                <v-card-title class="headline">
                  Cancle Success !
                </v-card-title>
                <v-card-text
                  >Hope we can take care of you next time.</v-card-text
                >
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="green darken-1" text @click="dialog = false">
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
import axios from "axios";
export default {
  name: "Canclebook",
  components: {},

  data: () => ({
    booking_id: "",
    image: null,
    dialog: false,
  }),
  methods: {
    verifyBooking() {
      const formData = new FormData();
      formData.append("booking_id", this.booking_id);
      this.image.filename = this.booking_id;
      formData.append("images", this.image);
      axios
        .post("http://localhost:3000/slip", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(() => {
          console.log("Success");
        });
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
