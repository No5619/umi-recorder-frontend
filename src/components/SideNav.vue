<template>
  <!--
  <div class="left_bar">
      <h4>追隨的頻道</h4>
  </div>
  -->
  <div class="left_bar">
    <h4 style="padding-top: 10px;">偵測的頻道</h4>
    <hr>
    <div class="live-element">
      <div style="flex: 1;">
        <img class="icon" src="./../../public/img/thubnail_test1.jpg">
      </div>
      <div style="flex: 7;">姆咪1</div>
      <div style="flex: 2; display: flex; align-items: center;">
        <div class="record-button"></div>
        <div>REC</div>
      </div>
    </div>
    <div class="live-element">
      <div style="flex: 1;">
        <img class="icon" src="./../../public/img/thubnail_test1.jpg">
      </div>
      <div style="flex: 7;">姆咪2</div>
      <div style="flex: 2; display: flex; align-items: center;">
        <div class="record-button"></div>
        <div>REC</div>
      </div>
    </div>
    <div class="offline-element">
      <div style="flex: 1;">
        <img class="icon" src="./../../public/img/thubnail_test1.jpg">
      </div>
      <div style="flex: 7;">姆咪3</div>
      <div style="flex: 2; display: flex; align-items: center;">
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
body {

}
.left_bar{
  margin: 0%;
  background-color: white;
  overflow: auto;
  position: fixed;
  top: 56px;
  left: 0%;
  bottom: 0%;
  right: 80%;
  box-shadow: 5px 0px rgba(0, 0, 0, 0.03);
  z-index: 90;
    
}
.icon {
  width: 25px;
  height: 25px;
  border-radius: 50%;
} 
.live-element {
  display:flex;
  align-items: center;
  padding-bottom: 12px;
}
.live-element:hover {
  cursor: pointer;
}
.offline-element {
  display:flex;
  align-items: center;
  padding-bottom: 12px;
}
.offline-element:hover {
  cursor: pointer;
}
.record-button {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: red;
  margin-right: 4px;
}
</style>