<template>
<div class="fake_body">

<div class="hide_top_nav"></div>

<div class="center">
    <input type="checkbox" id="show">
    <label class="show-icon" >UmiRecorder</label>
    <div class="show-label-btn">
      <label class="show-label" >Please Login/Sinup first.</label>
      <label for="show" class="show-btn">Login/Signup</label>
    </div>
    <div class="form_container">
        <label for="show" class="close-btn fas fa-times" title="close"></label>
        <div class="text" ref="form_icon">Login</div>
        <div class="fake_form">
            <div class="data" v-show="showNameInput">
              <label>Name</label>
              <input type="text" v-model="name" required>
            </div>
            <div class="data">
                <label>Email</label>
                <input type="text" v-model="email" required>
            </div>
            <div class="data">
                <label>Password</label>
                <input type="password" v-model="password" required>
            </div>
              <div class="forgot-pass"><a href=""><!--Forgot Password?-->&#8203;</a></div>
            <div class="btn">
                <div class="inner"></div>
                <button @click="send_data">enter</button>
            </div>
            <div class="signup-link" >
              <a style="cursor:pointer;" v-on:click="login_signup_btn" ref="login_signup_btn">
                Sign Up
              </a>
            </div>
          </div>
    </div>
</div>

</div>
</template>
  
<script>

export default {
    name: 'LoginButton',
    data() {
          return {
            login_signup: "login",
            email: "",
            password: "",
            name: ""
          }
      },
    methods:{
      login_signup_btn(){
        if (this.login_signup == "login") {
          this.$refs['form_icon'].innerText = 'Sign Up';
          this.$refs['login_signup_btn'].innerText = "Login";
          this.login_signup = "signup";

        } else if(this.login_signup == "signup") {
          this.$refs['form_icon'].innerText = 'Login';
          this.$refs['login_signup_btn'].innerText = "Signup";
          this.login_signup = "login";

        }
        console.log(this.login_signup);
      },
      send_data(){
        let self = this;

        let url;
        let data;
        if (self.login_signup == "login") {
          url = "http://localhost:8080/auth/login";
          data = {
            "email": self.email,
            "password": self.password
          }
        }
        if (self.login_signup == "signup") {
          url = "http://localhost:8080/auth/signup";
          data = {
            "email": self.email,
            "password": self.password,
            "name": self.name
          }
        }
        self.$apiUtil.postApi(url, data,
                      response => {
                        if (response.status === 401 || response.status === 400) {
                          alert(response.msg);
                          return;
                        }
                        self.$cache.loggedin = true;
                        self.$router.push({path: 'VideosListPage'});
                      },
                      () => {
                        alert("系統錯誤");
                      });
                     
        //self.$router.push({path: 'VideosListPage'});
      }
    },
    computed: {
      showNameInput() {
        if (this.login_signup == "signup")
          return true;
        else if(this.login_signup == "login")
          return false;

        return false;
      }
    },
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Monoton&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');
    
    .fake_body{
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        height: 100vh;
        width: 100%;
        background: linear-gradient(115deg, #56d8e4 10%, #9f01ea 90%);
    }

    .hide_top_nav{
        position: fixed;
        top: 0%;
        left: 0%;
        right: 0%;
        height: 56px;
        z-index: 200;
        background: linear-gradient(115deg, #41a3ac 10%, #8a01ca 90%);
        opacity: 0.7;
        
    }

    .show-icon, .show-label-btn, .form_container{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .show-label-btn{
      display: flex;
      flex-direction: column;
      margin-top: 20px;
    }
    .show-icon{
        top: 40%;
        padding: 10px 20px;
        font-size: 4em;
        font-weight: 500;
        color:  #fff;
        font-family: 'Monoton', cursive;
    }
    .show-label{
        margin: auto;
        padding: 10px 20px;
        font-size: 20px;
        font-weight: 500;
        color:  #fff;
    }
    .show-btn{
        margin: auto;
        background: #fff;
        padding: 10px 20px;
        font-size: 20px;
        font-weight: 500;
        color: #3498db;
        cursor: pointer;
        box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    }

    input[type="checkbox"]{
    display: none;
    }
    .form_container{
      display: none;
      background: #fff;
      width: 410px;
      padding: 30px;
      box-shadow: 0 0 8px rgba(0,0,0,0.1);
    }
    #show:checked ~ .form_container{
      display: block;
    }
    .form_container .close-btn{
      position: absolute;
      right: 20px;
      top: 15px;
      font-size: 18px;
      cursor: pointer;
    }
    .form_container .close-btn:hover{
      color: #3498db;
    }
    .form_container .text{
      font-size: 35px;
      font-weight: 600;
      text-align: center;
    }
    .form_container .fake_form{
      margin-top: -20px;
    }
    .form_container .fake_form .data{
      height: 45px;
      width: 100%;
      margin: 40px 0;
    }
    .fake_form .data label{
      font-size: 18px;
    }
    .fake_form .data input{
      height: 100%;
      width: 100%;
      padding-left: 10px;
      font-size: 17px;
      border: 1px solid silver;
    }
    .fake_form .data input:focus{
      border-color: #3498db;
      border-bottom-width: 2px;
    }
    .fake_form .forgot-pass{
      margin-top: -8px;
    }
    .fake_form .forgot-pass a{
      color: #3498db;
      text-decoration: none;
    }
    .fake_form .forgot-pass a:hover{
      text-decoration: underline;
    }
    .fake_form .btn{
      margin: 30px 0;
      height: 45px;
      width: 100%;
      position: relative;
      overflow: hidden;
    }
    .fake_form .btn .inner{
      height: 100%;
      width: 300%;
      position: absolute;
      left: -100%;
      z-index: -1;
      background: -webkit-linear-gradient(right, #56d8e4, #9f01ea, #56d8e4, #9f01ea);
      transition: all 0.4s;
    }
    .fake_form .btn:hover .inner{
      left: 0;
    }
    .fake_form .btn button{
      height: 100%;
      width: 100%;
      background: none;
      border: none;
      color: #fff;
      font-size: 18px;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 1px;
      cursor: pointer;
    }
    .fake_form .signup-link{
      text-align: center;
    }
    .fake_form .signup-link a{
      color: #3498db;
      text-decoration: none;
    }
    .fake_form .signup-link a:hover{
      text-decoration: underline;
    }
</style>