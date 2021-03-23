
<template >
<div id ="landingPage">
<v-row style="padding-top: 70px">
    <v-col cols="12" sm="5" style="padding-left:100px">
    <v-card  style="padding:20px">
      <v-row justify="start">
      <h2>My Booking</h2>
      </v-row>
      
      <v-row style="padding-bottom:0px">
         <v-col
          cols="12"
          sm="6"
          style="padding-bottom:0px"
        >
          <v-text-field
            label="Firstname"
             background-color=#F0F2FF
            filled
            rounded
            dense
            width="240px" height="38px"
            style="padding-bottom:0px"
          ></v-text-field>
        </v-col>
        <v-col 
        cols="12"
          sm="6"
          style="padding-bottom:0px"
        >
        <v-text-field
            label="Lastname"
             background-color=#F0F2FF
            filled
            rounded
            dense
            width="240px" height="38px"
            style="padding-bottom:0px"
          ></v-text-field>
        </v-col>
       </v-row>
       <v-row
       style="padding-bottom:0px">
         <v-col
          cols="12"
          sm="6"
          style="padding-bottom:0px"
        >
          <v-text-field
            label="Email"
             background-color=#F0F2FF
            filled
            rounded
            dense
            width="240px" height="38px"
            style="padding-bottom:0px"
          ></v-text-field>
        </v-col>
        <v-col 
        cols="12"
          sm="6"
          style="padding-bottom:0px"
        >
        <v-text-field
            label="Phone Number"
             background-color=#F0F2FF
            filled
            rounded
            dense
            width="240px" height="38px"
            style="padding-bottom:0px"
          ></v-text-field>
        </v-col>
       </v-row>
       <v-row
       style="padding-bottom:0px">
         <v-col
          cols="12"
          sm="6"
          style="padding-bottom:0px"
          
        >
          <v-select
          :items="items"
          filled
          label="Room Types"
          background-color="#F0F2FF"
          style="padding-bottom:0px"
        ></v-select>
        </v-col>
        <v-col 
        cols="12"
          sm="6"
          
        >
        <v-text-field
            label="Rooms"
             background-color=#F0F2FF
            filled
            rounded
            dense
            width="240px" height="38px"
            style="padding-bottom:0px"
          ></v-text-field>
        </v-col>
       </v-row>
       <v-row style="padding-bottom:0px">
         <v-col
          cols="12"
          sm="6"
          style="padding-bottom:0px"
        >
          <v-text-field
            label="Adults"
             background-color=#F0F2FF
            filled
            rounded
            dense
            width="240px" height="38px"
            style="padding-bottom:0px"
          ></v-text-field>
        </v-col>
        <v-col 
        cols="12"
          sm="6"
          style="padding-bottom:0px"
        >
        <v-text-field
            label="Childrens"
             background-color=#F0F2FF
            filled
            rounded
            dense
            width="240px" height="38px"
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
      <Datepicker placeholder="CheckIn-date" background-color=#F0F2FF></Datepicker>
       
         
        </v-col>
        <v-col
          cols="12"
          sm="6"
          style="padding-bottom:30px; padding-left:30px;padding-top:27px"

        >
      <Datepicker placeholder="CheckOut-date" background-color=#F0F2FF></Datepicker>
       
         
        </v-col>
       </v-row>
       <v-row style="padding-buuton:70px; padding-top:0px; padding-left:110px">
           <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn rounded dark  large elevation="2" color="#7586F7" width="250px" height="50px" style="text-transform:Capitalize"
        v-bind="attrs"
          v-on="on"
        >
                Upload Your Slip Payment
              </v-btn>
      </template>
      <v-card style="padding:40px">
        <v-file-input
    label="Drop your image here"
    filled
    prepend-icon="mdi-camera"
  ></v-file-input>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="red darken-1"
            text
            @click="dialog = false"
          >
            Cancle
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Upload
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
import Datepicker from 'vuejs-datepicker';
export default {
  name: "Mybook",
  components: {
            Datepicker
        },

    data () {
      return {
        dialog: false,
      }
    },
  };
</script>
<style scoped>
#landingPage{
    background-color: #EAF3FA;
    height: 100vw;
}
h2{
    padding-top: 22px;
    padding-bottom: 15px;
    text-transform: capitalize;
    padding-left: 20px;
    color: #534348;
    font-size: 19px;
    font-weight:700;
}
</style>

