<template>
  <v-row>
    <v-col cols="12" sm="7">
      <v-img src="../assets/home.jpg"></v-img>
    </v-col>
    <v-col cols="12" sm="5" style="padding-top:64px;">
      <div class="form">
        <h1>Enjoy the</h1>
        <h1>holiday with</h1>
        <h1>our hotel</h1>
      </div>
      <v-form>
        <v-container class="box">
          <v-col>
            <v-text-field
            class="fillColor"
              label="Enter email"
              :rules="[rules.required]"
              filled
              rounded
              dense
              background-color=#F0F2FF
              width="295px"
              height="47px"
            >
            </v-text-field>
            <v-text-field
            background-color=#F0F2FF
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              @click:append="show1 = !show1"
              label="Enter password"
              filled
              rounded
              dense
            >
            </v-text-field>
            <div class="text-center">
              <v-btn rounded dark block large elevation="2" color="#7586F7" href="/booking">
                Sign Up
              </v-btn>
            </div>
            <v-row align="center">
              <v-divider></v-divider>
              <p>or continue with</p>
              <v-divider></v-divider>
            </v-row>
            <div class="google">
            <v-btn  height="50px" width="70px" rounded absolute>
              <v-img src="../assets/google_logo.png" height="33px" width="33px"></v-img>
            </v-btn>
            </div>
          
            <div class ="link">
            <p>Already have an account ? <a href="/"> Sign In</a> </p> 
            </div>
          </v-col>
        </v-container>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Signup",

  data() {
    return {
      show1: false,
      password: "",
      rules: {
        required: (value) => !!value || "Required.",
        emailMatch: () => `The email and password you entered don't match`,
      },
    };
  },
};
</script>
<style scoped>
.google{
  padding-left: 190px;
  padding-top: 16px
}
.form{
  padding-top: 10px;
  color: #534348;
  font-style: normal;
font-weight: bold;
font-size: 40px;
line-height: 55px;
}
.link{
  padding-top: 20px;
  padding-left: 116px;
}
.link p{
  font-size: 14px;
  color: gray;
}
.googlebutton {
  padding-top:20px ;
}
h1 {
  text-transform: uppercase;
  font-size: 45px;
}
.v-divider {
  margin-top: 50px;
  margin-left: 10px;
}
.col-12 img {
  padding-left: 0px;
}
.col-12 h1 {
  padding-left: 40px;
}

.v-btn {
  text-transform: capitalize;
}
p {
  font-size: 13px;
  color: grey;
  margin-top: 62px;
  margin-left: 10px;
}
.box{
  padding-right: 100px;
}
</style>
