<template>
    <div>
        <div class="navigation">
            <div class="left_part">
                <button v-on:click="sideNavToggle">
                    <div></div>
                    <div></div>
                    <div></div>
                  </button>
                <div class="logo">UmiRec</div>
            </div>
            <div class="middle_part">
                <select @change="selectOnChange($event)">
                    <option value="rec">&#xf03d;</option>
                    <option value="vid">&#xf167;</option>
                </select>
                <input type="text" name="" placeholder="please input url" ref="input">
                <button>Enter</button>
            </div>
            <div class="right_part">
                <!-- login -->
                <!-- 
                <div id="login_bar" ref="login_bar">
                    <i class="fa-solid fa-user-plus fa-lg" 
                        id="login_icon" ref="login_icon"  v-on:click="login()"
                        style="margin-right:12px; cursor:pointer;" 
                    ></i>
                </div>
                 -->
                <div id="loggedin_bar" ref="loggedin_bar">
                    <!-- loggedin -->
                    <i class="fa-solid fa-user fa-lg" 
                        id="loggedin_icon" ref="loggedin_icon"
                        style="margin-right:12px; cursor:pointer;" 
                    ></i>
                    <!-- logout -->
                    <i class="fa-solid fa-right-from-bracket fa-lg" 
                        id="logout_icon" ref="logout_icon"
                        style="margin-right:12px; cursor:pointer;" 
                    ></i>
                </div>
            </div>
        </div>
        <div class="side_nav" ref="side_nav" style="display: none">
            <SideNav></SideNav>
        </div>
    </div>
</template>

<script>
    import SideNav from "./SideNav.vue"
    export default {
        name: 'TopNav',
        data() {
            return {
                show_side_nav: false,
                rec_or_vid: "rec",
                loggedin: false

            }
        },
        methods: {
            sideNavToggle(){
                if (this.show_side_nav) {
                    this.show_side_nav = false
                    this.$refs['side_nav'].style.display = 'none';
                } else {
                    this.show_side_nav = true
                    this.$refs['side_nav'].style.display = 'block';
                }
            },
            selectOnChange(event){
                this.rec_or_vid = event.target.value;
                if (this.rec_or_vid == "rec") {
                    this.$refs['input'].placeholder = 'please input url';
                } else {
                    this.$refs['input'].placeholder = 'search recorded videos';
                }
                //console.log(event.target.value);
                //console.log("this.rec_or_vid = " + this.rec_or_vid);
            },
            login(){
                //TODO: route to login page

                //console.log("clicked login_icon");
            }
        },
        components: {
            SideNav
        },
        created(){
            //add font awesome script tag
            let font_awesome = document.createElement('script');    
            font_awesome.setAttribute('src',"https://kit.fontawesome.com/3f581f8d46.js");
            font_awesome.setAttribute('crossorigin',"anonymous");
            document.head.appendChild(font_awesome);
        },
        mounted(){
            //choose to display login_bar or loggedin_bar
            if (this.loggedin) {
                //this.$refs['login_bar'].style.display = 'none';
                this.$refs['loggedin_bar'].style.display = 'block';
            } else {
                //this.$refs['login_bar'].style.display = 'block';
                this.$refs['loggedin_bar'].style.display = 'none';
            }
        }

    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Monoton&display=swap');

    .navigation{
        position: fixed;
        left: 0%;
        right: 0%;
        top: 0%;
        height: 56px;
        background-color: white;
        display: flex;
        justify-content: center;
        box-shadow: 0px 5px rgba(0, 0, 0, 0.08);
        z-index: 100;
    }

    .left_part{
        flex-grow: 1;
        display: flex;
        align-items: center;
        /*background-color: aqua;*/
        font-family: 'Monoton', cursive;
    }
    .left_part>button{
        background-color: transparent;
        border-radius: 15px;
        border-color: transparent;
        cursor: pointer;
        margin: 0px;
        margin-left: 5px;
        
    }
    .left_part>button:hover{
        background-color: rgba(0, 0, 0, 0.15);
    }
    .left_part>button>div {
        width: 25px;
        height: 3.5px;
        background-color: black;
        margin: 2.5px 0;
      }
    .left_part>.logo{
        margin: 0px;
        margin-left: 5px;
        font-size: 1.3em;
    }
    
    .middle_part{
        flex-grow: 6.0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .middle_part>select{
        font-family: 'FontAwesome', 'sans-serif';
        height: 34px;
        margin: 0px;
        border-color: rgba(0, 0, 0, 0.2);
        border-width: 1px;
        border-radius: 0px 0px 0px 0px;
        border-right: none;
        cursor: pointer;
    }
    .middle_part>input{
        height: 30px;
        width: 35%;
        margin: 0px;
        border-color: rgba(0, 0, 0, 0.2);
        border-width: 1px;
        border-radius: 0px 0px 0px 0px;
        border-right: none;
    }
    .middle_part>button{
        height: 34px;
        width: 55px;
        margin: 0px;
        cursor: pointer;
        border-color: rgba(0, 0, 0, 0.2);
        border-width: 1px;
        border-radius: 0px 0px 0px 0px;
        border-left: none;
    }

    .right_part{
        flex-grow: 2.0;
        display: flex;
        justify-content: end;
        align-items: center;
    }
</style>