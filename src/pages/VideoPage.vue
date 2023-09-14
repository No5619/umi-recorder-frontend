<template>
<div>
  <div class="video_container">
    <video width="80%" controls>
      <source src="./../../public/vod/vod_test.mp4" type="video/mp4" />
    </video>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
        
    }
  },
}
</script>

<style>
body {
  margin: 0px;
  padding: 0px;;
}
.video_container {
  margin-top: 60px;
  max-width: 100%;  
  width:  100vw;
  height: 90vh;
  display: flex;
  justify-content:center;
}
</style>